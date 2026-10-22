"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface HammetLogoProps {
  variant?: "full" | "mark" | "simple";
  className?: string;
  size?: number;
  textColor?: string;
}

export default function HammetLogo({
  variant = "full",
  className = "",
  size = 36,
  textColor = "text-white",
}: HammetLogoProps) {
  return (
    <Link
      href="/lace"
      className={`group inline-flex items-center gap-3 transition-opacity hover:opacity-90 ${className}`}
      aria-label="Hammet LACE"
    >
      <motion.div
        whileHover={{ scale: 1.06, rotate: 2 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="relative flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E0836] to-[#0A0414] p-1.5 shadow-md shadow-purple-950/40 border border-white/10"
        style={{ width: size + 6, height: size + 6 }}
      >
        {/* Genuine Hammet vector emblem: hexagon shield with 4-point inner sparkle */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 transition-transform duration-300 group-hover:scale-105"
          aria-hidden="true"
        >
          {/* Hexagonal Outer Frame */}
          <path
            d="M32 5 L55 18 L55 46 L32 59 L9 46 L9 18 Z"
            fill="none"
            stroke="#E0FF4D"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          {/* Inner 4-point Sparkle */}
          <path
            d="M32 19 C33 26 38 31 45 32 C38 33 33 38 32 45 C31 38 26 33 19 32 C26 31 31 26 32 19 Z"
            fill="#E0FF4D"
          />
        </svg>

        {/* Brand subtle ambient glow */}
        <div className="absolute inset-0 rounded-xl bg-[#E0FF4D]/15 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
      </motion.div>

      {variant !== "mark" && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span className={`font-bold tracking-tight text-lg ${textColor}`}>
              Hammet
            </span>
            <span className="rounded bg-[#E0FF4D] px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-[#0c0516]">
              LACE
            </span>
          </div>
          {variant === "full" && (
            <span className="text-[11px] font-medium tracking-wide text-white/50">
              AI Career Experience
            </span>
          )}
        </div>
      )}
    </Link>
  );
}

