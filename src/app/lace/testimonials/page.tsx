import Link from "next/link"
import { ArrowLeft, ArrowUpRight, MessageSquareQuote, Sparkles, Star, Users, CheckCircle2 } from "lucide-react"
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
    { label: "Documented Transformations", val: "15" },
    { label: "Hands-on Practical Execution", val: "100%" },
    { label: "Average Conviction Multiplier", val: "3X" },
    { label: "Flawless Cohort Rating", val: "5.0 ★" },
  ]

  return (
    <div className="min-h-screen bg-[#07020d] text-white selection:bg-[#E0FF4D] selection:text-[#0c0516]">
      <LaceNav />

      {/* ─────────────────────────────────────────────
          EDITORIAL HEADER (Dark Luxury Theme with Text Colors)
      ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-white/10">
        {/* Ambient atmospheric lighting */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-10%] right-1/4 h-[550px] w-[550px] rounded-full bg-[#5B21B6]/25 blur-[150px]" />
          <div className="absolute top-1/3 left-[-150px] h-[500px] w-[500px] rounded-full bg-[#06B6D4]/15 blur-[140px]" />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <Link
              href="/lace"
              className="group inline-flex items-center gap-1.5 text-xs font-semibold text-white/60 hover:text-[#67E8F9] transition-colors mb-6"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Back to LACE 1.0 Overview</span>
            </Link>

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-4 py-1.5 text-xs font-bold text-cyan-300 mb-5 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-[#E0FF4D]" />
              <span className="font-mono uppercase tracking-wider text-[11px]">
                Wall of Love · Verified Participant Transformations
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              What{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0FF4D] via-[#67E8F9] to-white">
                changed
              </span>{" "}
              for people who{" "}
              <span className="text-[#06B6D4]">showed up.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/70 max-w-2xl font-normal">
              15 participants from software engineering, sales, creative design, and executive operations share what the 21 Days Leadership and Sales Bootcamp unlocked—and the concrete actions they have taken since.
            </p>

            {/* Metrics Counter Bar */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 backdrop-blur-md"
                >
                  <span className="block font-mono text-xl sm:text-2xl font-extrabold text-[#E0FF4D]">
                    {s.val}
                  </span>
                  <span className="block text-[10px] sm:text-[11px] text-white/60 mt-0.5 leading-tight">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href={LACE_CONFIG.links.selar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] px-8 py-3.5 text-sm font-bold text-slate-950 hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-cyan-500/25"
              >
                <span>Register for LACE 1.0</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <Link
                href="/lace/bootcamp"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all active:scale-95"
              >
                <span>Explore the 21-Day Bootcamp</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          WALL OF LOVE MASONRY SECTION
      ───────────────────────────────────────────── */}
      <section className="py-20 bg-[#07020d] border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <TestimonialWallOfLove testimonials={LACE_CONFIG.testimonials} />
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          BE PART OF THE NEXT STORY CTA
      ───────────────────────────────────────────── */}
      <section className="py-20 bg-[#0c0516]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-[2.5rem] border border-white/15 bg-gradient-to-r from-[#1E0938] via-[#2A0845] to-[#140526] p-8 sm:p-12 text-white shadow-2xl backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#06B6D4]">
                Write your own chapter
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">
                Be part of the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0FF4D] to-[#67E8F9]">
                  next story.
                </span>
              </h2>
              <p className="mt-2 text-white/70 text-sm sm:text-base max-w-xl">
                LACE 1.0 starts 31 October in Lagos with 2 weeks of applied AI training. Certification examination on Saturday, 14 November 2026.
              </p>
            </div>

            <a
              href={LACE_CONFIG.links.selar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#06B6D4] px-8 py-4 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-500/25 hover:brightness-110 active:scale-95 transition-all"
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
