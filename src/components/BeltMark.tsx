/**
 * Orion's Belt — three stars in a diagonal line, echoing the mark used
 * in the orions-belt dashboard's own nav. Rendered here at hero scale
 * for kyleisun.cool's /orion section. Uses currentColor/var(--color-primary)
 * so it automatically picks up the brighter dark-mode blueprint via the
 * .orion-dark scope — no props needed.
 */
export default function BeltMark({ className }: { className?: string }) {
  const stars = [
    { x: 30, y: 70, r: 5 },
    { x: 130, y: 44, r: 6 },
    { x: 232, y: 16, r: 5 },
  ]

  return (
    <svg viewBox="13 -1 236 88" className={className} aria-hidden="true">
      <defs>
        <filter id="belt-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <linearGradient id="belt-line" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="18" y1="74" x2="244" y2="12" stroke="url(#belt-line)" strokeWidth="1" />
      {stars.map((s, i) => (
        <g key={i}>
          <circle cx={s.x} cy={s.y} r={s.r * 2.6} fill="var(--color-primary)" opacity="0.3" filter="url(#belt-glow)" />
          <circle cx={s.x} cy={s.y} r={s.r} fill="var(--color-primary)" />
        </g>
      ))}
    </svg>
  )
}
