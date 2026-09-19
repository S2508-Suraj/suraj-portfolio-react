import { Briefcase, GraduationCap, Wrench } from 'lucide-react'
import { Reveal, Section } from './primitives.jsx'
import { timeline } from '../data/content.js'

const icons = { work: Briefcase, training: Wrench, education: GraduationCap }

export default function Journey() {
  return (
    <Section
      id="journey"
      eyebrow="05 / Journey"
      title="How I got here"
      lead="Electronics degree, a focused Microsoft-stack conversion, then straight into shipping .NET products."
    >
      <ol className="relative border-l border-line pl-8 sm:pl-10">
        {timeline.map((t, i) => {
          const Icon = icons[t.kind] ?? Briefcase
          return (
            <Reveal key={t.title} delay={Math.min(i * 0.07, 0.28)}>
              <li className="relative pb-11 last:pb-0">
                <span className="absolute top-0.5 -left-[2.4rem] flex h-7 w-7 items-center justify-center rounded-full border border-line bg-panel text-accent-soft sm:-left-[3.15rem]">
                  <Icon size={13} strokeWidth={1.9} />
                </span>
                <p className="tnum font-[family-name:var(--font-mono)] text-[0.72rem] tracking-[0.12em] text-faint uppercase">
                  {t.period}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold text-text text-balance">
                  {t.title}
                </h3>
                <p className="mt-0.5 text-sm text-accent-soft">{t.org}</p>
                {t.detail ? (
                  <p className="mt-3 max-w-[62ch] text-[0.92rem] leading-relaxed text-muted">{t.detail}</p>
                ) : null}
              </li>
            </Reveal>
          )
        })}
      </ol>
    </Section>
  )
}
