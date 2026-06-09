"use client";

export default function Hero() {
  return (
    <section className="min-h-[921px] flex flex-col justify-center px-4 md:px-8 max-w-[80rem] mx-auto relative border-b border-outline-variant/30 overflow-hidden group">
      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80')] bg-fixed bg-cover bg-center opacity-5 transition-transform duration-1000 group-hover:scale-105" />
      <div className="max-w-4xl relative z-10 animate-fade-in-scroll">
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-6xl font-bold leading-[1.1] tracking-[-0.02em] text-on-surface mb-6">
          Tony Hau <br />
          <span className="text-secondary">AI Researcher &amp; Developer</span>
        </h1>
        <p className="text-lg text-on-surface-variant mb-8 max-w-2xl leading-relaxed">
          Bachelor of Science A &amp; Extended Major in AI at HKUST | AI Research
          Intern at LT Game Limited.
          <br />
          A creative problem-solver dedicated to engineering robust machine
          learning models and sophisticated data infrastructures. Bridging
          theoretical research with scalable software solutions.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-secondary text-on-secondary px-8 py-3 rounded font-[family-name:var(--font-geist)] text-sm font-medium glow-button inline-flex items-center gap-2"
          >
            View My Work
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
