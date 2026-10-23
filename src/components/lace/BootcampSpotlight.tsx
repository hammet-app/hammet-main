"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  MessageSquare,
  Users,
  Video,
} from "lucide-react";
import { LACE_CONFIG } from "@/lib/lace-data";

export default function BootcampSpotlight() {
  const highlights = [
    { num: "01", title: "Lead Yourself", desc: "Self-discipline & extreme ownership" },
    { num: "02", title: "Lead a Team", desc: "Operator-leadership & accountability" },
    { num: "03", title: "Sell with Conviction", desc: "Turning complex value into revenue" },
  ];

  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-gradient-to-br from-[#1b082e] via-[#10031f] to-[#080210] p-8 sm:p-12 lg:p-16 shadow-2xl backdrop-blur-2xl">
      {/* Decorative ambient lighting */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#E0FF4D]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#06B6D4]/15 blur-[120px]" />

      <div className="relative grid gap-12 lg:grid-cols-12 lg:items-center">
        {/* Left Narrative Column (7 cols) */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-950/40 px-4 py-1.5 text-xs font-bold text-emerald-300 mb-6 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#E0FF4D] animate-ping" />
            <span className="font-mono uppercase tracking-wider text-[11px]">
              Free Warmup Bootcamp · 11:00 PM WAT Daily
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            21 Days of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0FF4D] via-[#67E8F9] to-white">
              Leadership
            </span>{" "}
            &amp; <span className="text-[#06B6D4]">Sales</span>
          </h2>

          <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/70 max-w-xl">
            Before deploying high-level AI systems, you must master yourself, your audience, and the conviction to sell. Every evening on Google Meet, guest mentors break down practical operator leadership and high-converting sales execution.
          </p>

          {/* 3 Core Pillars */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {highlights.map((h) => (
              <div
                key={h.num}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm"
              >
                <span className="font-mono text-xs font-bold text-[#E0FF4D]">
                  {h.num}
                </span>
                <h4 className="text-sm font-bold text-white mt-1">{h.title}</h4>
                <p className="text-[11px] text-white/60 mt-0.5">{h.desc}</p>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/lace/bootcamp"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#5B21B6] to-[#7C3AED] px-7 py-3.5 text-sm font-bold text-white hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-purple-900/40"
            >
              <span>Explore 21 Daily Sessions</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/lace/testimonials"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white transition-all active:scale-95"
            >
              <MessageSquare className="h-4 w-4 text-[#E0FF4D]" />
              <span>Read 15 Reviews</span>
            </Link>
          </div>
        </div>

        {/* Right Host Spotlight Card (5 cols) */}
        <div className="lg:col-span-5">
          <motion.div
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 via-[#18072b] to-black/80 p-6 shadow-2xl backdrop-blur-xl"
          >
            {/* Host Photo & Framing */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#0c0316] mb-5 border border-white/10">
              <Image
                src="/lace/people/prince.png"
                alt="Witty Prince - Convener of LACE"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10031f] via-transparent to-transparent" />

              {/* Host Live Room Tag */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1 backdrop-blur-md border border-white/10">
                <Video className="h-3 w-3 text-[#E0FF4D]" />
                <span className="font-mono text-[10px] text-white">Google Meet Live</span>
              </div>
            </div>

            {/* Host Identity Details */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Mr Prince Obinna</h3>
                <p className="text-xs font-semibold text-[#06B6D4] mt-0.5">
                  Host & Convener of LACE 1.0
                </p>
              </div>
              <span className="rounded-full bg-[#E0FF4D]/10 px-3 py-1 font-mono text-[11px] font-bold text-[#E0FF4D] border border-[#E0FF4D]/30">
                21 Sessions
              </span>
            </div>

            {/* Signature Participant Quote */}
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
              <p className="text-xs italic text-white/75 leading-relaxed">
                &ldquo;Before the bootcamp, I had the skill but lacked the structure. This is not just a bootcamp, it is a leadership factory.&rdquo;
              </p>
              <div className="mt-2 flex items-center justify-between text-[11px]">
                <span className="font-bold text-white">— John Aba Igwe</span>
                <span className="text-[#E0FF4D] font-mono">GoLang Developer</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

