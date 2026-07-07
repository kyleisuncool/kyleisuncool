type Spec = { label: string; value: string }

/**
 * A title-block reference, not a card: one ruled strip, inline
 * label/value pairs. See DESIGN.md §5, Spec Sheet.
 */
export default function SpecSheet({ specs }: { specs: Spec[] }) {
  return (
    <div className="border-t border-b border-hairline py-4 flex flex-wrap gap-x-10 gap-y-3">
      {specs.map((spec) => (
        <div key={spec.label}>
          <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted mb-1">
            {spec.label}
          </p>
          <p className="text-sm font-medium text-ink">{spec.value}</p>
        </div>
      ))}
    </div>
  )
}
