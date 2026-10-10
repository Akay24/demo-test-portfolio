"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  X,
  ArrowRight,
  Filter,
  CheckCircle2,
  Workflow,
  Building2,
  Lock,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects, type Project } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionWrapper } from "@/components/section-wrapper";

const categories = [
  "All Work",
  "Backend & Applied AI",
  "Interactive & Creative",
  "Enterprise Systems",
] as const;

type CategoryType = (typeof categories)[number];



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
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border/80 bg-background/90 text-primary shadow-sm">
            <project.icon className="h-7 w-7 text-primary" />
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
            <span>Architecture Flow</span>
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
            Overview
          </h4>
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
            {project.longDescription}
          </p>
        </div>



        {/* Key Highlights */}
        <div className="mb-6 border-t border-border pt-6">
          <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground/80 font-semibold">
            Key Highlights
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
                <span>Live Demo</span>
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
      {/* Top Header */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-background/90 text-primary shadow-xs transition-transform duration-300 group-hover:scale-105">
              <project.icon className="h-6 w-6 text-primary" />
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

/* ── Projects Section ── */
export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All Work");
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
          <span className="text-primary/80 font-medium">03</span>
          <span className="h-px w-8 bg-muted-foreground/20" />
          <span>Selected Work</span>
        </motion.div>

        {/* Section Heading & Subtitle */}
        <motion.div variants={fadeInUp} className="mb-10">
          <div>
            <h2 className="font-serif text-4xl font-normal leading-none tracking-[-0.03em] sm:text-5xl md:text-6xl text-foreground">
              Things I&apos;ve built
            </h2>
            <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
              Production services, developer tooling, and interactive experiments built with Python, TypeScript, and modern web standards.
            </p>
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

        {/* Project Cards Grid */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
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
