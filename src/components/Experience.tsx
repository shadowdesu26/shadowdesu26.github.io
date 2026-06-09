"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    icon: "work",
    date: "Sept 2025 – Present",
    title: "IT Intern & AI Researcher",
    company: "LT Game Limited",
    bullets: [
      "Developing advanced predictive models for market analysis.",
      "Optimizing data pipelines for high-frequency trading simulations.",
      "Collaborating with cross-functional teams to integrate AI driven insights into core products.",
    ],
  },
  {
    icon: "school",
    date: "2021 – 2025",
    title: "IT Prefect",
    company: "Institution",
    bullets: [
      "Maintained IT infrastructure, assisted faculty with technical integrations, and led introductory workshops for junior students on basic programming concepts.",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-[120px] px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="material-symbols-outlined text-3xl text-secondary">
            history_edu
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-semibold text-on-surface">
            Experience
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <div className="absolute left-6 top-0 bottom-0 w-px bg-outline-variant/30 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp) => (
              <motion.div
                key={exp.title}
                variants={item}
                className="glass-card glow-hover p-8 ml-0 md:ml-12 relative"
              >
                <div className="absolute left-0 top-8 w-3 h-3 rounded-full bg-secondary hidden md:block -translate-x-[calc(50%+0.5px)]" />
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                  <span className="material-symbols-outlined text-2xl text-secondary shrink-0">
                    {exp.icon}
                  </span>
                  <div className="flex-1">
                    <p className="font-[family-name:var(--font-geist)] text-sm text-secondary font-medium tracking-wide">
                      {exp.date}
                    </p>
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-surface mt-1">
                      {exp.title}
                    </h3>
                    <p className="text-on-surface-variant mt-1">{exp.company}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-12">
                  {exp.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-on-surface-variant leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-secondary mt-1.5 text-xs">●</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
