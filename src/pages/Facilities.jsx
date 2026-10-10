import { VmcIcon, TurningIcon, DrillIcon, BandsawIcon, CaliperIcon } from '../components/MachineIcons.jsx'

const machines = [
  {
    title: 'Vertical Machining Centers',
    Icon: VmcIcon,
    models: ['BFW 50 TC-24 · 600×400×400', 'COSMOS-1060 · 1050×610×600', 'BFW XTRON-544 · 500×400×350'],
    body: 'Three VMCs on the floor, covering milling, boring, drilling, tapping and thread cutting in one setup.',
  },
  {
    title: 'CNC Turning Centers',
    Icon: (p) => <TurningIcon variant="cnc" {...p} />,
    models: ['LOKESH-TL-30-XL · 300×500', 'LMW-SMARTTURN · 165×250', 'BALTIBOI · 300×500'],
    body: 'Rotating-bar turning work, sized for both small precision components and larger diameter jobs.',
  },
  {
    title: 'Lathe Machines',
    Icon: (p) => <TurningIcon variant="lathe" {...p} />,
    models: ["10'10\" center", "9'10\" center", "7'12\" center", "7'10\" center"],
    body: 'Four conventional lathes for cutting, sanding, knurling and drilling operations.',
  },
  {
    title: 'Drilling Machines',
    Icon: DrillIcon,
    models: ['Radial drill · up to 38mm', 'Pillar drill · up to 25mm'],
    body: 'A radial drill and pillar drill cover most hole-drilling needs on the floor.',
  },
  {
    title: 'Bandsaw Machine',
    Icon: BandsawIcon,
    models: ['Cutting capacity · up to 200mm dia'],
    body: 'Used ahead of machining, for precise stock cutting before a part goes to the next operation.',
  },
]

const instruments = [
  'Bore gauge',
  'Height gauge',
  'Micrometers',
  'Vernier calipers',
  'Dial vernier',
  'Dial indicator',
  'Ring gauge',
  'Thread plug',
  'Plain plug gauge',
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
              <div className="flex h-[140px] w-[140px] shrink-0 items-center justify-center border border-line bg-paper-2 text-blueprint">
                <m.Icon className="h-20 w-20" />
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

      {/* Measuring instruments — condensed to a supporting note rather than
          a full section, since every workshop carries basic measuring gear.
          Kept brief mainly as a quick trust signal that everything is
          calibrated, not as a headline capability. */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <CaliperIcon className="h-9 w-9 shrink-0 text-blueprint" />
              <div>
                <h2 className="font-display text-lg font-semibold text-ink">Measuring &amp; inspection</h2>
                <p className="text-sm text-ink/60">Every instrument on the floor is calibrated.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {instruments.map((item) => (
                <span
                  key={item}
                  className="rounded-sm border border-line bg-paper px-2.5 py-1 font-mono text-[11px] text-ink/55"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
