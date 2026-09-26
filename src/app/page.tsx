"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  GraduationCap,
  Menu,
  Moon,
  Sparkles,
  Sun,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Why Hammet", href: "#why-hammet" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Foundation", href: "#foundation" },
];

export default function Home() {
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("hammet-theme");

    if (saved === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = !dark;

    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("hammet-theme", next ? "dark" : "light");
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950 transition-colors duration-300 dark:bg-[#10051c] dark:text-white">
      {/* ─────────────────────────────────────────────
          EVENT BANNER
      ───────────────────────────────────────────── */}

      <div className="relative z-50 bg-[#3B0764] px-4 py-3 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 text-center text-sm sm:flex-row sm:gap-3">
          <span className="inline-flex items-center gap-2 font-medium">
            <span className="h-2 w-2 rounded-full bg-[#06B6D4]" />
            Lagos AI Career Experience 1.0
          </span>

          <span className="hidden text-white/40 sm:inline">•</span>

          <span className="text-white/80">
            Reimagining Work. 25 September.
          </span>

          <span className="hidden text-white/40 sm:inline">•</span>

          <span className="font-semibold">Tickets from ₦2,000</span>

          <Link
            href="#ticket"
            className="inline-flex items-center gap-1 font-semibold text-[#67E8F9] transition hover:text-white"
          >
            Get your ticket
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* ─────────────────────────────────────────────
          NAVIGATION
      ───────────────────────────────────────────── */}

      <header className="relative z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-[#10051c]/90">
        <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Brand */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2"
            aria-label="Hammet home"
          >
            <Image
              src="/favicon.ico"
              alt="Hammet"
              width={32}
              height={32}
              className="h-8 w-8 shrink-0"
              priority
            />

            <span className="font-serif text-2xl font-semibold leading-none tracking-tight text-[#3B0764] dark:text-white">
              Hammet
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-[#5B21B6] dark:text-white/65 dark:hover:text-[#67E8F9]"
              >
                {item.label}
              </Link>
            ))}

            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-[#5B21B6] hover:text-[#5B21B6] dark:border-white/10 dark:text-white/70 dark:hover:border-[#06B6D4] dark:hover:text-[#67E8F9]"
            >
              {dark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-white/10"
            >
              {dark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              aria-label="Toggle navigation"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5B21B6] text-white"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile navigation */}
        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-5 dark:border-white/10 dark:bg-[#10051c] md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-[#EDE9FE] dark:text-white/80 dark:hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* ─────────────────────────────────────────────
          HERO
      ───────────────────────────────────────────── */}

      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-[-18rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#EDE9FE] blur-3xl dark:bg-[#3B0764]/40" />
          <div className="absolute right-[-12rem] top-32 h-[28rem] w-[28rem] rounded-full bg-cyan-100/60 blur-3xl dark:bg-cyan-950/20" />
          <div className="absolute left-[-14rem] top-[30rem] h-[24rem] w-[24rem] rounded-full bg-purple-100/50 blur-3xl dark:bg-purple-950/20" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-20 sm:px-8 sm:pt-28 lg:pb-32 lg:pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#DDD6FE] bg-[#F5F3FF] px-4 py-2 text-xs font-semibold text-[#5B21B6] dark:border-purple-400/20 dark:bg-purple-500/10 dark:text-[#C4B5FD]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4]" />
              AI education built for Africa
            </div>

            <h1 className="font-serif text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#3B0764] sm:text-6xl lg:text-8xl dark:text-white">
              Your AI career
              <span className="block text-[#6D28D9] dark:text-[#A78BFA]">
                starts here.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-white/65">
              Hammet is Nigeria&apos;s foremost AI career pathway platform. We
              teach AI in plain language, then connect it to real work, so
              learners don&apos;t only know what AI is. They know what to do
              with it.
            </p>
          </div>

          {/* Two doors */}
          <div className="mx-auto mt-14 grid w-full max-w-5xl gap-5 md:grid-cols-2">
            <Link
              href="https://app.hammetedu.com"
              className="group relative overflow-hidden rounded-3xl border border-[#DDD6FE] bg-white p-7 shadow-[0_20px_60px_rgba(59,7,100,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#A78BFA] hover:shadow-[0_25px_70px_rgba(91,33,182,0.15)] sm:p-9 dark:border-white/10 dark:bg-white/[0.045] dark:shadow-none dark:hover:border-purple-400/30"
            >
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#EDE9FE] blur-2xl dark:bg-purple-500/10" />

              <div className="relative">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDE9FE] text-[#5B21B6] dark:bg-purple-500/15 dark:text-[#C4B5FD]">
                  <GraduationCap className="h-6 w-6" />
                </div>

                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#6D28D9] dark:text-[#A78BFA]">
                  For individuals
                </p>

                <h2 className="font-serif text-3xl font-semibold tracking-tight text-[#3B0764] dark:text-white">
                  I want to learn.
                </h2>

                <p className="mt-3 max-w-md leading-7 text-slate-600 dark:text-white/60">
                  Practical AI courses for real life and real work.
                </p>

                <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#5B21B6] dark:text-[#67E8F9]">
                  Start learning
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            <Link
              href="https://schools.hammetedu.com"
              className="group relative overflow-hidden rounded-3xl bg-[#3B0764] p-7 text-white shadow-[0_20px_60px_rgba(59,7,100,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(59,7,100,0.3)] sm:p-9"
            >
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[#06B6D4]/15 blur-2xl" />

              <div className="relative">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#67E8F9]">
                  <Building2 className="h-6 w-6" />
                </div>

                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#67E8F9]">
                  For schools
                </p>

                <h2 className="font-serif text-3xl font-semibold tracking-tight">
                  I run a school.
                </h2>

                <p className="mt-3 max-w-md leading-7 text-white/65">
                  A complete AI curriculum for JSS1 to JSS3, ready from first
                  term.
                </p>

                <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#67E8F9]">
                  See how it works
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          WHY HAMMET
      ───────────────────────────────────────────── */}

      <section
        id="why-hammet"
        className="border-y border-slate-200/80 bg-slate-50/70 dark:border-white/10 dark:bg-white/[0.025]"
      >
        <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-[#06B6D4]">
                Why we&apos;re doing this
              </p>

              <h2 className="max-w-lg font-serif text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#3B0764] sm:text-5xl dark:text-white">
                The world of work is changing.
                <span className="block text-[#6D28D9] dark:text-[#A78BFA]">
                  Education has to change with it.
                </span>
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-xl leading-9 text-slate-700 dark:text-white/75">
                About 90% of Africa&apos;s young people leave school without
                basic AI skills. Meanwhile AI is already writing, designing,
                hiring and diagnosing.
              </p>

              <div className="my-8 h-px w-full bg-slate-200 dark:bg-white/10" />

              <p className="text-xl font-medium leading-9 text-[#3B0764] dark:text-white">
                We think that gap can be closed.
                <span className="text-[#5B21B6] dark:text-[#67E8F9]">
                  {" "}
                  So we&apos;re closing it.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          LEARN → USE → EARN
      ───────────────────────────────────────────── */}

      <section id="how-it-works" className="bg-white dark:bg-[#10051c]">
        <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-[#06B6D4]">
              The Hammet pathway
            </p>

            <h2 className="font-serif text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#3B0764] sm:text-5xl lg:text-6xl dark:text-white">
              Learn it.
              <span className="text-[#6D28D9] dark:text-[#A78BFA]">
                {" "}
                Use it.
              </span>
              <span className="text-[#06B6D4]"> Earn from it.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-white/60">
              AI shouldn&apos;t just be something you know about. It should
              become something you can actually use.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Learn it.",
                text: "First you understand how AI works.",
              },
              {
                number: "02",
                title: "Use it.",
                text: "Then you use the tools on real tasks.",
              },
              {
                number: "03",
                title: "Earn from it.",
                text: "Then you build a career on it, with pathways for science, arts and commerce students, and beyond.",
              },
            ].map((step) => (
              <article
                key={step.number}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 dark:border-white/10 dark:bg-white/[0.045]"
              >
                <span className="text-sm font-bold text-[#06B6D4]">
                  {step.number}
                </span>

                <h3 className="mt-12 font-serif text-3xl font-semibold text-[#3B0764] dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-white/60">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          FOUNDATION
      ───────────────────────────────────────────── */}

      <section
        id="foundation"
        className="relative overflow-hidden bg-[#3B0764] text-white"
      >
        <div className="absolute right-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-[#06B6D4]/15 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-[-8rem] h-96 w-96 rounded-full bg-[#6D28D9]/40 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#67E8F9]">
                <Users className="h-6 w-6" />
              </div>

              <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-[#67E8F9]">
                Beyond the platform
              </p>

              <h2 className="max-w-2xl font-serif text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
                For the ones most likely to be left out.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
                Hammet Research Foundation, our nonprofit arm, is working to
                bring AI literacy to girls, rural students and learners with
                disabilities.
              </p>

              <Link
                href="https://hammetfoundation.org"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#3B0764] transition hover:bg-[#67E8F9]"
              >
                See the Foundation&apos;s work
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm sm:p-9">
              <div className="space-y-5">
                {[
                  "Girls",
                  "Rural students",
                  "Learners with disabilities",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#06B6D4]/15 text-[#67E8F9]">
                      <Check className="h-4 w-4" />
                    </div>

                    <span className="text-base font-medium text-white/85">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          EVENT CTA
      ───────────────────────────────────────────── */}

      <section id="ticket" className="bg-[#F5F3FF] dark:bg-[#180a27]">
        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="flex flex-col gap-8 rounded-[2rem] bg-white p-7 shadow-[0_20px_60px_rgba(59,7,100,0.08)] sm:p-10 lg:flex-row lg:items-center lg:justify-between dark:bg-white/[0.05] dark:shadow-none">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#06B6D4]">
                25 September
              </p>

              <h2 className="mt-2 font-serif text-3xl font-semibold text-[#3B0764] dark:text-white sm:text-4xl">
                Lagos AI Career Experience 1.0
              </h2>

              <p className="mt-3 text-slate-600 dark:text-white/60">
                Reimagining Work. Tickets from ₦2,000.
              </p>
            </div>

            <Link
              href="#"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#5B21B6] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#6D28D9]"
            >
              Get your ticket
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          FOOTER
      ───────────────────────────────────────────── */}

      <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-[#10051c]">
        <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:py-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-2"
                aria-label="Hammet home"
              >
                <Image
                  src="/favicon.ico"
                  alt="Hammet"
                  width={28}
                  height={28}
                  className="h-7 w-7"
                />

                <span className="font-serif text-2xl font-semibold tracking-tight text-[#3B0764] dark:text-white">
                  Hammet
                </span>
              </Link>

              <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500 dark:text-white/45">
                Nigeria&apos;s AI career pathway platform. Learn AI properly,
                use it in the real world, and build a career around it.
              </p>
            </div>

            {/* Platform */}
            <div>
              <h3 className="text-sm font-semibold text-[#3B0764] dark:text-white">
                Platform
              </h3>

              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href="https://app.hammetedu.com"
                  className="text-sm text-slate-500 transition hover:text-[#5B21B6] dark:text-white/50 dark:hover:text-[#67E8F9]"
                >
                  Learn with Hammet
                </Link>

                <Link
                  href="https://schools.hammetedu.com"
                  className="text-sm text-slate-500 transition hover:text-[#5B21B6] dark:text-white/50 dark:hover:text-[#67E8F9]"
                >
                  For schools
                </Link>

                <Link
                  href="https://hammetfoundation.org"
                  className="text-sm text-slate-500 transition hover:text-[#5B21B6] dark:text-white/50 dark:hover:text-[#67E8F9]"
                >
                  Foundation
                </Link>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-[#3B0764] dark:text-white">
                Company
              </h3>

              <div className="mt-4 flex flex-col gap-3">
                {/*<Link
                  href="/about"
                  className="text-sm text-slate-500 transition hover:text-[#5B21B6] dark:text-white/50 dark:hover:text-[#67E8F9]"
                >
                  About Hammet
                </Link>*/}

                <Link
                  href="/blog"
                  className="text-sm text-slate-500 transition hover:text-[#5B21B6] dark:text-white/50 dark:hover:text-[#67E8F9]"
                >
                  Blog
                </Link>

                {/*<Link
                  href="/contact"
                  className="text-sm text-slate-500 transition hover:text-[#5B21B6] dark:text-white/50 dark:hover:text-[#67E8F9]"
                >
                  Contact
                </Link>*/}
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-[#3B0764] dark:text-white">
                Legal
              </h3>

              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href="/privacy"
                  className="text-sm text-slate-500 transition hover:text-[#5B21B6] dark:text-white/50 dark:hover:text-[#67E8F9]"
                >
                  Privacy
                </Link>

                <Link
                  href="/terms"
                  className="text-sm text-slate-500 transition hover:text-[#5B21B6] dark:text-white/50 dark:hover:text-[#67E8F9]"
                >
                  Terms
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
            <p className="text-sm text-slate-500 dark:text-white/45">
              © {new Date().getFullYear()} Hammet Limited. All rights reserved.
            </p>

            <p className="text-sm text-slate-500 dark:text-white/45 sm:text-right">
              Our vision: to revolutionize education in Africa.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
