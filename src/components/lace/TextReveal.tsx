"use client";

import { motion } from "framer-motion";
import React from "react";

interface TextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
  staggerDelay?: number;
  highlightWord?: string;
  highlightClass?: string;
}

export default function TextReveal({
  text,
  as: Tag = "h1",
  className = "",
  delay = 0.1,
  staggerDelay = 0.045,
  highlightWord,
  highlightClass = "text-[#E0FF4D]",
}: TextRevealProps) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 24,
      rotateX: 30,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 18,
        stiffness: 120,
      },
    },
  };

  return (
    <Tag className={`overflow-visible ${className}`} aria-label={text}>
      <motion.span
        className="inline-flex flex-wrap items-baseline gap-x-[0.28em] gap-y-1"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        aria-hidden="true"
      >
        {words.map((word, i) => {
          const isHighlighted =
            highlightWord &&
            word.toLowerCase().includes(highlightWord.toLowerCase());

          return (
            <motion.span
              key={`${word}-${i}`}
              variants={wordVariants}
              className={`inline-block ${
                isHighlighted ? highlightClass : ""
              }`}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.span>
    </Tag>
  );
}
