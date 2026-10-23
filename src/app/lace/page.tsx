import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  Flame,
  Layers,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Users,
  Video,
  Zap,
} from "lucide-react"
import LaceNav from "@/components/lace/LaceNav"
import LaceFooter from "@/components/lace/LaceFooter"
import FAQAccordion from "@/components/lace/FAQAccordion"
import TextReveal from "@/components/lace/TextReveal"
import HeroCollage from "@/components/lace/HeroCollage"
import TrackExplorer from "@/components/lace/TrackExplorer"
import BootcampSpotlight from "@/components/lace/BootcampSpotlight"
import SpeakerAccordion from "@/components/lace/SpeakerAccordion"
import PhotoSlideshow from "@/components/lace/PhotoSlideshow"
import { LACE_CONFIG } from "@/lib/lace-data"

export const metadata = {
  title: "Lagos AI Career Experience 1.0 | Hammet School of AI Foundations",
  description:
    "Theme: Reimagining Work. A two-week intensive AI certification training with compulsory examination. Opening Ceremony 31 October 2026, 10 Kayode Alabi, Ogba, Lagos.",
}

export default function LaceHomePage() {
  return (
    <div className="min-h-screen bg-[#07020d] text-white selection:bg-[#E0FF4D] selection:text-[#0c0516]">
      <LaceNav />

      {/* ─────────────────────────────────────────────
          HERO LANDING SECTION (With Event Background & Text Colors)
      ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 border-b border-white/10">
        {/* Full-bleed Atmospheric Event Backdrop Picture (Vividly Visible) */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/lace/gallery/g01.jpg"
            alt="LACE Community Hall"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-85 filter contrast-115 brightness-100"
          />
          {/* Balanced cinematic vignette: darker on the left behind text for crisp contrast, completely clear across center & right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07020d]/92 via-[#07020d]/55 to-[#07020d]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07020d] via-transparent to-[#07020d]/40" />
          <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[#5B21B6]/20 blur-[130px]" />
          <div className="absolute bottom-0 left-[-80px] h-96 w-96 rounded-full bg-[#06B6D4]/15 blur-[130px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Narrative Column (7 cols) */}
            <div className="lg:col-span-7">
              {/* Category Eyebrow Pill with Cute Colored Icon Tile from Image 1 */}
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/60 px-4 py-1.5 text-xs font-bold text-cyan-300 mb-6 backdrop-blur-md shadow-lg shadow-cyan-950/40">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-[#67E8F9]">
                  <Zap className="h-3 w-3 fill-[#67E8F9]" />
                </span>
                <span className="font-tech uppercase tracking-wider text-[11px] text-cyan-200">
                  LACE 1.0 · Theme: Reimagining Work
                </span>
              </div>

              {/* Title with Custom Text Colors & Designer Font (Responsive Mobile Tuning) */}
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                AI-proof your{" "}
                <span className="text-[#06B6D4]">career.</span>
                <span className="block mt-2">
                  Grow your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0FF4D] via-[#67E8F9] to-white">
                    business
                  </span>{" "}
                  with practical AI.
                </span>
              </h1>

              <p className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-white/70 max-w-2xl font-normal">
                A two-week intensive certification training with a compulsory proctored examination. Built for working professionals, entrepreneurs, and ambitious graduates looking to deploy AI systems that multiply output and secure career leverage.
              </p>

              {/* Action Button Row (Responsive Mobile Full-Width) */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={LACE_CONFIG.links.selar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-slate-950 shadow-xl shadow-cyan-500/25 hover:brightness-110 active:scale-95 transition-all text-center"
                >
                  <span>Register for LACE 1.0</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <Link
                  href="/lace/testimonials"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-white hover:bg-white/10 transition-all active:scale-95 text-center"
                >
                  <MessageSquare className="h-4 w-4 text-[#E0FF4D]" />
                  <span>See 15 Testimonials</span>
                </Link>
              </div>

              {/* Key Highlights Micro-Badges with Cute Colored Icon Tiles from Image 1 */}
              <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-lg">
                <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-3 backdrop-blur-xl shadow-lg transition-all hover:-translate-y-0.5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block font-tech text-[10px] uppercase font-bold tracking-wider text-cyan-300">
                        Opening Ceremony
                      </span>
                      <span className="text-xs font-bold text-white mt-0.5 block truncate">
                        31 Oct · Ogba, Lagos
                      </span>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-3 backdrop-blur-xl shadow-lg transition-all hover:-translate-y-0.5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-purple-500/15 border border-purple-400/30 text-purple-300">
                      <Video className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block font-tech text-[10px] uppercase font-bold tracking-wider text-purple-300">
                        Live Virtual Lab
                      </span>
                      <span className="text-xs font-bold text-white mt-0.5 block truncate">
                        2 – 13 Nov 2026
                      </span>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-3 backdrop-blur-xl shadow-lg transition-all hover:-translate-y-0.5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-lime-500/15 border border-lime-400/30 text-[#E0FF4D]">
                      <Award className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block font-tech text-[10px] uppercase font-bold tracking-wider text-[#E0FF4D]">
                        Mastery Exam
                      </span>
                      <span className="text-xs font-bold text-white mt-0.5 block truncate">
                        14 Nov 2026
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Console Column (5 cols, Upgraded Hardware Terminal) */}
            <div className="lg:col-span-5">
              <HeroCollage />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          OVERVIEW & CURRICULUM SECTION (Square-Inspired Deep Dive)
      ───────────────────────────────────────────── */}
      <section id="courses" className="py-24 border-b border-white/10 bg-[#0c0516]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase font-mono font-bold tracking-[0.2em] text-[#06B6D4]">
              Structured Overview &amp; Tracks
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2 text-white tracking-tight">
              What you will master in{" "}
              <span className="text-[#E0FF4D]">2 intensive weeks.</span>
            </h2>
            <p className="mt-4 text-base text-white/65 leading-relaxed">
              Every course is taught in plain language with real work workflows. No theoretical jargon—only hands-on capability you can deploy immediately. Select any track below to inspect its syllabus and capstones.
            </p>
          </div>

          {/* Interactive Track Explorer */}
          <TrackExplorer />
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          21-DAY BOOTCAMP SPOTLIGHT (Upgraded Showpiece Banner)
      ───────────────────────────────────────────── */}
      <section className="py-20 border-b border-white/10 bg-[#07020d]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <BootcampSpotlight />
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          TICKETS & ADMISSION SECTION
      ───────────────────────────────────────────── */}
      <section id="tickets" className="py-24 border-b border-white/10 bg-[#0c0516]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono font-bold tracking-[0.2em] text-[#06B6D4]">
              Admission &amp; Passes
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2 text-white justify-center">
              Choose your{" "}
              <span className="text-[#06B6D4]">certification pass.</span>
            </h2>
            <p className="mt-4 text-white/60 text-base">
              Tickets cover the Opening Ceremony in Lagos, 2-week intensive virtual training, and the proctored examination. Instant secure checkout via Selar.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
            {LACE_CONFIG.tickets.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col justify-between rounded-3xl p-8 sm:p-9 border transition-all ${
                  tier.popular
                    ? "border-[#06B6D4] bg-gradient-to-b from-[#1C0933] to-[#110420] shadow-2xl shadow-cyan-500/15 lg:-translate-y-2"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#E0FF4D] px-4 py-1 text-xs font-extrabold text-[#0A0214] uppercase tracking-wider shadow-md">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-mono text-4xl sm:text-5xl font-extrabold text-white">
                      {tier.price}
                    </span>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-white/60 leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="my-7 h-px bg-white/10" />

                  <ul className="space-y-3.5 text-xs sm:text-sm text-white/80">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-[#06B6D4] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-9">
                  <a
                    href={LACE_CONFIG.links.selar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-full py-4 text-sm font-bold transition-all ${
                      tier.popular
                        ? "bg-[#06B6D4] text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/25 active:scale-95"
                        : "bg-white/10 text-white hover:bg-white/20 active:scale-95"
                    }`}
                  >
                    <span>Get {tier.name} Pass</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          FACILITATORS & SPEAKERS (Square-Inspired Expanding Accordion)
      ───────────────────────────────────────────── */}
      <section id="speakers" className="py-24 border-b border-white/10 bg-[#07020d]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs uppercase font-mono font-bold tracking-[0.2em] text-[#06B6D4]">
              Leadership &amp; Faculty
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2 text-white">
              Learn from{" "}
              <span className="text-[#E0FF4D]">battle-tested</span>{" "}
              <span className="text-[#06B6D4]">operators.</span>
            </h2>
            <p className="mt-4 text-white/65 text-base">
              Hover over any faculty panel below to explore their leadership focus, experience, and executive background.
            </p>
          </div>

          {/* Upgraded Vertical Expanding Accordion */}
          <SpeakerAccordion />
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          COMMUNITY MOMENTS & GALLERY (Editorial Photo Mosaic)
      ───────────────────────────────────────────── */}
      <section id="events" className="py-24 border-b border-white/10 bg-[#0c0516]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs uppercase font-mono font-bold tracking-[0.2em] text-[#06B6D4]">
                The Community in Motion
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2 text-white">
                Moments from{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#67E8F9] to-[#E0FF4D]">
                  previous gatherings.
                </span>
              </h2>
            </div>
            <span className="text-xs text-white/50 font-mono">
              Over 24+ documented event highlights
            </span>
          </div>

          {/* Horizontal Sliding Slideshow with Clickable Lightbox */}
          <PhotoSlideshow />
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          FREQUENTLY ASKED QUESTIONS
      ───────────────────────────────────────────── */}
      <section id="faq" className="py-24 bg-[#07020d]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase font-mono font-bold tracking-[0.2em] text-[#06B6D4]">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2 text-white justify-center">
              Frequently Asked{" "}
              <span className="text-[#06B6D4]">Questions.</span>
            </h2>
          </div>

          <FAQAccordion items={LACE_CONFIG.faq} />
        </div>
      </section>

      <LaceFooter />
    </div>
  )
}
