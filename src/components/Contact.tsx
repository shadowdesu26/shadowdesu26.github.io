"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-[120px] px-4 md:px-8 max-w-[80rem] mx-auto relative overflow-hidden group"
    >
      <div className="glass-card rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="bg-[rgba(15,23,42,0.85)] rounded-xl p-6 md:p-10 relative z-10">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl text-on-surface mb-4"
            >
              Let&apos;s Connect
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-on-surface-variant mb-8"
            >
              Interested in AI research, data engineering collaborations, or just
              want to discuss the future of machine learning? I&apos;m always open to
              new opportunities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant/30 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-secondary">
                    mail
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-sm font-[family-name:var(--font-geist)] text-on-surface-variant">
                    Email
                  </p>
                  <a
                    href="mailto:tonyhauky@gmail.com"
                    className="text-on-surface hover:text-secondary transition-colors"
                  >
                    tonyhauky@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
