import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  MapPin,
  MessageSquare,
  Phone,
  Sparkles,
  Users,
  Video,
} from "lucide-react"
import LaceNav from "@/components/lace/LaceNav"
import LaceFooter from "@/components/lace/LaceFooter"
import { LACE_CONFIG } from "@/lib/lace-data"

export const metadata = {
  title: "The LACE Bootcamp | 21 Days Leadership & Sales | Hammet",
  description:
    "A free 21-day live bootcamp on leadership and sales that warms you up for LACE 1.0. Hosted by Mr Prince Obinna with 13+ guest trainers.",
}

export default function LaceBootcampPage() {
  const pillars = [
    {
      num: "01",
      title: "Lead Yourself",
      tagline: "Ownership & Personal Standards",
      desc: "Self-discipline, extreme ownership, and deep self-understanding. Leadership begins with you before it reaches anyone else.",
    },
    {
      num: "02",
      title: "Lead a Team",
      tagline: "Operator-Leadership in Practice",
      desc: "Accountability systems, high-leverage delegation, and sacrificial service: the practical steps to standing out in any fast-moving organization.",
    },
    {
      num: "03",
      title: "Sell with Conviction",
      tagline: "Communicating Value without Fear",
      desc: "Understand human pain points, communicate ROI, and build structured follow-up routines so selling becomes serving instead of shouting.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#07020d] text-white selection:bg-[#E0FF4D] selection:text-[#0c0516]">
      <LaceNav />

      {/* ─────────────────────────────────────────────
          BOOTCAMP HERO (With Atmospheric Background & Text Colors)
      ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 border-b border-white/10">
        {/* Full-bleed Atmospheric Bootcamp Event Backdrop Picture */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/lace/gallery/g05.jpg"
            alt="LACE Interactive Bootcamp Gathering"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-80 filter contrast-115 brightness-95"
          />
          {/* Balanced cinematic vignette: darker on left behind text, glowing across center and right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07020d]/95 via-[#07020d]/60 to-[#07020d]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07020d] via-transparent to-[#07020d]/50" />
          <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[#5B21B6]/25 blur-[130px]" />
          <div className="absolute bottom-0 left-[-80px] h-96 w-96 rounded-full bg-[#06B6D4]/20 blur-[130px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Narrative Column (7 cols) */}
            <div className="lg:col-span-7">
              {/* Back navigation & Live status badge */}
              <div className="mb-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/lace"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold text-white/75 backdrop-blur-md transition-all hover:border-[#67E8F9]/40 hover:bg-white/10 hover:text-white shadow-sm"
                >
                  <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1 text-[#67E8F9]" />
                  <span>Back to LACE 1.0 Overview</span>
                </Link>

                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-950/70 px-3.5 py-1.5 text-xs font-bold text-emerald-300 backdrop-blur-md shadow-sm shadow-emerald-950/40">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="font-tech uppercase tracking-wider text-[11px] text-emerald-200">
                    21-Day Live Bootcamp · 11:00 PM WAT
                  </span>
                </div>
              </div>

              {/* Title with Designer Font & Text Colors */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                Three skills that{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0FF4D] via-[#67E8F9] to-white">
                  define
                </span>{" "}
                the next <span className="text-[#06B6D4]">decade.</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/70 max-w-2xl font-normal">
                A daily intensive live program preparing Africa&apos;s emerging workforce for LACE 1.0. Every night at 11pm WAT on Google Meet, guest trainers deliver practical blueprints to master self-leadership, team coordination, and ethical sales.
              </p>

              {/* Elevated Quick Facts Strip */}
              <div className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
                {[
                  {
                    metric: "1–21 Oct",
                    label: "Every Night",
                    color: "text-white",
                    border: "hover:border-white/30",
                  },
                  {
                    metric: "11:00 PM",
                    label: "WAT · Google Meet",
                    color: "text-[#67E8F9]",
                    border: "hover:border-[#06B6D4]/50",
                  },
                  {
                    metric: "13+",
                    label: "Guest Trainers",
                    color: "text-[#E0FF4D]",
                    border: "hover:border-[#E0FF4D]/50",
                  },
                  {
                    metric: "Free",
                    label: "Community Access",
                    color: "text-emerald-400",
                    border: "hover:border-emerald-400/50",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-4 text-center backdrop-blur-xl shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-1 ${stat.border}`}
                  >
                    {/* Top glass shine */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                    <span
                      className={`block font-tech text-xl sm:text-2xl font-black tracking-tight ${stat.color} transition-transform group-hover:scale-105`}
                    >
                      {stat.metric}
                    </span>
                    <span className="mt-1 block text-[10px] font-semibold tracking-wider uppercase text-white/50 truncate">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={LACE_CONFIG.links.bootcamp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#06B6D4] px-8 py-3.5 text-sm font-bold text-slate-950 hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-cyan-500/25"
                >
                  <span>Join Bootcamp Group Free</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#days"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all active:scale-95"
                >
                  <span>View 21-Day Schedule</span>
                </a>
              </div>
            </div>

            {/* Right Host Card Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-gradient-to-b from-white/10 via-[#18072b] to-[#0b0214] p-7 shadow-2xl backdrop-blur-2xl">
                {/* Host Portrait */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#0e0319] mb-5 border border-white/10">
                  <Image
                    src="/lace/people/prince.png"
                    alt="Mr Prince Obinna - Host & Convener"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0319] via-transparent to-transparent" />

                  <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1 backdrop-blur-md border border-white/10">
                    <Video className="h-3 w-3 text-[#E0FF4D]" />
                    <span className="font-tech text-[10px] text-white">Google Meet Live Room</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">
                      Mr Prince Obinna
                    </h3>
                    <p className="text-xs font-semibold text-[#06B6D4] mt-0.5">
                      Host &amp; Convener of LACE 1.0
                    </p>
                  </div>
                  <span className="rounded-full bg-[#E0FF4D]/10 px-3 py-1 font-tech text-[11px] font-bold text-[#E0FF4D] border border-[#E0FF4D]/30">
                    21 Nights
                  </span>
                </div>

                {/* Session Meta */}
                <div className="space-y-2.5 text-xs text-white/70">
                  <div className="flex items-center justify-between">
                    <span className="text-white/50">Frequency</span>
                    <span className="font-semibold text-white font-tech">Daily at 11:00 PM WAT</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50">Format</span>
                    <span className="font-semibold text-white">Interactive Session + Q&amp;A</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50">Recordings</span>
                    <span className="font-semibold text-[#E0FF4D]">Included in all LACE 1.0 Passes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          CORE PILLARS SECTION
      ───────────────────────────────────────────── */}
      <section className="py-24 border-b border-white/10 bg-[#0c0516]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs uppercase font-tech font-bold tracking-[0.2em] text-[#06B6D4]">
              The Core Architecture
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2 text-white">
              Three things practiced{" "}
              <span className="text-[#E0FF4D]">every single day.</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.num}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md hover:border-[#06B6D4]/50 hover:bg-white/[0.05] transition-all"
              >
                <span className="font-tech text-xs font-bold text-[#06B6D4] px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40">
                  PILLAR {p.num}
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-6 mb-1">
                  {p.title}
                </h3>
                <p className="text-xs font-semibold text-[#E0FF4D] mb-4">
                  {p.tagline}
                </p>
                <p className="text-sm leading-relaxed text-white/65">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          CURRICULUM BLUEPRINT SECTION (With Speaker Pictures & Avatars!)
      ───────────────────────────────────────────── */}
      <section id="days" className="py-24 bg-[#07020d]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-14">
            <div>
              <span className="text-xs uppercase font-tech font-bold tracking-[0.2em] text-[#06B6D4]">
                Curriculum Blueprint · 21 Daily Sessions
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2 text-white">
                Every session,{" "}
                <span className="text-[#E0FF4D]">one day</span> at a{" "}
                <span className="text-[#06B6D4]">time.</span>
              </h2>
              <p className="mt-3 text-sm text-white/65 max-w-xl">
                Led by battle-tested executives, operators, and growth practitioners. Each day focuses on a single executable mental model.
              </p>
            </div>

            <Link
              href="/lace/testimonials"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-bold text-[#67E8F9] hover:bg-white/10 transition-colors"
            >
              <MessageSquare className="h-3.5 w-3.5 text-[#E0FF4D]" />
              <span>Read 15 Participant Reviews →</span>
            </Link>
          </div>

          {/* 21-Day Cards Grid with Trainer Photos */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LACE_CONFIG.bootcampDays.map((d) => (
              <div
                key={d.day}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 backdrop-blur-md hover:border-[#06B6D4]/50 hover:bg-white/[0.06] transition-all shadow-lg"
              >
                <div>
                  {/* Top Bar: Day Pill & Platform */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-tech text-xs font-bold text-[#E0FF4D] px-2.5 py-0.5 rounded-md bg-[#E0FF4D]/10 border border-[#E0FF4D]/25">
                      DAY {d.day.toString().padStart(2, "0")}
                    </span>
                    <span className="flex items-center gap-1 font-tech text-[10px] text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded-full border border-cyan-800/30">
                      <Clock className="h-2.5 w-2.5" />
                      <span>11:00 PM WAT</span>
                    </span>
                  </div>

                  {/* Topic Title */}
                  <h4 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-cyan-200 transition-colors line-clamp-2 leading-snug">
                    {d.topic}
                  </h4>
                </div>

                {/* Trainer Avatar & Role Information */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-[#06B6D4]/50 bg-black/60 shadow-md">
                    <Image
                      src={d.speakerPhoto || "/lace/people/prince.png"}
                      alt={d.speaker}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="block truncate text-xs font-bold text-white">
                      {d.speaker}
                    </span>
                    <span className="block truncate text-[11px] text-[#06B6D4] font-medium">
                      {d.speakerRole || "Executive Faculty"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Archive Banner */}
          <div className="mt-12 rounded-3xl border border-white/15 bg-gradient-to-r from-[#170828] via-[#2A0845] to-[#10031f] p-8 text-center text-sm text-white/80 backdrop-blur-xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h4 className="font-display text-lg font-bold text-white">
                Missed any of the 21 live sessions?
              </h4>
              <p className="text-xs text-white/60 mt-1 max-w-xl">
                Full high-definition recordings, workshop notes, and session summaries are archived and included with every LACE 1.0 pass.
              </p>
            </div>

            <a
              href={LACE_CONFIG.links.selar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#06B6D4] px-7 py-3.5 text-xs font-bold text-slate-950 hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-cyan-500/20"
            >
              <span>Get Full Archive Access</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <LaceFooter />
    </div>
  )
}
