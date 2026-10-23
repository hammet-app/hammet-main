"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LACE_CONFIG } from "@/lib/lace-data"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number
    hours: number
    minutes: number
    seconds: number
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const target = new Date(LACE_CONFIG.dates.eventStart).getTime()

    const calculate = () => {
      const now = new Date().getTime()
      const diff = Math.max(0, target - now)

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    calculate()
    const timer = setInterval(calculate, 1000)
    return () => clearInterval(timer)
  }, [])

  const pad = (n: number) => n.toString().padStart(2, "0")

  const units = [
    { label: "DAYS", value: pad(timeLeft.days), isAccent: false },
    { label: "HOURS", value: pad(timeLeft.hours), isAccent: false },
    { label: "MINUTES", value: pad(timeLeft.minutes), isAccent: false },
    { label: "SECONDS", value: pad(timeLeft.seconds), isAccent: true },
  ]

  return (
    <div className="w-full text-center">
      {/* "COMING SOON ...." Eyebrow Header from Image 2 */}
      <div className="mb-4 sm:mb-6 flex items-center justify-center gap-2">
        <span className="font-tech text-xs sm:text-sm font-black tracking-[0.28em] uppercase text-[#A3E635] drop-shadow-[0_0_12px_rgba(163,230,53,0.45)]">
          COMING SOON ....
        </span>
      </div>

      {/* 4 Split-Flap Flip Cards Grid */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3.5 max-w-lg mx-auto">
        {units.map((unit) => (
          <div key={unit.label} className="flex flex-col items-center">
            {/* Split Card Tile */}
            <div className="relative w-full aspect-[4/5] sm:aspect-square flex items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl border border-white/15 bg-gradient-to-b from-[#2a2a2f] via-[#1a1a1d] to-[#111113] shadow-[0_12px_28px_rgba(0,0,0,0.85)]">
              {/* Top Half Gloss Highlight */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/12 to-transparent rounded-t-xl sm:rounded-t-2xl" />

              {/* Horizontal Split Line & Notches across the middle */}
              <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-black/90 shadow-[0_1px_0_rgba(255,255,255,0.08)] z-20 flex items-center justify-between">
                {/* Left Cutout Notch */}
                <div className="h-2 w-1 -ml-0.5 rounded-r-full bg-[#0b0314]" />
                {/* Right Cutout Notch */}
                <div className="h-2 w-1 -mr-0.5 rounded-l-full bg-[#0b0314]" />
              </div>

              {/* Animated Digit */}
              <div className="relative z-10 overflow-hidden h-full w-full flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={unit.value}
                    initial={{ y: -8, opacity: 0.6, rotateX: -20 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: 8, opacity: 0.4, rotateX: 20 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className={`block font-tech font-black tracking-tight text-2xl sm:text-4xl lg:text-5xl select-none ${
                      unit.isAccent
                        ? "text-[#A3E635] drop-shadow-[0_2px_14px_rgba(163,230,53,0.5)]"
                        : "text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                    }`}
                  >
                    {unit.value}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Bottom Subtle Shadow */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Label below tile */}
            <span
              className={`mt-2 block font-tech text-[9px] sm:text-[11px] font-bold tracking-[0.2em] uppercase ${
                unit.isAccent ? "text-[#A3E635]" : "text-white/50"
              }`}
            >
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
