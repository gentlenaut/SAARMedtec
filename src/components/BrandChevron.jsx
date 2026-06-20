// ── BrandChevron ─────────────────────────────────────────────────────────────
// The twin-peak "M" mark from the SAAR MEDTEC logo — used as a decorative
// watermark in corners (hero, footer), echoing the brand deck.
export default function BrandChevron({ color = 'var(--red)', className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 120 64" fill={color}
      preserveAspectRatio="xMidYMax meet" aria-hidden="true">
      <path d="M2 64 L31 2 L60 64 L46 64 L31 30 L16 64 Z"/>
      <path d="M60 64 L89 2 L118 64 L104 64 L89 30 L74 64 Z"/>
    </svg>
  );
}
