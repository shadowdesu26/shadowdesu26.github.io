"use client";

import { motion } from "framer-motion";

const academics = [
  {
    school: "Hong Kong University of Science and Technology (HKUST)",
    degree: "Bachelor of Science A, Extended Major in AI",
    color: "text-secondary",
  },
  {
    school: "The Methodist Church HK Wesley College",
    degree: "Secondary Education",
    color: "text-tertiary",
  },
];

const honors = [
  {
    icon: "military_tech",
    title: "1st in Mathematics M2 Mock Exam",
    year: "2024 - 2025",
    bgColor: "bg-secondary/20",
    iconColor: "text-secondary",
  },
  {
    icon: "star",
    title: "Top 3 in Mathematics M2",
    year: "2022 - 2023",
    bgColor: "bg-secondary/20",
    iconColor: "text-secondary",
  },
  {
    icon: "science",
    title: "Silver Award - Chemists Online Self-study Award Scheme",
    year: "2022 - 2023",
    bgColor: "bg-tertiary/20",
    iconColor: "text-tertiary",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-[120px] px-4 md:px-8 max-w-[80rem] mx-auto border-b border-outline-variant/30 relative overflow-hidden group"
    >
      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80')] bg-fixed bg-cover bg-center opacity-5 transition-transform duration-1000 group-hover:scale-105" />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-semibold text-on-surface mb-16 flex items-center gap-4 relative z-10"
      >
        <span className="material-symbols-outlined text-secondary text-4xl">
          workspace_premium
        </span>
        Education &amp; Achievements
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl md:text-2xl text-on-surface mb-8 border-b border-outline-variant/30 pb-4 inline-block">
            Academic Journey
          </h3>
          <div className="space-y-8">
            {academics.map((a) => (
              <div key={a.school} className="glass-card rounded-lg">
                <div className="bg-[rgba(15,23,42,0.85)] rounded-md p-5 md:p-7">
                  <div className="flex justify-between items-start mb-2">
                    <h4
                      className={`font-[family-name:var(--font-space-grotesk)] text-lg md:text-xl ${a.color}`}
                    >
                      {a.school}
                    </h4>
                  </div>
                  <p className="text-sm md:text-base text-on-surface mb-2">
                    {a.degree}
                  </p>
                </div>
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
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl md:text-2xl text-on-surface mb-8 border-b border-outline-variant/30 pb-4 inline-block">
            Key Honors
          </h3>
          <div className="space-y-6">
            {honors.map((h) => (
              <div
                key={h.title}
                className="glass-card rounded-lg"
              >
                <div className="bg-[rgba(15,23,42,0.85)] rounded-md p-4 md:p-5 flex items-start gap-4">
                  <div className={`${h.bgColor} p-2 rounded-full shrink-0`}>
                    <span className={`material-symbols-outlined ${h.iconColor}`}>
                      {h.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-geist)] text-base md:text-lg text-on-surface mb-1">
                      {h.title}
                    </h4>
                    <p className="text-sm text-on-surface-variant font-[family-name:var(--font-geist)]">
                      {h.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
