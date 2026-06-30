import React from 'react';
import Section from '../components/Section.jsx';
import Icon from '../components/Icon.jsx';
import { Reveal, Eyebrow, Button } from '../components/primitives.jsx';
import PageHead from './PageHead.jsx';
import { FormFields, FieldLabel, inputStyle } from './forms.jsx';

export default function CustomerSupportPage() {
  const [openFaq, setOpenFaq] = React.useState(0);
  const faqs = [
    { q:'What is the SAAR360 platform?', a:'SAAR360 is our proprietary platform for inventory management, equipment tracking, service ticketing and logistics. Customers with service agreements can log support requests directly through it.' },
    { q:'How quickly can I get an engineer on-site?', a:'Our standard SLA is a response within 24 hours and on-site attendance within 48 hours. For critical-care equipment failures we offer 24-hour on-call emergency response.' },
    { q:'Do you offer loaner equipment during repairs?', a:'Yes — for select categories we maintain a loaner fleet at our Baghdad warehouse. Availability depends on product type and current inventory.' },
    { q:'Are your engineers certified by the manufacturers?', a:'Yes. Our biomedical engineers are factory-trained and certified directly by our global partners, including Medtronic, Olympus and Boston Scientific.' },
    { q:'What happens after the warranty period?', a:'We offer comprehensive post-warranty service agreements — scheduled preventative maintenance, spare-parts coverage and priority SLAs, tailored to your portfolio.' },
    { q:'Which cities do you provide on-site service in?', a:'On-site service across Baghdad, Erbil and Basrah. Remote support via SAAR360 is available nationwide.' },
  ];
  return (
    <div>
      <PageHead num="05" crumb="Customer Support"
        title="Support that stays."
        lead="Our certified biomedical engineers keep your clinical technology running — every day, across the country." />

      <Section bg="var(--paper)" pad="0 0 120px">
        <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:72 }} className="cov-grid">
          <div>
            <Reveal><Eyebrow>FAQ</Eyebrow></Reveal>
            <div style={{ marginTop:28, borderTop:'1px solid var(--ink)' }}>
              {faqs.map((f,i)=>(
                <div key={i} style={{ borderBottom:'1px solid var(--line)' }}>
                  <button onClick={()=>setOpenFaq(openFaq===i?null:i)}
                    style={{ width:'100%', textAlign:'left', background:'none', border:'none',
                      padding:'24px 0', cursor:'pointer', display:'flex',
                      justifyContent:'space-between', alignItems:'center', gap:20 }}>
                    <span style={{ fontSize:'clamp(16px,1.8vw,20px)', fontWeight:600,
                      color: openFaq===i ? 'var(--ink)' : 'var(--ink-2)', letterSpacing:'-0.01em' }}>{f.q}</span>
                    <span style={{ color:'var(--red)', flexShrink:0, transition:'transform 0.3s var(--ease)',
                      transform: openFaq===i?'rotate(45deg)':'none' }}><Icon name="plus" size={20}/></span>
                  </button>
                  <div style={{ display:'grid', gridTemplateRows: openFaq===i?'1fr':'0fr',
                    transition:'grid-template-rows 0.4s var(--ease)' }}>
                    <div style={{ overflow:'hidden' }}>
                      <p style={{ fontSize:15, lineHeight:1.7, color:'var(--muted)', paddingBottom:24, maxWidth:560 }}>{f.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Reveal mode="fade" delay={100}>
            <Eyebrow>Submit a Request</Eyebrow>
            <div style={{ marginTop:24, border:'1px solid var(--line)', padding:'36px 32px' }}>
              <FormFields fields={['Full Name','Hospital / Facility','Equipment Model']} />
              <FieldLabel>Issue Description</FieldLabel>
              <textarea rows={4} placeholder="Describe the issue…" style={inputStyle} className="fld"/>
              <div style={{ marginTop:24 }}>
                <Button variant="solid" full onClick={()=>{}}>Submit Support Request</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
