import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Journey from './components/Journey.jsx'
import Contact from './components/Contact.jsx'
import { profile } from './data/content.js'

export default function App() {
  return (
    <>
      <div className="page-ground" aria-hidden="true" />
      <Nav />
      <main className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <footer className="relative z-10 border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-xs text-faint sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="font-[family-name:var(--font-mono)]">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="font-[family-name:var(--font-mono)]">
            Built with React, Vite &amp; Tailwind CSS
          </p>
        </div>
      </footer>
    </>
  )
}
