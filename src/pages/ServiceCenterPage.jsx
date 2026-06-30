import Section from '../components/Section.jsx';
import Icon from '../components/Icon.jsx';
import Figure from '../components/Figure.jsx';
import { Reveal, Eyebrow, Button } from '../components/primitives.jsx';
import PageHead from './PageHead.jsx';

export default function ServiceCenterPage({ setPage }) {
  const feats = [
    { icon:'install',   t:'Factory-Trained Engineers', s:'Certified by Medtronic, Olympus & Boston Scientific' },
    { icon:'warehouse', t:'7-Floor Warehouse',         s:'Genuine spare parts & loaner fleet' },
    { icon:'globe',     t:'Nationwide Coverage',       s:'Baghdad, Erbil & Basrah' },
    { icon:'cpu',       t:'SAAR360 Platform',          s:'Real-time inventory & service tracking' },
  ];
  const details = [
    { l:'Support Hours',      v:'Sun – Thu · 08:00–17:00 (Baghdad)' },
    { l:'Emergency Response', v:'24-hour on-call for critical equipment' },
    { l:'Standard SLA',       v:'Response < 24h · on-site < 48h' },
    { l:'Loaner Equipment',   v:'Available for select categories' },
    { l:'Spare Parts',        v:'Genuine OEM, stocked in Baghdad' },
  ];
  return (
    <div>
      <PageHead num="04" crumb="Service Center"
        title={<>Beyond sales,<br/>beside you.</>}
        lead="One of Iraq's most certified biomedical engineering teams — equipped to maintain, repair and support your clinical assets with minimal downtime." />

      <Section bg="var(--paper)" pad="0 0 clamp(64px,8vw,104px)">
        <Reveal mode="fade" className="media-card">
          <Figure ratio="16 / 6" src="/assets/img/service-team.jpg"
            alt="SAARMedTec biomedical engineering in the field" eager/>
        </Reveal>
      </Section>

      <Section bg="var(--paper)" pad="0 0 120px">
        <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:64 }} className="cov-grid">
          <div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:1, background:'var(--line)',
              border:'1px solid var(--line)' }}>
              {feats.map((f,i)=>(
                <Reveal key={f.t} delay={i*70} style={{ background:'var(--paper)', padding:'32px 26px 36px' }}>
                  <span style={{ color:'var(--red)' }}><Icon name={f.icon} size={26} stroke={1.4}/></span>
                  <h3 style={{ fontSize:16, fontWeight:600, margin:'22px 0 8px' }}>{f.t}</h3>
                  <p style={{ fontSize:13.5, lineHeight:1.55, color:'var(--muted)' }}>{f.s}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal mode="fade" delay={120} className="deep-surface" style={{ color:'var(--on-deep)', padding:'40px 36px' }}>
            <Eyebrow color="var(--red)">Service Details</Eyebrow>
            <div style={{ marginTop:24 }}>
              {details.map((d,i)=>(
                <div key={d.l} style={{ padding:'18px 0', borderTop: i?'1px solid var(--line-deep)':'none' }}>
                  <div className="eyebrow" style={{ color:'var(--on-deep-faint)', fontSize:10, marginBottom:7 }}>{d.l}</div>
                  <div style={{ fontSize:15, color:'var(--on-deep)' }}>{d.v}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop:28 }}>
              <Button variant="onDark" full onClick={()=>setPage('customer-support')}>Submit a Service Request</Button>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
