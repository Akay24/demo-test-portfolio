"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { themes, getThemeById, DEFAULT_THEME_ID, type Theme } from "@/lib/themes";

const STORAGE_KEY = "__portfolio_theme__";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  Object.entries(theme.vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
  // Update the dark class for light themes
  if (theme.group === "light") {
    root.classList.remove("dark");
  } else {
    root.classList.add("dark");
  }
}

/* ── Desktop Picker (in header) ── */
export function ThemePicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState<Theme>(getThemeById(DEFAULT_THEME_ID));
  const pickerRef = useRef<HTMLDivElement>(null);

  // Load saved theme
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const theme = getThemeById(saved);
        setActiveTheme(theme);
        applyTheme(theme);
      }
    } catch {}
  }, []);

  // Close on click outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const selectTheme = useCallback((theme: Theme) => {
    setActiveTheme(theme);
    applyTheme(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme.id);
    } catch {}
    setIsOpen(false);
  }, []);

  const darkThemes = themes.filter((t) => t.group === "dark");
  const lightThemes = themes.filter((t) => t.group === "light");

  return (
    <div className="relative" ref={pickerRef}>
      {/* Trigger */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="group flex items-center gap-2 rounded-lg px-2.5 py-1.5 transition-colors hover:bg-white/5"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Choose theme"
      >
        <span
          className="h-2.5 w-2.5 rounded-full ring-1 ring-white/20"
          style={{ background: activeTheme.color }}
        />
        <span className="hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 transition-colors group-hover:text-foreground sm:block">
          {activeTheme.name}
        </span>
        <svg
          className={`h-2 w-2 text-muted-foreground/40 transition-transform ${isOpen ? "rotate-180" : ""}`}
          viewBox="0 0 8 5"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M1 1L4 4L7 1"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dropdown panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 top-full z-[70] mt-2 w-48 overflow-hidden rounded-xl border border-white/[0.06] bg-background/95 p-1 shadow-2xl backdrop-blur-xl"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            role="listbox"
            aria-label="Theme"
          >
            {/* Dark themes */}
            <div className="px-2 pb-1 pt-2 font-mono text-[9px] uppercase tracking-widest text-muted-foreground/30">
              Dark
            </div>
            {darkThemes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => selectTheme(theme)}
                className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors ${
                  activeTheme.id === theme.id
                    ? "bg-white/[0.06] text-foreground"
                    : "text-muted-foreground hover:bg-white/[0.03] hover:text-foreground"
                }`}
                role="option"
                aria-selected={activeTheme.id === theme.id}
              >
                <span
                  className="h-3 w-3 shrink-0 rounded-full ring-1 ring-white/10"
                  style={{ background: theme.color }}
                />
                <span className="font-mono text-xs">{theme.name}</span>
                {activeTheme.id === theme.id && (
                  <span className="ml-auto text-[10px] text-primary">●</span>
                )}
              </button>
            ))}

            {/* Divider */}
            <div className="my-1 h-px bg-white/[0.04]" />

            {/* Light themes */}
            <div className="px-2 pb-1 pt-1 font-mono text-[9px] uppercase tracking-widest text-muted-foreground/30">
              Light
            </div>
            {lightThemes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => selectTheme(theme)}
                className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors ${
                  activeTheme.id === theme.id
                    ? "bg-white/[0.06] text-foreground"
                    : "text-muted-foreground hover:bg-white/[0.03] hover:text-foreground"
                }`}
                role="option"
                aria-selected={activeTheme.id === theme.id}
              >
                <span
                  className="h-3 w-3 shrink-0 rounded-full ring-1 ring-black/10"
                  style={{ background: theme.color }}
                />
                <span className="font-mono text-xs">{theme.name}</span>
                {activeTheme.id === theme.id && (
                  <span className="ml-auto text-[10px] text-primary">●</span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Mobile FAB (floating action button) ── */
export function ThemeFab() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState<Theme>(getThemeById(DEFAULT_THEME_ID));
  const fabRef = useRef<HTMLDivElement>(null);

  // Sync with localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setActiveTheme(getThemeById(saved));
      }
    } catch {}

    // Listen for theme changes from the desktop picker
    const handleStorage = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const theme = getThemeById(saved);
          setActiveTheme(theme);
        }
      } catch {}
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (fabRef.current && !fabRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const selectTheme = useCallback((theme: Theme) => {
    setActiveTheme(theme);
    applyTheme(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme.id);
    } catch {}
    setIsOpen(false);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[65] md:hidden" ref={fabRef}>
      {/* FAB button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.08] bg-background/80 shadow-xl backdrop-blur-xl transition-transform hover:scale-105"
        aria-label="Choose theme"
        aria-expanded={isOpen}
      >
        <div className="grid h-5 w-5 grid-cols-2 gap-0.5">
          {themes.slice(0, 4).map((t) => (
            <span
              key={t.id}
              className="rounded-full"
              style={{ background: t.color }}
            />
          ))}
        </div>
      </button>

      {/* FAB panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-full right-0 mb-3 flex flex-wrap gap-2 rounded-2xl border border-white/[0.06] bg-background/95 p-3 shadow-2xl backdrop-blur-xl"
            style={{ width: "220px" }}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => selectTheme(theme)}
                className={`h-8 w-8 rounded-full ring-2 transition-all ${
                  activeTheme.id === theme.id
                    ? "ring-primary scale-110"
                    : "ring-transparent hover:ring-white/20 hover:scale-105"
                }`}
                style={{ background: theme.color }}
                aria-label={theme.name}
                title={theme.name}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
