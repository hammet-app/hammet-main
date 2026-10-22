"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  q: string
  a: string
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx
        return (
          <div
            key={item.q}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "border-[#06B6D4]/40 bg-white/[0.05] shadow-lg shadow-purple-950/30"
                : "border-white/10 bg-white/[0.02] hover:border-white/20"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between p-6 text-left"
            >
              <span className="font-serif text-lg font-semibold text-white pr-4">
                {item.q}
              </span>
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                  isOpen
                    ? "rotate-180 bg-[#06B6D4] text-slate-950"
                    : "bg-white/10 text-white/70"
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-0 text-sm leading-relaxed text-white/70 border-t border-white/5 mt-2">
                {item.a}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

