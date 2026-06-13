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
        <span className="text-primary/80">02</span>
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
      <motion.div variants={fadeInUp} className="mb-10 flex flex-wrap gap-2">
        {skills.map((category, index) => {
          const Icon = category.icon;
          return (
            <button
              key={category.category}
              onClick={() => setActiveCategory(index)}
              className={cn(
                "group inline-flex items-center gap-2 rounded-lg px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all duration-300",
                activeCategory === index
                  ? "bg-foreground text-background"
                  : "border border-white/6 text-muted-foreground hover:border-white/10 hover:text-foreground"
              )}
            >
              <Icon size={14} />
              {category.category}
            </button>
          );
        })}
      </motion.div>

      {/* Skills grid with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/6 bg-white/2 sm:grid-cols-3 md:grid-cols-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {skills[activeCategory].items.map((skill, i) => (
            <motion.div
              key={skill}
              className="group flex items-center justify-center border border-white/3 bg-background px-4 py-6 text-center transition-all duration-300 hover:bg-white/3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              <span className="font-mono text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                {skill}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Full stack summary */}
      <motion.div variants={fadeInUp} className="mt-10">
        <h3 className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40">
          Full Stack
        </h3>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {skills.flatMap((cat) =>
            cat.items.map((item) => (
              <span
                key={`${cat.category}-${item}`}
                className="font-mono text-xs text-muted-foreground/40 transition-colors hover:text-muted-foreground"
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
