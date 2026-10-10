import { useState } from 'react'

const initialForm = { name: '', phone: '', email: '', message: '' }
const ADDRESS = '86, Gopal Charan Industrial Exotica, Dhamatvan to Undrel Road, Undrel, Ahmedabad – 382433'
const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // No backend is wired up yet — this simulates a successful submission
    // so the UI/UX is complete and testable end to end.
    // TODO: replace with a real API call once the backend exists, e.g.
    // POST this `form` object to your enquiries endpoint.
    setSent(true)
    setForm(initialForm)
  }

  return (
    <>
      <section className="border-b border-line bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-oxide">New enquiry</p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-ink sm:text-5xl">
            Tell us about the job
          </h1>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">Direct contact</h2>
            <div className="mt-4 space-y-5 text-sm text-ink/70">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-ink/40">Address</p>
                <p className="mt-1 leading-relaxed">
                  86, Gopal Charan Industrial Exotica, Dhamatvan to Undrel
                  Road, Undrel, Ahmedabad – 382433, India
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-ink/40">Email</p>
                <a href="mailto:navjyotengineering@yahoo.com" className="mt-1 block hover:text-oxide">
                  navjyotengineering@yahoo.com
                </a>
                <a href="mailto:navjyoteng@gmail.com" className="block hover:text-oxide">
                  navjyoteng@gmail.com
                </a>
              </div>
            </div>
            <div className="mt-6 overflow-hidden border border-line">
              <iframe
                title="Navjyot Engineering location"
                src={MAPS_EMBED_SRC}
                className="h-44 w-full max-w-xs"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="corner-marks border border-line bg-paper-2 p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between border-b border-line pb-4">
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-ink/50">
                Job enquiry form
              </span>
              <span className="font-mono text-xs text-ink/30">№ ——</span>
            </div>

            {sent && (
              <div
                role="status"
                className="mb-6 border-l-2 border-oxide bg-oxide/5 px-4 py-3 text-sm text-oxide-dark"
              >
                Your enquiry is ready to send. We'll connect this form to
                email once the backend is in place.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-ink/55">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full border border-line bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-oxide"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-ink/55">
                    Contact no.
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91"
                    className="w-full border border-line bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-oxide"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-ink/55">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full border border-line bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-oxide"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-ink/55">
                  Part / quantity / deadline
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe the part, material, quantity and target date..."
                  rows={5}
                  className="w-full border border-line bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-oxide"
                />
              </div>

              <button
                type="submit"
                className="rounded-sm bg-ink px-6 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-paper-2 transition-colors hover:bg-oxide"
              >
                Submit enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
