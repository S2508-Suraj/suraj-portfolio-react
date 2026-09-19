import { Reveal, Section } from './primitives.jsx'
import { achievements, extras, profile } from '../data/content.js'

export default function About() {
  return (
    <Section id="about" eyebrow="01 / About" title="What I actually do">
      <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <Reveal>
          <p className="max-w-[64ch] text-[1.05rem] leading-relaxed text-muted">{profile.summary}</p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
            {achievements.map((a) => (
              <div key={a.metric} className="bg-ink-raised px-5 py-6">
                <p className="tnum font-[family-name:var(--font-display)] text-3xl font-bold text-signal">
                  {a.metric}
                </p>
                <p className="mt-2 text-sm font-medium text-text">{a.title}</p>
                <p className="mt-1.5 text-[0.82rem] leading-relaxed text-faint">{a.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="space-y-7">
            <div>
              <dt className="eyebrow">Languages</dt>
              <dd className="mt-2.5 space-y-1 text-sm text-muted">
                {extras.languages.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Strengths</dt>
              <dd className="mt-2.5 space-y-1 text-sm text-muted">
                {extras.strengths.map((s) => (
                  <p key={s}>{s}</p>
                ))}
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Outside work</dt>
              <dd className="mt-2.5 space-y-1 text-sm text-muted">
                {extras.interests.map((i) => (
                  <p key={i}>{i}</p>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
