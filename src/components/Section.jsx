export default function Section({ children, bg = 'var(--paper)', pad = '120px 0', dark, style, id, className, chevron }) {
  // Uses backgroundColor (not the `background` shorthand) so a .deep-surface
  // gradient layer passed via className is preserved.
  // `chevron` adds a subtle brand-chevron corner anchor (company-profile style).
  const cls = [className, chevron && 'pattern-bg subtle', chevron && dark && 'on-dark']
    .filter(Boolean).join(' ');
  return (
    <section id={id} className={cls || undefined} style={{ backgroundColor:bg, padding:pad,
      color: dark ? 'var(--on-deep)' : 'var(--ink)', ...style }}>
      {chevron && <div className="pattern-layer" aria-hidden="true"/>}
      <div className="container">{children}</div>
    </section>
  );
}
