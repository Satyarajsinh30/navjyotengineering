import { Link } from 'react-router-dom'

const stats = [
  { label: 'Founded', value: '2006' },
  { label: 'MSME certified', value: '2009' },
  { label: 'In OEM supply', value: '15+ yrs' },
]

const pillars = [
  {
    title: 'Held to tolerance',
    body: 'Every part is measured against the drawing before it leaves the floor — not just checked once at the end.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
        <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="1.6" />
        <path d="M20 7v6M20 27v6M7 20h6M27 20h6" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="20" cy="20" r="2.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Machinists who've done this before",
    body: "Setups, fixturing, tool paths — our floor runs on people who've solved this exact problem many times over.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
        <path
          d="M12 28l11-11 3 3-11 11H12v-3z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M22 12l6 6" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="27" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: 'On the date we commit to',
    body: 'We plan the job around your deadline before we plan it around our machines. Delivery dates are a commitment, not an estimate.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
        <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="1.6" />
        <path d="M20 12v8l6 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
]

const industries = [
  { name: 'Automobile', note: 'Shaft, coupling & housing components' },
  { name: 'Plastic', note: 'Extrusion & injection-moulding machine parts' },
  { name: 'Textile', note: 'Precision components for textile machinery' },
  { name: 'Construction', note: 'Sub-assemblies for construction equipment' },
  { name: 'Medical', note: 'Close-tolerance components for medical machinery' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grid-lines border-b border-line bg-paper-2">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-oxide">
              OEM precision manufacturing
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
              Machined to the drawing.
              <br />
              Every time.
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/70">
              Since 2006, Navjyot Engineering has supplied precision machine
              parts, die parts and sub-assemblies to OEM customers — taken
              from raw stock through machining, treatment and inspection.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-sm bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-paper-2 transition-colors hover:bg-oxide"
              >
                Request a quote
              </Link>
              <Link
                to="/facilities"
                className="rounded-sm border border-ink/25 px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:border-oxide hover:text-oxide"
              >
                Shop capabilities
              </Link>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-mono text-[11px] uppercase tracking-wide text-ink/45">{s.label}</dt>
                  <dd className="mt-1 font-display text-2xl font-semibold text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Technical line-art illustration */}
          <div className="corner-marks border border-line bg-paper p-6 sm:p-10">
            <svg viewBox="0 0 400 340" className="h-full w-full text-blueprint">
              <g fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="200" cy="150" r="90" />
                <circle cx="200" cy="150" r="58" />
                <circle cx="200" cy="150" r="10" />
                <circle cx="200" cy="150" r="90" strokeDasharray="2 5" opacity="0.5" />
                <line x1="200" y1="30" x2="200" y2="270" strokeDasharray="6 4" opacity="0.5" />
                <line x1="80" y1="150" x2="320" y2="150" strokeDasharray="6 4" opacity="0.5" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
                  const r1 = 58, r2 = 68
                  const rad = (deg * Math.PI) / 180
                  const x1 = 200 + r1 * Math.cos(rad)
                  const y1 = 150 + r1 * Math.sin(rad)
                  const x2 = 200 + r2 * Math.cos(rad)
                  const y2 = 150 + r2 * Math.sin(rad)
                  return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} />
                })}
                <line x1="50" y1="290" x2="350" y2="290" strokeWidth="1" />
                <line x1="50" y1="284" x2="50" y2="296" strokeWidth="1" />
                <line x1="350" y1="284" x2="350" y2="296" strokeWidth="1" />
              </g>
              <text x="200" y="312" textAnchor="middle" fontSize="11" fill="currentColor" fontFamily="IBM Plex Mono, monospace">
                ⌀ 180.00 ±0.02
              </text>
              <text x="200" y="20" textAnchor="middle" fontSize="10" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.6">
                FIG. 01 — REPRESENTATIVE BORE
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-blueprint">Single-window solution</p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
            One vendor, start to finish.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink/70">
            Beyond in-house machining, we coordinate the finishing work most
            jobs need — surface treatments like hard chrome plating, nickel
            and electroless nickel plating, zinc and blue-zinc phosphating,
            manganese phosphating, black oxidising, and natural or hard
            anodising, plus heat treatment such as induction hardening,
            vacuum hardening, quenching &amp; tempering, and annealing. One
            point of contact, from stock to finished part.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-y border-line bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title}>
                <div className="text-oxide">{p.icon}</div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-blueprint">Who we build for</p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
            Industries we manufacture for
          </h2>

          <div className="mt-10 divide-y divide-line border-y border-line">
            {industries.map((ind, i) => (
              <div key={ind.name} className="flex items-baseline justify-between gap-6 py-5">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-ink/35">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-lg font-semibold text-ink sm:text-xl">
                    {ind.name}
                  </span>
                </div>
                <span className="hidden max-w-xs text-right text-sm text-ink/55 sm:block">
                  {ind.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-paper-2">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 sm:flex-row sm:items-center sm:px-8">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Have a drawing you need machined?
          </h2>
          <Link
            to="/contact"
            className="shrink-0 rounded-sm bg-oxide px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-paper-2 transition-colors hover:bg-oxide-dark"
          >
            Send us the spec
          </Link>
        </div>
      </section>
    </>
  )
}
