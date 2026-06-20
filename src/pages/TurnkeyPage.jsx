import Section from '../components/Section.jsx';
import Icon from '../components/Icon.jsx';
import Figure from '../components/Figure.jsx';
import { Reveal, Eyebrow, Button } from '../components/primitives.jsx';
import PageHead from './PageHead.jsx';

export default function TurnkeyPage({ setPage }) {
  const steps = [
    { num:'01', icon:'compass', title:'Analysis',     desc:'Site assessment, clinical-needs mapping, regulatory review and feasibility study.' },
    { num:'02', icon:'layers',  title:'Design',       desc:'Space planning, equipment specification and infrastructure blueprinting around clinical workflow.' },
    { num:'03', icon:'cpu',     title:'Construction', desc:'Project management, civil-works coordination and technology infrastructure deployment.' },
    { num:'04', icon:'check',   title:'Delivery',     desc:'Installation, commissioning, staff training, go-live support and handover.' },
  ];
  const projects = [
    { t:'PET/CT Systems', loc:'Major Iraqi hospitals', img:'/assets/img/turnkey-imaging.jpg', d:'First-to-Iraq PET/CT installations with full commissioning, physicist training and service support.' },
    { t:'Operating Rooms', loc:'Public & private', img:'/assets/img/turnkey-or.jpg', d:'Turnkey OR suites — surgical lighting, anaesthesia, imaging and sterile-environment setup.' },
    { t:'Cath Lab Suites', loc:'Cardiac centres', img:'/assets/img/turnkey-cathlab.jpg', d:'Complete cath labs from civil works to live-case proctoring and full staff training.' },
  ];
  return (
    <div>
      <PageHead num="03" crumb="Turnkey Solutions"
        title={<>End-to-end<br/>project delivery.</>}
        lead="From analysis to handover, SAARMedTec manages every stage of your clinical infrastructure project — on time, on budget, beyond expectation." />

      {/* Process */}
      <Section bg="var(--paper)" pad="0 0 120px">
        <Reveal><Eyebrow>The Process</Eyebrow></Reveal>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', borderTop:'1px solid var(--ink)',
          marginTop:36 }} className="cap-grid">
          {steps.map((s,i)=>(
            <Reveal key={s.num} delay={i*80} style={{ padding:'40px 26px 44px',
              borderLeft:i?'1px solid var(--line)':'none' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:64 }}>
                <span style={{ color:'var(--red)' }}><Icon name={s.icon} size={28} stroke={1.4}/></span>
                <span className="display tnum" style={{ color:'var(--red)', fontSize:18, letterSpacing:'-0.01em' }}>{s.num}</span>
              </div>
              <h3 style={{ fontSize:21, fontWeight:600, marginBottom:12, letterSpacing:'-0.01em' }}>{s.title}</h3>
              <p style={{ fontSize:14, lineHeight:1.6, color:'var(--muted)' }}>{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section bg="var(--paper-2)" pad="112px 0">
        <Reveal style={{ marginBottom:48 }}>
          <Eyebrow>Landmark Installations</Eyebrow>
          <h2 className="display" style={{ fontSize:'clamp(28px,3.6vw,48px)', marginTop:22 }}>
            Projects delivered to Iraq.
          </h2>
        </Reveal>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:1, background:'var(--line-2)',
          border:'1px solid var(--line-2)' }} className="proj-grid">
          {projects.map((p,i)=>(
            <Reveal as="article" className="media-card" key={p.t} delay={i*90}
              style={{ background:'var(--paper)', display:'flex', flexDirection:'column' }}>
              <Figure ratio="16 / 10" src={p.img} alt={p.t}/>
              <div style={{ padding:'30px 32px 40px' }}>
                <div className="eyebrow" style={{ color:'var(--red)', fontSize:11, marginBottom:12 }}>{p.loc}</div>
                <h3 style={{ fontSize:20, fontWeight:600, marginBottom:10, letterSpacing:'-0.01em' }}>{p.t}</h3>
                <p style={{ fontSize:14, lineHeight:1.65, color:'var(--muted)' }}>{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal style={{ marginTop:48 }}>
          <Button variant="solid" size="lg" onClick={()=>setPage('contact')}>Start a Project Enquiry</Button>
        </Reveal>
      </Section>

      <style>{`@media (max-width:820px){ .proj-grid{ grid-template-columns:1fr !important; } }`}</style>
    </div>
  );
}
