"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { siteConfig, socials } from "@/lib/data";
import { fadeInUp } from "@/lib/animations";
import { SectionWrapper } from "@/components/section-wrapper";

/* ── Scramble link text on hover ── */
function ScrambleLink({
  href,
  label,
  external = true,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const staticChars = new Set([" ", "+", "·", ".", "-", ",", "@"]);
  const [chars, setChars] = useState(label.split(""));
  const sessionRef = useRef(0);

  const scramble = useCallback(() => {
    const session = ++sessionRef.current;
    const finals = label.split("");

    // Immediately scramble all
    setChars(
      finals.map((c) =>
        staticChars.has(c)
          ? c
          : glyphs[Math.floor(Math.random() * glyphs.length)]
      )
    );

    // Resolve left to right
    finals.forEach((ch, idx) => {
      if (staticChars.has(ch)) return;
      setTimeout(() => {
        if (sessionRef.current !== session) return;
        let count = 0;
        const cycles = 4 + Math.floor(Math.random() * 3);
        const timer = setInterval(() => {
          if (sessionRef.current !== session) {
            clearInterval(timer);
            return;
          }
          if (count >= cycles) {
            setChars((prev) => {
              const next = [...prev];
              next[idx] = ch;
              return next;
            });
            clearInterval(timer);
          } else {
            setChars((prev) => {
              const next = [...prev];
              next[idx] = glyphs[Math.floor(Math.random() * glyphs.length)];
              return next;
            });
            count++;
          }
        }, 36);
      }, idx * 38);
    });
  }, [label, glyphs, staticChars]);

  const reset = useCallback(() => {
    sessionRef.current++;
    setChars(label.split(""));
  }, [label]);

  // Initialize on mount
  useEffect(() => {
    setChars(label.split(""));
  }, [label]);

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between border-b border-white/[0.04] py-5 transition-all hover:pl-2 md:py-6"
      onMouseEnter={scramble}
      onMouseLeave={reset}
    >
      <span className="font-mono text-lg tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl md:text-3xl">
        {chars.map((c, i) => (
          <span
            key={i}
            className={
              c !== label[i] ? "text-primary/50" : ""
            }
          >
            {c}
          </span>
        ))}
      </span>
      <span className="text-lg text-muted-foreground/30 transition-all group-hover:translate-x-1 group-hover:text-foreground">
        ↗
      </span>
    </a>
  );
}

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <SectionWrapper id="contact">
      {/* Eyebrow */}
      <motion.div variants={fadeInUp} className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground/60">
        <span className="text-primary/80">05</span>
        <span className="h-px w-8 bg-muted-foreground/20" />
        <span>Contact</span>
      </motion.div>

      <motion.h2
        variants={fadeInUp}
        className="mb-12 text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        Say <em className="font-serif italic text-primary/90">hello</em>.
      </motion.h2>

      <div className="grid gap-16 md:grid-cols-2">
        {/* Social links — scramble on hover */}
        <motion.div variants={fadeInUp}>
          <div className="border-t border-white/[0.04]">
            {socials.map((social) => (
              <ScrambleLink
                key={social.name}
                href={social.href}
                label={social.name}
                external={!social.href.startsWith("mailto:")}
              />
            ))}
          </div>

          {/* Email + Location */}
          <div className="mt-8 space-y-3">
            <div className="font-mono text-xs text-muted-foreground/40">
              <span className="uppercase tracking-widest">Email</span>
              {" — "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {siteConfig.email}
              </a>
            </div>
            <div className="font-mono text-xs text-muted-foreground/40">
              <span className="uppercase tracking-widest">Based</span>
              {" — "}
              <span className="text-muted-foreground">{siteConfig.location}</span>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={fadeInUp}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, name: e.target.value }))
                }
                placeholder="Your name"
                className="h-11 w-full border-b border-white/[0.06] bg-transparent px-0 font-mono text-sm text-foreground placeholder:text-muted-foreground/30 transition-colors focus:border-primary/50 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, email: e.target.value }))
                }
                placeholder="you@example.com"
                className="h-11 w-full border-b border-white/[0.06] bg-transparent px-0 font-mono text-sm text-foreground placeholder:text-muted-foreground/30 transition-colors focus:border-primary/50 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              value={formState.message}
              onChange={(e) =>
                setFormState((s) => ({ ...s, message: e.target.value }))
              }
              placeholder="Tell me about your project..."
              className="w-full resize-none border-b border-white/[0.06] bg-transparent px-0 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/30 transition-colors focus:border-primary/50 focus:outline-none"
            />
          </div>

          <motion.button
            type="submit"
            disabled={isLoading}
            className="group inline-flex h-11 items-center gap-2 rounded-lg bg-foreground px-6 font-mono text-xs uppercase tracking-wider text-background transition-all hover:bg-foreground/90 disabled:opacity-60"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitted ? (
              <>
                <CheckCircle size={14} />
                Sent!
              </>
            ) : isLoading ? (
              <>
                <motion.div
                  className="h-3.5 w-3.5 rounded-full border-2 border-background/30 border-t-background"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                Sending...
              </>
            ) : (
              <>
                <Send size={14} />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
