"use client";

import { cn } from "@/lib/utils";
import { Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 w-full z-50 p-4">
      <nav
        className={cn(
          "max-w-5xl mx-auto glass-panel px-6 py-3 transition-all duration-300",
          isOpen
            ? "rounded-3xl bg-slate-950/95 backdrop-blur-xl border-slate-800 shadow-2xl"
            : "rounded-full"
        )}
      >
        <div className="flex items-center justify-between">
          <Link
            href="#hero"
            onClick={() => setIsOpen(false)}
            className="text-lg lg:text-xl font-bold tracking-tighter text-blue-400 hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            Zain Alabdeen Khartabil<span className="text-slate-200">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/zainalabdeenkhartabil/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="mailto:zainalabdeenkhartabil@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-blue-400 transition-colors p-1 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className={cn(
            "grid transition-all duration-300 ease-in-out md:hidden",
            isOpen ? "grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-slate-800/50" : "grid-rows-[0fr] opacity-0 pointer-events-none"
          )}
        >
          <div className="overflow-hidden flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium py-1.5 text-slate-200 hover:text-blue-400 transition-colors block pl-2"
              >
                {item.name}
              </Link>
            ))}

            <div className="flex items-center gap-6 pt-3 pb-1 mt-1 border-t border-slate-800/30">
              <a
                href="https://www.linkedin.com/in/zainalabdeenkhartabil/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-2 text-sm"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:zainalabdeenkhartabil@gmail.com"
                className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-2 text-sm"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}