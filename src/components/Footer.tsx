"use client";

import { motion } from "framer-motion";

const socials = [
  { label: "Email", href: "mailto:tonyhauky@gmail.com" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-lowest w-full py-[120px] border-t border-outline-variant relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 max-w-[80rem] mx-auto gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-space-grotesk)] text-xl md:text-2xl font-bold text-on-surface"
        >
          TONY HAU
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex gap-6"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-on-surface-variant hover:text-secondary transition-colors duration-200 font-[family-name:var(--font-geist)] text-sm opacity-80 hover:opacity-100"
            >
              {s.label}
            </a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-on-surface-variant text-sm md:text-base"
        >
          &copy; 2026 Tony Hau.
        </motion.p>
      </div>
    </footer>
  );
}
