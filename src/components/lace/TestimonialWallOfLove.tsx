"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Heart,
  MessageSquare,
  Play,
  Share2,
  Star,
  X,
} from "lucide-react";
import { Testimonial } from "@/lib/lace-data";

interface TestimonialWallOfLoveProps {
  testimonials: Testimonial[];
}

export default function TestimonialWallOfLove({
  testimonials,
}: TestimonialWallOfLoveProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<Testimonial | null>(null);

  const categories = [
    { id: "all", label: "All Stories (15)" },
    { id: "tech", label: "Software & Engineering" },
    { id: "founder", label: "Founders & Business" },
    { id: "creative", label: "Design & Creative" },
    { id: "leadership", label: "Operations & Leadership" },
  ];

  const filtered = testimonials.filter((t) => {
    if (activeCategory === "all") return true;
    return t.category === activeCategory;
  });

  // Render 5 golden stars
  const renderStars = () => (
    <div className="flex items-center gap-1 text-amber-400">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );

  return (
    <div className="w-full">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCategory(c.id)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeCategory === c.id
                ? "bg-[#06B6D4] text-slate-950 font-bold shadow-lg shadow-cyan-500/25 scale-105"
                : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Wall of Love Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]">
        {filtered.map((item, idx) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
              delay: (idx % 6) * 0.05,
            }}
            whileHover={{
              y: -6,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            onClick={() => setSelectedItem(item)}
            className="break-inside-avoid cursor-pointer group"
          >
            {/* CARD TYPE 1: Media Video Card */}
            {item.cardType === "media" ? (
              <div className="overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#180829] to-[#0f041b] shadow-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-cyan-950/40">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/60">
                  <Image
                    src={item.photo}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                  {/* Play Button Badge */}
                  <div className="absolute bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 border border-white/20 text-[#E0FF4D] backdrop-blur-md shadow-md group-hover:scale-110 transition-transform">
                    <Play className="h-4 w-4 fill-[#E0FF4D] ml-0.5" />
                  </div>

                  {/* Overlay Name, Role & 5 Stars */}
                  <div className="absolute bottom-4 right-4 text-right">
                    <h4 className="text-base font-bold text-white leading-tight drop-shadow-md">
                      {item.name}
                    </h4>
                    <p className="text-xs text-cyan-300 font-medium drop-shadow-md line-clamp-1 max-w-[200px]">
                      {item.title}
                    </p>
                    <div className="mt-1 flex items-center justify-end gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connected Vibrant Banner at Bottom */}
                <div className="bg-[#5B21B6] p-4 text-white transition-colors duration-300 group-hover:bg-[#6D28D9]">
                  <p className="text-xs sm:text-sm font-semibold leading-snug">
                    {item.bannerQuote || `"${item.quote}"`}
                  </p>
                </div>
              </div>
            ) : item.cardType === "social" ? (
              /* CARD TYPE 2: Social / Tweet / LinkedIn Card */
              <div className="overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#180829] to-[#0f041b] p-6 shadow-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-cyan-950/40">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/20">
                      <Image
                        src={item.photo}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-bold text-white">
                          {item.name}
                        </h4>
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#06B6D4]" />
                      </div>
                      <p className="text-xs text-cyan-300">{item.handle || "@lace_alumni"}</p>
                    </div>
                  </div>

                  <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-bold text-white/80">
                    {item.socialType?.toUpperCase() || "LACE"}
                  </span>
                </div>

                <div className="mb-3">{renderStars()}</div>

                <p className="text-sm leading-relaxed text-white/80">
                  {item.highlight && (
                    <mark className="bg-[#E0FF4D]/20 text-[#E0FF4D] px-1 py-0.5 rounded font-semibold mr-1">
                      {item.highlight}
                    </mark>
                  )}
                  {item.quote}
                </p>

                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                  <span>{item.companyBadge || "LACE Verified"}</span>
                  <span className="text-[#06B6D4] font-semibold group-hover:underline">
                    Read outcome →
                  </span>
                </div>
              </div>
            ) : (
              /* CARD TYPE 3: Editorial Quote Card */
              <div className="overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#180829] to-[#0f041b] p-6 shadow-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-cyan-950/40">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/20">
                      <Image
                        src={item.photo}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-xs text-cyan-300 font-medium">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-3">{renderStars()}</div>

                <blockquote className="text-sm leading-relaxed text-white/80 italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                {item.action && (
                  <div className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-3">
                    <span className="font-mono text-[10px] uppercase font-bold text-emerald-400 block mb-0.5">
                      Action Taken Since Bootcamp:
                    </span>
                    <p className="text-xs text-emerald-200/90 leading-snug">
                      {item.action}
                    </p>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full overflow-hidden rounded-[2rem] border border-white/20 bg-[#140624] p-8 text-white shadow-2xl"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-[#E0FF4D]">
                  <Image
                    src={selectedItem.photo}
                    alt={selectedItem.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {selectedItem.name}
                  </h3>
                  <p className="text-xs text-cyan-300">{selectedItem.title}</p>
                  <div className="mt-1 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>

              <blockquote className="text-base leading-relaxed text-white/90 italic mb-6">
                &ldquo;{selectedItem.quote}&rdquo;
              </blockquote>

              {selectedItem.action && (
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/30 p-4 mb-6">
                  <span className="font-mono text-xs uppercase font-bold text-emerald-400 block mb-1">
                    Documented Career Breakthrough:
                  </span>
                  <p className="text-sm text-emerald-100 leading-relaxed">
                    {selectedItem.action}
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-white/50">
                <span>Verified LACE 1.0 Bootcamp Participant</span>
                <span className="text-[#E0FF4D] font-bold">Hammet School of AI</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
