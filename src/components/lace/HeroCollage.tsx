"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Award, Clock, MapPin } from "lucide-react";
import CountdownTimer from "@/components/lace/CountdownTimer";

export default function HeroCollage() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Dynamic ambient background glow */}
      <div className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-[#5B21B6]/30 via-[#06B6D4]/20 to-purple-900/10 blur-3xl -z-10" />

      {/* Unified Luxury Event Terminal Container */}
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4 }}
        className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-gradient-to-b from-[#19092c]/90 via-[#10041d]/95 to-[#0b0214] p-6 sm:p-7 shadow-2xl shadow-purple-950/70 backdrop-blur-2xl"
      >
        {/* Subtle decorative grid lines and glass reflection */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-40" />

        {/* Console Header Bar */}
        <div className="relative flex items-center justify-between border-b border-white/10 pb-5 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E0FF4D] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E0FF4D]" />
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#E0FF4D]">
              Event Command Console
            </span>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[11px] text-cyan-300">
            <MapPin className="h-3 w-3" />
            <span>Ogba, Lagos</span>
          </div>
        </div>

        {/* Countdown Ticker Section */}
        <div className="relative mb-6">
          <CountdownTimer />
        </div>

        {/* Integrated Live Visual Showcase */}
        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/40 p-2 shadow-inner group">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
            <Image
              src="/lace/gallery/g01.jpg"
              alt="Hammet LACE Keynote Gathering"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 45vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0214] via-transparent to-transparent opacity-80" />

            {/* Overlaid Event Live Pill */}
            <div className="absolute top-3 left-3 flex items-center gap-2 rounded-full bg-black/70 px-3 py-1 backdrop-blur-md border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E0FF4D] animate-pulse" />
              <span className="font-mono text-[11px] font-semibold text-white">
                Live Keynote & Workshop Lab
              </span>
            </div>

            {/* Overlaid Floating Social Proof Avatar Badge */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl bg-black/75 px-3.5 py-2.5 backdrop-blur-md border border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-1.5 overflow-hidden">
                  <div className="relative h-6 w-6 rounded-full border border-black overflow-hidden">
                    <Image src="/lace/people/andrew.jpg" alt="Attendee" fill className="object-cover" />
                  </div>
                  <div className="relative h-6 w-6 rounded-full border border-black overflow-hidden">
                    <Image src="/lace/people/godswill.jpg" alt="Attendee" fill className="object-cover" />
                  </div>
                  <div className="relative h-6 w-6 rounded-full border border-black overflow-hidden">
                    <Image src="/lace/people/joy.jpg" alt="Attendee" fill className="object-cover" />
                  </div>
                </div>
                <div>
                  <span className="block text-xs font-bold text-white leading-tight">
                    1,000+ Alumni
                  </span>
                  <span className="block text-[10px] text-white/50">
                    Across Nigeria & Remote
                  </span>
                </div>
              </div>

              <span className="rounded-md bg-[#06B6D4]/20 px-2 py-0.5 font-mono text-[10px] font-bold text-cyan-300 border border-cyan-400/30">
                Opening 31 Oct
              </span>
            </div>
          </div>
        </div>

        {/* Integrated Verified Credential Footer Bar */}
        <div className="relative mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-[#5B21B6] to-[#06B6D4] text-[#E0FF4D] shadow-md shadow-purple-900/40">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-widest text-cyan-300">
                Accredited Pathway
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-white">
                Hammet School of AI Foundations
              </h4>
            </div>
          </div>

          <div className="text-right">
            <span className="block font-mono text-[10px] text-white/50 uppercase">
              Proctored Exam
            </span>
            <span className="font-mono text-xs font-extrabold text-[#E0FF4D]">
              14 Nov 2026
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
