import Section from '../components/Section.jsx';
import Icon from '../components/Icon.jsx';
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
  const team = [
    { name:'Faris Al-Derzi',    role:'Chief Executive Officer' },
    { name:'Saif Janan',        role:'COO — Iraq' },
    { name:'Deema Obeidat',     role:'COO — Jordan' },
    { name:'Yousef Bani Jaber', role:'Chief Financial Officer' },
  ];
  const creds = [
    { icon:'building', t:'Ministry of Health', s:'Trusted partner since 1984' },
    { icon:'shield',   t:'CE / FDA Certified', s:'All equipment meets international standards' },
    { icon:'doc',      t:'ISO 9001',           s:'Quality-management certification in progress' },
    { icon:'scale',    t:'FCPA & UKBA',        s:'Full anti-bribery & ethical compliance' },
  ];
  return (
    <div>
      <PageHead num="01" crumb="About"
        title={<>Founded 1984.<br/>Still leading.</>}
        lead="SAARMedTec is an enabler within Iraq's healthcare ecosystem — bringing together global medical innovation, local need, and long-term partnership." />

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

      {/* Story — short blocks, not long paragraphs */}
      <Section bg="var(--paper)" pad="clamp(72px,11vw,112px) 0">
        <div style={{ display:'grid', gridTemplateColumns:'0.8fr 2fr', gap:64 }} className="who-grid">
          <Reveal>
            <Eyebrow>Our Story</Eyebrow>
            <Figure ratio="3 / 4" src="/assets/img/about-clinician.jpg"
              alt="A clinical partner of SAARMedTec"
              caption="Partnering with Iraq's clinicians"
              className="media-card" style={{ marginTop:28 }}/>
          </Reveal>
          <div>
            {[
              <>Established in Baghdad in <b style={{color:'var(--ink)',fontWeight:600}}>1984</b>, with a mandate to bring world-class medical technology within reach of Iraqi institutions.</>,
              <>Today: <b style={{color:'var(--ink)',fontWeight:600}}>140+ employees</b>, 14 business units, and a 75-person specialist sales force across Iraq.</>,
              <>Partnerships with <b style={{color:'var(--ink)',fontWeight:600}}>29 global manufacturers</b> — Medtronic, GE Healthcare, Olympus and more.</>,
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
              <span className="eyebrow tnum" style={{ color:'var(--red)' }}>{v.num}</span>
              <h3 style={{ fontSize:18, fontWeight:600, margin:'24px 0 12px', color:'var(--on-deep)' }}>{v.name}</h3>
              <p style={{ fontSize:13.5, lineHeight:1.6, color:'var(--on-deep-muted)' }}>{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Leadership */}
      <Section bg="var(--paper)" pad="clamp(72px,11vw,112px) 0">
        <Reveal style={{ marginBottom:48 }}>
          <Eyebrow>Leadership</Eyebrow>
          <h2 className="display" style={{ fontSize:'clamp(28px,3.6vw,48px)', marginTop:22 }}>Executive team</h2>
        </Reveal>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', borderTop:'1px solid var(--ink)' }}
          className="cap-grid">
          {team.map((m,i)=>(
            <Reveal key={m.name} delay={i*70} style={{ padding:'36px 24px 40px',
              borderLeft:i?'1px solid var(--line)':'none' }}>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:34, fontWeight:500,
                color:'var(--ink)', letterSpacing:'-0.02em', marginBottom:24 }}>
                {m.name.split(' ').map(w=>w[0]).slice(0,2).join('')}
              </div>
              <h3 style={{ fontSize:17, fontWeight:600, marginBottom:6 }}>{m.name}</h3>
              <div className="eyebrow" style={{ color:'var(--red)', fontSize:11 }}>{m.role}</div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Credentials */}
      <Section bg="var(--paper-2)" pad="clamp(72px,11vw,112px) 0">
        <Reveal style={{ marginBottom:48 }}>
          <Eyebrow>Regulatory & Compliance</Eyebrow>
          <h2 className="display" style={{ fontSize:'clamp(28px,3.6vw,48px)', marginTop:22 }}>Standards that matter</h2>
        </Reveal>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:1, background:'var(--line-2)',
          border:'1px solid var(--line-2)' }} className="cred-grid">
          {creds.map((c,i)=>(
            <Reveal key={c.t} delay={i*70} style={{ background:'var(--paper)', padding:'32px 26px 36px' }}>
              <span style={{ color:'var(--red)' }}><Icon name={c.icon} size={26}/></span>
              <h3 style={{ fontSize:16, fontWeight:600, margin:'24px 0 8px' }}>{c.t}</h3>
              <p style={{ fontSize:13.5, lineHeight:1.6, color:'var(--muted)' }}>{c.s}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <style>{`
        @media (max-width:880px){
          .vm-grid{ grid-template-columns:1fr !important; }
          .val-grid{ grid-template-columns:1fr 1fr !important; }
          .val-grid > *:nth-child(odd){ border-left:none !important; }
          .val-grid > *:nth-child(n+3){ border-top:1px solid var(--line-deep); }
          .cred-grid{ grid-template-columns:1fr 1fr !important; }
        }
        @media (max-width:520px){ .cred-grid, .val-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </div>
  );
}
