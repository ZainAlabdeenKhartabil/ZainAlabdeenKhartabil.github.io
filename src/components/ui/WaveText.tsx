"use client";

import { motion } from "framer-motion";

interface WaveTextProps {
  text: string;
  className?: string;
}

export const WaveText = ({ text, className }: WaveTextProps) => {
  return (
    <span className={className}>
      {text}
    </span>
  );
};
