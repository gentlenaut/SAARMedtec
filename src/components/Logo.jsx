import React from 'react';
import SaarLogomark from './SaarLogomark.jsx';

// ── Logo ─────────────────────────────────────────────────────────────────────
// Renders the real brand logo from /assets/. Until the image file is added it
// falls back to a clean mark + wordmark, so nothing looks broken.
//   • light version  → public/assets/logo-saarmedtec.png        (for light backgrounds)
//   • dark/footer    → public/assets/logo-saarmedtec-light.png  (white, for dark backgrounds)
export default function Logo({ light = false, height = 44 }) {
  const [failed, setFailed] = React.useState(false);
  const src = light ? '/assets/logo-saarmedtec-light.png' : '/assets/logo-saarmedtec.png';

  if (failed) {
    const color = light ? 'var(--on-deep)' : 'var(--ink)';
    const sub   = light ? 'var(--on-deep-muted)' : 'var(--muted)';
    return (
      <span style={{ display:'flex', alignItems:'center', gap:11 }}>
        <SaarLogomark color={color} size={30}/>
        <span style={{ display:'flex', flexDirection:'column', alignItems:'flex-start', lineHeight:1.05 }}>
          <span style={{ fontFamily:'var(--font-sans)', fontWeight:700, fontSize:17,
            letterSpacing:'-0.01em', color }}>SAARMedTec</span>
          <span className="eyebrow" style={{ fontSize:9, letterSpacing:'0.18em', color:sub, marginTop:2 }}>
            Healthcare Infrastructure
          </span>
        </span>
      </span>
    );
  }

  return (
    <img src={src} alt="SAARMedTec — Leading Healthcare Provider"
      onError={() => setFailed(true)}
      style={{ height, width:'auto', display:'block' }}/>
  );
}
