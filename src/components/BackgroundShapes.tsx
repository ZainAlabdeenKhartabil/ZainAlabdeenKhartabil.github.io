"use client";

import { motion } from "framer-motion";
import {
  SiSharp,
  SiDotnet,
  SiReact,
  SiHtml5,
  SiCss,
  SiBlazor
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { VscCode } from "react-icons/vsc";

export default function BackgroundShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[15%] left-[10%] opacity-20 hover:opacity-100 transition-opacity duration-500 pointer-events-auto text-blue-500 text-[45px] md:text-[70px]"
      >
        <SiDotnet />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] right-[15%] opacity-20 hover:opacity-100 transition-opacity duration-500 pointer-events-auto text-indigo-400 text-[40px] md:text-[65px]"
      >
        <SiSharp />
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[20%] left-[25%] opacity-20 hover:opacity-100 transition-opacity duration-500 pointer-events-auto text-slate-400 text-[40px] md:text-[65px]"
      >
        <DiMsqlServer />
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[30%] right-[25%] opacity-20 hover:opacity-100 transition-opacity duration-500 pointer-events-auto text-blue-300 text-[40px] md:text-[65px]"
      >
        <SiReact />
      </motion.div>

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[30%] right-[40%] opacity-20 hover:opacity-100 transition-opacity duration-500 pointer-events-auto text-slate-300 text-[35px] md:text-[60px]"
      >
        <SiHtml5 />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[60%] left-[15%] opacity-20 hover:opacity-100 transition-opacity duration-500 pointer-events-auto text-indigo-400 text-[35px] md:text-[60px]"
      >
        <SiCss />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[75%] right-[40%] opacity-20 hover:opacity-100 transition-opacity duration-500 pointer-events-auto text-blue-600 text-[35px] md:text-[60px]"
      >
        <SiBlazor />
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, -10, 10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] right-[10%] opacity-20 hover:opacity-100 transition-opacity duration-500 pointer-events-auto text-cyan-400 text-[40px] md:text-[65px]"
      >
        <VscCode />
      </motion.div>

    </div>
  );
}