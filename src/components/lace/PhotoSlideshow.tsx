"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MapPin,
  Sparkles,
  Camera,
  Play,
  Pause,
  X,
} from "lucide-react";

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

export default function PhotoSlideshow() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Smooth fast auto-slide timer (every 2.8s)
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      handleNext();
    }, 2800);

    return () => clearInterval(timer);
  }, [isPlaying, currentIndex]);

  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth + 16
      : 360;

    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const next = (currentIndex + 1) % ALL_PHOTOS.length;
    scrollToSlide(next);
  };

  const handlePrev = () => {
    const prev = (currentIndex - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length;
    scrollToSlide(prev);
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Slideshow Top Controls Bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="font-tech text-xs font-bold text-[#E0FF4D] bg-[#E0FF4D]/10 px-3 py-1 rounded-full border border-[#E0FF4D]/20">
            {String(currentIndex + 1).padStart(2, "0")} / {String(ALL_PHOTOS.length).padStart(2, "0")}
          </span>
          <span className="text-xs text-white/50 hidden sm:inline">
            Click any image to view in high resolution
          </span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-all active:scale-95"
          >
            {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 fill-white" />}
          </button>

          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-[#06B6D4] hover:text-black hover:border-[#06B6D4] transition-all active:scale-95"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-[#06B6D4] hover:text-black hover:border-[#06B6D4] transition-all active:scale-95"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Sliding Track (Fast, smooth, scrollable & draggable) */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {ALL_PHOTOS.map((photo, index) => {
          const isSelected = currentIndex === index;

          return (
            <motion.div
              key={photo.src}
              onClick={() => setSelectedPhoto(photo)}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative shrink-0 snap-start w-[300px] sm:w-[380px] lg:w-[420px] aspect-[16/10] overflow-hidden rounded-3xl border cursor-pointer transition-all duration-300 group shadow-xl ${
                isSelected
                  ? "border-[#06B6D4] shadow-cyan-950/40"
                  : "border-white/15 bg-white/[0.03] hover:border-white/30"
              }`}
            >
              {/* Photo Image */}
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(max-width: 640px) 300px, 420px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Gradient Vignette for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Category Pill in Top-Left */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 backdrop-blur-md border border-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E0FF4D]" />
                <span className="text-[10px] font-tech uppercase tracking-wider text-white/90">
                  {photo.tag}
                </span>
              </div>

              {/* Expand Icon Button in Top-Right */}
              <div className="absolute top-3.5 right-3.5 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white/80 opacity-0 backdrop-blur-md border border-white/10 transition-opacity duration-300 group-hover:opacity-100">
                <Maximize2 className="h-3.5 w-3.5" />
              </div>

              {/* Caption & Location at Bottom */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5">
                <p className="text-sm sm:text-base font-bold text-white line-clamp-1 group-hover:text-cyan-300 transition-colors">
                  {photo.title}
                </p>
                <div className="flex items-center justify-between text-[11px] text-white/60 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-[#06B6D4]" />
                    <span>Lagos, Nigeria</span>
                  </span>
                  <span className="font-tech text-cyan-300">
                    Slide {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Progress Dots Track */}
      <div className="mt-4 flex items-center justify-center gap-1.5">
        {ALL_PHOTOS.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === i
                ? "w-8 bg-[#06B6D4]"
                : "w-2 bg-white/20 hover:bg-white/40"
            }`}
          />
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full overflow-hidden rounded-3xl border border-white/20 bg-[#120422] shadow-2xl"
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
                  <span className="font-tech text-xs uppercase font-bold text-[#E0FF4D]">
                    {selectedPhoto.tag}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                    {selectedPhoto.title}
                  </h4>
                  <span className="text-xs text-white/50 flex items-center gap-1 mt-0.5">
                    <MapPin className="h-3 w-3 text-[#06B6D4]" />
                    <span>Lagos, Nigeria · Hammet Community Event</span>
                  </span>
                </div>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="rounded-full bg-white/10 px-5 py-2.5 text-xs font-bold text-white hover:bg-white/20 transition-colors"
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

