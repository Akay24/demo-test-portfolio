"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { fadeInUp } from "@/lib/animations";
import { SectionWrapper } from "@/components/section-wrapper";

const facts = [
  { label: "Name", value: siteConfig.name },
  { label: "Based", value: siteConfig.location },
  { label: "Focus", value: "Backend · Automation Architecture" },
  { label: "Stack", value: "Python · FastAPI · Node.js · Express" },
  { label: "Infra", value: "AWS · Jenkins · Docker · Veeva" },
  { label: "Currently", value: "Open to opportunities" },
];

export function About() {
  return (
    <SectionWrapper id="about">
      {/* Eyebrow */}
      <motion.div variants={fadeInUp} className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground/60">
        <span className="text-primary/80 font-medium">01</span>
        <span className="h-px w-8 bg-muted-foreground/20" />
        <span>About</span>
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left column */}
        <div>
          <motion.h2
            variants={fadeInUp}
            className="mb-8 font-serif text-4xl font-normal leading-none tracking-[-0.03em] sm:text-5xl md:text-6xl"
          >
            A <em className="font-serif italic text-primary/90">note</em> on what I do.
          </motion.h2>

          {/* Facts table */}
          <motion.ul variants={fadeInUp} className="space-y-0 border-t border-border">
            {facts.map((fact, i) => (
              <motion.li
                key={fact.label}
                className="flex items-baseline justify-between border-b border-border py-3.5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground/70 font-medium">
                  {fact.label}
                </span>
                <span className="font-mono text-sm sm:text-base font-medium text-foreground">
                  {fact.value}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Right column — Bio */}
        <div className="flex flex-col justify-between">
          <div className="space-y-5">
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg leading-relaxed text-muted-foreground"
            >
              {siteConfig.bio}
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg leading-relaxed text-muted-foreground"
            >
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open source, and sharing knowledge
              through technical writing. I care about <em className="font-medium text-foreground">developer experience</em>, latency budgets, and treating the next engineer with respect.
            </motion.p>
          </div>

          {/* Stats row */}
          <motion.div variants={fadeInUp} className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-border">
            {siteConfig.stats.map((stat) => (
              <div
                key={stat.label}
                className="border-l-2 border-primary/40 pl-4"
              >
                <div className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  {stat.value}
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground/60 mt-1 font-medium">
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
