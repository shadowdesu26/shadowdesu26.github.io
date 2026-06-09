"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-[120px] px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-semibold text-on-surface">
            Let&apos;s Connect
          </h2>
          <p className="mt-4 text-on-surface-variant max-w-xl leading-relaxed">
            Interested in AI research, data engineering collaborations, or just
            want to discuss the future of machine learning? I&apos;m always open to
            new opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-md"
        >
          <a
            href="mailto:tonyhauky@gmail.com"
            className="glass-card glow-hover p-6 flex items-center gap-4 cursor-pointer block"
          >
            <span className="material-symbols-outlined text-2xl text-secondary">
              mail
            </span>
            <div>
              <p className="font-[family-name:var(--font-geist)] text-sm text-outline">
                Email
              </p>
              <p className="text-on-surface font-medium">tonyhauky@gmail.com</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
