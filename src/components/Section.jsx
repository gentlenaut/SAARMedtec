export default function Section({ children, bg = 'var(--paper)', pad = '120px 0', dark, style, id, className }) {
  // Uses backgroundColor (not the `background` shorthand) so a .deep-surface
  // gradient layer passed via className is preserved.
  return (
    <section id={id} className={className} style={{ backgroundColor:bg, padding:pad,
      color: dark ? 'var(--on-deep)' : 'var(--ink)', ...style }}>
      <div className="container">{children}</div>
    </section>
  );
}
