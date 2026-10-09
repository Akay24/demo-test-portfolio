"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Filter, Globe } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { SectionWrapper } from "@/components/section-wrapper";
import { designExplorations } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const categories = [
  "All",
  "Minimal & Grid",
  "Vibrant & Expressive",
  "Retro & Heritage",
  "Atmospheric & 3D",
] as const;

export function DesignExplorations() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredDesigns = selectedCategory === "All"
    ? designExplorations
    : designExplorations.filter((d) => d.category === selectedCategory);

  return (
    <SectionWrapper id="designs" className="border-t border-border/40">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Eyebrow matching portfolio convention */}
        <motion.div
          variants={fadeInUp}
          className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground/60"
        >
          <span className="text-primary/80">04</span>
          <span className="h-px w-8 bg-muted-foreground/20" />
          <span>Design Systems</span>
        </motion.div>

        {/* Section Heading matching font-serif aesthetic */}
        <motion.div variants={fadeInUp} className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="font-serif text-4xl font-normal leading-none tracking-[-0.03em] sm:text-5xl md:text-6xl text-foreground">
                Design <em className="font-serif italic text-primary/90">Explorations</em>.
              </h2>
              <p className="mt-4 max-w-2xl text-sm md:text-base text-muted-foreground">
                Twenty independent websites exploring distinct visual design systems.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 self-start md:self-end">
              <div className="mr-1 hidden items-center gap-1 text-xs font-mono text-muted-foreground/70 lg:inline-flex">
                <Filter size={12} />
                <span>Filter:</span>
              </div>
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-lg px-3 py-1.5 font-mono text-xs tracking-wider transition-all duration-200 ${
                      isSelected
                        ? "bg-foreground text-background shadow-sm"
                        : "border border-border bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-card"
                    }`}
                    aria-pressed={isSelected}
                  >
                    {cat}
                    {cat === "All" ? ` (${designExplorations.length})` : ""}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* 20 Standalone Websites Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredDesigns.map((item) => (
              <motion.div
                key={item.id}
                layout
                variants={fadeInUp}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="group relative flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card hover:shadow-lg hover:shadow-primary/5"
              >
                <div>
                  {/* Top Bar: Number & Style Tag */}
                  <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                    <span className="font-semibold text-primary">#{item.number}</span>
                    <span className="rounded-md border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {item.style}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-3.5 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline focus:outline-none"
                    >
                      {item.name}
                    </a>
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-border bg-muted/80 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Bar: Source Code & Live Website Links */}
                <div className="mt-5 flex items-center justify-between border-t border-border pt-3">
                  <a
                    href={item.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={`View ${item.name} source code on GitHub`}
                  >
                    <GithubIcon size={13} />
                    <span>Source</span>
                  </a>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`Launch ${item.name} live application`}
                  >
                    <Globe size={13} />
                    <span>Launch</span>
                    <ExternalLink
                      size={13}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
