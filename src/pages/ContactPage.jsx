import React from 'react';
import Section from '../components/Section.jsx';
import Icon from '../components/Icon.jsx';
import { Reveal, Eyebrow, Button } from '../components/primitives.jsx';
import PageHead from './PageHead.jsx';
import { inputStyle, FieldLabel } from './forms.jsx';

export default function ContactPage() {
  const [sent, setSent] = React.useState(false);
  // Repeatable office card — add new locations by appending here.
  // Optional fields: maps (Google Maps link), web (office/region website).
  const offices = [
    { country:'Iraq', city:'Baghdad', addr:"Hay Al Wihda, Sina'a St., District 906, Bldg. 11", phone:'+964 790 190 5611',
      maps:'https://www.google.com/maps/search/?api=1&query=Hay+Al+Wihda+Sina%27a+St+Baghdad', web:null },
    { country:'Jordan', city:'Amman', addr:'77 Business Avenue Bldg, Jabal Amman, 3rd Circle, Zahran St.', phone:'+962 6 4650 551',
      maps:'https://www.google.com/maps/search/?api=1&query=77+Business+Avenue+Jabal+Amman', web:null },
  ];
  return (
    <div>
      <PageHead num="07" crumb="Contact"
        title="Let's connect."
        lead="Whether you need a product quote, service support, or a partnership conversation — our team is ready." />

      <Section bg="var(--paper)" pad="0 0 120px">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.3fr', gap:72 }} className="cov-grid">
          {/* Info */}
          <div>
            <Reveal><Eyebrow>Offices</Eyebrow></Reveal>
            <div style={{ marginTop:28 }}>
              {offices.map((o,i)=>(
                <Reveal key={o.city} delay={i*90} style={{ padding:'28px 0', borderTop:'1px solid var(--line)' }}>
                  <div style={{ display:'flex', alignItems:'baseline', gap:12, marginBottom:14 }}>
                    <h3 className="display" style={{ fontSize:'clamp(22px,2.6vw,30px)', fontWeight:600 }}>{o.city}</h3>
                    <span className="eyebrow" style={{ color:'var(--faint)' }}>{o.country}</span>
                  </div>
                  <div style={{ display:'flex', gap:12, alignItems:'flex-start', marginBottom:10 }}>
                    <span style={{ color:'var(--red)', marginTop:2 }}><Icon name="location" size={18}/></span>
                    <span style={{ fontSize:14.5, color:'var(--ink-2)', lineHeight:1.6 }}>{o.addr}</span>
                  </div>
                  <div style={{ display:'flex', gap:12, alignItems:'center' }}>
                    <span style={{ color:'var(--red)' }}><Icon name="phone" size={18}/></span>
                    <a href={`tel:${o.phone.replace(/\s/g,'')}`} className="ulink" style={{ fontSize:14.5, color:'var(--ink-2)' }}>{o.phone}</a>
                  </div>
                  {(o.maps || o.web) && (
                    <div style={{ display:'flex', gap:20, alignItems:'center', marginTop:12, flexWrap:'wrap' }}>
                      {o.maps && (
                        <a href={o.maps} target="_blank" rel="noopener noreferrer" className="ulink eyebrow"
                          style={{ color:'var(--red)' }}>View on Maps <Icon name="arrowUpRight" size={13}/></a>
                      )}
                      {o.web && (
                        <a href={o.web} target="_blank" rel="noopener noreferrer" className="ulink eyebrow"
                          style={{ color:'var(--red)' }}>Website <Icon name="arrowUpRight" size={13}/></a>
                      )}
                    </div>
                  )}
                </Reveal>
              ))}
              <Reveal delay={180} style={{ padding:'28px 0', borderTop:'1px solid var(--line)',
                borderBottom:'1px solid var(--line)', display:'flex', gap:12, alignItems:'center' }}>
                <span style={{ color:'var(--red)' }}><Icon name="mail" size={18}/></span>
                <a href="mailto:Info@SAARMedTec.com" className="ulink" style={{ fontSize:16, fontWeight:600 }}>Info@SAARMedTec.com</a>
              </Reveal>
            </div>
          </div>

          {/* Form */}
          <Reveal mode="fade" delay={120}>
            {sent ? (
              <div style={{ border:'1px solid var(--line)', padding:'64px 40px', textAlign:'center' }}>
                <span style={{ color:'var(--red)', display:'inline-flex' }}><Icon name="check" size={48}/></span>
                <h3 className="display" style={{ fontSize:28, marginTop:24 }}>Message received</h3>
                <p style={{ fontSize:15, color:'var(--muted)', marginTop:12 }}>
                  A member of our team will respond within one business day.
                </p>
              </div>
            ) : (
              <div style={{ border:'1px solid var(--line)', padding:'40px 36px' }}>
                <Eyebrow>Send a Message</Eyebrow>
                <div style={{ marginTop:24 }}>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:18 }} className="form-2col">
                    <div><FieldLabel>Full Name</FieldLabel><input placeholder="Full name" style={inputStyle} className="fld"/></div>
                    <div><FieldLabel>Organisation</FieldLabel><input placeholder="Organisation" style={inputStyle} className="fld"/></div>
                  </div>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:18, marginTop:18 }} className="form-2col">
                    <div><FieldLabel>Email</FieldLabel><input placeholder="Email address" style={inputStyle} className="fld"/></div>
                    <div><FieldLabel>Phone</FieldLabel><input placeholder="Phone number" style={inputStyle} className="fld"/></div>
                  </div>
                  <div style={{ marginTop:18 }}>
                    <FieldLabel>Enquiry Type</FieldLabel>
                    <select style={{ ...inputStyle, appearance:'auto' }} className="fld">
                      <option>Product / Equipment Enquiry</option>
                      <option>Request a Quote</option>
                      <option>Turnkey Project</option>
                      <option>Service / After-Sales</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                  <div style={{ marginTop:18 }}>
                    <FieldLabel>Message</FieldLabel>
                    <textarea rows={4} placeholder="Tell us about your requirements…" style={inputStyle} className="fld"/>
                  </div>
                  <div style={{ marginTop:24 }}>
                    <Button variant="accent" full onClick={()=>setSent(true)}>Send Message</Button>
                  </div>
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </Section>
      <style>{`@media (max-width:560px){ .form-2col{ grid-template-columns:1fr !important; } }`}</style>
    </div>
  );
}
