const ADDRESS = '86, Gopal Charan Industrial Exotica, Dhamatvan to Undrel Road, Undrel, Ahmedabad – 382433'
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper-2">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <img src="/images/logo.png" alt="" className="h-8 w-8 object-contain" />
            <span className="font-display text-base font-semibold">Navjyot Engineering</span>
          </div>
          <p className="mt-3 font-mono text-xs uppercase tracking-wide text-paper-2/45">
            Est. 2006 · Ahmedabad, IN
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-blueprint-light">Address</p>
          <p className="mt-2 text-sm leading-relaxed text-paper-2/75">
            86, Gopal Charan Industrial Exotica,
            <br />
            Dhamatvan to Undrel Road, Undrel,
            <br />
            Ahmedabad – 382433, India
          </p>
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block font-mono text-xs uppercase tracking-wide text-oxide hover:underline"
          >
            View on map →
          </a>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-blueprint-light">Email</p>
          <p className="mt-2 space-y-1 text-sm text-paper-2/75">
            <a href="mailto:navjyotengineering@yahoo.com" className="block hover:text-oxide">
              navjyotengineering@yahoo.com
            </a>
            <a href="mailto:navjyoteng@gmail.com" className="block hover:text-oxide">
              navjyoteng@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-paper-2/10 py-4 text-center font-mono text-[11px] uppercase tracking-wide text-paper-2/35">
        © {new Date().getFullYear()} Navjyot Engineering
      </div>
    </footer>
  )
}
