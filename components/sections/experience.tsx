"use client";

import { motion } from "framer-motion";
import { experience, education, certifications } from "@/lib/data";
import { fadeInUp } from "@/lib/animations";
import { SectionWrapper } from "@/components/section-wrapper";

export function Experience() {
  return (
    <SectionWrapper id="experience">
      {/* Eyebrow */}
      <motion.div variants={fadeInUp} className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground/60">
        <span className="text-primary/80">04</span>
        <span className="h-px w-8 bg-muted-foreground/20" />
        <span>Experience</span>
      </motion.div>

      <motion.h2
        variants={fadeInUp}
        className="mb-12 text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        A working <em className="font-serif italic text-primary/90">résumé</em>.
      </motion.h2>

      {/* Experience rows */}
      <div className="space-y-0">
        {experience.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${exp.period}`}
            className="group grid gap-4 border-b border-border py-8 first:border-t md:grid-cols-12 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            {/* When */}
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground/40 md:col-span-3">
              {exp.period}
            </div>

            {/* What */}
            <div className="md:col-span-6">
              <h3 className="mb-1 text-base font-semibold text-foreground">
                {exp.role}, <em className="font-normal text-primary/80">{exp.company}</em>
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                {exp.description}
              </p>
              <ul className="space-y-1.5">
                {exp.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-muted-foreground/60 transition-colors group-hover:text-muted-foreground"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/40" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Where */}
            <div className="font-mono text-xs text-muted-foreground/30 md:col-span-3 md:text-right">
              {exp.location}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education */}
      <motion.div
        variants={fadeInUp}
        className="mt-16"
      >
        <h3 className="mb-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40">
          Education
        </h3>
        <div className="space-y-0">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              className="grid gap-2 border-b border-border py-5 first:border-t md:grid-cols-12 md:gap-8"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <div className="font-mono text-xs text-muted-foreground/40 md:col-span-3">
                {edu.period}
              </div>
              <div className="md:col-span-9">
                <span className="text-sm font-medium text-foreground/80">{edu.degree}</span>
                <span className="text-sm text-muted-foreground"> — </span>
                <em className="text-sm text-muted-foreground">{edu.institution}</em>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        variants={fadeInUp}
        className="mt-12"
      >
        <h3 className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40">
          Certifications
        </h3>
        <div className="flex flex-wrap gap-2">
          {certifications.map((cert) => (
            <span
              key={cert}
              className="rounded-lg border border-border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {cert}
            </span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
