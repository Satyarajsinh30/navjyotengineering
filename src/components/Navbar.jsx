import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/facilities', label: 'Facilities' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `font-mono text-xs uppercase tracking-[0.15em] pb-1 border-b-2 transition-colors ${
      isActive
        ? 'border-oxide text-ink'
        : 'border-transparent text-ink/55 hover:text-ink hover:border-line'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper-2/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt="Navjyot Engineering" className="h-9 w-9 object-contain" />
          <span className="font-display text-lg font-semibold leading-none text-ink">
            Navjyot Engineering
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="rounded-sm bg-ink px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-paper-2 transition-colors hover:bg-oxide"
          >
            Request quote
          </NavLink>
        </nav>

        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-5 pb-4 md:hidden">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-sm px-3 py-2.5 font-mono text-sm uppercase tracking-wide ${
                  isActive ? 'bg-ink text-paper-2' : 'text-ink/70'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
