// Custom blueprint-style line-art icons, matching the hero's technical
// drawing aesthetic. All strokes use currentColor so they inherit the
// text-blueprint color set where they're used.

const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }

export function VmcIcon(props) {
  return (
    <svg viewBox="0 0 140 140" {...props}>
      <g {...common}>
        <rect x="20" y="108" width="100" height="12" />
        <rect x="96" y="24" width="14" height="86" />
        <rect x="56" y="24" width="40" height="11" />
        <rect x="50" y="35" width="14" height="28" />
        <rect x="30" y="96" width="50" height="9" />
        <rect x="49" y="86" width="14" height="10" />
        <line x1="57" y1="63" x2="57" y2="86" strokeDasharray="3 3" opacity="0.55" />
      </g>
    </svg>
  )
}

export function TurningIcon({ variant = 'lathe', ...props }) {
  return (
    <svg viewBox="0 0 140 140" {...props}>
      <g {...common}>
        <rect x="16" y="94" width="108" height="8" />
        <rect x="16" y="52" width="28" height="42" />
        <circle cx="48" cy="73" r="11" />
        <line x1="48" y1="73" x2="100" y2="73" strokeWidth="4" />
        <path d="M100 60 L118 73 L100 86 Z" />
        {variant === 'cnc' ? (
          <>
            <rect x="20" y="30" width="20" height="14" />
            <line x1="24" y1="34" x2="36" y2="34" strokeWidth="1" opacity="0.6" />
            <line x1="24" y1="38" x2="36" y2="38" strokeWidth="1" opacity="0.6" />
          </>
        ) : (
          <>
            <circle cx="22" cy="58" r="4" />
            <circle cx="22" cy="88" r="4" />
          </>
        )}
      </g>
    </svg>
  )
}

export function DrillIcon(props) {
  return (
    <svg viewBox="0 0 140 140" {...props}>
      <g {...common}>
        <rect x="30" y="110" width="40" height="10" />
        <rect x="46" y="24" width="10" height="96" />
        <rect x="56" y="40" width="46" height="10" />
        <rect x="88" y="50" width="14" height="18" />
        <rect x="40" y="78" width="40" height="8" />
        <line x1="95" y1="68" x2="95" y2="82" strokeDasharray="3 3" opacity="0.55" />
        <circle cx="95" cy="86" r="2.5" />
      </g>
    </svg>
  )
}

export function BandsawIcon(props) {
  return (
    <svg viewBox="0 0 140 140" {...props}>
      <g {...common}>
        <circle cx="66" cy="32" r="13" />
        <circle cx="66" cy="108" r="13" />
        <line x1="53" y1="45" x2="53" y2="95" />
        <line x1="79" y1="45" x2="79" y2="95" />
        <rect x="98" y="20" width="10" height="100" />
        <rect x="66" y="20" width="42" height="8" />
        <rect x="66" y="112" width="42" height="8" />
        <rect x="28" y="66" width="82" height="8" />
      </g>
    </svg>
  )
}

export function CaliperIcon(props) {
  return (
    <svg viewBox="0 0 140 140" {...props}>
      <g {...common}>
        <rect x="18" y="62" width="100" height="8" />
        <path d="M22 40 L22 70 L36 70 L36 50 Z" />
        <path d="M68 40 L68 70 L54 70 L54 50 Z" />
        <circle cx="45" cy="45" r="8" />
        <rect x="92" y="48" width="26" height="16" />
        <line x1="97" y1="56" x2="113" y2="56" strokeWidth="1" opacity="0.6" />
      </g>
    </svg>
  )
}
