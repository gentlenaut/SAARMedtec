import Section from '../components/Section.jsx';
import Figure from '../components/Figure.jsx';
import { Reveal, Eyebrow, Button } from '../components/primitives.jsx';
import PageHead from './PageHead.jsx';

export default function AboutPage({ setPage }) {
  const values = [
    { num:'01', name:'Responsiveness', desc:'Acting with clarity, speed, and purpose.' },
    { num:'02', name:'Consistency',    desc:'Delivering reliability across every interaction.' },
    { num:'03', name:'Accountability', desc:'Owning our commitments from start to finish.' },
    { num:'04', name:'Compassion',     desc:'Understanding the human impact of every solution.' },
    { num:'05', name:'Quality',        desc:'Upholding uncompromised standards in all operations.' },
  ];
  // NOTE: draft copy — replace with the company-profile text where marked.
  const compliance = [
    { group:'Quality Management', items:[
      { t:'ISO 9001', s:'Quality management system certification' },
      { t:'Quality Management System', s:'Documented processes across every operation' },
      { t:'Audit Achievements', s:'Successful third-party and manufacturer audits' },
      { t:'MECOMED', s:'Member of the regional medical-device association' },
    ]},
    { group:'Product Certifications', items:[
      { t:'CE Certified Products', s:'European conformity on the devices we distribute' },
      { t:'FDA Cleared Products', s:'US FDA clearance on the devices we distribute' },
    ]},
    { group:'Government Recognition', items:[
      { t:'Ministry of Health', s:'Approved & trusted partner since 1984' },
      { t:'KIMADIA', s:'State Co. for Drugs & Medical Appliances' },
    ]},
  ];
  return (
    <div>
      <PageHead num="01" crumb="About"
        title={<>Founded 1984.<br/>Still leading.</>}
        lead="SAARMedTec is an enabler within Iraq's healthcare ecosystem — bringing together global medical innovation, local need, and long-term partnership." />

      {/* Motto */}
      <Section bg="var(--paper)" pad="0 0 clamp(64px,8vw,96px)">
        <Reveal style={{ borderTop:'1px solid var(--ink)', paddingTop:'clamp(40px,5vw,64px)' }}>
          <Eyebrow color="var(--red)">Our Motto</Eyebrow>
          <p className="display" style={{ fontSize:'clamp(26px,3.6vw,52px)', fontWeight:600,
            letterSpacing:'-0.02em', lineHeight:1.12, marginTop:24, maxWidth:1000 }}>
            Bridging the path to better care — through integrity, reliability and quality.
          </p>
        </Reveal>
      </Section>

      {/* Vision / Mission */}
      <Section bg="var(--paper-2)" pad="clamp(72px,11vw,112px) 0">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:1, background:'var(--line-2)',
          border:'1px solid var(--line-2)' }} className="vm-grid">
          {[
            { k:'Vision', t:'To shape the future of healthcare delivery in Iraq — elevating quality, strengthening clinical capability, and empowering better outcomes at every level of care.' },
            { k:'Mission', t:'Bridging global medical innovation with local healthcare needs, through trusted partnerships built on integrity, responsiveness and long-term commitment.' },
          ].map((b,i)=>(
            <Reveal key={b.k} delay={i*100} style={{ background:'var(--paper)', padding:'48px 44px' }}>
              <Eyebrow>{b.k}</Eyebrow>
              <p style={{ fontSize:'clamp(18px,2vw,24px)', lineHeight:1.5, color:'var(--ink)',
                marginTop:24, fontWeight:400, letterSpacing:'-0.01em' }}>{b.t}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Story */}
      <Section bg="var(--paper)" pad="clamp(72px,11vw,112px) 0">
        <div style={{ display:'grid', gridTemplateColumns:'0.8fr 2fr', gap:64 }} className="who-grid">
          <Reveal>
            <Eyebrow>Our Story</Eyebrow>
            <Figure ratio="3 / 4" src="/assets/img/about-facility.jpg"
              alt="Medical imaging infrastructure"
              caption="Infrastructure delivered across Iraq"
              className="media-card" style={{ marginTop:28 }}/>
          </Reveal>
          <div>
            {[
              <>Established in Baghdad in <b style={{color:'var(--ink)',fontWeight:600}}>1984</b>, with a mandate to bring world-class medical technology within reach of Iraqi institutions.</>,
              <>Today: <b style={{color:'var(--ink)',fontWeight:600}}>140+ employees</b>, 14 business units, and a 75-person specialist sales force across Iraq.</>,
              <>Partnerships with <b style={{color:'var(--ink)',fontWeight:600}}>29 global manufacturers</b> — Medtronic, Olympus, Zimmer Biomet and more.</>,
            ].map((t,i)=>(
              <Reveal key={i} delay={i*70} style={{ padding:'28px 0', borderTop:'1px solid var(--line)' }}>
                <p style={{ fontSize:'clamp(19px,2.4vw,28px)', lineHeight:1.4, color:'var(--ink-2)',
                  fontWeight:400, letterSpacing:'-0.01em' }}>{t}</p>
              </Reveal>
            ))}
            <div style={{ marginTop:36 }}>
              <Button variant="solid" icon="arrowUpRight" onClick={()=>setPage('contact')}>Download Company Profile 2026</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section bg="var(--deep)" dark pad="clamp(72px,11vw,112px) 0" className="deep-surface">
        <Reveal style={{ marginBottom:56 }}>
          <Eyebrow color="var(--red)">Core Values</Eyebrow>
          <h2 className="display" style={{ fontSize:'clamp(28px,3.6vw,48px)', marginTop:22, color:'var(--on-deep)' }}>
            The principles we operate by.
          </h2>
        </Reveal>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', borderTop:'1px solid var(--line-deep)' }}
          className="val-grid">
          {values.map((v,i)=>(
            <Reveal key={v.num} delay={i*70} style={{ padding:'36px 22px 40px',
              borderLeft: i? '1px solid var(--line-deep)':'none' }}>
              <span className="display tnum" style={{ color:'var(--red)', fontSize:22, letterSpacing:'-0.01em' }}>{v.num}</span>
              <h3 style={{ fontSize:18, fontWeight:600, margin:'20px 0 12px', color:'var(--on-deep)' }}>{v.name}</h3>
              <p style={{ fontSize:13.5, lineHeight:1.6, color:'var(--on-deep-muted)' }}>{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Quality & Compliance — grouped */}
      <Section bg="var(--paper-2)" pad="clamp(72px,11vw,112px) 0">
        <div style={{ display:'grid', gridTemplateColumns:'0.9fr 1.6fr', gap:64 }} className="who-grid">
          <Reveal>
            <Eyebrow>Quality &amp; Compliance</Eyebrow>
            <h2 className="display" style={{ fontSize:'clamp(28px,3.6vw,44px)', marginTop:22 }}>
              Standards that matter.
            </h2>
            <p style={{ fontSize:15, lineHeight:1.7, color:'var(--muted)', marginTop:22, maxWidth:320 }}>
              Our Quality Policy commits us to consistent, compliant and accountable
              operations — from sourcing and storage to installation and lifelong service.
            </p>
          </Reveal>

          <div>
            {compliance.map((grp,gi)=>(
              <Reveal key={grp.group} delay={gi*80} style={{ paddingTop:gi?40:0 }}>
                <div className="eyebrow" style={{ color:'var(--red)', marginBottom:18 }}>{grp.group}</div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:1,
                  background:'var(--line-2)', border:'1px solid var(--line-2)' }} className="cred-grid">
                  {grp.items.map(it=>(
                    <div key={it.t} style={{ background:'var(--paper)', padding:'26px 24px 28px' }}>
                      <h3 style={{ fontSize:16, fontWeight:600, marginBottom:6 }}>{it.t}</h3>
                      <p style={{ fontSize:13.5, lineHeight:1.6, color:'var(--muted)' }}>{it.s}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <style>{`
        @media (max-width:880px){
          .vm-grid{ grid-template-columns:1fr !important; }
          .val-grid{ grid-template-columns:1fr 1fr !important; }
          .val-grid > *:nth-child(odd){ border-left:none !important; }
          .val-grid > *:nth-child(n+3){ border-top:1px solid var(--line-deep); }
        }
        @media (max-width:520px){ .cred-grid, .val-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </div>
  );
}
