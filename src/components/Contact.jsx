import { Code2, ExternalLink, FileText, Mail, MapPin, Phone } from 'lucide-react'
import { Reveal, Section } from './primitives.jsx'
import { profile } from '../data/content.js'

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="06 / Contact"
      title="Let's talk"
      lead="Happy to discuss .NET full-stack roles, contract work, or a system that needs untangling."
    >
      <Reveal>
        <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          <a
            href={`mailto:${profile.email}`}
            className="group bg-ink-raised px-6 py-7 transition-colors hover:bg-panel-2"
          >
            <span className="flex items-center gap-2.5 font-[family-name:var(--font-mono)] text-[0.7rem] tracking-[0.14em] text-faint uppercase">
              <Mail size={14} strokeWidth={1.9} /> Email
            </span>
            <span className="mt-3 block text-[0.98rem] break-all text-text group-hover:text-accent-soft">
              {profile.email}
            </span>
          </a>

          <div className="bg-ink-raised px-6 py-7">
            <span className="flex items-center gap-2.5 font-[family-name:var(--font-mono)] text-[0.7rem] tracking-[0.14em] text-faint uppercase">
              <Phone size={14} strokeWidth={1.9} /> Phone
            </span>
            <div className="mt-3 space-y-1">
              {profile.phones.map((p) => (
                <a
                  key={p}
                  href={`tel:${p.replace(/\s/g, '')}`}
                  className="tnum block text-[0.98rem] text-text hover:text-accent-soft"
                >
                  {p}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-ink-raised px-6 py-7">
            <span className="flex items-center gap-2.5 font-[family-name:var(--font-mono)] text-[0.7rem] tracking-[0.14em] text-faint uppercase">
              <MapPin size={14} strokeWidth={1.9} /> Based in
            </span>
            <span className="mt-3 block text-[0.98rem] text-text">{profile.location}</span>
          </div>

          <div className="bg-ink-raised px-6 py-7">
            <span className="flex items-center gap-2.5 font-[family-name:var(--font-mono)] text-[0.7rem] tracking-[0.14em] text-faint uppercase">
              <FileText size={14} strokeWidth={1.9} /> Résumé
            </span>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-[0.98rem] text-text hover:text-accent-soft"
            >
              Open the full PDF →
            </a>
          </div>
        </div>

        {(profile.github || profile.linkedin) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-panel px-4 py-2.5 text-sm text-text transition-colors hover:border-accent/40"
              >
                <Code2 size={16} strokeWidth={1.8} /> GitHub
              </a>
            )}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-panel px-4 py-2.5 text-sm text-text transition-colors hover:border-accent/40"
              >
                <ExternalLink size={16} strokeWidth={1.8} /> LinkedIn
              </a>
            )}
          </div>
        )}
      </Reveal>
    </Section>
  )
}
