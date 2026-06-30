import Section from '../components/Section.jsx';
import Icon from '../components/Icon.jsx';
import { Reveal, Eyebrow, Button, Counter } from '../components/primitives.jsx';
import { PARTNER_LOGOS, CAPABILITIES, LANDMARKS, CLIENTS, STANDARDS, TESTIMONIALS, PERSPECTIVES } from '../data.js';

// ── 01 · Hero (typography-led, minimal, high whitespace) ─────────────────────
function Hero({ setPage }) {
  return (
    <section className="pattern-bg" style={{ background:'var(--paper)', padding:'clamp(146px, 18vh, 200px) 0 clamp(40px,6vw,72px)' }}>
      <div className="pattern-layer" aria-hidden="true"/>
      <div className="container">
        <Reveal mode="fade">
          <h1 className="display" style={{ fontSize:'clamp(42px, 7vw, 116px)',
            margin:0, maxWidth:1200 }}>
            Iraq's strategic partner in healthcare infrastructure.
          </h1>
        </Reveal>

        <div style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr', gap:'clamp(32px,5vw,72px)',
          alignItems:'end', marginTop:'clamp(34px,4.5vw,56px)' }} className="hero-lower">
          <Reveal delay={200}>
            <p style={{ fontSize:'clamp(18px, 1.7vw, 23px)', lineHeight:1.55, color:'var(--ink-2)',
              maxWidth:660, fontWeight:400 }}>
              A strategic bridge between the world's leading medical manufacturers and Iraq's
              Ministry of Health, hospitals, and clinicians.
            </p>
            <div className="hero-cta" style={{ display:'flex', gap:14, marginTop:38, flexWrap:'wrap' }}>
              <Button variant="accent" size="lg" onClick={()=>setPage('contact')}>Partner With Us</Button>
              <Button variant="outline" size="lg" icon="arrowUpRight" onClick={()=>setPage('about')}>Company Profile 2026</Button>
            </div>
          </Reveal>

          <Reveal delay={320} mode="fade">
            <div style={{ borderLeft:'2px solid var(--red)', paddingLeft:26 }}>
              <div className="display tnum" style={{ fontSize:'clamp(46px,5vw,68px)', color:'var(--red)',
                letterSpacing:'-0.03em', lineHeight:1 }}>40+</div>
              <div className="eyebrow" style={{ color:'var(--muted)', marginTop:12, lineHeight:1.6 }}>
                Years bridging global<br/>innovation to Iraqi care
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`@media (max-width:760px){ .hero-lower{ grid-template-columns:1fr !important; gap:40px !important; } }`}</style>
    </section>
  );
}

// ── Stat band (restrained — charcoal numerals, generous whitespace) ──────────
function StatStrip() {
  const stats = [
    { big:<><Counter to={1984} plain/></>, lab:'Established in Iraq' },
    { big:<><Counter to={14}/></>, lab:'Clinical specialties' },
    { big:<><Counter to={29}/></>, lab:'Global partners' },
    { big:<><Counter to={44} suffix="+"/></>, lab:'First-in-Iraq innovations' },
  ];
  return (
    <Section bg="var(--paper)" pad="clamp(72px, 9vw, 104px) 0 0">
      <div style={{ borderTop:'1px solid var(--ink)', borderBottom:'1px solid var(--line)',
        display:'grid', gridTemplateColumns:'repeat(4, 1fr)' }} className="stat-strip">
        {stats.map((s,i)=>(
          <Reveal key={i} delay={i*90} style={{ padding:'40px 28px 36px',
            borderLeft: i? '1px solid var(--line)':'none' }}>
            <div className="display tnum" style={{ fontSize:'clamp(34px,4vw,54px)', color:'var(--red)',
              letterSpacing:'-0.02em', whiteSpace:'nowrap' }}>
              {s.big}
            </div>
            <div className="eyebrow" style={{ color:'var(--muted)', marginTop:12, fontSize:11 }}>{s.lab}</div>
          </Reveal>
        ))}
      </div>
      <style>{`
        @media (max-width: 860px) {
          .stat-strip { grid-template-columns: 1fr 1fr !important; }
          .stat-strip > *:nth-child(3) { border-left: none !important; }
          .stat-strip > *:nth-child(n+3) { border-top: 1px solid var(--line); }
          .stat-strip > * { padding: 30px 20px 28px !important; }
        }
      `}</style>
    </Section>
  );
}

// ── 02 · Who We Are ──────────────────────────────────────────────────────────
function WhoWeAre() {
  const statements = [
    { k:'01', t:<>A strategic bridge between <span style={{color:'var(--red)'}}>global medical innovation</span> and Iraqi healthcare.</> },
    { k:'02', t:<>A long-term partner to the Ministry of Health and leading hospitals — for over <span style={{color:'var(--red)'}}>40 years.</span></> },
    { k:'03', t:<>The first to bring <span style={{color:'var(--red)'}}>44+ landmark technologies</span> to the country, from PET/CT to TAVI.</> },
    { k:'04', t:<>Nationwide coverage with direct control across <span style={{color:'var(--red)'}}>Baghdad, Erbil & Basrah.</span></> },
  ];
  return (
    <Section bg="var(--paper)" pad="clamp(80px,13vw,128px) 0">
      <div style={{ display:'grid', gridTemplateColumns:'0.8fr 2fr', gap:64 }} className="who-grid">
        <Reveal>
          <Eyebrow>Who We Are</Eyebrow>
          <p style={{ marginTop:24, fontSize:15, lineHeight:1.7, color:'var(--muted)', maxWidth:280 }}>
            Founded in Baghdad in 1984 on integrity, reliability and quality — today
            Iraq's leading healthcare solutions provider.
          </p>
        </Reveal>
        <div>
          {statements.map((s,i)=>(
            <Reveal key={s.k} delay={i*70} style={{
              display:'grid', gridTemplateColumns:'auto 1fr', gap:'28px',
              padding:'34px 0', borderTop:'1px solid var(--line)',
              alignItems:'start' }}>
              <span className="eyebrow tnum" style={{ color:'var(--faint)', paddingTop:10 }}>{s.k}</span>
              <h3 className="display" style={{ fontSize:'clamp(24px, 3.2vw, 40px)',
                fontWeight:500, letterSpacing:'-0.02em', lineHeight:1.15 }}>{s.t}</h3>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`@media (max-width:820px){ .who-grid{ grid-template-columns:1fr !important; gap:36px !important; } }`}</style>
    </Section>
  );
}

// ── 03 · Global Partners ─────────────────────────────────────────────────────
function Partners() {
  return (
    <Section bg="var(--paper-2)" pad="clamp(72px,11vw,112px) 0">
      <Reveal style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end',
        flexWrap:'wrap', gap:24, marginBottom:56 }}>
        <div>
          <h2 className="display" style={{ fontSize:'clamp(28px,3.6vw,46px)', maxWidth:620 }}>
            Trusted by the world's top medical innovators.
          </h2>
        </div>
        <p style={{ fontSize:15, lineHeight:1.7, color:'var(--muted)', maxWidth:300 }}>
          Exclusive and strategic partnerships across 29 manufacturers — delivering
          CE and FDA-certified technology to every level of Iraqi care.
        </p>
      </Reveal>

      <Reveal mode="fade" className="partner-marquee">
        {(() => {
          const half = Math.ceil(PARTNER_LOGOS.length / 2);
          const rows = [PARTNER_LOGOS.slice(0, half), PARTNER_LOGOS.slice(half)];
          const renderSet = (arr, clone) => (
            <ul className="partner-set" aria-hidden={clone || undefined}>
              {arr.map((src, i) => (
                <li className="partner-item" key={(clone ? 'c' : '') + i}>
                  <img src={src} alt={clone ? '' : 'SAARMedTec manufacturer partner'} loading="lazy" decoding="async"/>
                </li>
              ))}
            </ul>
          );
          return rows.map((arr, r) => (
            <div className="partner-lane" key={r}>
              <div className={`partner-row${r ? ' rev' : ''}`}>
                {renderSet(arr)}
                {renderSet(arr, true)}
              </div>
            </div>
          ));
        })()}
      </Reveal>
      <div style={{ padding:'26px 2px 0', display:'flex', justifyContent:'space-between',
        alignItems:'center', flexWrap:'wrap', gap:8 }}>
        <span className="eyebrow" style={{ color:'var(--muted)' }}>Exclusive &amp; strategic manufacturer partnerships</span>
        <span className="eyebrow" style={{ color:'var(--faint)' }}>29 partners · 14 specialties</span>
      </div>
    </Section>
  );
}

// ── 04 · Capabilities ────────────────────────────────────────────────────────
function Capabilities() {
  return (
    <Section bg="var(--paper)" pad="clamp(80px,13vw,128px) 0">
      <Reveal style={{ maxWidth:720, marginBottom:64 }}>
        <Eyebrow>Capabilities</Eyebrow>
        <h2 className="display" style={{ fontSize:'clamp(30px,4vw,54px)', marginTop:22 }}>
          The full clinical lifecycle, under one partner.
        </h2>
      </Reveal>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)',
        borderTop:'1px solid var(--ink)' }} className="cap-grid">
        {CAPABILITIES.map((c,i)=>(
          <Reveal as="div" className="cap-cell" key={c.num} delay={i*80} style={{
            padding:'48px 28px 52px', borderLeft: i? '1px solid var(--line)':'none' }}>
            <span className="display tnum" style={{ fontSize:'clamp(38px,3.2vw,52px)',
              color:'var(--red)', letterSpacing:'-0.02em', lineHeight:1 }}>{c.num}</span>
            <h3 style={{ fontSize:20, fontWeight:600, letterSpacing:'-0.01em', margin:'30px 0 14px',
              lineHeight:1.2 }}>{c.title}</h3>
            <p style={{ fontSize:14.5, lineHeight:1.65, color:'var(--muted)' }}>{c.desc}</p>
          </Reveal>
        ))}
      </div>
      <style>{`
        @media (max-width:880px){
          .cap-grid{ grid-template-columns:1fr 1fr !important; }
          .cap-grid > *:nth-child(3){ border-left:none !important; }
          .cap-grid > *:nth-child(n+3){ border-top:1px solid var(--line); }
        }
        @media (max-width:520px){
          .cap-grid{ grid-template-columns:1fr !important; }
          .cap-grid > *{ border-left:none !important; border-top:1px solid var(--line); }
        }
      `}</style>
    </Section>
  );
}

// ── 05 · Achievements (timeline) ─────────────────────────────────────────────
function Achievements({ setPage }) {
  return (
    <Section bg="var(--paper-2)" pad="clamp(80px,13vw,128px) 0">
      <div style={{ display:'grid', gridTemplateColumns:'0.9fr 2fr', gap:64 }} className="ach-grid">
        <div>
          <Reveal style={{ position:'sticky', top:110 }}>
            <Eyebrow>Achievements</Eyebrow>
            <h2 className="display" style={{ fontSize:'clamp(28px,3.6vw,48px)', marginTop:22 }}>
              First-in-Iraq innovations.
            </h2>
            <p style={{ fontSize:15, lineHeight:1.7, color:'var(--muted)', marginTop:22, maxWidth:300 }}>
              Each milestone marks a technology SAARMedTec introduced to the country —
              expanding what Iraqi medicine can do.
            </p>
            <div style={{ marginTop:32, display:'flex', alignItems:'baseline', gap:14 }}>
              <span className="display tnum" style={{ fontSize:64, color:'var(--red)' }}>
                <Counter to={44}/>+
              </span>
              <span className="eyebrow" style={{ color:'var(--muted)' }}>landmark<br/>products</span>
            </div>
            <div style={{ marginTop:32 }}>
              <Button variant="outline" onClick={()=>setPage('about')}>All Achievements</Button>
            </div>
          </Reveal>
        </div>

        <div style={{ borderLeft:'1px solid var(--line-2)' }}>
          {LANDMARKS.map((l,i)=>(
            <Reveal as="div" className="ach-item" key={i} delay={i*40} style={{ position:'relative',
              padding:'28px 0 28px 40px',
              borderBottom: i<LANDMARKS.length-1 ? '1px solid var(--line)':'none' }}>
              <span className="ach-dot" style={{ position:'absolute', left:-5, top:38, width:9, height:9,
                background:'var(--paper-2)', border:'2px solid var(--red)', borderRadius:'50%' }}/>
              <div style={{ display:'grid', gridTemplateColumns:'auto 1fr auto', gap:28,
                alignItems:'baseline' }} className="ach-row">
                <span className="display tnum" style={{ color:'var(--red)', fontSize:'clamp(18px,1.8vw,24px)',
                  letterSpacing:'-0.01em' }}>{l.yr}</span>
                <div>
                  <h3 style={{ fontSize:'clamp(18px,2vw,25px)', fontWeight:600,
                    letterSpacing:'-0.01em', marginBottom:6 }}>{l.name}</h3>
                  <p style={{ fontSize:14, color:'var(--muted)', lineHeight:1.5 }}>{l.note}</p>
                </div>
                <span className="eyebrow" style={{ color:'var(--faint)', whiteSpace:'nowrap' }}>{l.partner}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width:820px){
          .ach-grid{ grid-template-columns:1fr !important; gap:48px !important; }
          .ach-row{ grid-template-columns:auto 1fr !important; }
          .ach-row > *:last-child{ display:none; }
        }
      `}</style>
    </Section>
  );
}

// ── 06 · Coverage & Clients ──────────────────────────────────────────────────
function Coverage() {
  const cities = [
    { city:'Baghdad', role:'Headquarters · Warehouse', coord:'33.31°N 44.36°E' },
    { city:'Erbil',   role:'Northern Operations',      coord:'36.19°N 44.01°E' },
    { city:'Basrah',  role:'Southern Operations',      coord:'30.51°N 47.78°E' },
  ];
  const authorities = [
    { src:'/assets/logo-moh.png',     name:'Iraqi Ministry of Health', sub:'Trusted partner since 1984' },
    { src:'/assets/logo-kimadia.png', name:'KIMADIA',                  sub:'State Co. for Drugs & Appliances' },
  ];
  return (
    <Section bg="var(--paper)" pad="clamp(80px,13vw,128px) 0">
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80 }} className="cov-grid">
        <div>
          <Reveal>
            <Eyebrow>Coverage</Eyebrow>
            <h2 className="display" style={{ fontSize:'clamp(28px,3.6vw,48px)', marginTop:22, maxWidth:480 }}>
              Nationwide presence, direct control.
            </h2>
          </Reveal>
          <div style={{ marginTop:48 }}>
            {cities.map((c,i)=>(
              <Reveal key={c.city} delay={i*90} style={{ display:'grid',
                gridTemplateColumns:'auto 1fr auto', gap:24, alignItems:'center',
                padding:'26px 0', borderTop:'1px solid var(--line)' }}>
                <span style={{ color:'var(--red)' }}><Icon name="location" size={22}/></span>
                <div>
                  <div className="display" style={{ fontSize:'clamp(22px,2.6vw,32px)', fontWeight:600 }}>{c.city}</div>
                  <div style={{ fontSize:13, color:'var(--muted)', marginTop:4 }}>{c.role}</div>
                </div>
                <span className="eyebrow" style={{ color:'var(--faint)', fontSize:11 }}>{c.coord}</span>
              </Reveal>
            ))}
          </div>

          <Reveal delay={280} style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24,
            marginTop:44, paddingTop:34, borderTop:'1px solid var(--line)' }}>
            {[
              { n:'7', u:'Floors', d:'Central warehouse' },
              { n:'75+', u:'Field force', d:'Clinical specialists' },
              { n:'24/7', u:'Response', d:'Critical equipment' },
            ].map(o=>(
              <div key={o.u}>
                <div className="display tnum" style={{ fontSize:'clamp(26px,2.6vw,36px)',
                  color:'var(--red)', letterSpacing:'-0.02em' }}>{o.n}</div>
                <div style={{ fontSize:13.5, fontWeight:600, marginTop:8 }}>{o.u}</div>
                <div style={{ fontSize:12.5, color:'var(--muted)', marginTop:2 }}>{o.d}</div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal mode="fade" delay={120}>
          <div className="eyebrow" style={{ color:'var(--muted)', marginBottom:18 }}>Health Authorities</div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:1, background:'var(--line)',
            border:'1px solid var(--line)', marginBottom:28 }}>
            {authorities.map(a=>(
              <div key={a.name} style={{ background:'var(--paper)', padding:'28px 24px',
                display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', gap:14 }}>
                <img src={a.src} alt={a.name} style={{ height:84, width:'auto', objectFit:'contain' }}/>
                <div>
                  <div style={{ fontSize:14, fontWeight:600, color:'var(--ink)' }}>{a.name}</div>
                  <div style={{ fontSize:12, color:'var(--muted)', marginTop:3 }}>{a.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="eyebrow" style={{ color:'var(--muted)', marginBottom:18 }}>Selected Clients</div>
          <div style={{ border:'1px solid var(--line)' }}>
            {CLIENTS.slice(2).map((c,i)=>(
              <div key={c} style={{ padding:'17px 22px',
                borderTop: i? '1px solid var(--line)':'none',
                display:'flex', alignItems:'center', gap:16,
                transition:'background 0.25s var(--ease)' }}
                onMouseEnter={e=>e.currentTarget.style.background='var(--paper-2)'}
                onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
                <span className="eyebrow tnum" style={{ color:'var(--faint)' }}>{String(i+1).padStart(2,'0')}</span>
                <span style={{ fontSize:15, fontWeight:500, color:'var(--ink-2)' }}>{c}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <style>{`@media (max-width:880px){ .cov-grid{ grid-template-columns:1fr !important; gap:56px !important; } }`}</style>
    </Section>
  );
}

// ── 07 · Supply Chain Strength (dark) ────────────────────────────────────────
function SupplyChain() {
  const metrics = [
    { icon:'cpu',       k:'SAP-Powered', v:'Enterprise Inventory', d:'Real-time monitoring from forecast to delivery, with command-centre visibility via SAAR360.' },
    { icon:'warehouse', k:'7 Floors',    v:'Central Warehouse',    d:'Organised by product type and shelf life for optimised storage and rapid nationwide distribution.' },
    { icon:'route',     k:'Fast-Track',  v:'Fulfilment',           d:'Strategically located Iraq warehousing meeting the highest delivery and quality standards.' },
    { icon:'handshake', k:'Consignment', v:'Flexible Models',      d:'The only provider in Iraq offering full-consignment solutions — reducing financial burden for hospitals.' },
  ];
  return (
    <section className="deep-surface" style={{ color:'var(--on-deep)', padding:'clamp(80px,13vw,128px) 0' }}>
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'end',
          marginBottom:40 }} className="sc-head">
          <Reveal>
            <Eyebrow color="var(--red)">Supply Chain Strength</Eyebrow>
            <h2 className="display" style={{ fontSize:'clamp(30px,4.2vw,58px)', marginTop:24,
              color:'var(--on-deep)' }}>
              From forecast<br/>to delivery.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ fontSize:17, lineHeight:1.7, color:'var(--on-deep-muted)', maxWidth:440 }}>
              Seamless end-to-end supply, powered by our proprietary <span style={{ color:'var(--on-deep)', fontWeight:600 }}>SAAR360</span> platform —
              delivering enterprise-grade inventory control and service excellence.
            </p>
          </Reveal>
        </div>

        {/* SAAR360 — named platform lockup (Accenture "360° VALUE" move) */}
        <Reveal delay={80} style={{ display:'flex', alignItems:'center', gap:16, flexWrap:'wrap',
          padding:'20px 0 36px', borderBottom:'1px solid var(--line-deep)', marginBottom:0 }}>
          <span style={{ display:'inline-flex', alignItems:'center', gap:8,
            fontFamily:'var(--font-mono)', fontSize:13, fontWeight:500, letterSpacing:'0.06em',
            color:'var(--on-deep)', border:'1px solid var(--line-deep)', padding:'9px 14px' }}>
            <span style={{ width:7, height:7, background:'var(--red)', borderRadius:'50%' }}/>
            SAAR360™
          </span>
          <span style={{ fontSize:14.5, color:'var(--on-deep-muted)', letterSpacing:'0.01em' }}>
            Our proprietary supply, inventory &amp; service platform — the single system behind every capability below.
          </span>
        </Reveal>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)',
          borderTop:'1px solid var(--line-deep)' }} className="sc-grid">
          {metrics.map((m,i)=>(
            <Reveal key={i} delay={i*80} style={{ padding:'40px 26px 44px',
              borderLeft: i? '1px solid var(--line-deep)':'none' }}>
              <span style={{ color:'var(--red)' }}><Icon name={m.icon} size={28} stroke={1.4}/></span>
              <div className="eyebrow" style={{ color:'var(--on-deep-faint)', margin:'28px 0 8px' }}>{m.k}</div>
              <h3 style={{ fontSize:20, fontWeight:600, letterSpacing:'-0.01em', marginBottom:14,
                color:'var(--on-deep)' }}>{m.v}</h3>
              <p style={{ fontSize:14, lineHeight:1.65, color:'var(--on-deep-muted)' }}>{m.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width:880px){
          .sc-head{ grid-template-columns:1fr !important; gap:32px !important; }
          .sc-grid{ grid-template-columns:1fr 1fr !important; }
          .sc-grid > *:nth-child(3){ border-left:none !important; }
          .sc-grid > *:nth-child(n+3){ border-top:1px solid var(--line-deep); }
        }
        @media (max-width:520px){
          .sc-grid{ grid-template-columns:1fr !important; }
          .sc-grid > *{ border-left:none !important; border-top:1px solid var(--line-deep); }
        }
      `}</style>
    </section>
  );
}

// ── 08 · CTA ─────────────────────────────────────────────────────────────────
function HomeCTA({ setPage }) {
  return (
    <Section bg="var(--paper)" pad="clamp(76px,12vw,120px) 0">
      <Reveal style={{ borderTop:'1px solid var(--ink)', paddingTop:56 }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:56, alignItems:'end' }}
          className="cta-grid">
          <h2 className="display" style={{ fontSize:'clamp(32px,5vw,72px)' }}>
            Looking for a healthcare partner in Iraq?
          </h2>
          <div>
            <p style={{ fontSize:17, lineHeight:1.7, color:'var(--ink-2)', marginBottom:32 }}>
              Let's explore how SAARMedTec can support your mission — from sourcing
              to installation, training and lifelong service.
            </p>
            <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
              <Button variant="accent" size="lg" onClick={()=>setPage('contact')}>Get in Touch</Button>
              <Button variant="outline" size="lg" icon="arrowUpRight" onClick={()=>setPage('services')}>Our Expertise</Button>
            </div>
          </div>
        </div>
      </Reveal>
      <style>{`@media (max-width:820px){ .cta-grid{ grid-template-columns:1fr !important; gap:32px !important; } }`}</style>
    </Section>
  );
}

// ── Standards strip (trust signals high on the page — Siemens/GE) ─────────────
function Standards() {
  return (
    <Section bg="var(--paper)" pad="0 0 8px">
      <Reveal style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)',
        borderTop:'1px solid var(--ink)', borderBottom:'1px solid var(--line)' }} className="std-grid">
        {STANDARDS.map((s,i)=>(
          <div key={s.k} style={{ padding:'26px 28px', borderLeft: i? '1px solid var(--line)':'none' }}>
            <div style={{ fontSize:15, fontWeight:600, letterSpacing:'-0.01em', marginBottom:6 }}>{s.k}</div>
            <div style={{ fontSize:13, color:'var(--muted)', lineHeight:1.5 }}>{s.v}</div>
          </div>
        ))}
      </Reveal>
      <style>{`
        @media (max-width:780px){
          .std-grid{ grid-template-columns:1fr 1fr !important; }
          .std-grid > *:nth-child(3){ border-left:none !important; }
          .std-grid > *:nth-child(n+3){ border-top:1px solid var(--line); }
        }
      `}</style>
    </Section>
  );
}

// ── Testimonial (attributed pull-quote — Salesforce/Siemens; uses the serif) ──
function Testimonial() {
  const t = TESTIMONIALS[0];
  return (
    <Section bg="var(--paper-2)" pad="clamp(72px,11vw,112px) 0">
      <Reveal style={{ maxWidth:1000, margin:'0 auto', textAlign:'center' }}>
        <Eyebrow style={{ justifyContent:'center' }}>In their words</Eyebrow>
        <blockquote style={{ fontFamily:'var(--font-serif)', fontWeight:400,
          fontSize:'clamp(24px,3.4vw,42px)', lineHeight:1.32, letterSpacing:'-0.01em',
          color:'var(--ink)', margin:'30px 0 0' }}>
          <span style={{ color:'var(--red)' }}>“</span>{t.quote}<span style={{ color:'var(--red)' }}>”</span>
        </blockquote>
        <div style={{ marginTop:34, display:'flex', justifyContent:'center', alignItems:'center', gap:12 }}>
          <span style={{ width:28, height:1, background:'var(--line-2)' }}/>
          <span className="eyebrow" style={{ color:'var(--ink-2)' }}>{t.who}</span>
          <span className="eyebrow" style={{ color:'var(--faint)' }}>· {t.org}</span>
        </div>
      </Reveal>
    </Section>
  );
}

// ── Perspectives (thought-leadership cards — IBM/Accenture/Salesforce) ────────
function Perspectives({ setPage }) {
  return (
    <Section bg="var(--paper)" pad="clamp(76px,12vw,120px) 0">
      <Reveal style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end',
        flexWrap:'wrap', gap:24, marginBottom:56 }}>
        <div>
          <Eyebrow>Perspectives</Eyebrow>
          <h2 className="display" style={{ fontSize:'clamp(28px,3.6vw,48px)', marginTop:22, maxWidth:560 }}>
            Ideas shaping Iraqi healthcare.
          </h2>
        </div>
        <span className="ulink eyebrow" style={{ color:'var(--ink)', cursor:'pointer' }}
          onClick={()=>setPage('contact')}>
          Talk to our team <Icon name="arrow" size={16}/>
        </span>
      </Reveal>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:1, background:'var(--line)',
        border:'1px solid var(--line)' }} className="persp-grid">
        {PERSPECTIVES.map((p,i)=>(
          <Reveal key={p.title} delay={i*80} as="article" style={{ background:'var(--paper)',
            display:'flex', flexDirection:'column', padding:'38px 30px 32px', minHeight:248,
            cursor:'pointer', transition:'background 0.3s var(--ease)' }}
            onMouseEnter={e=>{ e.currentTarget.style.background='var(--paper-2)';
              const a=e.currentTarget.querySelector('.persp-arrow'); if(a){a.style.transform='translateX(4px)';} }}
            onMouseLeave={e=>{ e.currentTarget.style.background='var(--paper)';
              const a=e.currentTarget.querySelector('.persp-arrow'); if(a){a.style.transform='none';} }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:28 }}>
              <span className="eyebrow" style={{ color:'var(--red)' }}>{p.tag}</span>
              <span className="eyebrow" style={{ color:'var(--faint)', fontSize:11 }}>{p.read}</span>
            </div>
            <h3 className="display" style={{ fontSize:'clamp(19px,1.8vw,23px)', fontWeight:600,
              lineHeight:1.25, letterSpacing:'-0.01em' }}>{p.title}</h3>
            <span className="ulink" style={{ marginTop:'auto', paddingTop:28, color:'var(--ink)',
              fontFamily:'var(--font-mono)', fontSize:12, fontWeight:500, letterSpacing:'0.06em',
              textTransform:'uppercase' }}>
              Read perspective
              <span className="persp-arrow" style={{ display:'inline-flex', transition:'transform 0.3s var(--ease)' }}>
                <Icon name="arrow" size={15}/>
              </span>
            </span>
          </Reveal>
        ))}
      </div>
      <style>{`@media (max-width:820px){ .persp-grid{ grid-template-columns:1fr !important; } }`}</style>
    </Section>
  );
}

export default function HomePage({ setPage }) {
  return (
    <div>
      <Hero setPage={setPage} />
      <StatStrip />
      <WhoWeAre />
      <Partners />
      <Standards />
      <Capabilities />
      <Achievements setPage={setPage} />
      <Testimonial />
      <Coverage />
      <SupplyChain />
      <Perspectives setPage={setPage} />
      <HomeCTA setPage={setPage} />
    </div>
  );
}
