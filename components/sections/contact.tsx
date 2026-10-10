"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { siteConfig, socials } from "@/lib/data";
import { fadeInUp } from "@/lib/animations";
import { SectionWrapper } from "@/components/section-wrapper";
import { submitContactMessage } from "@/lib/supabase";

/* ── Scramble link text on hover ── */
const STATIC_CHARS = new Set([" ", "+", "·", ".", "-", ",", "@"]);

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
  const [chars, setChars] = useState(() => label.split(""));
  const sessionRef = useRef(0);

  const scramble = useCallback(() => {
    const session = ++sessionRef.current;
    const finals = label.split("");

    // Immediately scramble all
    setChars(
      finals.map((c) =>
        STATIC_CHARS.has(c)
          ? c
          : glyphs[Math.floor(Math.random() * glyphs.length)]
      )
    );

    // Resolve left to right
    finals.forEach((ch, idx) => {
      if (STATIC_CHARS.has(ch)) return;
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
  }, [label, glyphs]);

  const reset = useCallback(() => {
    sessionRef.current++;
    setChars(label.split(""));
  }, [label]);

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between border-b border-border py-5 transition-all hover:pl-2 md:py-6"
      onMouseEnter={scramble}
      onMouseLeave={reset}
    >
      <span className="font-mono text-lg tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl md:text-3xl">
        {chars.map((c, i) => (
          <span
            key={i}
            className={
              c !== label[i] ? "text-primary/70" : ""
            }
          >
            {c}
          </span>
        ))}
      </span>
      <span className="text-lg text-muted-foreground/50 transition-all group-hover:translate-x-1 group-hover:text-foreground">
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await submitContactMessage(formState);
    setIsSubmitting(false);

    if (res.success) {
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      // Fallback: trigger mailto so message is never lost
      const subject = encodeURIComponent(`Hello from ${formState.name}`);
      const body = encodeURIComponent(
        `${formState.message}\n\n—\n${formState.name}\n${formState.email}`
      );
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <SectionWrapper id="contact">
      {/* Eyebrow */}
      <motion.div variants={fadeInUp} className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground/60">
        <span className="text-primary/80 font-medium">06</span>
        <span className="h-px w-8 bg-muted-foreground/20" />
        <span>Contact</span>
      </motion.div>

      <motion.h2
        variants={fadeInUp}
        className="mb-12 font-serif text-4xl font-normal leading-none tracking-[-0.03em] sm:text-5xl md:text-6xl"
      >
        Say <em className="font-serif italic text-primary/90">hello</em>.
      </motion.h2>

      <div className="grid gap-16 md:grid-cols-2">
        {/* Social links — scramble on hover */}
        <motion.div variants={fadeInUp}>
          <div className="border-t border-border">
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
            <div className="font-mono text-xs text-muted-foreground/70">
              <span className="uppercase tracking-widest font-semibold">Email</span>
              {" — "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-foreground transition-colors hover:text-primary underline-offset-4 hover:underline"
              >
                {siteConfig.email}
              </a>
            </div>
            <div className="font-mono text-xs text-muted-foreground/70">
              <span className="uppercase tracking-widest font-semibold">Based</span>
              {" — "}
              <span className="text-foreground">{siteConfig.location}</span>
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
                className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground/70 font-semibold"
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
                className="h-11 w-full border-b border-border bg-transparent px-0 font-mono text-sm sm:text-base text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground/70 font-semibold"
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
                className="h-11 w-full border-b border-border bg-transparent px-0 font-mono text-sm sm:text-base text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground/70 font-semibold"
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
              className="w-full resize-none border-b border-border bg-transparent px-0 py-3 font-mono text-sm sm:text-base text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex h-11 items-center gap-2 rounded-lg bg-foreground px-6 font-mono text-xs uppercase tracking-wider text-background transition-all hover:bg-foreground/90 disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  <span>Sending...</span>
                </>
              ) : submitted ? (
                <>
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Sent!</span>
                </>
              ) : (
                <>
                  <Send size={14} />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
            {submitted && (
              <span className="font-mono text-xs text-emerald-400">
                Message saved! I&apos;ll be in touch soon.
              </span>
            )}
          </div>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
