"use client"

import { useState, useEffect } from "react"
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

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-purple-950/40">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#06B6D4] animate-pulse"></span>
          <span className="text-xs uppercase font-bold tracking-widest text-[#67E8F9]">
            Opening Ceremony Countdown
          </span>
        </div>
        <span className="text-xs text-white/50 font-mono">31 Oct 2026 · Lagos</span>
      </div>

      <div className="grid grid-cols-4 gap-3 sm:gap-4 text-center">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-4">
          <span className="block font-mono text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {timeLeft.days}
          </span>
          <span className="mt-1 block text-[11px] uppercase tracking-wider font-semibold text-white/50">
            Days
          </span>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-4">
          <span className="block font-mono text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {pad(timeLeft.hours)}
          </span>
          <span className="mt-1 block text-[11px] uppercase tracking-wider font-semibold text-white/50">
            Hours
          </span>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-4">
          <span className="block font-mono text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {pad(timeLeft.minutes)}
          </span>
          <span className="mt-1 block text-[11px] uppercase tracking-wider font-semibold text-white/50">
            Mins
          </span>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-4">
          <span className="block font-mono text-3xl sm:text-5xl font-extrabold text-[#67E8F9] tracking-tight">
            {pad(timeLeft.seconds)}
          </span>
          <span className="mt-1 block text-[11px] uppercase tracking-wider font-semibold text-white/50">
            Secs
          </span>
        </div>
      </div>
    </div>
  )
}

