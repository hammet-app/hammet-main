"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react"
import { LACE_CONFIG } from "@/lib/lace-data"
import HammetLogo from "@/components/lace/HammetLogo"

export default function LaceNav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { label: "Overview", href: "/lace" },
    { label: "Courses", href: "/lace#courses" },
    { label: "Bootcamp", href: "/lace/bootcamp" },
    { label: "Tickets", href: "/lace#tickets" },
    { label: "Speakers", href: "/lace#speakers" },
    { label: "Testimonials", href: "/lace/testimonials" },
    { label: "FAQ", href: "/lace#faq" },
  ]

  const isActive = (href: string) => {
    if (href === "/lace") return pathname === "/lace"
    return pathname === href
  }

  return (
    <>
      {/* Top utility alert banner */}
      <div className="relative z-50 bg-[#1A0B2E] border-b border-white/10 px-4 py-2.5 text-xs text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06B6D4]"></span>
            </span>
            <span className="font-semibold text-white/90">Lagos AI Career Experience 1.0</span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="hidden sm:inline text-white/70">Opening 31 Oct · Ogba, Lagos</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link
              href="/"
              className="text-white/60 hover:text-white transition-colors"
            >
              Hammet Main Platform →
            </Link>
            <a
              href={LACE_CONFIG.links.selar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-[#67E8F9] hover:underline"
            >
              Get Tickets
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#10051C]/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Brand */}
          <HammetLogo variant="full" />

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  isActive(link.href)
                    ? "bg-[#5B21B6] text-white shadow-sm"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href={LACE_CONFIG.links.selar}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] px-5 py-2.5 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-500/20 hover:brightness-110 active:scale-95 transition-all"
            >
              <span>Register Now</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileOpen}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white md:hidden hover:bg-white/10"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile dropdown menu */}
        {mobileOpen && (
          <div className="border-t border-white/10 bg-[#140624] px-5 py-6 md:hidden">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-[#5B21B6] text-white font-bold"
                      : "text-white/80 hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
                <a
                  href={LACE_CONFIG.links.selar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#06B6D4] py-3 text-sm font-bold text-slate-950"
                >
                  Register on Selar
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={LACE_CONFIG.links.waitlist}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-xl border border-white/20 py-3 text-sm font-medium text-white/80 hover:bg-white/5"
                >
                  Join the Waitlist Group
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

