import { NAV_ITEMS } from '../data.js';
import { Reveal, Eyebrow } from './primitives.jsx';
import Logo from './Logo.jsx';

export default function Footer({ setPage }) {
  const year = new Date().getFullYear();
  return (
    <footer className="deep-surface pattern-bg on-dark" style={{ color:'var(--on-deep)' }}>
      <div className="pattern-layer" aria-hidden="true"/>
      <div className="container" style={{ paddingTop:'clamp(104px,12vw,160px)', paddingBottom:0 }}>

        <Reveal>
          <Eyebrow color="var(--red)">Bridging the path to better care</Eyebrow>
          <h2 className="display" style={{ fontSize:'clamp(40px, 6.4vw, 92px)', margin:'30px 0 0',
            maxWidth:1120, color:'var(--on-deep)', lineHeight:1.02 }}>
            A long-term partner to Iraqi healthcare — <span style={{ color:'var(--on-deep-faint)' }}>since 1984.</span>
          </h2>
        </Reveal>

        <div style={{ height:1, background:'var(--line-deep)', margin:'clamp(72px,9vw,112px) 0 64px' }}/>

        <div style={{ display:'grid', gridTemplateColumns:'1.6fr 1fr 1fr 1.3fr', gap:48 }} className="footer-grid">
          <div>
            <div style={{ marginBottom:20 }}>
              <Logo light height={52}/>
            </div>
            <p style={{ fontSize:14, lineHeight:1.7, color:'var(--on-deep-muted)', maxWidth:280 }}>
              Iraq's strategic healthcare infrastructure partner — connecting global
              medical innovation to local clinical need.
            </p>
          </div>

          {[
            { title:'Company', items: NAV_ITEMS.filter(n=>['about','services','turnkey'].includes(n.id)) },
            { title:'Support', items: NAV_ITEMS.filter(n=>['service-center','customer-support','careers'].includes(n.id)) },
          ].map(col=>(
            <div key={col.title}>
              <div className="eyebrow" style={{ color:'var(--on-deep-faint)', marginBottom:18 }}>{col.title}</div>
              <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                {col.items.map(it=>(
                  <button key={it.id} onClick={()=>setPage(it.id)}
                    style={{ background:'none', border:'none', cursor:'pointer', textAlign:'left',
                      fontFamily:'var(--font-sans)', fontSize:14, color:'var(--on-deep-muted)',
                      padding:0, transition:'color 0.25s', width:'fit-content' }}
                    onMouseEnter={e=>e.currentTarget.style.color='var(--on-deep)'}
                    onMouseLeave={e=>e.currentTarget.style.color='var(--on-deep-muted)'}>
                    {it.label}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div>
            <div className="eyebrow" style={{ color:'var(--on-deep-faint)', marginBottom:18 }}>Offices</div>
            <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
              <div>
                <div style={{ fontSize:13, fontWeight:600, marginBottom:5 }}>Baghdad, Iraq</div>
                <div style={{ fontSize:13, color:'var(--on-deep-muted)', lineHeight:1.6 }}>
                  Hay Al Wihda, Sina'a St.<br/>+964 790 190 5611
                </div>
              </div>
              <div>
                <div style={{ fontSize:13, fontWeight:600, marginBottom:5 }}>Amman, Jordan</div>
                <div style={{ fontSize:13, color:'var(--on-deep-muted)', lineHeight:1.6 }}>
                  77 Business Ave, Jabal Amman<br/>+962 6 4650 551
                </div>
              </div>
              <a href="mailto:Info@SAARMedTec.com" className="ulink" style={{ fontSize:14,
                color:'var(--red)', fontWeight:600 }}>Info@SAARMedTec.com</a>
            </div>
          </div>
        </div>

        <div style={{ height:1, background:'var(--line-deep)', margin:'56px 0 0' }}/>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center',
          flexWrap:'wrap', gap:12, padding:'24px 0' }}>
          <div style={{ display:'flex', alignItems:'center', gap:18, flexWrap:'wrap' }}>
            <span className="eyebrow" style={{ color:'var(--on-deep-faint)' }}>
              © {year} SAARMedTec L.L.Co.
            </span>
            <button onClick={()=>setPage('terms')}
              style={{ background:'none', border:'none', cursor:'pointer', padding:0,
                color:'var(--on-deep-muted)', transition:'color 0.25s' }}
              onMouseEnter={e=>e.currentTarget.style.color='var(--on-deep)'}
              onMouseLeave={e=>e.currentTarget.style.color='var(--on-deep-muted)'}
              className="eyebrow">SAAR360 Terms</button>
          </div>
          <span className="eyebrow" style={{ color:'var(--on-deep-faint)' }}>
            MOH-Certified · ISO 9001 · CE / FDA (distributed products)
          </span>
        </div>
      </div>
      <style>{`
        @media (max-width: 820px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; } }
        @media (max-width: 520px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
