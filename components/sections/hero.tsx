"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { heroStagger, fadeInUp } from "@/lib/animations";
import { AnimatedBackground } from "@/components/animated-background";

/* ── Interactive single character with targeted hover transition ── */
function InteractiveLetter({ char }: { char: string }) {
  const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  const [displayChar, setDisplayChar] = useState(char);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleMouseEnter = () => {
    if (char === " ") return;
    setIsHovered(true);
    if (timerRef.current) clearInterval(timerRef.current);
    let count = 0;
    timerRef.current = setInterval(() => {
      count++;
      if (count > 3) {
        if (timerRef.current) clearInterval(timerRef.current);
        setDisplayChar(char);
        setIsHovered(false);
      } else {
        setDisplayChar(glyphs[Math.floor(Math.random() * glyphs.length)]);
      }
    }, 45);
  };

  if (char === " ") {
    return <span className="inline-block w-3">&nbsp;</span>;
  }

  return (
    <motion.span
      className="interactive-hover inline-block cursor-default select-none transition-colors duration-150"
      onMouseEnter={handleMouseEnter}
      animate={{
        y: isHovered ? -5 : 0,
        color: isHovered ? "var(--primary)" : "inherit",
      }}
      transition={{ type: "spring", stiffness: 450, damping: 22 }}
    >
      {displayChar}
    </motion.span>
  );
}

/* ── Ticker Marquee ── */
function Ticker() {
  const items = [
    "Software Engineer",
    "·",
    "Backend Architecture",
    "·",
    "Python & FastAPI",
    "·",
    "Workflow Automation",
    "·",
    "Cloud & AWS",
    "·",
    "CI/CD & DevOps",
    "·",
  ];
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-border/40 py-4" aria-hidden="true">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className={`mx-4 font-mono text-xs uppercase tracking-widest ${
              item === "·"
                ? "text-primary"
                : "text-muted-foreground/60"
            }`}
          >
            {item === "·" ? (
              <span className="inline-block h-1 w-1 rounded-full bg-primary/60" />
            ) : (
              item
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Hero Section ── */
export function Hero() {
  const nameWords = siteConfig.name.split(" ");

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex min-h-svh flex-col justify-between">
      <section
        id="hero"
        className="relative flex flex-1 flex-col justify-between overflow-hidden"
        aria-label="Introduction"
      >
        <AnimatedBackground />

        {/* Hero eyebrow */}
        <motion.div
          className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground/60">
            <span className="text-primary/80 font-bold">00</span>
            <span className="h-px w-8 bg-muted-foreground/20" />
            <span>Portfolio · {new Date().getFullYear()}</span>
          </div>
        </motion.div>

        {/* Main hero content */}
        <motion.div
          className="relative z-10 mx-auto w-full max-w-6xl px-6 py-6"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          {/* Name — precise per-letter hover transition */}
          <motion.h1
            variants={fadeInUp}
            className="mb-6 cursor-default font-serif text-[clamp(3.75rem,10.5vw,9.5rem)] font-normal leading-[0.88] tracking-[-0.03em] text-foreground"
            aria-label={siteConfig.name}
          >
            {nameWords.map((word, wordIndex) => (
              <span key={`${word}-${wordIndex}`} className="block whitespace-nowrap">
                {word.split("").map((char, charIndex) => (
                  <InteractiveLetter
                    key={`${wordIndex}-${charIndex}`}
                    char={char}
                  />
                ))}
              </span>
            ))}
          </motion.h1>

          {/* Role + Tagline */}
          <motion.div variants={fadeInUp} className="mb-6 max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              <span className="text-foreground font-medium">{siteConfig.role}</span>
              {" — "}
              {siteConfig.tagline}
            </p>
          </motion.div>

          {/* Status badge */}
          <motion.div variants={fadeInUp} className="mb-10 flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground/70 font-medium">
              Available for opportunities
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={() => handleScrollTo("#projects")}
              className="group inline-flex h-12 items-center gap-2 rounded-xl bg-foreground px-7 text-sm font-semibold text-background transition-all hover:bg-foreground/90 shadow-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Work
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </motion.button>

            <motion.button
              onClick={() => handleScrollTo("#contact")}
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-border px-7 text-sm font-semibold text-foreground transition-all hover:border-foreground/30 hover:bg-muted/80"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Say Hello
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Bottom area */}
        <motion.div
          className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="flex items-center justify-between text-xs text-muted-foreground/50">
            <span className="font-mono">Scroll ↓</span>
            <motion.button
              onClick={() => handleScrollTo("#about")}
              className="group flex items-center gap-2 transition-colors hover:text-foreground"
              aria-label="Scroll to about section"
            >
              <span className="h-px w-8 bg-muted-foreground/20 transition-all group-hover:w-12 group-hover:bg-primary" />
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Ticker marquee */}
      <Ticker />
    </div>
  );
}
