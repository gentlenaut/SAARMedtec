import React from 'react';
import Section from '../components/Section.jsx';
import Icon from '../components/Icon.jsx';
import { Reveal, Eyebrow, Button } from '../components/primitives.jsx';
import PageHead from './PageHead.jsx';
import { FormFields, FieldLabel } from './forms.jsx';

export default function CareersPage() {
  const [submitted, setSubmitted] = React.useState(false);
  const depts = [
    { name:'Sales & Clinical', roles:['Clinical Sales Specialist — Cardiovascular','Territory Manager — Erbil','Product Specialist — Robotics & Surgical Innovation'] },
    { name:'Technical & Biomedical', roles:['Biomedical Engineer — Service Center, Baghdad','Field Service Engineer — Diagnostic Imaging'] },
    { name:'Administration', roles:['Logistics Coordinator — Baghdad Warehouse'] },
  ];
  return (
    <div>
      <PageHead num="06" crumb="Careers"
        title="Join the team."
        lead="Be part of a company that has shaped Iraqi healthcare for over 40 years — and is only just getting started." />

      <Section bg="var(--paper)" pad="0 0 120px">
        <div style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr', gap:72 }} className="cov-grid">
          <div>
            <Reveal><Eyebrow>Open Positions</Eyebrow></Reveal>
            <div style={{ marginTop:32 }}>
              {depts.map((d)=>(
                <div key={d.name} style={{ marginBottom:40 }}>
                  <div className="eyebrow" style={{ color:'var(--red)', marginBottom:8 }}>{d.name}</div>
                  <div style={{ borderTop:'1px solid var(--ink)' }}>
                    {d.roles.map((r,i)=>(
                      <Reveal key={r} delay={i*50} style={{ display:'flex', justifyContent:'space-between',
                        alignItems:'center', gap:20, padding:'22px 0', borderBottom:'1px solid var(--line)' }}>
                        <span style={{ fontSize:'clamp(16px,1.8vw,21px)', fontWeight:500, letterSpacing:'-0.01em' }}>{r}</span>
                        <span className="ulink eyebrow" style={{ color:'var(--ink)', cursor:'pointer', whiteSpace:'nowrap' }}
                          onClick={()=>{}}>Apply</span>
                      </Reveal>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Reveal mode="fade" delay={100}>
            <Eyebrow>Apply</Eyebrow>
            {submitted ? (
              <div style={{ marginTop:24, border:'1px solid var(--line)', padding:'48px 32px', textAlign:'center' }}>
                <span style={{ color:'var(--red)', display:'inline-flex' }}><Icon name="check" size={40}/></span>
                <h3 style={{ fontSize:20, fontWeight:600, margin:'20px 0 10px' }}>Application received</h3>
                <p style={{ fontSize:14, color:'var(--muted)', lineHeight:1.6 }}>
                  Thank you. Our HR team will review your application and be in touch shortly.
                </p>
              </div>
            ) : (
              <div style={{ marginTop:24, border:'1px solid var(--line)', padding:'36px 32px' }}>
                <FormFields fields={['Full Name','Email Address','Phone Number','Position of Interest']} />
                <FieldLabel>CV / Résumé</FieldLabel>
                <label style={{ border:'1px dashed var(--line-2)', padding:'22px', textAlign:'center',
                  cursor:'pointer', display:'block', transition:'border-color 0.25s' }}
                  onMouseEnter={e=>e.currentTarget.style.borderColor='var(--ink)'}
                  onMouseLeave={e=>e.currentTarget.style.borderColor='var(--line-2)'}>
                  <span style={{ color:'var(--muted)', display:'inline-flex', marginBottom:8 }}><Icon name="doc" size={24}/></span>
                  <div style={{ fontSize:13, color:'var(--muted)' }}>PDF, DOC or DOCX · max 5MB</div>
                  <input type="file" accept=".pdf,.doc,.docx" style={{ display:'none' }}/>
                </label>
                <div style={{ marginTop:24 }}>
                  <Button variant="solid" full onClick={()=>setSubmitted(true)}>Submit Application</Button>
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
