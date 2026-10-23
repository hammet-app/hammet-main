"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, CheckCircle2, ChevronRight, Layers, SlidersHorizontal } from "lucide-react"
import { Testimonial } from "@/lib/lace-data"

interface VerticalTestimonialPanelsProps {
  testimonials: Testimonial[]
}

export default function VerticalTestimonialPanels({ testimonials }: VerticalTestimonialPanelsProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [filter, setFilter] = useState<string>("all")
  const [viewMode, setViewMode] = useState<"panels" | "grid">("panels")
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100, visible: false })
  const containerRef = useRef<HTMLDivElement>(null)

  const filtered = testimonials.filter((t) => {
    if (filter === "all") return true
    return t.category === filter
  })

  // Handle cursor spotlight tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      visible: true,
    })
  }

  const handleMouseLeave = () => {
    setCursorPos((prev) => ({ ...prev, visible: false }))
  }

  const categories = [
    { id: "all", label: "All Voices (15)" },
    { id: "tech", label: "Software & Engineering" },
    { id: "founder", label: "Founders & Sales" },
    { id: "creative", label: "Design & Content" },
    { id: "leadership", label: "Leadership & Ops" },
  ]

  return (
    <div className="w-full">
      {/* Controls Bar: Filter Chips & View Mode Toggle */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setFilter(c.id)
                setActiveIndex(0)
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                filter === c.id
                  ? "bg-[#67E8F9] text-slate-950 shadow-md shadow-cyan-500/20"
                  : "bg-white/[0.05] text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 bg-white/[0.04] border border-white/10 rounded-full p-1 text-xs">
          <button
            onClick={() => setViewMode("panels")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium transition-colors ${
              viewMode === "panels"
                ? "bg-[#5B21B6] text-white"
                : "text-white/60 hover:text-white"
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>Vertical Panels</span>
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium transition-colors ${
              viewMode === "grid"
                ? "bg-[#5B21B6] text-white"
                : "text-white/60 hover:text-white"
            }`}
          >
            <SlidersHorizontal className="h-3.5 w-3.5" />
            <span>Editorial Grid</span>
          </button>
        </div>
      </div>

      {viewMode === "panels" ? (
        /* =========================================================================
           SIGNATURE EXPANDING VERTICAL PANELS WITH CURSOR SPOTLIGHT
           ========================================================================= */
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative min-h-[640px] md:h-[680px] w-full flex flex-col md:flex-row gap-3 rounded-3xl border border-white/10 bg-[#0E031A] p-3 overflow-hidden shadow-2xl shadow-purple-950/50"
        >
          {/* Interactive Cursor Spotlight Glow */}
          {cursorPos.visible && (
            <div
              className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-60 z-0"
              style={{
                background: `radial-gradient(600px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(6, 182, 212, 0.15), rgba(91, 33, 182, 0.1) 40%, transparent 80%)`,
              }}
            />
          )}

          {/* Render Vertical Panels */}
          {filtered.map((item, idx) => {
            const isExpanded = activeIndex === idx

            return (
              <motion.article
                key={item.id}
                layout
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => setActiveIndex(idx)}
                onFocus={() => setActiveIndex(idx)}
                tabIndex={0}
                aria-expanded={isExpanded}
                role="region"
                aria-label={`Testimonial from ${item.name}`}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                }}
                className={`relative flex flex-col justify-end overflow-hidden rounded-2xl border transition-all cursor-pointer z-10 ${
                  isExpanded
                    ? "md:flex-[4.5] border-[#06B6D4]/50 shadow-2xl shadow-cyan-950/40 bg-[#160627]"
                    : "md:flex-1 border-white/10 hover:border-white/20 bg-[#10051C]"
                }`}
                style={{
                  minHeight: isExpanded ? "440px" : "120px",
                }}
              >
                {/* Background Person Image with Smooth Transition */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.photo}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className={`object-cover transition-all duration-700 ease-out ${
                      isExpanded
                        ? "scale-105 brightness-[0.7] contrast-105"
                        : "scale-100 grayscale-[0.3] brightness-[0.45] hover:brightness-[0.6]"
                    }`}
                  />
                  {/* Atmospheric Gradients */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isExpanded
                        ? "bg-gradient-to-t from-[#0B0214] via-[#0B0214]/80 to-transparent"
                        : "bg-gradient-to-t from-[#0B0214] via-[#0B0214]/60 to-black/30"
                    }`}
                  />
                </div>

                {/* Collapsed Vertical Title (Desktop Spine) */}
                {!isExpanded && (
                  <div className="hidden md:flex absolute inset-0 z-10 flex-col items-center justify-between py-8 px-2 pointer-events-none">
                    <span className="h-2 w-2 rounded-full bg-[#06B6D4]/70" />
                    <div className="[writing-mode:vertical-rl] rotate-180 flex items-center gap-3">
                      <span className="font-serif text-base font-bold text-white tracking-wide">
                        {item.name}
                      </span>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#67E8F9]/80 truncate max-w-[160px]">
                        {item.title}
                      </span>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                )}

                {/* Collapsed State Bar on Mobile */}
                {!isExpanded && (
                  <div className="md:hidden relative z-10 p-5 flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-white">{item.name}</h4>
                      <p className="text-xs text-white/60 truncate max-w-[240px]">{item.title}</p>
                    </div>
                    <span className="text-xs text-[#67E8F9] font-bold">Tap to read →</span>
                  </div>
                )}

                {/* Expanded Full Content Details */}
                <AnimatePresence mode="wait">
                  {isExpanded && (
                    <motion.div
                      key="expanded-content"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10 p-6 sm:p-9 flex flex-col justify-end h-full overflow-y-auto max-h-[640px] scrollbar-thin"
                    >
                      {/* Top Meta Tag */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#06B6D4]/15 border border-[#06B6D4]/30 px-3 py-1 text-xs font-bold text-[#67E8F9]">
                          <Quote className="h-3 w-3" />
                          <span>LACE Bootcamp Story</span>
                        </div>
                        {item.home && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/20 border border-purple-400/30 px-2.5 py-0.5 text-[10px] font-bold text-[#C4B5FD] uppercase tracking-wider">
                            <CheckCircle2 className="h-2.5 w-2.5 text-emerald-400" />
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Header: Name and Title */}
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm font-medium text-[#67E8F9] tracking-wide">
                        {item.title}
                      </p>

                      {/* The Testimonial Quote */}
                      <blockquote className="mt-4 text-sm sm:text-base leading-relaxed sm:leading-loose text-white/85 font-normal border-l-2 border-[#06B6D4] pl-4">
                        “{item.quote}”
                      </blockquote>

                      {/* What I Did with What I Learned (Action Taken) */}
                      {item.action && (
                        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                          <div className="flex items-center gap-2 text-xs font-bold text-[#A3E635] uppercase tracking-wider mb-1.5">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            <span>Action Taken Since Bootcamp</span>
                          </div>
                          <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                            {item.action}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </div>
      ) : (
        /* =========================================================================
           EDITORIAL MASONRY GRID VIEW (FOR QUICK READING & ACCESSIBILITY)
           ========================================================================= */
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md hover:border-[#06B6D4]/40 hover:bg-white/[0.05] transition-all group"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/20">
                    <Image
                      src={item.photo}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-white">{item.name}</h4>
                    <p className="text-xs text-[#67E8F9] line-clamp-1">{item.title}</p>
                  </div>
                </div>

                <blockquote className="text-sm leading-relaxed text-white/80 italic">
                  “{item.quote}”
                </blockquote>
              </div>

              {item.action && (
                <div className="mt-6 pt-4 border-t border-white/10">
                  <span className="block text-[11px] font-bold text-[#A3E635] uppercase tracking-wider mb-1">
                    Action Taken
                  </span>
                  <p className="text-xs text-white/60 leading-relaxed">{item.action}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

