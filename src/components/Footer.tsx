"use client";

import { motion } from "framer-motion";

const socials = [
  { label: "Email", href: "mailto:tonyhauky@gmail.com" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Scholar", href: "#" },
];

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-8 border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <p className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold tracking-[0.15em] text-on-surface">
              HAU KING YIU
            </p>
            <div className="flex gap-6 mt-4 justify-center md:justify-start">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="font-[family-name:var(--font-geist)] text-sm text-on-surface-variant hover:text-secondary transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <p className="font-[family-name:var(--font-geist)] text-sm text-outline">
            &copy; {new Date().getFullYear()} Hau King Yiu. AI Research &amp;
            Development.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
