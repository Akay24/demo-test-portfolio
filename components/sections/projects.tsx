"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  X,
  LayoutGrid,
  List,
  Terminal,
  Activity,
  ArrowRight,
  Filter,
  CheckCircle2,
  Workflow,
  Sparkles,
  ShieldCheck,
  Building2,
  Lock,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects, type Project, type ProjectPreviewLine } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionWrapper } from "@/components/section-wrapper";

const categories = [
  "All Work",
  "Backend & Applied AI",
  "Interactive & Creative",
  "Enterprise Systems",
] as const;

type CategoryType = (typeof categories)[number];
type ViewMode = "bento" | "matrix";

/* ── Embedded Telemetry / Terminal Snippet Box ── */
function SnippetPreviewBox({ snippet }: { snippet: Project["previewSnippet"] }) {
  const getBadgeColor = (type: Project["previewSnippet"]["type"]) => {
    switch (type) {
      case "terminal":
        return "text-emerald-400 border-emerald-500/30 bg-emerald-500/10";
      case "diff":
        return "text-indigo-400 border-indigo-500/30 bg-indigo-500/10";
      case "cache":
        return "text-amber-400 border-amber-500/30 bg-amber-500/10";
      case "waterfall":
        return "text-sky-400 border-sky-500/30 bg-sky-500/10";
      case "waveform":
        return "text-cyan-400 border-cyan-500/30 bg-cyan-500/10";
      case "metrics":
        return "text-violet-400 border-violet-500/30 bg-violet-500/10";
      default:
        return "text-muted-foreground border-border bg-muted/20";
    }
  };

  const getLineClass = (tone?: ProjectPreviewLine["tone"]) => {
    switch (tone) {
      case "success":
        return "text-emerald-400 font-medium";
      case "error":
        return "text-rose-400 font-medium";
      case "warn":
        return "text-amber-300";
      case "info":
        return "text-sky-300";
      case "accent":
        return "text-violet-300 font-medium";
      default:
        return "text-slate-300";
    }
  };

  return (
    <div className="relative overflow-hidden rounded-xl border border-border/80 bg-[#070b12] p-3.5 font-mono text-[11px] sm:text-xs leading-relaxed shadow-inner">
      <div className="mb-2 flex items-center justify-between border-b border-white/5 pb-2 text-[10px] text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-rose-500/80" />
          <span className="h-2 w-2 rounded-full bg-amber-500/80" />
          <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] text-slate-300 font-medium truncate max-w-[190px] sm:max-w-xs">
            {snippet.title}
          </span>
        </div>
        <span
          className={`rounded border px-1.5 py-0.5 text-[9px] uppercase tracking-wider font-semibold ${getBadgeColor(
            snippet.type
          )}`}
        >
          {snippet.type}
        </span>
      </div>
      <div className="space-y-1 overflow-x-auto scrollbar-none py-0.5">
        {snippet.lines.map((line, idx) => (
          <div key={idx} className={`whitespace-pre font-mono ${getLineClass(line.tone)}`}>
            {line.text}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Project Detail Modal ── */
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-70 flex items-center justify-center p-3 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/85 backdrop-blur-md" />
      <motion.div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-2xl"
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
          aria-label="Close system details"
        >
          <X size={18} />
        </button>

        {/* System Header */}
        <div className="mb-6 flex items-start gap-4 pr-10">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border/80 bg-background/90 text-3xl shadow-sm">
            {project.icon}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="rounded border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary font-semibold">
                {project.category}
              </span>
              <span className="rounded border border-border bg-muted/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {project.badge}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Verified Metrics Grid */}
        <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-border/70 bg-background/60 p-3"
            >
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {metric.label}
              </div>
              <div className="mt-1 font-mono text-sm font-semibold text-foreground">
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Topology Flow */}
        <div className="mb-6 rounded-xl border border-border/70 bg-background/40 p-4">
          <div className="mb-2.5 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground/80 font-semibold">
            <Workflow size={13} className="text-primary" />
            <span>Architecture & Data Flow Topology</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs text-muted-foreground">
            {project.architectureFlow.map((step, idx) => (
              <span key={step} className="inline-flex items-center gap-1.5">
                <span className="rounded-md border border-border/80 bg-card px-2.5 py-1 text-foreground font-medium shadow-xs">
                  {step}
                </span>
                {idx < project.architectureFlow.length - 1 && (
                  <span className="text-primary font-bold">→</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Architectural Narrative */}
        <div className="mb-6">
          <h4 className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground/80 font-semibold">
            System Architecture & Reliability Engineering
          </h4>
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
            {project.longDescription}
          </p>
        </div>

        {/* Live Snippet / Telemetry Preview */}
        <div className="mb-6">
          <h4 className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground/80 font-semibold">
            Live Telemetry & Execution Trace
          </h4>
          <SnippetPreviewBox snippet={project.previewSnippet} />
        </div>

        {/* Key Highlights */}
        <div className="mb-6 border-t border-border pt-6">
          <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground/80 font-semibold">
            Key Architectural Guarantees
          </h4>
          <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground"
              >
                <CheckCircle2
                  size={15}
                  className="mt-0.5 shrink-0 text-emerald-400"
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-8 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border bg-muted/60 px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-muted-foreground font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions Sticky Footer */}
        <div className="sticky bottom-0 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 mt-6 border-t border-border bg-card/95 backdrop-blur-md p-4 sm:p-6 flex flex-col sm:flex-row gap-3 rounded-b-2xl shadow-lg">
          {project.isProprietary ? (
            <>
              <a
                href="#experience"
                onClick={() => {
                  onClose();
                  const el = document.getElementById("experience");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex h-11 sm:h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-6 font-mono text-xs uppercase tracking-wider text-primary-foreground font-semibold shadow-md transition-all hover:opacity-95 active:scale-98"
              >
                <Building2 size={14} />
                <span>View Spotline, Inc. Work Experience</span>
              </a>
              <span className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-5 font-mono text-xs uppercase tracking-wider text-amber-400 font-medium">
                <Lock size={13} />
                <span>Proprietary / Closed Source</span>
              </span>
            </>
          ) : (
            <>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 sm:h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-6 font-mono text-xs uppercase tracking-wider text-primary-foreground font-semibold shadow-md transition-all hover:opacity-95 active:scale-98"
              >
                <span>Launch Live Production System</span>
                <ExternalLink size={14} />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 font-mono text-xs uppercase tracking-wider text-foreground font-medium transition-all hover:bg-muted active:scale-98"
              >
                <GithubIcon size={14} />
                <span>Source Code</span>
              </a>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Bento Showcase Card ── */
function BentoCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: () => void;
}) {
  return (
    <motion.div
      layout
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card/50 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 cursor-pointer text-left"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
    >
      {/* Background radial gradient accent */}
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${project.gradient} opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40`}
      />

      {/* Top Header */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-background/90 text-2xl shadow-xs transition-transform duration-300 group-hover:scale-105">
              {project.icon}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-1.5 mb-1">
                <span className="rounded border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary font-semibold">
                  {project.category}
                </span>
                <span className="rounded border border-border bg-background/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/80">
                  {project.badge}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Quick External Actions */}
          <div
            className="flex shrink-0 items-center gap-1.5"
            onClick={(e) => e.stopPropagation()}
          >
            {project.isProprietary ? (
              <span className="inline-flex items-center gap-1 rounded-lg border border-amber-500/30 bg-amber-500/10 px-2.5 py-1.5 font-mono text-[11px] font-semibold text-amber-400 shadow-xs">
                <Lock size={11} />
                <span>Proprietary</span>
              </span>
            ) : (
              <>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-primary/40 bg-primary/10 px-2.5 py-1.5 font-mono text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground shadow-xs active:scale-95"
                  title="Launch Live Demo"
                >
                  <span>Demo</span>
                  <ExternalLink size={12} />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-border bg-background/80 px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
                  title="View Source on GitHub"
                >
                  <GithubIcon size={12} />
                </a>
              </>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {project.description}
        </p>

        {/* Embedded Telemetry / Terminal Preview Snippet */}
        <div className="mb-5">
          <SnippetPreviewBox snippet={project.previewSnippet} />
        </div>

        {/* Verified Metric Chips */}
        <div className="mb-5 grid grid-cols-3 gap-2">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-lg border border-border/60 bg-background/50 px-2.5 py-1.5 text-center sm:text-left"
            >
              <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground/80 truncate">
                {m.label}
              </div>
              <div className="font-mono text-[11px] sm:text-xs font-semibold text-foreground truncate">
                {m.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer: Tech badges + Inspect CTA */}
      <div className="border-t border-border/60 pt-4 flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-md border border-border/70 bg-muted/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-foreground"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="rounded-md border border-border/70 bg-muted/40 px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground/60">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <div className="inline-flex items-center gap-1 font-mono text-xs text-primary font-medium shrink-0 group-hover:translate-x-0.5 transition-transform">
          <span>Inspect</span>
          <ArrowRight size={13} />
        </div>
      </div>
    </motion.div>
  );
}

/* ── Technical Matrix Row (Dense Table View) ── */
function WorkRow({
  project,
  index,
  total,
  onSelect,
}: {
  project: Project;
  index: number;
  total: number;
  onSelect: () => void;
}) {
  const num = (index + 1).toString().padStart(2, "0");
  const totalStr = total.toString().padStart(2, "0");

  return (
    <motion.div
      layout
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className="group flex w-full items-center gap-3 sm:gap-6 border-b border-border py-4 sm:py-5 text-left transition-all duration-300 hover:bg-muted/40 hover:pl-3 cursor-pointer"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      {/* Index */}
      <span className="hidden shrink-0 font-mono text-xs text-muted-foreground/60 md:block">
        {num} / {totalStr}
      </span>

      {/* Online indicator */}
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>

      {/* Icon + Title + Category Tag */}
      <div className="flex shrink-0 items-center gap-3">
        <span className="text-xl transition-transform duration-300 group-hover:scale-110">
          {project.icon}
        </span>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-base sm:text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
              {project.title}
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="rounded border border-primary/30 bg-primary/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-primary font-semibold">
              {project.category}
            </span>
            <span className="font-mono text-[10px] text-muted-foreground/80 hidden sm:inline">
              • {project.badge}
            </span>
          </div>
        </div>
      </div>

      {/* Primary Verified Metric */}
      <div className="hidden lg:flex shrink-0 items-center gap-1.5 font-mono text-xs text-muted-foreground">
        <span className="text-muted-foreground/60">{project.metrics[0]?.label}:</span>
        <span className="font-semibold text-foreground bg-muted/60 px-2 py-0.5 rounded border border-border">
          {project.metrics[0]?.value}
        </span>
      </div>

      {/* Tech badges */}
      <div className="hidden xl:flex shrink-0 gap-1.5 ml-auto">
        {project.tech.slice(0, 3).map((t) => (
          <span
            key={t}
            className="rounded-md border border-border bg-card px-2 py-0.5 font-mono text-[11px] text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Direct Quick Action Buttons */}
      <div
        className="ml-auto xl:ml-3 flex shrink-0 items-center gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        {project.isProprietary ? (
          <span className="inline-flex items-center gap-1 rounded-lg border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 font-mono text-xs font-semibold text-amber-400">
            <Lock size={11} />
            <span>Proprietary</span>
          </span>
        ) : (
          <>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-primary/40 bg-primary/10 px-3 py-1.5 font-mono text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground shadow-xs active:scale-95"
              title="Launch Live Demo"
            >
              <span>Demo</span>
              <ExternalLink size={12} />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/80 px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
              title="View GitHub Repository"
            >
              <GithubIcon size={12} />
            </a>
          </>
        )}
      </div>

      {/* Detail Arrow */}
      <span className="shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-1 group-hover:text-foreground">
        →
      </span>
    </motion.div>
  );
}

/* ── Projects Section ── */
export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All Work");
  const [viewMode, setViewMode] = useState<ViewMode>("bento");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "All Work"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <>
      <SectionWrapper id="projects">
        {/* Eyebrow */}
        <motion.div
          variants={fadeInUp}
          className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground/60"
        >
          <span className="text-primary/80">03</span>
          <span className="h-px w-8 bg-muted-foreground/20" />
          <span>Selected Work</span>
        </motion.div>

        {/* Section Heading & Subtitle */}
        <motion.div variants={fadeInUp} className="mb-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="font-serif text-4xl font-normal leading-none tracking-[-0.03em] sm:text-5xl md:text-6xl text-foreground">
                Things I&apos;ve <em className="font-serif italic text-primary/90">built</em>.
              </h2>
              <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
                Autonomous browser testing platforms, agentic issue resolvers, high-throughput microservices,
                and low-latency DSP systems engineered with strict sandboxing, idempotency, and live telemetry.
              </p>
            </div>

            {/* View Switcher: Bento Cards vs Technical Matrix */}
            <div className="flex items-center gap-2 self-start lg:self-end">
              <div className="flex items-center rounded-xl border border-border bg-card/60 p-1">
                <button
                  onClick={() => setViewMode("bento")}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs tracking-wider transition-all ${
                    viewMode === "bento"
                      ? "bg-foreground text-background shadow-xs font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-pressed={viewMode === "bento"}
                >
                  <LayoutGrid size={13} />
                  <span>Bento Cards</span>
                </button>
                <button
                  onClick={() => setViewMode("matrix")}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs tracking-wider transition-all ${
                    viewMode === "matrix"
                      ? "bg-foreground text-background shadow-xs font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-pressed={viewMode === "matrix"}
                >
                  <List size={13} />
                  <span>Technical Matrix</span>
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-border/50 pt-6">
            <div className="mr-1 hidden items-center gap-1.5 text-xs font-mono text-muted-foreground/70 sm:inline-flex">
              <Filter size={12} />
              <span>Category:</span>
            </div>
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count =
                cat === "All Work"
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-xl px-3.5 py-1.5 font-mono text-xs tracking-wider transition-all duration-200 ${
                    isSelected
                      ? "bg-foreground text-background shadow-xs font-semibold"
                      : "border border-border bg-card/50 text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-card"
                  }`}
                  aria-pressed={isSelected}
                >
                  <span>{cat}</span>
                  <span className="ml-1.5 opacity-60">({count})</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Dynamic Project Display: Bento Cards vs Technical Matrix */}
        <AnimatePresence mode="wait">
          {viewMode === "bento" ? (
            <motion.div
              key="bento-view"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredProjects.map((project, i) => (
                <BentoCard
                  key={project.title}
                  project={project}
                  index={i}
                  onSelect={() => setSelectedProject(project)}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="matrix-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="border-t border-border"
            >
              {filteredProjects.map((project, i) => (
                <WorkRow
                  key={project.title}
                  project={project}
                  index={i}
                  total={filteredProjects.length}
                  onSelect={() => setSelectedProject(project)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </SectionWrapper>

      {/* Deep Architectural Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
