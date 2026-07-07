export type MotifKind = 'contour' | 'grid' | 'network'

/**
 * Generated SVG texture standing in for real project photography.
 * Not a photo — each kind echoes the actual shape of the work
 * (land contours, a booking grid, a knowledge graph), never a
 * flat colored placeholder. See DESIGN.md §5, Case File Rows.
 */
export default function Motif({ kind, className }: { kind: MotifKind; className?: string }) {
  const stroke = 'var(--color-primary)'

  if (kind === 'contour') {
    return (
      <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
        {[24, 46, 70, 96, 124, 154, 186].map((y, i) => (
          <path
            key={y}
            d={`M -10 ${y} C 40 ${y - 18 + i * 2}, 70 ${y + 22 - i}, 110 ${y - 8}, 150 ${y + 14}, 180 ${y - 6}, 210 ${y + 4}`}
            fill="none"
            stroke={stroke}
            strokeWidth={i === 3 ? 1.4 : 0.7}
            opacity={i === 3 ? 0.55 : 0.28}
          />
        ))}
      </svg>
    )
  }

  if (kind === 'grid') {
    return (
      <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={i * 25}
            y1={0}
            x2={i * 25}
            y2={200}
            stroke={stroke}
            strokeWidth={i % 4 === 0 ? 1.2 : 0.5}
            opacity={i % 4 === 0 ? 0.4 : 0.2}
          />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1={0}
            y1={i * 25}
            x2={200}
            y2={i * 25}
            stroke={stroke}
            strokeWidth={i % 4 === 0 ? 1.2 : 0.5}
            opacity={i % 4 === 0 ? 0.4 : 0.2}
          />
        ))}
        <rect x="50" y="75" width="50" height="50" fill="none" stroke={stroke} strokeWidth="1.4" opacity="0.55" />
      </svg>
    )
  }

  // network
  const nodes = [
    [30, 40], [100, 20], [170, 55], [60, 100], [140, 110], [90, 165], [30, 150], [175, 150],
  ]
  const edges: [number, number][] = [
    [0, 1], [1, 2], [1, 3], [3, 4], [2, 4], [3, 5], [5, 6], [4, 7],
  ]
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke={stroke}
          strokeWidth="0.7"
          opacity="0.3"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 4 ? 4 : 2.5} fill={stroke} opacity={i === 4 ? 0.6 : 0.4} />
      ))}
    </svg>
  )
}
