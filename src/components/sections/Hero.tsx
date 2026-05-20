"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import dynamic from "next/dynamic";
import { Typewriter } from "@/components/ui/Typewriter";

const Avatar3D = dynamic(() => import("@/components/Avatar3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
    </div>
  ),
});

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 relative overflow-hidden bg-[#020617]">
      {/* Background Text */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
        <h2 className="text-[28vw] font-black text-white/[0.015] uppercase leading-none select-none blur-[4px] tracking-tight">
          ZAIN
        </h2>
      </div>

      <div className="max-w-6xl mx-auto w-full flex flex-col items-center justify-center relative z-10 gap-2">

        {/* Top Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-2"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-2 leading-tight flex flex-wrap justify-center items-center gap-x-3">
            <span className="text-white">Hi, I'm</span>
            <span className="text-gradient">Zain Alabdeen Khartabil</span>
          </h1>
        </motion.div>

        {/* Massive Avatar - Truly High Impact */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full h-[350px] sm:h-[500px] lg:h-[650px] max-w-[1200px] flex justify-center z-10 pointer-events-auto"
        >
          <div className="w-full h-full relative">
            <Avatar3D />
          </div>

          {/* Ambient Lighting / Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[40%] bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10" />
        </motion.div>

        {/* Bottom Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col items-center text-center gap-10 mt-8"
        >
          <div className="space-y-4">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-200 h-[1.5em] tracking-tight overflow-hidden">
              <Typewriter words={["Software Engineer", ".NET Engineer", "Web Developer"]} />
            </div>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-light">
              Designing and building scalable, high-performance enterprise solutions using <span className="text-blue-400 font-medium">C#</span> and <span className="text-blue-400 font-medium">ASP.NET Core</span>.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
            <a href="#contact" className="px-10 py-5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black transition-all hover:scale-105 hover:-translate-y-1 flex items-center gap-3 shadow-2xl shadow-blue-900/40">
              Let's Talk <ArrowRight className="w-6 h-6" />
            </a>
            <a
              href="/ZainAlabdeenKhartabilCV.pdf"
              download="ZainAlabdeenKhartabilCV.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-10 py-5 rounded-2xl glass-panel hover:bg-slate-800/80 text-slate-100 font-black transition-all hover:scale-105 hover:-translate-y-1 flex items-center gap-3 border border-slate-700/50 shadow-xl">
              Get Resume <Download className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
