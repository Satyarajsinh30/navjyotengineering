const timeline = [
  {
    year: '2006',
    title: 'Started operations',
    body: 'Began manufacturing machine parts and die parts for OEM customers in Ahmedabad.',
  },
  {
    year: '2009',
    title: 'MSME certified',
    body: 'Grew into a small-scale industry and received MSME certification (reg. no. 24-007-11-17032).',
  },
  {
    year: 'Today',
    title: '15+ years in OEM supply',
    body: 'Still run by the same principle we started with — the drawing is the standard, not a suggestion.',
  },
]

const industries = ['Automobile', 'Plastic', 'Textile', 'Construction', 'Medical']

export default function About() {
  return (
    <>
      <section className="border-b border-line bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-oxide">About Navjyot Engineering</p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-ink sm:text-5xl">
            A shop built on OEM trust
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink/70">
            We're a precision parts manufacturer supplying machine parts, die
            parts and sub-assemblies as an Original Equipment Manufacturer
            (OEM) vendor. Most of our work comes from injection-moulding
            machine builders, extrusion machinery makers, textile machine
            manufacturers, and packaging machine manufacturers who need parts
            built exactly to their drawing, more than once, without drift.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-2xl font-semibold text-ink">How we got here</h2>
          <div className="mt-10 space-y-0 border-l border-line pl-8">
            {timeline.map((t) => (
              <div key={t.year} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full bg-oxide" />
                <p className="font-mono text-xs uppercase tracking-wide text-blueprint">{t.year}</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink">{t.title}</h3>
                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink/65">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="border-y border-line bg-paper-2">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blueprint">How we work</p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/75">
              We aim for solutions that are efficient and cost-effective
              without cutting corners — built with honest communication,
              technical know-how, and a straightforward measure of success:
              the value our customers actually get from working with us.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blueprint">What we're working toward</p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/75">
              To operate as a world-class OEM vendor for precision
              parts, components, die parts, and extrusion machinery
              sub-assemblies — trusted by our customers to hold the line
              on quality as we grow.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-2xl font-semibold text-ink">Where our parts end up</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="rounded-sm border border-line bg-paper-2 px-4 py-2 font-mono text-xs uppercase tracking-wide text-ink/70"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
