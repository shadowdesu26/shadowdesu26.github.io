"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-8 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-7xl lg:text-[64px] font-bold leading-[1.1] tracking-[-0.02em] text-on-surface mb-2">
            Hau King Yiu
          </h1>
          <p className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-medium text-secondary mt-4">
            AI Researcher & Developer
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
        >
          Bachelor of Science A & Extended Major in AI at HKUST | AI Research
          Intern at LT Game Limited.
          <br />
          <span className="text-outline">
            A creative problem-solver dedicated to engineering robust machine
            learning models and sophisticated data infrastructures. Bridging
            theoretical research with scalable software solutions.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-on-secondary font-[family-name:var(--font-space-grotesk)] font-semibold text-base rounded hover:shadow-[0_0_30px_rgba(76,215,246,0.3)] transition-all duration-300 hover:-translate-y-0.5"
          >
            View My Work
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
