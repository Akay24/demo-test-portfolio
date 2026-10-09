"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { heroStagger, fadeInUp } from "@/lib/animations";
import { AnimatedBackground } from "@/components/animated-background";
import { 
  ArrowRight, 
  ExternalLink, 
  Terminal, 
  Radio, 
  Orbit, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Code2,
  Sparkles
} from "lucide-react";
import { GithubIcon } from "@/components/icons";

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
      className={`interactive-hover inline-block cursor-default select-none transition-colors duration-200 ${
        isHovered ? "text-primary" : "text-foreground"
      }`}
      onMouseEnter={handleMouseEnter}
      animate={{
        y: isHovered ? -4 : 0,
      }}
      transition={{ type: "spring", stiffness: 450, damping: 22 }}
    >
      {displayChar}
    </motion.span>
  );
}

/* ── Verified Engineering System Specs for Right Column ── */
interface EngineeringSystem {
  id: string;
  number: string;
  title: string;
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  liveUrl: string;
  repoUrl: string;
  description: string;
  flow: { step: string; label: string }[];
  metrics: { label: string; value: string }[];
  techStack: string[];
}

const FEATURED_SYSTEMS: EngineeringSystem[] = [
  {
    id: "07-cyberpunk",
    number: "07",
    title: "GridLock CTF // Terminal Engine",
    category: "CLI Security & Virtual VFS",
    icon: Terminal,
    liveUrl: "https://07-cyberpunk.vercel.app",
    repoUrl: "https://github.com/Akay24/07-cyberpunk",
    description: "Interactive UNIX command line parser with virtual filesystem, Caesar/XOR crypto decoders, and Web Audio CRT phosphor feedback.",
    flow: [
      { step: "01", label: "CLI Input Parser" },
      { step: "02", label: "AST Command Router" },
      { step: "03", label: "Crypto Decoder" },
      { step: "04", label: "Web Audio DSP" },
    ],
    metrics: [
      { label: "Status", value: "Level 4 Candidate" },
      { label: "Engine", value: "Virtual File Tree" },
      { label: "Audio", value: "Real Web Audio DSP" },
      { label: "Build", value: "100% Type-Safe" },
    ],
    techStack: ["React 19", "TypeScript", "Web Audio API", "Vite"],
  },
  {
    id: "18-aurora",
    number: "18",
    title: "Solarium FM // Space Weather Synth",
    category: "Astrophysics & Audio DSP",
    icon: Radio,
    liveUrl: "https://18-aurora.vercel.app",
    repoUrl: "https://github.com/Akay24/18-aurora",
    description: "Real-time solar wind and Kp-index telemetry sonification feeding a 4-voice ambient drone synthesizer and sine-harmonic canvas ribbons.",
    flow: [
      { step: "01", label: "NOAA Telemetry Feed" },
      { step: "02", label: "Space Weather Jitter" },
      { step: "03", label: "4-Voice Synth Node" },
      { step: "04", label: "Sine Wave Canvas" },
    ],
    metrics: [
      { label: "Status", value: "Level 4 Candidate" },
      { label: "DSP", value: "4 Oscillators + Filters" },
      { label: "Visuals", value: "60 FPS Harmonics" },
      { label: "Telemetry", value: "Solar Wind & Kp" },
    ],
    techStack: ["Web Audio API", "HTML5 Canvas", "React 19", "TypeScript"],
  },
  {
    id: "03-futuristic",
    number: "03",
    title: "OrbitalOps // Flight Dynamics Console",
    category: "Avionics HUD & Orbital Mechanics",
    icon: Orbit,
    liveUrl: "https://03-futuristic.vercel.app",
    repoUrl: "https://github.com/Akay24/03-futuristic",
    description: "Suborbital avionics flight dynamics console rendering real-time Keplerian orbital trajectory paths and HUD telemetry instrumentation.",
    flow: [
      { step: "01", label: "Keplerian State Math" },
      { step: "02", label: "Trajectory Solver" },
      { step: "03", label: "Orbit Canvas HUD" },
      { step: "04", label: "Delta-V Readout" },
    ],
    metrics: [
      { label: "Status", value: "Level 3 MVP" },
      { label: "Physics", value: "Keplerian Mechanics" },
      { label: "Render", value: "Canvas 2D HUD" },
      { label: "Telemetry", value: "Suborbital Velocity" },
    ],
    techStack: ["React 19", "Canvas 2D", "Mathematical Modeling", "TypeScript"],
  },
];

/* ── Interactive Engineering Console Component ── */
function EngineeringConsole() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeSystem = FEATURED_SYSTEMS[selectedIdx];
  const IconComponent = activeSystem.icon;

  return (
    <div className="relative rounded-2xl border border-border bg-card/90 backdrop-blur-xl p-5 sm:p-6 shadow-2xl transition-all duration-300 hover:border-primary/40 hover:shadow-primary/5">
      {/* Decorative corner glows */}
      <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-primary/5 blur-2xl pointer-events-none" />

      {/* Console Top Bar */}
      <div className="relative mb-5 flex items-center justify-between border-b border-border/60 pb-3.5">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="ml-2 font-mono text-xs text-muted-foreground/70">
            spec://engineering-workspace.v1
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="hidden sm:inline">21 Systems Online</span>
        </div>
      </div>

      {/* System Selector Tabs */}
      <div className="mb-4 flex items-center gap-1.5 overflow-x-auto pb-1" role="tablist">
        {FEATURED_SYSTEMS.map((sys, idx) => {
          const isSelected = idx === selectedIdx;
          const TabIcon = sys.icon;
          return (
            <button
              key={sys.id}
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelectedIdx(idx)}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 font-mono text-xs transition-all ${
                isSelected
                  ? "bg-primary/15 text-primary border border-primary/30 font-semibold shadow-xs"
                  : "text-muted-foreground hover:bg-muted/80 hover:text-foreground border border-transparent"
              }`}
            >
              <TabIcon size={12} className={isSelected ? "text-primary" : "text-muted-foreground"} />
              <span>#{sys.number}</span>
              <span className="hidden md:inline">{sys.id.replace(/^\d+-/, "")}</span>
            </button>
          );
        })}
      </div>

      {/* Active System Details Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSystem.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          {/* Header & Badges */}
          <div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-primary font-medium">
                {activeSystem.category}
              </span>
              <span className="rounded border border-primary/20 bg-primary/10 px-2 py-0.5 font-mono text-[11px] text-primary">
                Verified System
              </span>
            </div>
            <h3 className="mt-1 font-serif text-xl sm:text-2xl font-normal text-foreground">
              {activeSystem.title}
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {activeSystem.description}
            </p>
          </div>

          {/* Architecture Data Flow */}
          <div className="rounded-xl border border-border/80 bg-background/60 p-3">
            <div className="mb-2 flex items-center justify-between font-mono text-[11px] text-muted-foreground/80">
              <span className="uppercase tracking-wider">Architecture Pipeline</span>
              <span className="text-primary font-medium">Verified Flow</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {activeSystem.flow.map((node, i) => (
                <div
                  key={node.step}
                  className="relative rounded-lg border border-border/60 bg-muted/40 p-2 text-center"
                >
                  <span className="block font-mono text-[10px] text-primary/80 font-bold">
                    {node.step}
                  </span>
                  <span className="block text-[11px] font-medium text-foreground truncate">
                    {node.label}
                  </span>
                  {i < activeSystem.flow.length - 1 && (
                    <span
                      className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground/40 z-10"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* System Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {activeSystem.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-lg border border-border/50 bg-muted/20 p-2 text-center"
              >
                <div className="font-mono text-[10px] uppercase text-muted-foreground/70">
                  {m.label}
                </div>
                <div className="mt-0.5 font-mono text-xs font-semibold text-foreground truncate">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {activeSystem.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded border border-border bg-muted/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-between border-t border-border/60 pt-3">
            <a
              href={activeSystem.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon size={13} />
              <span>GitHub Repo</span>
            </a>

            <a
              href={activeSystem.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 border border-primary/25 px-3 py-1 font-mono text-xs font-medium text-primary transition-all hover:bg-primary/20 hover:border-primary/40"
            >
              <span>Launch Live App</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ── Ticker Marquee ── */
function Ticker() {
  const items = [
    "Backend Software Engineer",
    "·",
    "Distributed Task Queues",
    "·",
    "Python & FastAPI",
    "·",
    "Node.js & Express",
    "·",
    "Applied AI & LangGraph",
    "·",
    "Playwright Automation",
    "·",
    "PostgreSQL & Redis",
    "·",
    "Cloud Architecture & AWS",
    "·",
    "Docker & CI/CD Pipelines",
    "·",
  ];
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-border/40 py-3.5 bg-card/30" aria-hidden="true">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className={`mx-3 font-mono text-xs uppercase tracking-widest ${
              item === "·"
                ? "text-primary"
                : "text-muted-foreground/70"
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

/* ── Main Hero Section ── */
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

        {/* Hero Eyebrow Bar */}
        <motion.div
          className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 lg:pt-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground/70 border-b border-border/40 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="text-primary font-bold">00</span>
              <span className="h-px w-6 bg-border" />
              <span>Portfolio · {new Date().getFullYear()}</span>
              <span className="hidden sm:inline h-px w-3 bg-border" />
              <span className="hidden sm:inline text-foreground/80 font-medium">Backend & Distributed Systems</span>
            </div>

            <div className="hidden md:flex items-center gap-2 text-[11px] text-muted-foreground/60">
              <span>Bhubaneswar, India</span>
              <span>·</span>
              <span className="text-emerald-400">● Open to Senior IC Roles</span>
            </div>
          </div>
        </motion.div>

        {/* Balanced Two-Column Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-6 lg:py-8 my-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center"
            variants={heroStagger}
            initial="hidden"
            animate="visible"
          >
            {/* Left Column: Editorial Identity & Value Proposition (lg:col-span-7) */}
            <motion.div variants={fadeInUp} className="lg:col-span-7 flex flex-col justify-center">
              {/* Role Subtitle Badge */}
              <div className="mb-2.5 inline-flex items-center gap-2">
                <span className="rounded-md border border-primary/25 bg-primary/10 px-2.5 py-0.5 font-mono text-xs uppercase tracking-wider text-primary font-semibold">
                  Backend Software Engineer
                </span>
                <span className="font-mono text-xs text-muted-foreground/70 hidden sm:inline">
                  Applied AI · Automation
                </span>
              </div>

              {/* Name — Proportional Editorial Serif Typography */}
              <h1
                className="mb-3.5 cursor-default font-serif text-[clamp(2.75rem,5.2vw,5rem)] font-normal leading-[0.92] tracking-[-0.03em] text-foreground"
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
              </h1>

              {/* Core Professional Value Description */}
              <p className="mb-5 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">
                Architecting resilient backend systems, distributed task queues, and applied AI workflows. Turning complex enterprise operations into high-throughput, observable cloud services with Python, Node.js, and modern cloud infrastructure.
              </p>

              {/* Availability & Stack Meta */}
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span>Available for Full-Time Opportunities</span>
                </div>

                <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-muted-foreground/70">
                  <span>⚡ Python · Node · Redis · AWS · Docker</span>
                </div>
              </div>

              {/* Primary Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3">
                <motion.button
                  onClick={() => handleScrollTo("#projects")}
                  className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-foreground px-6 text-xs sm:text-sm font-semibold text-background transition-all hover:bg-foreground/90 shadow-sm w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Explore Work</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </motion.button>

                <motion.button
                  onClick={() => handleScrollTo("#designs")}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card/70 px-5 text-xs sm:text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-card w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Layers size={14} className="text-primary" />
                  <span>20 Design Systems</span>
                </motion.button>

                <motion.button
                  onClick={() => handleScrollTo("#contact")}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border/60 px-4 text-xs sm:text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:border-border w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Say Hello</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column: Interactive Engineering Console & Architecture Panel (lg:col-span-5) */}
            <motion.div variants={fadeInUp} className="lg:col-span-5 flex flex-col justify-center">
              <EngineeringConsole />
            </motion.div>
          </motion.div>
        </div>

        {/* Transition Strip: Connecting Hero to Engineering Sections */}
        <motion.div
          className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground/60 border-t border-border/30 pt-3">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-[11px]">
              <span className="flex items-center gap-1.5 text-foreground/80">
                <span className="text-primary font-bold">01</span>
                <span>Distributed Queues & Workers</span>
              </span>
              <span className="flex items-center gap-1.5 text-foreground/80">
                <span className="text-primary font-bold">02</span>
                <span>20 Independent Standalone Apps</span>
              </span>
              <span className="hidden md:flex items-center gap-1.5 text-foreground/80">
                <span className="text-primary font-bold">03</span>
                <span>Applied AI & Test Automation</span>
              </span>
            </div>

            <motion.button
              onClick={() => handleScrollTo("#about")}
              className="group flex items-center gap-2 font-mono text-xs transition-colors hover:text-foreground"
              aria-label="Scroll to about section"
            >
              <span>Scroll to explore</span>
              <span className="h-px w-6 bg-muted-foreground/20 transition-all group-hover:w-10 group-hover:bg-primary" />
              <span>↓</span>
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Ticker marquee */}
      <Ticker />
    </div>
  );
}
