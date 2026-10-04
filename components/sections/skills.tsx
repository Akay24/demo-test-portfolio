"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/lib/data";
import { fadeInUp } from "@/lib/animations";
import { SectionWrapper } from "@/components/section-wrapper";
import { cn } from "@/lib/utils";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <SectionWrapper id="skills">
      {/* Eyebrow */}
      <motion.div variants={fadeInUp} className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground/60">
        <span className="text-primary/80 font-bold">02</span>
        <span className="h-px w-8 bg-muted-foreground/20" />
        <span>Skills & Stack</span>
      </motion.div>

      <motion.h2
        variants={fadeInUp}
        className="mb-12 font-serif text-4xl font-normal leading-none tracking-[-0.03em] sm:text-5xl md:text-6xl"
      >
        The <em className="font-serif italic text-primary/90">tools</em> I reach for.
      </motion.h2>

      {/* Category pills */}
      <motion.div variants={fadeInUp} className="mb-10 flex flex-wrap gap-2.5">
        {skills.map((category, index) => {
          const Icon = category.icon;
          const isActive = activeCategory === index;
          return (
            <button
              key={category.category}
              onClick={() => setActiveCategory(index)}
              className={cn(
                "group inline-flex items-center gap-2.5 rounded-xl px-4 py-2.5 font-mono text-xs sm:text-sm uppercase tracking-wider font-medium transition-all duration-200",
                isActive
                  ? "bg-foreground text-background shadow-xs"
                  : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
            >
              <Icon size={15} />
              <span>{category.category}</span>
            </button>
          );
        })}
      </motion.div>

      {/* Skills grid with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          {skills[activeCategory].items.map((skill, i) => (
            <motion.div
              key={skill}
              className="group flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-6 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.04 }}
            >
              <span className="font-mono text-sm sm:text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                {skill}
              </span>
              <span className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground/60">
                {skills[activeCategory].category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Full stack summary */}
      <motion.div variants={fadeInUp} className="mt-12 pt-8 border-t border-border">
        <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground/70 font-semibold">
          Complete Technical Index
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.flatMap((cat) =>
            cat.items.map((item) => (
              <span
                key={`${cat.category}-${item}`}
                className="rounded-lg border border-border bg-card/60 px-3 py-1 font-mono text-xs sm:text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {item}
              </span>
            ))
          )}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
