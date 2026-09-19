import { Chip, Reveal, Section } from './primitives.jsx'
import { projects } from '../data/content.js'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="04 / Projects"
      title="Things I've built"
      lead="Production line-of-business systems, plus the machine-learning project that started it."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={Math.min(i * 0.06, 0.24)}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-ink-raised p-6 transition-colors duration-300 hover:border-accent/35 sm:p-7">
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <p className="font-[family-name:var(--font-mono)] text-[0.7rem] tracking-[0.14em] text-faint uppercase">
                {p.kind}
              </p>
              <h3 className="mt-2.5 font-[family-name:var(--font-display)] text-xl font-semibold text-text text-balance">
                {p.name}
              </h3>

              <ul className="mt-5 space-y-3">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-[0.9rem] leading-relaxed text-muted">
                    <span aria-hidden="true" className="mt-[0.6rem] h-px w-3 shrink-0 bg-accent/60" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-line-soft pt-5 sm:mt-auto">
                {p.stack.map((s) => (
                  <Chip key={s} tone="accent">
                    {s}
                  </Chip>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
