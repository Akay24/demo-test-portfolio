"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ThemePicker } from "@/components/theme-picker";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMobileMenu = () => {
    const next = !isMobileMenuOpen;
    setIsMobileMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  return (
    <>
      {/* Scroll Progress */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-[60] h-px origin-left bg-primary/60"
        style={{ scaleX }}
      />

      {/* Corner decorations */}
      <div className="pointer-events-none fixed inset-0 z-[55]" aria-hidden="true">
        <div className="absolute left-4 top-4 h-4 w-4 border-l border-t border-white/[0.08]" />
        <div className="absolute right-4 top-4 h-4 w-4 border-r border-t border-white/[0.08]" />
        <div className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-white/[0.08]" />
        <div className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-white/[0.08]" />
      </div>

      {/* Header */}
      <motion.header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/80 py-3 backdrop-blur-xl"
            : "bg-transparent py-5"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
          {/* Logo / Mark */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Scroll to top"
          >
            <span className="flex h-2 w-2 items-center justify-center rounded-full bg-primary" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground/60 transition-colors group-hover:text-foreground">
              {siteConfig.name.toUpperCase()} · SWE
            </span>
          </motion.button>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-1 md:flex" role="list">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "group relative flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs transition-colors",
                    activeSection === link.href
                      ? "text-foreground"
                      : "text-muted-foreground/50 hover:text-foreground"
                  )}
                  aria-current={activeSection === link.href ? "true" : undefined}
                >
                  <span className="text-primary/50">{String(i + 1).padStart(2, "0")}</span>
                  <span>{link.label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Theme Picker + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <ThemePicker />
            </div>
          <button
            onClick={toggleMobileMenu}
            className="relative z-50 flex flex-col gap-1 p-2 md:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={cn(
                "block h-px w-5 bg-foreground transition-all duration-300",
                isMobileMenuOpen && "translate-y-[5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-foreground transition-all duration-300",
                isMobileMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-foreground transition-all duration-300",
                isMobileMenuOpen && "-translate-y-[5px] -rotate-45"
              )}
            />
          </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.nav
          className="fixed inset-0 z-40 flex flex-col items-start justify-center gap-4 bg-background px-12 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          aria-hidden={!isMobileMenuOpen}
        >
          {navLinks.map((link, i) => (
            <motion.button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="flex items-center gap-4 font-mono text-3xl font-light text-foreground"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <span className="text-sm text-primary/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              {link.label}
            </motion.button>
          ))}
        </motion.nav>
      )}
    </>
  );
}
