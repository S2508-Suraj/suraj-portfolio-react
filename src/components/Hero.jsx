import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, FileText, Mail, MapPin } from 'lucide-react'
import { profile, quickFacts } from '../data/content.js'
import { onAnchorClick } from '../lib/glideTo.js'

export default function Hero() {
  const reduce = useReducedMotion()
  const rise = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section id="top" className="pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="lg:max-w-2xl">
      <motion.p
        {...rise(0)}
        className="inline-flex items-center gap-2.5 rounded-full border border-line bg-panel/70 px-3.5 py-1.5 font-[family-name:var(--font-mono)] text-[0.72rem] text-muted"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal/70" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
        </span>
        {profile.availability}
      </motion.p>

      <motion.h1
        {...rise(0.08)}
        className="mt-7 font-[family-name:var(--font-display)] text-[2.75rem] leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl"
      >
        {profile.name}
      </motion.h1>

      <motion.p
        {...rise(0.16)}
        className="mt-4 font-[family-name:var(--font-mono)] text-sm text-accent-soft sm:text-base"
      >
        {profile.role}
      </motion.p>

      <motion.p {...rise(0.24)} className="mt-7 max-w-[58ch] text-lg text-muted text-pretty sm:text-xl">
        {profile.tagline}
      </motion.p>

      <motion.div {...rise(0.32)} className="mt-9 flex flex-wrap items-center gap-3">
        <a
          href="#contact"
          onClick={(e) => onAnchorClick(e, 'contact')}
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-accent-soft"
        >
          <Mail size={16} strokeWidth={1.9} />
          Get in touch
        </a>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-line bg-panel px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent/40 hover:bg-panel-2"
        >
          <FileText size={16} strokeWidth={1.9} />
          View résumé
        </a>
        <span className="inline-flex items-center gap-2 pl-1 text-sm text-faint">
          <MapPin size={15} strokeWidth={1.8} />
          {profile.location}
        </span>
      </motion.div>
        </div>

        <motion.div {...rise(0.12)} className="relative shrink-0 self-start lg:self-center">
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-full bg-accent/20 blur-3xl"
          />
          <img
            src={profile.photo}
            alt={`${profile.firstName} — portrait`}
            width="760"
            height="760"
            className="relative h-28 w-28 rounded-full border border-accent/25 object-cover shadow-2xl shadow-black/50 sm:h-32 sm:w-32 lg:h-72 lg:w-72"
          />
        </motion.div>
      </div>

      <motion.dl
        {...rise(0.42)}
        className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
      >
        {quickFacts.map((f) => (
          <div key={f.label} className="bg-ink-raised px-5 py-4">
            <dt className="font-[family-name:var(--font-mono)] text-[0.68rem] tracking-[0.14em] text-faint uppercase">
              {f.label}
            </dt>
            <dd className="mt-1.5 text-sm text-text">{f.value}</dd>
          </div>
        ))}
      </motion.dl>

      <motion.a
        {...rise(0.5)}
        href="#about"
        onClick={(e) => onAnchorClick(e, 'about')}
        className="mt-12 inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs tracking-widest text-faint uppercase transition-colors hover:text-accent-soft"
      >
        <ArrowDown size={14} strokeWidth={2} />
        Scroll
      </motion.a>
    </section>
  )
}
