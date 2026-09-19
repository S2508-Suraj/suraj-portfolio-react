import { motion, useReducedMotion } from 'framer-motion'

/** Scroll-reveal wrapper. Animates once, from a small offset, and is a no-op
 *  when the visitor has asked for reduced motion. */
export function Reveal({ children, delay = 0, y = 16, className = '' }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.02 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/** A page section with a monospace eyebrow, a display heading and a hairline rule. */
export function Section({ id, eyebrow, title, lead, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-text text-balance sm:text-4xl">
          {title}
        </h2>
        <div className="rule mt-6 max-w-md" />
        {lead ? <p className="mt-6 max-w-[62ch] text-muted">{lead}</p> : null}
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  )
}

/** Monospace tech chip. */
export function Chip({ children, tone = 'default' }) {
  const tones = {
    default: 'border-line bg-panel text-muted',
    accent: 'border-accent/35 bg-accent/10 text-accent-soft',
  }
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 font-[family-name:var(--font-mono)] text-[0.72rem] leading-none ${tones[tone]}`}
    >
      {children}
    </span>
  )
}
