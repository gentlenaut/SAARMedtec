import Section from '../components/Section.jsx';
import Icon from '../components/Icon.jsx';
import { Reveal, Eyebrow, Button } from '../components/primitives.jsx';
import PageHead from './PageHead.jsx';
import { BUSINESS_UNITS } from '../data.js';

const PATHWAY = [
  { k:'01', t:'Screening & Diagnosis', d:'Imaging, laboratory and endoscopy platforms that find disease earlier and with more certainty.' },
  { k:'02', t:'Intervention',          d:'Surgical, robotic and cath-lab systems for precise, minimally invasive treatment.' },
  { k:'03', t:'Therapy & Recovery',    d:'Respiratory, diabetes and consumable solutions that carry patients through care.' },
  { k:'04', t:'Lifelong Support',      d:'Service, genuine spares and training that keep every device — and outcome — running.' },
];

export default function ServicesPage({ setPage }) {
  return (
    <div>
      <PageHead num="02" crumb="Expertise"
        title={<>14 clinical<br/>specialties.</>}
        lead="World-class medical technology across every discipline — sourced from 29 global partners, delivered and supported nationwide." />

      {/* Outcome pathway — frames the catalogue around the patient journey (Siemens/GE) */}
      <Section bg="var(--paper-2)" pad="0 0 96px">
        <Reveal style={{ maxWidth:620, marginBottom:48 }}>
          <Eyebrow>One partner, the whole pathway</Eyebrow>
          <h2 className="display" style={{ fontSize:'clamp(24px,3vw,38px)', marginTop:20 }}>
            From the first scan to lifelong support.
          </h2>
        </Reveal>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', borderTop:'1px solid var(--ink)' }}
          className="path-grid">
          {PATHWAY.map((p,i)=>(
            <Reveal key={p.k} delay={i*80} style={{ padding:'30px 24px 36px',
              borderLeft:i?'1px solid var(--line)':'none' }}>
              <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:18 }}>
                <span className="eyebrow tnum" style={{ color:'var(--red)' }}>{p.k}</span>
                {i<PATHWAY.length-1 && <span style={{ flex:1, height:1, background:'var(--line-2)' }}/>}
              </div>
              <h3 style={{ fontSize:18, fontWeight:600, marginBottom:10, letterSpacing:'-0.01em' }}>{p.t}</h3>
              <p style={{ fontSize:13.5, lineHeight:1.6, color:'var(--muted)' }}>{p.d}</p>
            </Reveal>
          ))}
        </div>
        <style>{`
          @media (max-width:780px){
            .path-grid{ grid-template-columns:1fr 1fr !important; }
            .path-grid > *:nth-child(3){ border-left:none !important; }
            .path-grid > *:nth-child(n+3){ border-top:1px solid var(--line); }
          }
          @media (max-width:480px){
            .path-grid{ grid-template-columns:1fr !important; }
            .path-grid > *{ border-left:none !important; border-top:1px solid var(--line); }
          }
        `}</style>
      </Section>

      <Section bg="var(--paper)" pad="96px 0 120px">
        <Reveal style={{ marginBottom:8 }}><Eyebrow>The 14 specialties</Eyebrow></Reveal>
        <div style={{ borderTop:'1px solid var(--ink)', marginTop:28 }}>
          {BUSINESS_UNITS.map((u,i)=>(
            <Reveal key={u.id} delay={(i%3)*50} style={{
              display:'grid', gridTemplateColumns:'auto 1.4fr 1.6fr auto', gap:32, alignItems:'center',
              padding:'30px 8px', borderBottom:'1px solid var(--line)', cursor:'pointer',
              transition:'background 0.25s var(--ease), padding 0.25s var(--ease)' }}
              className="unit-row"
              onClick={()=>setPage('contact')}
              onMouseEnter={e=>{ e.currentTarget.style.background='var(--paper-2)'; e.currentTarget.style.paddingLeft='24px';
                const a=e.currentTarget.querySelector('.unit-arrow'); if(a){a.style.opacity='1'; a.style.transform='none';}
                const t=e.currentTarget.querySelector('.unit-title'); if(t) t.style.color='var(--red)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.background='transparent'; e.currentTarget.style.paddingLeft='8px';
                const a=e.currentTarget.querySelector('.unit-arrow'); if(a){a.style.opacity='0'; a.style.transform='translateX(-8px)';}
                const t=e.currentTarget.querySelector('.unit-title'); if(t) t.style.color='var(--ink)'; }}>
              <span className="display tnum" style={{ color:'var(--red)', fontSize:15, letterSpacing:'-0.01em' }}>{u.id}</span>
              <h3 className="unit-title" style={{ fontSize:'clamp(20px,2.4vw,28px)', fontWeight:600,
                letterSpacing:'-0.01em', color:'var(--ink)', transition:'color 0.25s var(--ease)' }}>{u.name}</h3>
              <p style={{ fontSize:15, color:'var(--muted)', lineHeight:1.5 }} className="unit-desc">{u.desc}</p>
              <div style={{ display:'flex', alignItems:'center', gap:18, justifyContent:'flex-end' }}>
                <span className="eyebrow" style={{ color:'var(--faint)', fontSize:11, whiteSpace:'nowrap' }}>{u.brands}</span>
                <span className="unit-arrow" style={{ color:'var(--red)', opacity:0,
                  transform:'translateX(-8px)', transition:'all 0.25s var(--ease)' }}>
                  <Icon name="arrow" size={20}/>
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="svc-cta deep-surface" style={{ marginTop:72, color:'var(--on-deep)',
          padding:'56px 48px', display:'grid', gridTemplateColumns:'1.5fr 1fr', gap:40,
          alignItems:'center' }}>
          <div>
            <h3 className="display" style={{ fontSize:'clamp(24px,3vw,38px)', color:'var(--on-deep)' }}>
              Looking for a specific product or platform?
            </h3>
            <p style={{ fontSize:16, color:'var(--on-deep-muted)', marginTop:14, maxWidth:460, lineHeight:1.6 }}>
              Our clinical specialists will help you find the right fit for your facility.
            </p>
          </div>
          <div style={{ justifySelf:'end' }}>
            <Button variant="onDark" size="lg" onClick={()=>setPage('contact')}>Request a Quote</Button>
          </div>
        </Reveal>
      </Section>

      <style>{`
        @media (max-width:880px){
          .unit-row{ grid-template-columns:auto 1fr auto !important; gap:18px !important; }
          .unit-desc{ display:none; }
        }
        @media (max-width:600px){
          .svc-cta{ grid-template-columns:1fr !important; padding:36px 28px !important; }
          .svc-cta > *:last-child{ justify-self:start !important; }
        }
      `}</style>
    </div>
  );
}
