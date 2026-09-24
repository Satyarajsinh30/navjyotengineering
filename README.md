# Navjyot Engineering — Website (original design)

A React + Vite + Tailwind CSS site for Navjyot Engineering. This is an
original design, not a reskin of the old site — built around a
technical/blueprint aesthetic (slab-serif headlines, monospace spec
labels, hairline rules, a line-art technical drawing in the hero) using
only the underlying facts of the business: founding year, MSME
certification, mission/vision, real machine specs, and contact details.
The logo is the only asset carried over unchanged, as requested.

## Run it locally

```
npm install
npm run dev
```

Open the printed http://localhost:5173 URL.

## Build for production

```
npm run build
```

Output goes to `dist/`. Deploy `dist/` to Vercel, Netlify, or GitHub Pages.

## About the contact form

The contact form on `/contact` is fully built in the UI but is not wired
to a backend yet (per request). Submitting it shows a success message
locally without actually sending anything. Look for the `TODO` comment
in `src/pages/Contact.jsx` — swap it for a real API call once the
backend exists.
