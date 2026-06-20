import { Reveal, Eyebrow } from '../components/primitives.jsx';

// Shared header for inner pages.
export default function PageHead({ num, crumb, title, lead }) {
  return (
    <header style={{ background:'var(--paper)', padding:'168px 0 0' }}>
      <div className="container">
        <Reveal mode="fade" style={{ display:'flex', justifyContent:'space-between',
          alignItems:'baseline', flexWrap:'wrap', gap:16, paddingBottom:36 }}>
          <Eyebrow color="var(--red)">{crumb}</Eyebrow>
          <span className="eyebrow" style={{ color:'var(--faint)' }}>§{num} · SAARMedTec</span>
        </Reveal>
        <div style={{ height:1, background:'var(--ink)' }} className="rule-draw"/>
        <Reveal delay={80}>
          <h1 className="display" style={{ fontSize:'clamp(40px,6.5vw,92px)', margin:'44px 0 0', maxWidth:1100 }}>
            {title}
          </h1>
        </Reveal>
        {lead && (
          <Reveal delay={200}>
            <p style={{ fontSize:'clamp(17px,1.7vw,21px)', lineHeight:1.6, color:'var(--ink-2)',
              maxWidth:680, marginTop:32 }}>{lead}</p>
          </Reveal>
        )}
        <div style={{ height:64 }}/>
      </div>
    </header>
  );
}
