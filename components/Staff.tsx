/**
 * Five hairlines, like a musical staff. Stretches to whatever box it is given;
 * `vectorEffect` keeps the strokes 1px at any height, so the spacing is the
 * only thing that scales.
 */
export function Staff({
  className,
  lines = 5,
}: {
  className?: string;
  lines?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox={`0 -0.5 100 ${lines}`}
      overflow="visible"
    >
      {Array.from({ length: lines }, (_, i) => (
        <line
          key={i}
          x1="0"
          x2="100"
          y1={i}
          y2={i}
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}
