"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Flame,
  Compass,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  TrendingUp,
} from "lucide-react";
import { LACE_CONFIG } from "@/lib/lace-data";

interface Track {
  id: string;
  num: string;
  title: string;
  tagline: string;
  desc: string;
  icon: any;
  duration: string;
  tools: string[];
  outcomes: string[];
  capstone: string;
}

const TRACKS: Track[] = [
  {
    id: "track-1",
    num: "01",
    title: "Applied AI for Career Acceleration",
    tagline: "Perform 10x faster in your existing industry.",
    desc: "Stop asking what AI is. Learn prompt design, structured context framing, workflow chaining, and automated research synthesis to outperform peers and position for high-leverage roles.",
    icon: Award,
    duration: "Week 1 · Days 1–3",
    tools: ["Claude 3.5 Sonnet", "ChatGPT Plus", "Perplexity Pro", "NotebookLM"],
    outcomes: [
      "Master contextual prompting for rapid business drafting",
      "Executive deck & memo automation in minutes",
      "Accelerated market intelligence gathering",
      "Eliminate repetitive writing & daily administrative drag",
    ],
    capstone: "Build an executive intelligence assistant calibrated to your company's data.",
  },
  {
    id: "track-2",
    num: "02",
    title: "AI-Driven Sales & Growth Systems",
    tagline: "Automate lead capture, outreach, and conversions.",
    desc: "Build automated client acquisition pipelines, personalized cold outreach engines, and customer intelligence bots that multiply revenue without adding payroll overhead.",
    icon: Flame,
    duration: "Week 1 · Days 4–6",
    tools: ["Apollo.io", "Instantly.ai", "Make.com", "OpenAI API"],
    outcomes: [
      "Hyper-personalized cold email and LinkedIn sequences",
      "AI objection-handling playbooks for closers",
      "Automated lead enrichment from public data",
      "Dynamic proposal generators that win deals faster",
    ],
    capstone: "Deploy an end-to-end autonomous inbound/outbound sales engine.",
  },
  {
    id: "track-3",
    num: "03",
    title: "Taskforce Automation & Copilots",
    tagline: "Connect LLMs to spreadsheets, SQL, and enterprise apps.",
    desc: "Bridge the gap between prompt engineering and systems integration. Connect AI models with Google Sheets, Airtable, Slack, and external APIs to build autonomous agents.",
    icon: Compass,
    duration: "Week 2 · Days 7–10",
    tools: ["Make / Zapier", "Python Scripts", "Supabase", "Anthropic Tool Use"],
    outcomes: [
      "Multi-step automated workflows with error fallback",
      "Natural language SQL querying across customer tables",
      "Automated PDF and invoice extraction pipelines",
      "Custom internal copilots for your operational team",
    ],
    capstone: "Construct a multi-agent workflow that handles customer support triage.",
  },
  {
    id: "track-4",
    num: "04",
    title: "Compulsory Certification Exam",
    tagline: "Rigorous, industry-standard timed evaluation.",
    desc: "A proctored, real-world practical examination on Saturday, 14 November 2026. Only candidates who pass earn the verified Hammet School of AI Mastery Credential.",
    icon: ShieldCheck,
    duration: "Saturday, 14 Nov 2026",
    tools: ["Proctored Portal", "Live Scenario Testing", "Credential Registry"],
    outcomes: [
      "Verifiable digital badge with cryptographic hash",
      "LinkedIn-recognized credential from Hammet School of AI",
      "Priority listing in the Hammet vetted talent directory",
      "Lifetime membership in the exclusive LACE Alumni Circle",
    ],
    capstone: "Live 3-hour practical challenge solving real corporate AI briefs.",
  },
];

export default function TrackExplorer() {
  const [activeTrack, setActiveTrack] = useState<Track>(TRACKS[0]);

  return (
    <div className="relative">
      {/* Track Selector Bar (Square-inspired Segmented Pill Switcher) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8">
        {TRACKS.map((t) => {
          const isSelected = activeTrack.id === t.id;
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTrack(t)}
              className={`relative flex items-center gap-3 p-3.5 rounded-xl text-left transition-all ${
                isSelected
                  ? "bg-gradient-to-r from-[#5B21B6] to-[#3B0764] text-white shadow-lg border border-purple-400/30"
                  : "text-white/60 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
                  isSelected
                    ? "bg-[#E0FF4D] text-[#0A0214]"
                    : "bg-white/5 text-white/70"
                }`}
              >
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-cyan-300">
                  Track {t.num}
                </span>
                <span className="block truncate text-xs font-bold leading-snug">
                  {t.title.split(" ")[0]} {t.title.split(" ")[1]}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Track Deep-Dive Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTrack.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.05] via-[#140622] to-white/[0.02] p-8 sm:p-10 backdrop-blur-xl shadow-2xl"
        >
          {/* Subtle top indicator */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-[#E0FF4D] px-3 py-1 font-mono text-xs font-extrabold uppercase text-[#0c0516]">
                Track {activeTrack.num}
              </span>
              <span className="text-xs font-mono text-cyan-400">
                {activeTrack.duration}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-white/50">Curriculum Tier</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-bold text-emerald-400">Production Ready</span>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Left 7 cols: Narrative & Outcomes */}
            <div className="lg:col-span-7">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {activeTrack.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base font-medium text-[#E0FF4D]">
                {activeTrack.tagline}
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/70">
                {activeTrack.desc}
              </p>

              {/* Core Outcomes List */}
              <div className="mt-7">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">
                  Key Skills & Deliverables
                </h4>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {activeTrack.outcomes.map((outcome, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-white/80"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#06B6D4] mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 cols: Tools, Capstone & CTA */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300">
                  Tech Stack & Platforms
                </span>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {activeTrack.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-white/90"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Capstone Box */}
              <div className="rounded-xl border border-purple-500/20 bg-purple-950/20 p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#E0FF4D] mb-1.5">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Capstone Project</span>
                </div>
                <p className="text-xs text-white/75 leading-relaxed">
                  {activeTrack.capstone}
                </p>
              </div>

              {/* Instant Enrollment CTA */}
              <a
                href={LACE_CONFIG.links.selar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#06B6D4] py-3.5 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-lg shadow-cyan-500/20 hover:brightness-110 active:scale-95 transition-all"
              >
                <span>Register for this Track</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

