import { Chip, Reveal, Section } from './primitives.jsx'
import { skillGroups } from '../data/content.js'

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 / Skills"
      title="The stack I work in"
      lead="Grouped the way I actually reach for them — language first, then the layers above and around it."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={Math.min(i * 0.05, 0.25)}>
            <div className="h-full rounded-xl border border-line bg-ink-raised p-5 transition-colors duration-300 hover:border-accent/30">
              <h3 className="font-[family-name:var(--font-mono)] text-[0.72rem] tracking-[0.14em] text-faint uppercase">
                {g.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
