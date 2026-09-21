// Animated section-to-section scrolling for the nav.
//
// The page travels to the section instead of teleporting. Duration scales
// with distance, the easing accelerates away and settles in, and any wheel /
// key / touch input hands control straight back to the visitor.

const HEADER = 64 // h-16 fixed header
const GAP = 14 // breathing room under it

const MIN_MS = 800
const MAX_MS = 1700
const MS_PER_PX = 0.8

// Visitors who ask for reduced motion still get a move rather than a
// teleport — just a brief one, so the page doesn't lurch across 6000px.
const REDUCED_MS = 420

// easeInOutCubic — slow start, quick middle, soft landing
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

let frame = null
let safety = null
let detach = null

export function cancelGlide() {
  if (frame) cancelAnimationFrame(frame)
  if (safety) clearTimeout(safety)
  if (detach) detach()
  frame = null
  safety = null
  detach = null
}

/** Scroll the window to an element id. 'top' goes to the very top. */
export function glideTo(id) {
  const el = id === 'top' ? document.body : document.getElementById(id)
  if (!el) return false

  cancelGlide()

  const doc = document.scrollingElement || document.documentElement
  const start = window.scrollY || doc.scrollTop
  const max = Math.max(0, doc.scrollHeight - window.innerHeight)
  const end =
    id === 'top'
      ? 0
      : Math.max(0, Math.min(start + el.getBoundingClientRect().top - HEADER - GAP, max))

  const set = (y) => window.scrollTo(0, y)
  const distance = end - start
  if (Math.abs(distance) < 2) return true

  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  const duration = reduced
    ? REDUCED_MS
    : Math.min(MAX_MS, Math.max(MIN_MS, Math.abs(distance) * MS_PER_PX))

  const t0 = performance.now()

  // The visitor can always take over mid-flight.
  const stop = () => cancelGlide()
  window.addEventListener('wheel', stop, { passive: true })
  window.addEventListener('touchstart', stop, { passive: true })
  window.addEventListener('keydown', stop)
  detach = () => {
    window.removeEventListener('wheel', stop)
    window.removeEventListener('touchstart', stop)
    window.removeEventListener('keydown', stop)
  }

  const step = (now) => {
    const t = Math.min(1, (now - t0) / duration)
    set(start + distance * ease(t))
    if (t < 1) frame = requestAnimationFrame(step)
    else cancelGlide()
  }
  frame = requestAnimationFrame(step)

  // Chrome throttles requestAnimationFrame to ~1fps in an unfocused window,
  // which would strand the scroll half way. Land it regardless.
  safety = setTimeout(() => {
    if (frame) {
      cancelGlide()
      set(end)
    }
  }, duration + 400)

  return true
}

/** onClick for an in-page anchor — replaces the browser's instant jump. */
export function onAnchorClick(e, id) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
  e.preventDefault()
  glideTo(id)
  try {
    window.history?.replaceState(null, '', id === 'top' ? window.location.pathname : `#${id}`)
  } catch {
    /* some embeds block history — the scroll still works */
  }
}
