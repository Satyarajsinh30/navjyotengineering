// Floating WhatsApp click-to-chat button, shown on every page.
//
// TODO: replace PHONE_NUMBER with the real WhatsApp Business number,
// in international format with no spaces, dashes or leading "+"
// e.g. a number like +91 98765 43210 becomes "919876543210".
const PHONE_NUMBER = '919978441381'
const PREFILLED_MESSAGE = "Hi, I'd like to enquire about a machining job."

export default function WhatsAppButton() {
  const href = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-paper-2 shadow-lg transition-transform hover:scale-105 hover:bg-oxide"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M17.6 6.3A8.9 8.9 0 0 0 3.1 16.9L2 22l5.3-1.4A8.9 8.9 0 1 0 17.6 6.3ZM12 20.2a7.6 7.6 0 0 1-3.9-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A7.6 7.6 0 1 1 12 20.2Zm4.2-5.7c-.2-.1-1.3-.7-1.6-.7-.2-.1-.4-.1-.5.1s-.6.7-.7.9-.3.2-.5.1a6.2 6.2 0 0 1-1.8-1.1 6.8 6.8 0 0 1-1.3-1.6c-.1-.2 0-.4.1-.5l.3-.4c.1-.1.1-.2.2-.4a.4.4 0 0 0 0-.4c-.1-.1-.5-1.2-.7-1.7s-.4-.4-.5-.4h-.4a.9.9 0 0 0-.6.3 2.6 2.6 0 0 0-.8 1.9 4.5 4.5 0 0 0 1 2.4 10.3 10.3 0 0 0 4 3.5c.6.2 1 .4 1.4.5a3.3 3.3 0 0 0 1.5.1 2.5 2.5 0 0 0 1.6-1.1 1.9 1.9 0 0 0 .1-1.1c-.1-.1-.2-.1-.4-.2Z" />
      </svg>
    </a>
  )
}
