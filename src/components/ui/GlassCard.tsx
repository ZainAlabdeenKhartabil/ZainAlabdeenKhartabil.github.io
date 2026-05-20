"use client";

import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  className?: string;
}

export function GlassCard({ className, children, ...props }: GlassCardProps) {
  return (
    <motion.div
      className={cn("glass-panel rounded-2xl p-6", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
