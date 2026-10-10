"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects, type Project } from "@/lib/data";
import { fadeInUp } from "@/lib/animations";
import { SectionWrapper } from "@/components/section-wrapper";

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
      className="fixed inset-0 z-70 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
      <motion.div
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-2xl"
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
          aria-label="Close project details"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="mb-6 flex items-start gap-4">
          <span className="text-4xl">{project.icon}</span>
          <div>
            <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-muted/60 px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mb-6 text-base leading-relaxed text-muted-foreground">
          {project.longDescription}
        </p>

        {/* Highlights */}
        <div className="mb-6 border-t border-border pt-6">
          <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground/70 font-semibold">
            Key Highlights
          </h4>
          <ul className="space-y-2.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-5 font-mono text-xs uppercase tracking-wider text-foreground transition-all hover:bg-muted"
          >
            <GithubIcon size={14} />
            Source
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-foreground px-5 font-mono text-xs uppercase tracking-wider text-background transition-all hover:bg-foreground/90"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Work Row ── */
function WorkRow({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: () => void;
}) {
  const total = projects.length.toString().padStart(2, "0");
  const num = (index + 1).toString().padStart(2, "0");

  return (
    <motion.div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className="group flex w-full items-center gap-4 border-b border-border py-5 text-left transition-all duration-300 hover:bg-muted/40 hover:pl-3 cursor-pointer sm:gap-6 md:py-6"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      {/* Index */}
      <span className="hidden shrink-0 font-mono text-xs text-muted-foreground/60 sm:block">
        {num} / {total}
      </span>

      {/* Icon + Name */}
      <span className="flex shrink-0 items-center gap-3">
        <span className="text-xl transition-transform duration-300 group-hover:scale-110">
          {project.icon}
        </span>
        <span className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary sm:text-xl">
          {project.title}
        </span>
      </span>

      {/* Description */}
      <span className="hidden flex-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground lg:block">
        {project.description}
      </span>

      {/* Tech badges */}
      <span className="hidden shrink-0 gap-1.5 xl:flex">
        {project.tech.slice(0, 3).map((t) => (
          <span
            key={t}
            className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-foreground"
          >
            {t}
          </span>
        ))}
      </span>

      {/* Direct Quick Action Buttons */}
      <span
        className="ml-auto flex shrink-0 items-center gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-primary/40 bg-primary/10 px-3 py-1.5 font-mono text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground shadow-sm active:scale-95"
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
      </span>

      {/* Detail Arrow */}
      <span className="shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-1 group-hover:text-foreground">
        →
      </span>
    </motion.div>
  );
}

/* ── Projects Section ── */
export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

        <motion.h2
          variants={fadeInUp}
          className="mb-12 font-serif text-4xl font-normal leading-none tracking-[-0.03em] sm:text-5xl md:text-6xl"
        >
          Things I&apos;ve <em className="font-serif italic text-primary/90">built</em>.
        </motion.h2>

        {/* Work list */}
        <div className="border-t border-border">
          {projects.map((project, i) => (
            <WorkRow
              key={project.title}
              project={project}
              index={i}
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </SectionWrapper>

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
