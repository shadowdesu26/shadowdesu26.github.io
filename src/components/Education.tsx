"use client";

import { motion } from "framer-motion";

const academics = [
  {
    school: "Hong Kong University of Science and Technology (HKUST)",
    degree: "Bachelor of Science A, Extended Major in AI",
  },
  {
    school: "The Methodist Church HK Wesley College",
    degree: "Secondary Education",
  },
];

const honors = [
  {
    icon: "military_tech",
    title: "1st in Mathematics M2 Mock Exam",
    year: "2024 - 2025",
  },
  {
    icon: "star",
    title: "Top 3 in Mathematics M2",
    year: "2022 - 2023",
  },
  {
    icon: "science",
    title: "Silver Award - Chemists Online Self-study Award Scheme",
    year: "2022 - 2023",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Education() {
  return (
    <section id="education" className="py-[120px] px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="material-symbols-outlined text-3xl text-secondary">
            workspace_premium
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-semibold text-on-surface">
            Education & Achievements
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-surface mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">
                school
              </span>
              Academic Journey
            </h3>
            <div className="space-y-6">
              {academics.map((a) => (
                <div key={a.school} className="glass-card p-6">
                  <h4 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-on-surface">
                    {a.school}
                  </h4>
                  <p className="text-on-surface-variant mt-1">{a.degree}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-surface mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">
                emoji_events
              </span>
              Key Honors
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              {honors.map((h) => (
                <motion.div
                  key={h.title}
                  variants={item}
                  className="glass-card glow-hover p-5 flex items-start gap-4"
                >
                  <span className="material-symbols-outlined text-2xl text-secondary shrink-0 mt-0.5">
                    {h.icon}
                  </span>
                  <div>
                    <p className="font-medium text-on-surface">{h.title}</p>
                    <p className="font-[family-name:var(--font-geist)] text-sm text-outline mt-1">
                      {h.year}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
