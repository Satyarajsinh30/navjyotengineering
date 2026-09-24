const machines = [
  {
    title: 'Vertical Machining Centers',
    image: '/images/machine-vmc.webp',
    models: ['BFW 50 TC-24 · 600×400×400', 'COSMOS-1060 · 1050×610×600', 'BFW XTRON-544 · 500×400×350'],
    body: 'Three VMCs on the floor, covering milling, boring, drilling, tapping and thread cutting in one setup.',
  },
  {
    title: 'CNC Turning Centers',
    image: '/images/machine-cnc.webp',
    models: ['LOKESH-TL-30-XL · 300×500', 'LMW-SMARTTURN · 165×250', 'BALTIBOI · 300×500'],
    body: 'Rotating-bar turning work, sized for both small precision components and larger diameter jobs.',
  },
  {
    title: 'Lathe Machines',
    image: '/images/machine-lathe.webp',
    models: ["10'10\" center", "9'10\" center", "7'12\" center", "7'10\" center"],
    body: 'Four conventional lathes for cutting, sanding, knurling and drilling operations.',
  },
  {
    title: 'Drilling Machines',
    image: '/images/machine-radial-drill.webp',
    imageSecondary: '/images/machine-drill.webp',
    models: ['Radial drill · up to 38mm', 'Pillar drill · up to 25mm'],
    body: 'A radial drill and pillar drill cover most hole-drilling needs on the floor.',
  },
  {
    title: 'Bandsaw Machine',
    image: '/images/machine-bandsaw.png',
    models: ['Cutting capacity · up to 200mm dia'],
    body: 'Used ahead of machining, for precise stock cutting before a part goes to the next operation.',
  },
]

const instruments = [
  ['Bore gauge', '6–12 / 18–35 / 35–60 / 50–150 / 150–250mm'],
  ['Height gauge', '0–600mm'],
  ['Micrometers', '0–300mm'],
  ['Vernier calipers', '0–450mm'],
  ['Dial vernier', '0–300mm'],
  ['Dial indicator', '10mm, 2 nos.'],
  ['Ring gauge', '3–30mm'],
  ['Thread plug', '3–12mm'],
  ['Plain plug gauge', '3–35mm'],
]

export default function Facilities() {
  return (
    <>
      <section className="border-b border-line bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-oxide">Shop floor</p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-ink sm:text-5xl">
            Machines &amp; equipment
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink/70">
            Everything below runs in-house, calibrated and maintained on a
            regular schedule.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl divide-y divide-line border-b border-line px-5 sm:px-8">
          {machines.map((m) => (
            <div key={m.title} className="grid gap-6 py-10 sm:grid-cols-[140px_1fr] sm:gap-8">
              <div className={`flex gap-2 ${m.imageSecondary ? '' : ''}`}>
                <img
                  src={m.image}
                  alt={m.title}
                  className="h-[140px] w-[140px] shrink-0 border border-line object-cover"
                />
                {m.imageSecondary && (
                  <img
                    src={m.imageSecondary}
                    alt={`${m.title} detail`}
                    className="hidden h-[140px] w-[140px] shrink-0 border border-line object-cover sm:block"
                  />
                )}
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-ink">{m.title}</h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/65">{m.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {m.models.map((model) => (
                    <span
                      key={model}
                      className="rounded-sm border border-line bg-paper-2 px-2.5 py-1 font-mono text-[11px] text-ink/60"
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-start">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">Measuring instruments</h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/65">
                Precision parts need precision measurement — every instrument
                on our floor is calibrated.
              </p>
              <img
                src="/images/machine-measuring.webp"
                alt="Calibrated measuring instruments"
                className="mt-6 w-full border border-line object-cover"
              />
            </div>

            <table className="w-full border-collapse text-sm">
              <tbody>
                {instruments.map(([name, range]) => (
                  <tr key={name} className="border-b border-line">
                    <td className="py-3 pr-4 text-ink/80">{name}</td>
                    <td className="py-3 text-right font-mono text-xs text-ink/50">{range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
