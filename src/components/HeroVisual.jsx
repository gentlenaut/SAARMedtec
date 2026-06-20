// ── HeroVisual ───────────────────────────────────────────────────────────────
// Animated brand motif for the hero mosaic: external nodes (global partners)
// flow along arcs into a central SAAR hub — a literal read of "bridging the path
// to better care". Pure SVG + CSS (keyframes live in index.css, .hv-* classes).
// Respects prefers-reduced-motion (animations disabled there).

const HUB = { x: 300, y: 235 };

const NODES = [
  { x: 80,  y: 90,  float: 0 },
  { x: 58,  y: 250, float: 0.8 },
  { x: 112, y: 400, float: 1.6 },
  { x: 470, y: 110, float: 1.2 },
  { x: 460, y: 378, float: 0.4 },
];

// Cubic path from each node, curving into the hub.
const ARCS = [
  `M80 90 C 150 120, 205 150, ${HUB.x} ${HUB.y}`,
  `M58 250 C 150 250, 205 238, ${HUB.x} ${HUB.y}`,
  `M112 400 C 175 380, 225 300, ${HUB.x} ${HUB.y}`,
  `M470 110 C 415 150, 372 168, ${HUB.x} ${HUB.y}`,
  `M460 378 C 408 348, 358 298, ${HUB.x} ${HUB.y}`,
];

export default function HeroVisual() {
  return (
    <svg className="hero-visual" viewBox="0 0 520 480" preserveAspectRatio="xMidYMid slice"
      role="img" aria-label="Global medical partners connecting to SAARMedTec in Iraq">
      <defs>
        <pattern id="hv-dots" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="1.4" cy="1.4" r="1.4" fill="rgba(244,245,246,0.07)"/>
        </pattern>
        <radialGradient id="hv-hub" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="rgba(226,35,26,0.60)"/>
          <stop offset="60%" stopColor="rgba(226,35,26,0.14)"/>
          <stop offset="100%" stopColor="rgba(226,35,26,0)"/>
        </radialGradient>
      </defs>

      {/* dot field */}
      <rect x="0" y="0" width="520" height="480" fill="url(#hv-dots)"/>

      {/* base arcs */}
      <g fill="none" stroke="rgba(244,245,246,0.13)" strokeWidth="1">
        {ARCS.map((d,i)=><path key={i} d={d}/>)}
      </g>

      {/* flowing arcs (dotted, marching toward hub) — one in accent red */}
      <g fill="none" strokeWidth="1.5" strokeLinecap="round">
        {ARCS.map((d,i)=>(
          <path key={i} d={d} className="hv-flow"
            stroke={i===2 ? 'var(--red)' : 'rgba(244,245,246,0.5)'}
            strokeDasharray="2 13"
            style={{ animationDelay: `${i*0.7}s`, animationDuration: `${3.4 + i*0.5}s` }}/>
        ))}
      </g>

      {/* outer nodes */}
      <g>
        {NODES.map((n,i)=>(
          <g key={i} className="hv-float" style={{ animationDelay:`${n.float}s` }}>
            <circle cx={n.x} cy={n.y} r="11" fill="var(--deep)" stroke="rgba(244,245,246,0.4)" strokeWidth="1"/>
            <circle cx={n.x} cy={n.y} r="3" fill="rgba(244,245,246,0.65)"/>
          </g>
        ))}
      </g>

      {/* hub glow + pulsing rings */}
      <circle cx={HUB.x} cy={HUB.y} r="120" fill="url(#hv-hub)"/>
      {[0,1,2].map(i=>(
        <circle key={i} className="hv-ring" cx={HUB.x} cy={HUB.y} r="30"
          fill="none" stroke="var(--red)" strokeWidth="1.2"
          style={{ animationDelay:`${i*1.5}s`, transformOrigin:`${HUB.x}px ${HUB.y}px` }}/>
      ))}

      {/* hub core — the SAAR mark */}
      <circle cx={HUB.x} cy={HUB.y} r="30" fill="var(--deep-2)" stroke="rgba(244,245,246,0.55)" strokeWidth="1.2"/>
      <rect x={HUB.x-15} y={HUB.y-3} width="30" height="6" fill="var(--red)"/>
      <rect x={HUB.x-3} y={HUB.y-15} width="6" height="30" fill="rgba(244,245,246,0.92)"/>
    </svg>
  );
}
