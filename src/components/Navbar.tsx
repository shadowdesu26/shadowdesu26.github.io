"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface-lowest/80 backdrop-blur-xl border-b border-outline-variant/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        <a
          href="#"
          className="font-[family-name:var(--font-space-grotesk)] text-base font-bold tracking-[0.15em] text-on-surface hover:text-secondary transition-colors"
        >
          HAU KING YIU
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-geist)] text-base font-medium text-on-surface-variant hover:text-secondary transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-[family-name:var(--font-geist)] text-base font-medium px-6 py-2.5 rounded bg-secondary text-on-secondary hover:shadow-[0_0_20px_rgba(76,215,246,0.3)] transition-all"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-on-surface transition-all ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-on-surface transition-all ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-on-surface transition-all ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface-lowest/95 backdrop-blur-xl border-b border-outline-variant/30 px-6 py-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 font-[family-name:var(--font-geist)] text-sm font-medium text-on-surface-variant hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
