"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    icon: "work",
    iconFilled: true,
    date: "Sept 2025 – Present",
    title: "IT Intern & AI Researcher",
    company: "LT Game Limited",
    dateColor: "text-secondary",
    borderActive: true,
    bullets: [
      "Developing advanced predictive models for market analysis.",
      "Optimizing data pipelines for high-frequency trading simulations.",
      "Collaborating with cross-functional teams to integrate AI driven insights into core products.",
    ],
  },
  {
    icon: "school",
    iconFilled: false,
    date: "2021 – 2025",
    title: "IT Prefect",
    company: "Institution",
    dateColor: "text-tertiary",
    borderActive: false,
    bullets: [
      "Maintained IT infrastructure, assisted faculty with technical integrations, and led introductory workshops for junior students on basic programming concepts.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-[120px] px-4 md:px-8 max-w-[80rem] mx-auto border-b border-outline-variant/30 relative overflow-hidden group"
    >
      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-fixed bg-cover bg-center opacity-5 transition-transform duration-1000 group-hover:scale-105" />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-semibold text-on-surface mb-16 flex items-center gap-4 relative z-10"
      >
        <span className="material-symbols-outlined text-secondary text-4xl">
          history_edu
        </span>
        Experience
      </motion.h2>

      <div className="space-y-12 relative z-10 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-outline-variant before:to-transparent">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className={`relative flex items-center justify-between md:justify-normal ${
              i % 2 === 0 ? "md:flex-row-reverse" : ""
            } group/item animate-slide-up`}
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full border ${
                exp.borderActive
                  ? "border-secondary bg-surface-container shadow-[0_0_10px_rgba(76,215,246,0.3)]"
                  : "border-outline-variant bg-surface-container"
              } shrink-0 md:order-1 ${
                i % 2 === 0
                  ? "md:-translate-x-1/2"
                  : "md:translate-x-1/2"
              } z-10`}
            >
              <span
                className={`material-symbols-outlined text-[20px] ${
                  exp.borderActive ? "text-secondary" : "text-on-surface-variant"
                }`}
                style={
                  exp.iconFilled
                    ? { fontVariationSettings: "'FILL' 1" }
                    : undefined
                }
              >
                {exp.icon}
              </span>
            </div>

            <div
              className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card rounded-lg ${
                !exp.borderActive ? "opacity-80 hover:opacity-100" : ""
              }`}
            >
              <div className="bg-[rgba(15,23,42,0.85)] rounded-md p-5 md:p-7">
                <div className="flex flex-col mb-4">
                  <span
                    className={`font-[family-name:var(--font-geist)] text-xs font-medium tracking-widest mb-1 ${exp.dateColor}`}
                  >
                    {exp.date}
                  </span>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl md:text-2xl font-medium text-on-surface">
                    {exp.title}
                  </h3>
                  <span className="font-[family-name:var(--font-geist)] text-sm text-on-surface-variant">
                    {exp.company}
                  </span>
                </div>
                <ul className="list-disc list-inside text-on-surface-variant space-y-2 text-sm md:text-base marker:text-secondary">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
