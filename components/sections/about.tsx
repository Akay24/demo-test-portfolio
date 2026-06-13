"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { fadeInUp } from "@/lib/animations";
import { SectionWrapper } from "@/components/section-wrapper";

const facts = [
  { label: "Name", value: siteConfig.name },
  { label: "Based", value: siteConfig.location },
  { label: "Focus", value: "Frontend · Full-Stack" },
  { label: "Stack", value: "React · Next.js · TS" },
  { label: "Infra", value: "Vercel · AWS · Docker" },
  { label: "Currently", value: "Open to opportunities" },
];

export function About() {
  return (
    <SectionWrapper id="about">
      {/* Eyebrow */}
      <motion.div variants={fadeInUp} className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground/60">
        <span className="text-primary/80">01</span>
        <span className="h-px w-8 bg-muted-foreground/20" />
        <span>About</span>
      </motion.div>

      <div className="grid gap-16 md:grid-cols-2">
        {/* Left column */}
        <div>
          <motion.h2
            variants={fadeInUp}
            className="mb-8 font-serif text-4xl font-normal leading-none tracking-[-0.03em] sm:text-5xl md:text-6xl"
          >
            A <em className="font-serif italic text-primary/90">note</em> on what I do.
          </motion.h2>

          {/* Facts table */}
          <motion.ul variants={fadeInUp} className="space-y-0 border-t border-white/6">
            {facts.map((fact, i) => (
              <motion.li
                key={fact.label}
                className="flex items-baseline justify-between border-b border-white/6 py-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground/50">
                  {fact.label}
                </span>
                <span className="text-sm text-foreground/80">
                  {fact.value}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Right column — Bio */}
        <div>
          <motion.p
            variants={fadeInUp}
            className="mb-6 text-base leading-relaxed text-muted-foreground"
          >
            {siteConfig.bio}
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="mb-8 text-base leading-relaxed text-muted-foreground"
          >
            When I&apos;m not coding, you&apos;ll find me exploring new
            technologies, contributing to open source, and sharing knowledge
            through technical writing. I care about <em className="text-foreground/80">developer experience</em>, latency budgets, and treating the next engineer with respect.
          </motion.p>

          {/* Stats row */}
          <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4">
            {siteConfig.stats.map((stat) => (
              <div
                key={stat.label}
                className="border-l border-white/6 pl-4"
              >
                <div className="font-mono text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
