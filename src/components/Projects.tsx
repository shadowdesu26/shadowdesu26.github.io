"use client";

import { motion } from "framer-motion";

const projects = [
  {
    icon: "analytics",
    category: "AI & Data Engineering",
    description:
      "Developed robust stock market prediction models utilizing LSTM and XGBoost. Engineered \"Agent_OS\", a full-stack dashboard (Next.js/FastAPI) facilitating multi-agent debates and intelligent workflows. Built on strong Python fundamentals.",
    tags: ["LSTM/XGBoost", "Next.js", "FastAPI"],
  },
  {
    icon: "view_in_ar",
    category: "Simulation & Visual Design",
    description:
      "Created the 3D physics-driven \"Virtual Marble Race\". Designed detailed characters, implemented complex collision logic, and utilized physics-based assets to create highly engaging, realistic simulation environments.",
    tags: ["3D Physics", "Simulation", "Collision Logic"],
  },
  {
    icon: "menu_book",
    category: "Education Leadership",
    description:
      "Conducted private tutoring sessions focused on HKDSE ICT. Developed comprehensive mock papers and study materials to simplify complex technological concepts and elevate student academic performance.",
    tags: ["Mentorship", "HKDSE ICT", "Content Creation"],
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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-[120px] px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="material-symbols-outlined text-3xl text-secondary">
            code_blocks
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-semibold text-on-surface">
            Projects
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.category}
              variants={item}
              className="glass-card glow-hover p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-2xl text-secondary">
                  {project.icon}
                </span>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-on-surface">
                  {project.category}
                </h3>
              </div>
              <p className="text-on-surface-variant leading-relaxed flex-1 mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="skill-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
