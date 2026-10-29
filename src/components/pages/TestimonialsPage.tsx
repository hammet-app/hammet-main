import Link from 'next/link';
import Image from 'next/image';
import { LINKS, TESTIMONIALS } from '@/lib/config';
import WallOfLove from '@/components/testimonials/WallOfLove';

export default function TestimonialsPage() {
  return (
    <div className="lace-page-scope bg-[#FAF8F5] min-h-screen">
      {/* ─────────────────────────────────────────────
          LACE LUXURY TESTIMONIALS HERO HEADER
      ───────────────────────────────────────────── */}
      <header className="relative overflow-hidden bg-gradient-to-b from-[#18052B] via-[#2A0845] to-[#120224] text-white pt-6 pb-16 md:pt-8 md:pb-20 border-b border-purple-900/60 shadow-xl">
        {/* Full-bleed Testimonials Photographic Background */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
          <Image
            src="/assets/testimonials/testimonial-bg.jpg"
            alt="Hammet Alumni & Tech Learners"
            fill
            priority
            className="object-cover object-center opacity-25 mix-blend-luminosity filter blur-[0.5px]"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#18052B]/95 via-[#2A0845]/90 to-[#120224]/85" />
        </div>

        {/* Ambient decorative glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#06B6D4]/15 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-[#7C3AED]/20 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Integrated Top Brand Navigation (Responsive & Decoupled on Mobile) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 pb-4 sm:pb-6 mb-5 sm:mb-6 border-b border-purple-800/40">
            {/* Top Row: Logo on Left, Compact Square Register CTA on Mobile Right */}
            <div className="flex items-center justify-between w-full sm:w-auto">
              <Link className="logo flex items-center gap-2.5" href="/" aria-label="Hammet School of AI">
                <img
                  src="/favicon.ico"
                  width={30}
                  height={30}
                  alt="Hammet"
                  className="h-7 w-7 shrink-0 object-contain"
                />
                <div className="flex flex-col">
                  <b className="text-sm font-black tracking-tight text-white leading-none">Hammet</b>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 leading-tight">
                    School of AI
                  </span>
                </div>
              </Link>

              {/* Mobile-Only Compact Square Register Button */}
              <a
                className="sm:hidden inline-flex items-center justify-center font-black uppercase tracking-wider text-white bg-[#5B21B6] hover:bg-[#6D28D9] border-2 border-black/80 shadow-[2px_2px_0px_#180528] rounded-[4px] px-3 py-1.5 text-xs transition-all active:translate-x-[1px] active:translate-y-[1px]"
                href={LINKS.selar}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register
              </a>
            </div>

            {/* Sub Row on Mobile / Right Column on Desktop */}
            <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-6">
              <Link
                href="/lace"
                className="text-xs sm:text-sm font-bold text-purple-200 hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5 py-0.5"
              >
                <span>←</span>
                <span>Back to LACE 1.0</span>
              </Link>

              {/* Desktop Square Register Button */}
              <a
                className="hidden sm:inline-flex items-center justify-center font-black uppercase tracking-wider text-white bg-[#5B21B6] hover:bg-[#6D28D9] border-2 border-black/80 shadow-[2px_2px_0px_#180528] rounded-[4px] px-4 py-2 text-xs transition-all active:translate-x-[1px] active:translate-y-[1px] whitespace-nowrap"
                href={LINKS.selar}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register for LACE 1.0 →
              </a>
            </div>
          </div>

          {/* Breadcrumbs */}
          <nav className="mb-6 flex items-center gap-2 text-xs font-semibold text-purple-200/70 uppercase tracking-widest" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/lace" className="hover:text-cyan-400 transition-colors">LACE 1.0</Link>
            <span>/</span>
            <span className="text-cyan-300">Wall of Love</span>
          </nav>

          {/* Eyebrow Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Verified Participant Stories · LACE Alumni</span>
          </div>

          {/* Hero Headline */}
          <h1 className="max-w-4xl text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            What changed for people who{' '}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">
              showed up.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-purple-100/80 leading-relaxed font-medium">
            <strong className="text-white font-bold">{TESTIMONIALS.length}</strong> leaders, engineers, and founders share what the 21 Days Leadership &amp; Sales Bootcamp taught them, and the concrete revenue and career milestones they achieved since.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              className="btn-elevated-brutal inline-flex items-center gap-2"
              href={LINKS.selar}
              target="_blank"
              rel="noopener noreferrer"
            >
              REGISTER FOR LACE 1.0 <span aria-hidden="true">→</span>
            </a>
            <Link
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/20 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm transition hover:bg-white/15 hover:border-white/40 focus:outline-none"
              href="/lace"
            >
              Explore LACE 1.0 Programme
            </Link>
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────
          WALL OF LOVE MASONRY SECTION
      ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <WallOfLove />
      </section>

      {/* ─────────────────────────────────────────────
          BOTTOM CALL TO ACTION BANNER
      ───────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#3B0764] via-[#5B21B6] to-[#0E7490] p-8 sm:p-12 text-white shadow-2xl border border-white/15">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#67E8F9] mb-2 block">
                Next Cohort Certification
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Be part of the next success story.
              </h2>
              <p className="mt-3 text-purple-100/85 text-sm sm:text-base">
                Join LACE 1.0, learn from vetted African founders, and earn your globally recognized Hammet AI Certification.
              </p>
            </div>
            <a
              className="btn-elevated-brutal shrink-0 whitespace-nowrap"
              href={LINKS.selar}
              target="_blank"
              rel="noopener noreferrer"
            >
              REGISTER FOR LACE 1.0 →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
