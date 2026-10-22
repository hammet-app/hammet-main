import Link from "next/link"
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react"
import { LACE_CONFIG } from "@/lib/lace-data"
import HammetLogo from "@/components/lace/HammetLogo"

export default function LaceFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0214] text-white">
      {/* Top Banner CTA */}
      <div className="border-b border-white/10 bg-gradient-to-r from-[#1A0B2E] via-[#3B0764] to-[#1A0B2E] py-14 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#67E8F9]">
              Reimagining Work · Lagos AI Career Experience 1.0
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold mt-2">
              Ready to future-proof your career with AI?
            </h3>
            <p className="text-white/60 text-sm mt-2 max-w-xl">
              Opening ceremony in Ogba, Lagos on 31 October 2026. Followed by 2 weeks of intensive certified training.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={LACE_CONFIG.links.selar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#06B6D4] px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-500/25 hover:brightness-110 active:scale-95 transition-all"
            >
              Get Your Ticket
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={LACE_CONFIG.links.waitlist}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/5 transition-all"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand Info */}
          <div>
            <HammetLogo variant="full" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#67E8F9]">
              School of AI Foundations
            </p>
            <p className="mt-2 text-sm text-white/50 leading-relaxed">
              A division of Hammet Limited. Reimagining education and work across Africa through applied AI literacy and career pathways.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-white/40">
              <MapPin className="h-4 w-4 text-[#06B6D4]" />
              <span>10 Kayode Alabi, Ogba, Lagos, Nigeria</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/70">
              LACE 1.0 Portal
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>
                <Link href="/lace" className="hover:text-white transition-colors">
                  Event Overview
                </Link>
              </li>
              <li>
                <Link href="/lace#courses" className="hover:text-white transition-colors">
                  Certification Courses
                </Link>
              </li>
              <li>
                <Link href="/lace/bootcamp" className="hover:text-white transition-colors">
                  21-Day Leadership & Sales Bootcamp
                </Link>
              </li>
              <li>
                <Link href="/lace/testimonials" className="hover:text-[#67E8F9] transition-colors font-medium">
                  Participant Testimonials
                </Link>
              </li>
              <li>
                <Link href="/lace#tickets" className="hover:text-white transition-colors">
                  Ticket Pricing & Tiers
                </Link>
              </li>
              <li>
                <Link href="/lace#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: The Hammet Ecosystem */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/70">
              Hammet Network
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Hammet Home Platform
                </Link>
              </li>
              <li>
                <a
                  href="https://app.hammetedu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Hammet App for Learners
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://schools.hammetedu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Hammet for Schools
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://hammetfoundation.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Hammet Research Foundation
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  The Hammet Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Inquiries */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/70">
              Direct Contact
            </h4>
            <div className="mt-4 space-y-3 text-sm text-white/60">
              <a
                href={`tel:${LACE_CONFIG.links.phone}`}
                className="flex items-center gap-2 hover:text-[#67E8F9] transition-colors"
              >
                <Phone className="h-4 w-4 text-[#06B6D4]" />
                <span>{LACE_CONFIG.links.phoneNice} (Call & WhatsApp)</span>
              </a>
              <a
                href="mailto:admin@hammetlabs.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-[#06B6D4]" />
                <span>admin@hammetlabs.com</span>
              </a>
              <a
                href="mailto:hammetedu@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-[#06B6D4]" />
                <span>hammetedu@gmail.com</span>
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 text-xs text-white/40">
              <p>Instagram: @hammet_ai</p>
              <p className="mt-1">LinkedIn: @HammetLabs</p>
            </div>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Hammet Limited. All rights reserved.</p>
          <p>Theme: Reimagining Work · Lagos AI Career Experience 1.0</p>
        </div>
      </div>
    </footer>
  )
}

