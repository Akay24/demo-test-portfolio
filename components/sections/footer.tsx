"use client";

import { motion } from "framer-motion";
import { siteConfig, socials } from "@/lib/data";
import { fadeInUp } from "@/lib/animations";

export function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="border-t border-white/[0.04] py-8"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center justify-between gap-4 font-mono text-[11px] text-muted-foreground/40 sm:flex-row"
        >
          <span>© {new Date().getFullYear()} · {siteConfig.name}</span>
          <div className="flex gap-6">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase tracking-widest transition-colors hover:text-foreground"
                aria-label={s.name}
              >
                {s.name}
              </a>
            ))}
          </div>
          <span>Built with care · Next.js</span>
        </motion.div>
      </div>
    </motion.footer>
  );
}
