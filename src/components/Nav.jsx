import { useEffect, useState } from 'react'
import { FileText, Menu, X } from 'lucide-react'
import { profile, sections } from '../data/content.js'
import { onAnchorClick } from '../lib/glideTo.js'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('about')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Which tab is lit is derived from the scroll position rather than an
  // IntersectionObserver. An observer only fires when a section *crosses* a
  // threshold, so it can be left showing the wrong tab after a jump; this
  // recomputes on every scroll event and is always right.
  useEffect(() => {
    const ids = sections.map((s) => s.id)

    const compute = () => {
      const doc = document.scrollingElement || document.documentElement
      const y = window.scrollY || doc.scrollTop
      const line = y + 140 // a little below the fixed header

      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top + y <= line) current = id
      }
      // the last section is often too short to reach the line — if we're at
      // the bottom of the page, it's the one being read
      if (y + window.innerHeight >= doc.scrollHeight - 4) current = ids[ids.length - 1]

      setActive(current)
    }

    compute()
    window.addEventListener('scroll', compute, { passive: true })
    window.addEventListener('resize', compute)
    return () => {
      window.removeEventListener('scroll', compute)
      window.removeEventListener('resize', compute)
    }
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-line bg-ink/85 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          onClick={(e) => onAnchorClick(e, 'top')}
          className="font-[family-name:var(--font-mono)] text-sm font-medium tracking-tight text-text"
        >
          suraj<span className="text-accent">.</span>dev
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => onAnchorClick(e, s.id)}
              className={`rounded-md px-3 py-2 text-sm transition-colors ${
                active === s.id ? 'text-text' : 'text-muted hover:text-text'
              }`}
            >
              {s.label}
              <span
                className={`mx-auto mt-1 block h-px transition-all duration-300 ${
                  active === s.id ? 'w-full bg-accent' : 'w-0 bg-transparent'
                }`}
              />
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-3 inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/12 px-3.5 py-2 text-sm font-medium text-accent-soft transition-colors hover:bg-accent/20"
          >
            <FileText size={15} strokeWidth={1.8} />
            Résumé
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="rounded-md border border-line bg-panel p-2 text-muted md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-ink/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => {
                  setOpen(false)
                  onAnchorClick(e, s.id)
                }}
                className="border-b border-line-soft py-3 text-sm text-muted last:border-0"
              >
                {s.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-md border border-accent/40 bg-accent/12 px-3.5 py-2.5 text-sm font-medium text-accent-soft"
            >
              <FileText size={15} strokeWidth={1.8} />
              Open résumé
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
