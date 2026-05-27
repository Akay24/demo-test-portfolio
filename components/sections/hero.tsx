"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { heroStagger, fadeInUp } from "@/lib/animations";
import { AnimatedBackground } from "@/components/animated-background";

/* ── Scramble text hook ── */
function useScrambleText(finalText: string, delay = 300) {
  const [display, setDisplay] = useState("");
  const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const hasRun = useRef(false);

  const scramble = useCallback(() => {
    const chars = finalText.split("");
    const queue = chars.map((ch, i) => ({
      final: ch,
      start: Math.floor(Math.random() * 15),
      end: Math.floor(Math.random() * 15) + 15 + i * 3,
    }));
    let frame = 0;
    const maxFrame = Math.max(...queue.map((q) => q.end));

    const interval = setInterval(() => {
      const output = queue
        .map((q) => {
          if (frame >= q.end) return q.final;
          if (frame >= q.start)
            return glyphs[Math.floor(Math.random() * glyphs.length)];
          return "";
        })
        .join("");
      setDisplay(output);
      frame++;
      if (frame > maxFrame) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [finalText, glyphs]);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    const timer = setTimeout(scramble, delay);
    return () => clearTimeout(timer);
  }, [scramble, delay]);

  return { display, rescramble: scramble };
}

/* ── Ticker Marquee ── */
function Ticker() {
  const items = [
    "Software Engineer",
    "·",
    "React & Next.js",
    "·",
    "TypeScript",
    "·",
    "Full-Stack",
    "·",
    "Product Design",
    "·",
    "Open Source",
    "·",
  ];
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] py-4" aria-hidden="true">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className={`mx-4 font-mono text-xs uppercase tracking-widest ${
              item === "·"
                ? "text-primary"
                : "text-muted-foreground/50"
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
  const { display: nameDisplay, rescramble } = useScrambleText(siteConfig.name, 400);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        id="hero"
        className="relative flex min-h-screen flex-col justify-between overflow-hidden"
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
            <span className="text-primary/80">00</span>
            <span className="h-px w-8 bg-muted-foreground/20" />
            <span>Portfolio · {new Date().getFullYear()}</span>
          </div>
        </motion.div>

        {/* Main hero content */}
        <motion.div
          className="relative z-10 mx-auto w-full max-w-6xl px-6"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          {/* Name — scramble effect */}
          <motion.h1
            variants={fadeInUp}
            className="mb-6 cursor-default font-mono text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl"
            onMouseEnter={rescramble}
            aria-label={siteConfig.name}
          >
            {nameDisplay.split("").map((char, i) => (
              <span
                key={i}
                className={
                  char === nameDisplay[i] && i < siteConfig.name.length && char === siteConfig.name[i]
                    ? "inline-block transition-colors duration-200"
                    : "inline-block text-primary/70"
                }
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </motion.h1>

          {/* Role + Tagline */}
          <motion.div variants={fadeInUp} className="mb-6 max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              <span className="text-foreground">{siteConfig.role}</span>
              {" — "}
              {siteConfig.tagline}
            </p>
          </motion.div>

          {/* Status badge */}
          <motion.div variants={fadeInUp} className="mb-12 flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground/60">
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
              className="group inline-flex h-11 items-center gap-2 rounded-lg bg-foreground px-6 text-sm font-medium text-background transition-all hover:bg-foreground/90"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Work
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </motion.button>

            <motion.button
              onClick={() => handleScrollTo("#contact")}
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/10 px-6 text-sm font-medium text-foreground transition-all hover:border-white/20 hover:bg-white/5"
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
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="flex items-center justify-between text-xs text-muted-foreground/40">
            <span className="font-mono">Scroll ↓</span>
            <motion.button
              onClick={() => handleScrollTo("#about")}
              className="group flex items-center gap-2 transition-colors hover:text-muted-foreground"
              aria-label="Scroll to about section"
            >
              <span className="h-px w-8 bg-muted-foreground/20 transition-all group-hover:w-12 group-hover:bg-muted-foreground/40" />
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Ticker marquee */}
      <Ticker />
    </>
  );
}
