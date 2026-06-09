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
  {
    icon: "terminal",
    iconType: "material" as const,
    label: "Python",
  },
  {
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5bPTEbF5pAWG5FSYQ5MrTO6dgvPgL0YovN6XfB9CIWgS4rG53IsX0Tw79nasaIU0jHtpv3xOC1AMDyVsnCY_6OfPyv7kIJFxhLOxT81R5seSkt0JYPea27xCE5BTeec-ybea7V50ae9qP7linzIIJk77Y_UVwcSgq0R39qCnBz_XT8izV1SRtpTfGYa7v9KQLifqZyXKvAhO2cBH7mlPmUoaHpi9iGgPMEAmQWsMLsNHxGHU2nmhUjdGPw6gU_et3Q6tea36LqvPOkw",
    iconType: "image" as const,
    label: "NumPy",
  },
  {
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAMFiHqWEc6tTLrN9rjqwWcg5vaVYZENUpJLyyaT-K6ytOLRP0CMjEQxYnV6B3NEQ-1yP0PLfxjAMSKUsQEfWw0CZyeHxmXfR_6iQ73emzxULnEdVKLISJMCMXvRBTfI29ZhKEcLx3Q5_HB6343hKu6YZZF_NgyFDapDmUTdQMXsVf_nQDESIcEYCORoPwT6gxJylGGldvck6BfPv92cKWUPm35Dqeok8ntJLy3i5t3zdTAMDfUwrU_hHBJAY6FKvdSi7AKsIvpB0RqQ",
    iconType: "image" as const,
    label: "Pandas",
  },
  {
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBISoSjxeewOfdiJrXAFt1UfW7pMrnfJcQ_3x6KsEujzK_DoToqb100VFtL6Anp404CCzP7tz8JD3laUd5VRD1YS-AzTzx1pmrnKF1Eudz2YPgyhE8c_Hl5Gq0asJ6AJyI6ad2FV5J4d7J4bXjO1sMgYLWqTLz_NNZn9Z7HrRm-tAYL1A26t-el8ejg5ptnO-OG0_xA_iqyFpgMl6JRpFK1aQX6mdbyPlNq_Zv72yFL1DQBcmO7fHutczKFo1odb47u4Io08qzHWP4byg",
    iconType: "image" as const,
    label: "Matplotlib",
  },
  {
    icon: "model_training",
    iconType: "material" as const,
    label: "AI Modeling",
  },
  {
    icon: "bar_chart",
    iconType: "material" as const,
    label: "Data Visualization",
  },
  {
    icon: "3d_rotation",
    iconType: "material" as const,
    label: "3D Physics Simulation",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-[120px] px-4 md:px-8 max-w-[80rem] mx-auto border-b border-outline-variant/30 relative overflow-hidden group"
    >
      <div
        className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80')] bg-fixed bg-cover bg-center opacity-5 transition-transform duration-1000 group-hover:scale-105"
      />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-semibold text-on-surface mb-16 flex items-center gap-4 relative z-10"
      >
        <span className="material-symbols-outlined text-secondary text-4xl">
          psychology
        </span>
        Skills &amp; Expertise
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <div>
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl md:text-2xl text-on-surface mb-8">
            Soft Skills
          </h3>
          <div className="space-y-6">
            {softSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between font-[family-name:var(--font-geist)] text-sm mb-2 text-on-surface">
                  <span>{skill.name}</span>
                  <span className="text-secondary">{skill.percent}%</span>
                </div>
                <div className="h-2 w-full bg-surface-highest rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-secondary progress-bar-fill rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl md:text-2xl text-on-surface mb-8">
            Technical Arsenal
          </h3>
          <div className="flex flex-wrap gap-4">
            {techSkills.map((skill) => (
              <div
                key={skill.label}
                className="px-6 py-3 border border-secondary/30 bg-surface-container/50 rounded-lg text-on-surface font-[family-name:var(--font-geist)] text-sm flex items-center gap-2 hover:border-secondary transition-colors cursor-default backdrop-blur-sm"
              >
                {skill.iconType === "image" ? (
                  <img
                    src={skill.icon}
                    alt={`${skill.label} Icon`}
                    className="w-5 h-5 object-contain shrink-0"
                  />
                ) : (
                  <span className="material-symbols-outlined text-secondary text-sm">
                    {skill.icon}
                  </span>
                )}
                {skill.label}
              </div>
            ))}
          </div>

          <div className="mt-9 glass-card rounded-xl hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-[rgba(15,23,42,0.85)] rounded-xl p-6 md:p-8">
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Proficient in building scalable data pipelines, developing custom
                neural architectures, and deploying full-stack analytical
                dashboards. Continually exploring the intersection of robust
                engineering and innovative AI research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
