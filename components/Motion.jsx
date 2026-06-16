"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/i18n";

// Scroll-triggered fade-up reveal.
export function FadeUp({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Crossfade wrapper that re-animates its children when the language changes.
export function LangFade({ children, className = "" }) {
  const { lang } = useLang();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={lang}
        lang={lang}
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
