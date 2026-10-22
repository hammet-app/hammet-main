"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Award, CheckCircle2 } from "lucide-react";
import { LACE_CONFIG } from "@/lib/lace-data";

interface Speaker {
  name: string;
  role: string;
  photo: string;
  bio: string;
  specialty?: string;
  stats?: string;
}

const SPEAKERS: Speaker[] = [
  {
    name: "Mr Prince Obinna",
    role: "Host & Convener · Executive Director, Hammet Limited",
    photo: "/lace/people/prince.png",
    bio: "Pioneer of applied AI career transformation in Nigeria. Executive educator focusing on high-leverage operator leadership, systems thinking, and conviction-driven sales.",
    specialty: "Operator Leadership & Sales",
    stats: "Convener of LACE 1.0",
  },
  {
    name: "Ms Angel Nwafor",
    role: "Chief Operating Officer, Hammet Limited",
    photo: "/lace/people/angel.jpg",
    bio: "Operations strategist, operator-leadership specialist, and execution architect behind Hammet's pan-African learning initiatives and practical curriculum pipelines.",
    specialty: "Operations Architecture",
    stats: "Co-Convener & COO",
  },
  {
    name: "Dr. Godswill Ikechukwu",
    role: "CEO of WILLON & Electronics Engineer",
    photo: "/lace/people/godswill.jpg",
    bio: "Hardware-to-software integration expert and technology ecosystem leader exploring practical AI deployment for African industrial growth and smart systems.",
    specialty: "Hardware AI Integration",
    stats: "CEO, WILLON",
  },
  {
    name: "Sharon Oni-yinka",
    role: "Lead Visual Strategist & Survey Programmer",
    photo: "/lace/people/sharon.jpg",
    bio: "Master of visual architecture, converting complex enterprise AI logic into intuitive communication structures, high-converting decks, and user surveys.",
    specialty: "Visual AI Strategy",
    stats: "Lead Presentation Designer",
  },
];

export default function SpeakerAccordion() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="w-full">
      {/* Desktop Horizontal Expandable Accordion (Square-inspired) */}
      <div className="hidden md:flex h-[600px] w-full gap-3 items-stretch">
        {SPEAKERS.map((speaker, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={speaker.name}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              layout
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative overflow-hidden rounded-3xl border cursor-pointer transition-all ${
                isActive
                  ? "flex-[4] border-[#06B6D4]/50 shadow-2xl shadow-cyan-950/40"
                  : "flex-1 border-white/10 hover:border-white/20 hover:brightness-110"
              }`}
            >
              {/* Background Photo */}
              <Image
                src={speaker.photo}
                alt={speaker.name}
                fill
                priority={index === 0}
                sizes={isActive ? "50vw" : "15vw"}
                className={`object-cover object-top transition-transform duration-700 ease-out ${
                  isActive ? "scale-105" : "scale-100 filter grayscale-[40%]"
                }`}
              />

              {/* Dynamic Gradient Overlays */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive
                    ? "bg-gradient-to-t from-[#07020d] via-[#07020d]/60 to-transparent"
                    : "bg-gradient-to-t from-black/90 via-black/50 to-black/30"
                }`}
              />

              {/* ACTIVE SPEAKER CONTENT VIEW */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                  className="absolute inset-0 flex flex-col justify-between p-8 z-10"
                >
                  {/* Top Badges */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-[#E0FF4D] px-3 py-1 font-mono text-[11px] font-extrabold uppercase tracking-wider text-[#0c0516]">
                        Speaker 0{index + 1}
                      </span>
                      <span className="rounded-full bg-black/60 px-3 py-1 font-mono text-[11px] text-cyan-300 backdrop-blur-md border border-white/10">
                        {speaker.specialty}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-md border border-white/10">
                      <Sparkles className="h-3.5 w-3.5 text-[#E0FF4D]" />
                      <span>{speaker.stats}</span>
                    </div>
                  </div>

                  {/* Bottom Narrative Information */}
                  <div className="max-w-xl">
                    <h3 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-[#06B6D4]">
                      {speaker.role}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-white/80 line-clamp-3">
                      {speaker.bio}
                    </p>

                    <div className="mt-6 flex items-center gap-4 pt-4 border-t border-white/10">
                      <a
                        href={LACE_CONFIG.links.selar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#06B6D4] px-5 py-2.5 text-xs font-bold text-slate-950 shadow-lg hover:brightness-110 transition-all active:scale-95"
                      >
                        <span>Meet at LACE 1.0</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                      <span className="text-xs text-white/60 font-mono">
                        Keynote & Interactive Workshop
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* INACTIVE SPEAKER VERTICAL BANNER (Like Square's "Retail", "Beauty", "Services") */}
              {!isActive && (
                <div className="absolute inset-0 flex flex-col justify-between items-center py-8 z-10">
                  <span className="font-mono text-xs font-bold text-cyan-400/80">
                    0{index + 1}
                  </span>

                  {/* Vertical Rotated Name */}
                  <div className="transform -rotate-90 whitespace-nowrap origin-center">
                    <span className="text-sm font-bold tracking-wider uppercase text-white/80 group-hover:text-white transition-colors">
                      {speaker.name}
                    </span>
                  </div>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 backdrop-blur-sm group-hover:bg-[#E0FF4D] group-hover:text-black transition-colors">
                    <span className="text-xs font-bold">+</span>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Stack Accordion */}
      <div className="flex flex-col gap-3 md:hidden">
        {SPEAKERS.map((speaker, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={speaker.name}
              onClick={() => setActiveIndex(index)}
              layout
              transition={{ duration: 0.35 }}
              className={`relative overflow-hidden rounded-2xl border transition-all ${
                isActive
                  ? "h-[420px] border-[#06B6D4] shadow-xl"
                  : "h-[90px] border-white/10"
              }`}
            >
              <Image
                src={speaker.photo}
                alt={speaker.name}
                fill
                className="object-cover object-top"
              />
              <div
                className={`absolute inset-0 ${
                  isActive
                    ? "bg-gradient-to-t from-black via-black/60 to-black/30"
                    : "bg-black/70 backdrop-blur-xs"
                }`}
              />

              {isActive ? (
                <div className="absolute inset-0 flex flex-col justify-between p-5 z-10">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#E0FF4D] px-2.5 py-0.5 font-mono text-[10px] font-extrabold text-black">
                      0{index + 1}
                    </span>
                    <span className="text-[11px] font-mono text-cyan-300">
                      {speaker.specialty}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {speaker.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#06B6D4] mt-0.5">
                      {speaker.role}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-white/80 line-clamp-3">
                      {speaker.bio}
                    </p>
                    <div className="mt-4">
                      <a
                        href={LACE_CONFIG.links.selar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#06B6D4] px-4 py-2 text-xs font-bold text-black"
                      >
                        <span>Meet at LACE 1.0</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-between px-5 z-10">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#E0FF4D]">
                      0{index + 1}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-white">
                        {speaker.name}
                      </h4>
                      <p className="text-[11px] text-cyan-300">
                        {speaker.specialty}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-white/60">Expand ↓</span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
