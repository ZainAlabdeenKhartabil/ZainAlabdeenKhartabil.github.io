"use client";

import React, { useRef, useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function AvatarModel() {
  const { scene } = useGLTF("/avatar.glb");
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  // Pre-process geometry: store original positions for CPU-side deformation
  const avatarScene = useMemo(() => {
    const clone = scene.clone();
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const geo = mesh.geometry as THREE.BufferGeometry;
        
        // Ensure we have a unique geometry for each mesh
        mesh.geometry = geo.clone();
        const positions = mesh.geometry.attributes.position.array;
        mesh.geometry.userData.originalPositions = new Float32Array(positions);
      }
    });
    return clone;
  }, [scene]);

  const smoothPointer = useRef({ x: 0, y: 0 });
  const lastUpdatePointer = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!groupRef.current) return;

    const px = state.pointer.x;
    const py = state.pointer.y;

    // Smooth pointer
    smoothPointer.current.x = THREE.MathUtils.lerp(smoothPointer.current.x, px, 0.06);
    smoothPointer.current.y = THREE.MathUtils.lerp(smoothPointer.current.y, py, 0.06);

    const spx = smoothPointer.current.x;
    const spy = smoothPointer.current.y;

    // --- Subtle body lean ---
    const bodyMaxY = Math.PI / 20;
    const bodyMaxX = Math.PI / 32;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      spx * bodyMaxY,
      0.04
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -spy * bodyMaxX,
      0.04
    );

    // --- Head vertex deformation ---
    const headRotY = spx * (Math.PI / 5);   
    const headRotX = -spy * (Math.PI / 7);  
    
    const cosY = Math.cos(headRotY);
    const sinY = Math.sin(headRotY);
    const cosX = Math.cos(headRotX);
    const sinX = Math.sin(headRotX);

    const pivotY = 1.45; 
    const pivotZ = 0;

    const box = new THREE.Box3().setFromObject(groupRef.current);
    const minY = box.min.y;
    const maxY = box.max.y;
    const height = maxY - minY;
    
    const thresholdY = minY + height * 0.35; 
    const blendRange = height * 0.04;

    const tempMat = new THREE.Matrix4();
    const invMat = new THREE.Matrix4();

    groupRef.current.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const geo = mesh.geometry;
        const posAttr = geo.attributes.position;
        const positions = posAttr.array as Float32Array;
        const origPos = geo.userData.originalPositions;
        
        if (!origPos) return;

        tempMat.copy(mesh.matrixWorld);
        invMat.copy(tempMat).invert();

        for (let i = 0; i < positions.length; i += 3) {
          const ox = origPos[i];
          const oy = origPos[i + 1];
          const oz = origPos[i + 2];

          const worldPos = new THREE.Vector3(ox, oy, oz).applyMatrix4(tempMat);
          const y = worldPos.y;

          let weight = 0;
          if (y > thresholdY + blendRange) {
            weight = 1;
          } else if (y > thresholdY) {
            weight = (y - thresholdY) / blendRange;
            weight = weight * weight * (3 - 2 * weight); 
          }

          if (weight > 0) {
            const dx = ox;
            const dy = oy - pivotY;
            const dz = oz - pivotZ;

            const ry_x = dx * cosY + dz * sinY;
            const ry_z = -dx * sinY + dz * cosY;

            const rx_y = dy * cosX - ry_z * sinX;
            const rx_z = dy * sinX + ry_z * cosX;

            positions[i] = ox + (ry_x - ox) * weight;
            positions[i + 1] = oy + (rx_y + pivotY - oy) * weight;
            positions[i + 2] = oz + (rx_z + pivotZ - oz) * weight;
          } else {
            positions[i] = ox;
            positions[i + 1] = oy;
            positions[i + 2] = oz;
          }
        }

        posAttr.needsUpdate = true;
        // Only re-calculate normals every other frame to save CPU
        if (state.clock.getElapsedTime() * 60 % 2 < 1) {
          geo.computeVertexNormals();
        }
      }
    });
  });

  const lastDimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (!groupRef.current) return;
    
    // Only re-scale if there's a significant change to prevent pulsing on scroll
    if (Math.abs(viewport.width - lastDimensions.current.width) < 0.1 && 
        Math.abs(viewport.height - lastDimensions.current.height) < 0.1) return;

    lastDimensions.current = { width: viewport.width, height: viewport.height };

    const box = new THREE.Box3().setFromObject(groupRef.current);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    const maxDim = Math.max(size.x, size.y, size.z);
    // Use a fixed calculation relative to the canvas size
    const desiredSize = Math.min(viewport.width, viewport.height) * 0.6;
    const scaleFactor = desiredSize / maxDim;

    groupRef.current.scale.setScalar(scaleFactor);
    groupRef.current.position.x = -center.x * scaleFactor;
    groupRef.current.position.y = -center.y * scaleFactor + 0.3;
    groupRef.current.position.z = -center.z * scaleFactor;
    groupRef.current.userData.baseY = groupRef.current.position.y;
  }, [viewport.width, viewport.height]);

  return <primitive object={avatarScene} ref={groupRef} />;
}

export default function Avatar3D() {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true
        }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <Suspense fallback={null}>
          <AvatarModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
