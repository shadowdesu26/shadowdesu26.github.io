"use client";

import { motion } from "framer-motion";

const softSkills = [
  { name: "Perseverance", percent: 95 },
  { name: "Creativity", percent: 95 },
  { name: "Teamwork", percent: 92 },
  { name: "Adaptability", percent: 90 },
  { name: "Self-Discipline", percent: 90 },
];

const techSkills = [
  { icon: "terminal", label: "Python" },
  { icon: "model_training", label: "AI Modeling" },
  { icon: "bar_chart", label: "Data Visualization" },
  { icon: "3d_rotation", label: "3D Physics Simulation" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-[120px] px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="material-symbols-outlined text-3xl text-secondary">
            psychology
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-semibold text-on-surface">
            Skills & Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-surface mb-8">
              Soft Skills
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              {softSkills.map((skill) => (
                <motion.div key={skill.name} variants={item}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-on-surface">
                      {skill.name}
                    </span>
                    <span className="font-[family-name:var(--font-geist)] text-sm text-secondary">
                      {skill.percent}%
                    </span>
                  </div>
                  <div className="h-2 bg-surface-highest rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-secondary to-tertiary rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-surface mb-8">
              Technical Arsenal
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 gap-4"
            >
              {techSkills.map((skill) => (
                <motion.div
                  key={skill.label}
                  variants={item}
                  className="glass-card glow-hover p-6 flex flex-col items-center gap-3 text-center"
                >
                  <span className="material-symbols-outlined text-3xl text-secondary">
                    {skill.icon}
                  </span>
                  <span className="font-[family-name:var(--font-geist)] text-sm font-medium text-on-surface-variant">
                    {skill.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-on-surface-variant leading-relaxed"
            >
              Proficient in building scalable data pipelines, developing custom
              neural architectures, and deploying full-stack analytical
              dashboards. Continually exploring the intersection of robust
              engineering and innovative AI research.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
