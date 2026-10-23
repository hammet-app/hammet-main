"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Users, Camera, Maximize2, X } from "lucide-react";

interface GalleryPhoto {
  src: string;
  title: string;
  tag: string;
}

const ALL_PHOTOS: GalleryPhoto[] = [
  { src: "/lace/gallery/g01.jpg", title: "Keynote: Reimagining Work with AI", tag: "Main Stage" },
  { src: "/lace/gallery/g02.jpg", title: "Interactive Prompt Engineering Lab", tag: "Hands-on" },
  { src: "/lace/gallery/g03.jpg", title: "Executive Workflow Demonstrations", tag: "Systems" },
  { src: "/lace/gallery/g04.jpg", title: "Community Q&A and Problem Solving", tag: "Mentorship" },
  { src: "/lace/gallery/g05.jpg", title: "Networking & Collaborative Hackathon", tag: "Community" },
  { src: "/lace/gallery/g06.jpg", title: "Certified AI Practitioner Cohort", tag: "Graduation" },
  { src: "/lace/gallery/g07.jpg", title: "Live Autonomous Agent Demo", tag: "Keynote" },
  { src: "/lace/gallery/g08.jpg", title: "Industry Mentors In Session", tag: "Masterclass" },
  { src: "/lace/gallery/g09.jpg", title: "Breakout Roundtable Discussion", tag: "Leadership" },
  { src: "/lace/gallery/g10.jpg", title: "One-on-One Career Roadmap Reviews", tag: "Advisory" },
  { src: "/lace/gallery/g11.jpg", title: "Technical Architecture Breakdown", tag: "Engineering" },
  { src: "/lace/gallery/g12.jpg", title: "Live Cohort Project Pitching", tag: "Showcase" },
  { src: "/lace/gallery/g13.jpg", title: "Hands-on AI Automation Lab", tag: "Workshop" },
  { src: "/lace/gallery/g14.jpg", title: "Cross-Industry Panel Discussion", tag: "Insights" },
  { src: "/lace/gallery/g15.jpg", title: "Career Acceleration Strategy", tag: "Career" },
  { src: "/lace/gallery/g16.jpg", title: "Auditorium Interactive Q&A", tag: "Community" },
  { src: "/lace/gallery/g17.jpg", title: "Founder & Executive Roundtable", tag: "Founders" },
  { src: "/lace/gallery/g18.jpg", title: "Real-World Workflow Integration", tag: "Systems" },
  { src: "/lace/gallery/g19.jpg", title: "Taskforce Problem-Solving Session", tag: "Collaboration" },
  { src: "/lace/gallery/g20.jpg", title: "Mastery Certification Briefing", tag: "Exam Prep" },
  { src: "/lace/gallery/g21.jpg", title: "Live Tooling & Chaining Demo", tag: "Live Demo" },
  { src: "/lace/gallery/g22.jpg", title: "Community Partnership Ceremony", tag: "Network" },
  { src: "/lace/gallery/g23.jpg", title: "Group Synergy & Team Building", tag: "Alumni" },
  { src: "/lace/gallery/g24.jpg", title: "The Next Era of AI in Africa", tag: "Vision" },
];

export default function PhotoMosaic() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  return (
    <div className="w-full">
      {/* Perfectly balanced, dense responsive grid with ZERO gaps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {ALL_PHOTOS.map((photo, index) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{
              duration: 0.4,
              delay: (index % 8) * 0.04,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            onClick={() => setSelectedPhoto(photo)}
            className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-lg cursor-pointer hover:border-[#06B6D4]/50 hover:shadow-cyan-950/40 transition-all"
          >
            {/* High-res Image */}
            <Image
              src={photo.src}
              alt={photo.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />

            {/* Gradient Overlay for Readable Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

            {/* Category Pill in Top-Left */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-0.5 backdrop-blur-md border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E0FF4D]" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-white/90">
                {photo.tag}
              </span>
            </div>

            {/* Expand Icon Button in Top-Right */}
            <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-white/70 opacity-0 backdrop-blur-md border border-white/10 transition-opacity duration-300 group-hover:opacity-100">
              <Maximize2 className="h-3 w-3" />
            </div>

            {/* Caption & Location in Bottom */}
            <div className="absolute bottom-3 left-3 right-3">
              <p className="text-xs sm:text-sm font-bold text-white line-clamp-1 group-hover:text-cyan-300 transition-colors">
                {photo.title}
              </p>
              <span className="text-[10px] text-white/60 flex items-center gap-1 mt-0.5">
                <MapPin className="h-2.5 w-2.5 text-[#06B6D4]" />
                <span>Lagos, Nigeria · Hammet Community</span>
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full overflow-hidden rounded-3xl border border-white/20 bg-[#120422] shadow-2xl"
            >
              <div className="relative aspect-[16/10] w-full bg-black">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex items-center justify-between p-5 bg-[#0e031c] border-t border-white/10">
                <div>
                  <span className="font-mono text-xs uppercase font-bold text-[#E0FF4D]">
                    {selectedPhoto.tag}
                  </span>
                  <h4 className="text-base font-bold text-white mt-0.5">
                    {selectedPhoto.title}
                  </h4>
                </div>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white hover:bg-white/20 transition-colors"
                >
                  Close ✕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
