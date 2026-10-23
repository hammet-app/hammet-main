import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  ArrowUpRight,
  Heart,
  MessageSquare,
  Star,
  Users,
  CheckCircle2,
  TrendingUp,
  Award,
} from "lucide-react"
import LaceNav from "@/components/lace/LaceNav"
import LaceFooter from "@/components/lace/LaceFooter"
import TestimonialWallOfLove from "@/components/lace/TestimonialWallOfLove"
import { LACE_CONFIG } from "@/lib/lace-data"

export const metadata = {
  title: "Wall of Love | LACE 1.0 Participant Testimonials | Hammet",
  description:
    "Real stories, video testimonials, and documented outcomes from 15 professionals and entrepreneurs who showed up for the LACE 21 Days Leadership and Sales Bootcamp.",
}

export default function LaceTestimonialsPage() {
  const stats = [
    {
      label: "Documented Transformations",
      val: "15",
      icon: MessageSquare,
      color: "text-[#06B6D4]",
      badgeBg: "bg-cyan-500/15 border-cyan-400/30",
    },
    {
      label: "Hands-on Practical Execution",
      val: "100%",
      icon: CheckCircle2,
      color: "text-emerald-400",
      badgeBg: "bg-emerald-500/15 border-emerald-400/30",
    },
    {
      label: "Average Conviction Multiplier",
      val: "3X",
      icon: TrendingUp,
      color: "text-[#E0FF4D]",
      badgeBg: "bg-lime-500/15 border-lime-400/30",
    },
    {
      label: "Flawless Cohort Rating",
      val: "5.0 ★",
      icon: Star,
      color: "text-amber-400",
      badgeBg: "bg-amber-500/15 border-amber-400/30",
    },
  ]

  return (
    <div className="min-h-screen bg-[#07020d] text-white selection:bg-[#E0FF4D] selection:text-[#0c0516]">
      <LaceNav />

      {/* ─────────────────────────────────────────────
          EDITORIAL HEADER WITH ATMOSPHERIC PHOTO BACKDROP
      ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-white/10">
        {/* Full-bleed Atmospheric Photo Backdrop (High Visibility & Contrast) */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/lace/gallery/g06.jpg"
            alt="LACE Community Graduation Gathering"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-90 filter contrast-120 brightness-100"
          />
          {/* Clean cinematic vignette letting the event gathering shine through */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07020d] via-[#07020d]/45 to-[#07020d]/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07020d]/75 via-transparent to-[#07020d]/75" />
          <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[#5B21B6]/20 blur-[130px]" />
          <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-[#06B6D4]/15 blur-[130px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Back button */}
            <Link
              href="/lace"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold text-white/75 backdrop-blur-md transition-all hover:border-[#67E8F9]/40 hover:bg-white/10 hover:text-white mb-6 shadow-sm"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1 text-[#67E8F9]" />
              <span>Back to LACE 1.0 Overview</span>
            </Link>

            {/* Cute Colored Icon Eyebrow Badge (No Sparkles, matching Image 1) */}
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-950/60 px-4 py-1.5 text-xs font-bold text-rose-300 mb-5 backdrop-blur-md shadow-lg shadow-rose-950/40">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500/20 text-rose-400">
                <Heart className="h-3 w-3 fill-rose-400 text-rose-400" />
              </span>
              <span className="font-tech uppercase tracking-wider text-[11px] text-rose-200">
                Wall of Love · Verified Participant Transformations
              </span>
            </div>

            {/* Hero Headline with Balanced Mobile Font */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              What{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0FF4D] via-[#67E8F9] to-white">
                changed
              </span>{" "}
              for people who{" "}
              <span className="text-[#06B6D4]">showed up.</span>
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-white/80 max-w-2xl font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              15 participants from software engineering, sales, creative design, and executive operations share what the 21 Days Leadership and Sales Bootcamp unlocked—and the concrete actions they have taken since.
            </p>

            {/* Cute Colorful Metrics Counter Bar (Like Image 1) */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 w-full max-w-2xl">
              {stats.map((s) => {
                const Icon = s.icon
                return (
                  <div
                    key={s.label}
                    className="group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-3 sm:p-4 backdrop-blur-xl shadow-xl shadow-black/50 transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Top glass sheen line */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    
                    <div className="flex items-center justify-center gap-1.5 mb-1">
                      <div className={`flex h-6 w-6 items-center justify-center rounded-lg border ${s.badgeBg}`}>
                        <Icon className={`h-3 w-3 ${s.color}`} />
                      </div>
                      <span className={`font-tech text-xl sm:text-2xl font-black tracking-tight ${s.color}`}>
                        {s.val}
                      </span>
                    </div>

                    <span className="block text-[10px] sm:text-[11px] font-semibold text-white/60 leading-tight">
                      {s.label}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
              <a
                href={LACE_CONFIG.links.selar}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] px-7 py-3.5 text-xs sm:text-sm font-bold text-slate-950 hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-cyan-500/25"
              >
                <span>Register for LACE 1.0</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <Link
                href="/lace/bootcamp"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white hover:bg-white/10 transition-all active:scale-95"
              >
                <span>Explore 21-Day Bootcamp</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          WALL OF LOVE MASONRY SECTION
      ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#07020d] border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <TestimonialWallOfLove testimonials={LACE_CONFIG.testimonials} />
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          BE PART OF THE NEXT STORY CTA
      ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#0c0516]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="rounded-[2.5rem] border border-white/15 bg-gradient-to-r from-[#1E0938] via-[#2A0845] to-[#140526] p-6 sm:p-12 text-white shadow-2xl backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div>
              <span className="text-xs font-tech font-bold uppercase tracking-widest text-[#06B6D4]">
                Write your own chapter
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold mt-2 text-white">
                Be part of the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0FF4D] to-[#67E8F9]">
                  next story.
                </span>
              </h2>
              <p className="mt-2 text-white/70 text-xs sm:text-sm max-w-xl">
                LACE 1.0 starts 31 October in Lagos with 2 weeks of applied AI training. Certification examination on Saturday, 14 November 2026.
              </p>
            </div>

            <a
              href={LACE_CONFIG.links.selar}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#06B6D4] px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-slate-950 shadow-xl shadow-cyan-500/25 hover:brightness-110 active:scale-95 transition-all"
            >
              <span>Get Your Ticket</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <LaceFooter />
    </div>
  )
}
