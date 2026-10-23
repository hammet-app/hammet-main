"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Award, CheckCircle2, ChevronDown, ChevronUp, UserCheck, Star } from "lucide-react";
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
      {/* Desktop & Tablet Horizontal Expandable Accordion (Balanced h-[460px] md / h-[530px] lg) */}
      <div className="hidden md:flex h-[460px] lg:h-[530px] w-full gap-3 items-stretch">
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
                  isActive ? "scale-105" : "scale-100 filter grayscale-[35%]"
                }`}
              />

              {/* Dynamic Gradient Overlays */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive
                    ? "bg-gradient-to-t from-[#07020d] via-[#07020d]/65 to-transparent"
                    : "bg-gradient-to-t from-black/90 via-black/50 to-black/30"
                }`}
              />

              {/* ACTIVE SPEAKER CONTENT VIEW */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.08 }}
                  className="absolute inset-0 flex flex-col justify-between p-6 lg:p-8 z-10"
                >
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-[#E0FF4D] px-3 py-1 font-tech text-[10px] lg:text-[11px] font-black uppercase tracking-wider text-[#0c0516]">
                        Speaker 0{index + 1}
                      </span>
                      <span className="rounded-full bg-black/60 px-3 py-1 font-tech text-[10px] lg:text-[11px] text-cyan-300 backdrop-blur-md border border-white/10 truncate">
                        {speaker.specialty}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-md border border-amber-400/30">
                      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-500/20 text-amber-400">
                        <Award className="h-2.5 w-2.5" />
                      </div>
                      <span className="text-[11px]">{speaker.stats}</span>
                    </div>
                  </div>

                  {/* Bottom Narrative Information */}
                  <div className="max-w-xl">
                    <h3 className="font-display text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-xs lg:text-sm font-semibold text-[#06B6D4]">
                      {speaker.role}
                    </p>
                    <p className="mt-3 text-xs lg:text-sm leading-relaxed text-white/80 line-clamp-3 font-normal">
                      {speaker.bio}
                    </p>

                    {/* Faculty Capabilities Micro-List */}
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <div className="flex items-center gap-1 rounded-lg bg-white/10 px-2.5 py-1 text-[11px] text-white/90 backdrop-blur-md">
                        <CheckCircle2 className="h-3 w-3 text-[#E0FF4D]" />
                        <span>Interactive Keynote</span>
                      </div>
                      <div className="flex items-center gap-1 rounded-lg bg-white/10 px-2.5 py-1 text-[11px] text-white/90 backdrop-blur-md">
                        <CheckCircle2 className="h-3 w-3 text-[#06B6D4]" />
                        <span>Executive Q&amp;A</span>
                      </div>
                    </div>

                    {/* Action CTA */}
                    <div className="mt-5">
                      <a
                        href={LACE_CONFIG.links.selar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#06B6D4] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-lg shadow-cyan-500/25 hover:brightness-110 active:scale-95 transition-all"
                      >
                        <span>Meet at LACE 1.0</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* INACTIVE SPEAKER VERTICAL BANNER */}
              {!isActive && (
                <div className="absolute inset-0 flex flex-col justify-between items-center py-7 z-10">
                  <span className="font-tech text-xs font-bold text-cyan-400/80">
                    0{index + 1}
                  </span>

                  {/* Vertical Rotated Name */}
                  <div className="transform -rotate-90 whitespace-nowrap origin-center">
                    <span className="text-xs lg:text-sm font-bold tracking-wider uppercase text-white/80 group-hover:text-white transition-colors">
                      {speaker.name}
                    </span>
                  </div>

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white/70 backdrop-blur-sm group-hover:bg-[#E0FF4D] group-hover:text-black transition-colors">
                    <span className="text-xs font-bold">+</span>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Stack Accordion (Optimized compact height h-[320px] active / h-[68px] collapsed) */}
      <div className="flex flex-col gap-2.5 md:hidden">
        {SPEAKERS.map((speaker, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={speaker.name}
              onClick={() => setActiveIndex(index)}
              layout
              transition={{ duration: 0.3 }}
              className={`relative overflow-hidden rounded-2xl border transition-all ${
                isActive
                  ? "h-[330px] border-[#06B6D4] shadow-xl shadow-cyan-950/30"
                  : "h-[68px] border-white/10 bg-white/[0.03] active:bg-white/[0.06]"
              }`}
            >
              {/* Image element */}
              <Image
                src={speaker.photo}
                alt={speaker.name}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className={`object-cover ${
                  isActive ? "object-top brightness-90" : "hidden"
                }`}
              />

              {/* Vignette on active */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/35" />
              )}

              {isActive ? (
                /* ACTIVE MOBILE SPEAKER VIEW */
                <div className="absolute inset-0 flex flex-col justify-between p-4 z-10">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#E0FF4D] px-2.5 py-0.5 font-tech text-[10px] font-black text-black">
                      0{index + 1}
                    </span>
                    <span className="text-[10px] font-tech text-cyan-300 bg-black/60 px-2 py-0.5 rounded-full border border-white/10">
                      {speaker.specialty}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-extrabold text-white leading-tight">
                      {speaker.name}
                    </h3>
                    <p className="text-[11px] font-semibold text-[#06B6D4] mt-0.5 truncate">
                      {speaker.role}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-white/80 line-clamp-2 font-normal">
                      {speaker.bio}
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-2">
                      <a
                        href={LACE_CONFIG.links.selar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#06B6D4] px-4 py-2 text-xs font-bold text-black active:scale-95 transition-all"
                      >
                        <span>Meet at LACE 1.0</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>

                      <span className="text-[10px] font-semibold text-white/40">
                        Tap to collapse
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                /* COLLAPSED MOBILE SPEAKER ROW WITH AVATAR THUMBNAIL */
                <div className="absolute inset-0 flex items-center justify-between px-3.5 z-10">
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Small Circular Avatar Thumbnail */}
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-white/15 bg-black/40">
                      <Image
                        src={speaker.photo}
                        alt={speaker.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-tech text-[10px] font-bold text-[#E0FF4D]">
                          0{index + 1}
                        </span>
                        <h4 className="font-display text-sm font-bold text-white truncate">
                          {speaker.name}
                        </h4>
                      </div>
                      <p className="text-[11px] text-cyan-300 truncate">
                        {speaker.specialty}
                      </p>
                    </div>
                  </div>

                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60">
                    <ChevronDown className="h-3.5 w-3.5" />
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
