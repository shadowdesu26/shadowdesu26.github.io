"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Lottery Draw Video",
    description:
      "A high-tech visualization project utilizing neural networks for randomized pattern generation. Engineered to produce stunning, cinematic lottery draw sequences with cybernetic aesthetics.",
    tags: ["Neural Networks", "Visualization", "Pattern Generation"],
  },
  {
    title: "Simulation & Visual Design",
    description:
      'Created the 3D physics-driven "Virtual Marble Race". Designed detailed characters, implemented complex collision logic, and utilized physics-based assets to create highly engaging, realistic simulation environments.',
    tags: ["3D Physics", "Simulation", "Collision Logic"],
  },
  {
    title: "Character Design & Visual Concept Development",
    description:
      "Focused on digital painting, creating strong character silhouettes, and comprehensive world-building. Developed visual concepts spanning various aesthetics, emphasizing detailed linework and atmosphere.",
    tags: ["Digital Painting", "Silhouettes", "World-building"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-[120px] px-4 md:px-8 max-w-[80rem] mx-auto border-b border-outline-variant/30 relative overflow-hidden group"
    >
      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80')] bg-fixed bg-cover bg-center opacity-5 transition-transform duration-1000 group-hover:scale-105" />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-semibold text-on-surface mb-16 flex items-center gap-4 relative z-10"
      >
        <span className="material-symbols-outlined text-secondary text-4xl">
          code_blocks
        </span>
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass-card rounded-lg flex flex-col hover:-translate-y-2 transition-transform duration-300 animate-slide-up"
            style={{ animationDelay: `${(i + 1) * 0.1}s` }}
          >
            <div className="bg-[rgba(15,23,42,0.85)] rounded-md p-5 md:p-7 flex flex-col flex-grow">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl md:text-2xl text-on-surface mb-4">
                {project.title}
              </h3>
              <p className="text-on-surface-variant text-sm md:text-base mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-surface-variant/50 border border-outline-variant/30 text-on-surface-variant rounded-full text-xs font-[family-name:var(--font-geist)] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
