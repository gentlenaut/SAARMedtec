import Icon from './Icon.jsx';

// ── Branded placeholder ──────────────────────────────────────────────────────
// Shown until a real photo is supplied via `src`. Designed to look intentional
// (brand block + icon + label) rather than a broken/empty box.
// tone: 'deep' (dark), 'light' (paper), 'red' (solid brand-red container — the
// SAAR deck card style: white outline icon + white label).
const SURFACE = {
  deep:  { bg:'var(--deep)',    fg:'rgba(244,245,246,0.92)', sub:'rgba(244,245,246,0.40)', motif:'rgba(244,245,246,0.18)',
    img:'radial-gradient(120% 130% at 0% 0%, rgba(255,255,255,0.07), transparent 52%), radial-gradient(100% 120% at 100% 100%, rgba(226,35,26,0.22), transparent 46%)' },
  light: { bg:'var(--paper-3)', fg:'var(--ink)',             sub:'var(--muted)',           motif:'rgba(20,24,29,0.14)',
    img:'radial-gradient(120% 130% at 0% 0%, rgba(20,24,29,0.05), transparent 52%), radial-gradient(100% 120% at 100% 100%, rgba(226,35,26,0.08), transparent 46%)' },
  red:   { bg:'var(--red)',     fg:'#ffffff',                sub:'rgba(255,255,255,0.72)', motif:'rgba(255,255,255,0.92)',
    img:'linear-gradient(135deg, rgba(255,255,255,0.16), rgba(255,255,255,0) 55%), linear-gradient(0deg, rgba(0,0,0,0.10), transparent 60%)' },
};

function Placeholder({ label, tone = 'deep', icon = 'pulse' }) {
  const s = SURFACE[tone] || SURFACE.deep;
  return (
    <div style={{
      position:'absolute', inset:0, display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center', gap:16, padding:'24px',
      textAlign:'center', backgroundColor: s.bg, backgroundImage: s.img,
    }}>
      <span style={{ color: s.motif }}><Icon name={icon} size={44} stroke={1.25}/></span>
      {label && (
        <div className="display" style={{ color:s.fg, fontSize:'clamp(15px,1.5vw,20px)',
          fontWeight:600, letterSpacing:'-0.01em', maxWidth:360, lineHeight:1.2 }}>
          {label}
        </div>
      )}
      <span className="eyebrow" style={{ color:s.sub, fontSize:10 }}>Placeholder image</span>
    </div>
  );
}

// ── Figure ───────────────────────────────────────────────────────────────────
// Consistent aspect-ratio media box. Pass `src` for a real image; omit it to
// show the branded placeholder. `ratio` is any CSS aspect-ratio (e.g. "16 / 9").
export default function Figure({
  src, alt = '', ratio = '16 / 9', label, icon, tone = 'deep',
  caption, eager = false, fill = false, style, className,
}) {
  const s = SURFACE[tone] || SURFACE.deep;
  const box = fill ? { width:'100%', height:'100%' } : { width:'100%', aspectRatio:ratio };
  return (
    <figure className={className} style={{ margin:0, height: fill ? '100%' : undefined, ...style }}>
      <div style={{ position:'relative', ...box, overflow:'hidden', backgroundColor: s.bg }}>
        {src ? (
          <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async"
            style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}/>
        ) : (
          <Placeholder label={label} tone={tone} icon={icon}/>
        )}
      </div>
      {caption && (
        <figcaption className="eyebrow" style={{ color:'var(--faint)', marginTop:12 }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
