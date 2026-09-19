import { Reveal, Section } from './primitives.jsx'
import { experience } from '../data/content.js'

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="03 / Experience"
      title="Where the work happens"
      lead="One place, deep involvement — backend, frontend, data, IIS deployment and delivery on the same product line."
    >
      <div className="space-y-14">
        {experience.map((job) => (
          <Reveal key={job.company}>
            <article>
              <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-line pb-5">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-text sm:text-2xl">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-[0.95rem] text-accent-soft">{job.company}</p>
                </div>
                <p className="tnum font-[family-name:var(--font-mono)] text-xs tracking-wide text-faint">
                  {job.period}
                  {job.current && (
                    <span className="ml-3 inline-flex items-center gap-1.5 text-signal">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal" />
                      current
                    </span>
                  )}
                </p>
              </header>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                {job.groups.map((g) => (
                  <div key={g.title}>
                    <h4 className="font-[family-name:var(--font-mono)] text-[0.72rem] tracking-[0.14em] text-faint uppercase">
                      {g.title}
                    </h4>
                    <ul className="mt-4 space-y-3">
                      {g.points.map((p) => (
                        <li key={p} className="flex gap-3 text-[0.92rem] leading-relaxed text-muted">
                          <span
                            aria-hidden="true"
                            className="mt-[0.62rem] h-px w-3 shrink-0 bg-accent/60"
                          />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
