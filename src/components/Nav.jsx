import React from 'react';
import { NAV_ITEMS } from '../data.js';
import Logo from './Logo.jsx';

export default function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive:true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || page !== 'home';
  // Hero is light, so the nav always uses dark text (transparent or solid).
  const brandColor = 'var(--ink)';
  const subColor   = 'var(--muted)';
  const linkIdle   = 'var(--muted)';
  const linkActive = 'var(--ink)';
  const ctaBg      = 'var(--ink)';
  const ctaFg      = 'var(--paper)';

  return (
    <>
    {/* hairline red top accent */}
    <div style={{ position:'fixed', top:0, left:0, right:0, height:3, background:'var(--red)', zIndex:101 }}/>
    <nav style={{
      position:'fixed', top:3, left:0, right:0, zIndex:100,
      background: solid ? 'rgba(255,255,255,0.86)' : 'transparent',
      backdropFilter: solid ? 'saturate(180%) blur(16px)' : 'none',
      borderBottom: solid ? '1px solid var(--line)' : '1px solid transparent',
      transition:'background 0.4s var(--ease), border-color 0.4s var(--ease)',
    }}>
      <div className="container" style={{ display:'flex', alignItems:'center',
        justifyContent:'space-between', height:72 }}>

        <button onClick={()=>setPage('home')} aria-label="SAARMedTec — home"
          style={{ background:'none', border:'none', cursor:'pointer', padding:0,
            display:'flex', alignItems:'center' }}>
          <Logo height={30}/>
        </button>

        <div className="desktop-only" style={{ display:'flex', alignItems:'center', gap:4 }}>
          {NAV_ITEMS.filter(n=>n.id!=='home').map(item => (
            <button key={item.id} onClick={()=>setPage(item.id)}
              style={{ background:'none', border:'none', cursor:'pointer',
                fontFamily:'var(--font-sans)', fontSize:14, fontWeight:500,
                color: page===item.id ? linkActive : linkIdle,
                padding:'8px 14px', position:'relative', transition:'color 0.25s' }}
              onMouseEnter={e=>{ if(page!==item.id) e.currentTarget.style.color=linkActive; }}
              onMouseLeave={e=>{ if(page!==item.id) e.currentTarget.style.color=linkIdle; }}>
              {item.label}
              {page===item.id && <span style={{ position:'absolute', left:14, right:14, bottom:0,
                height:2, background:'var(--red)' }}/>}
            </button>
          ))}
          <button onClick={()=>setPage('contact')}
            style={{ marginLeft:14, padding:'10px 18px', background:ctaBg, color:ctaFg,
              border:'none', cursor:'pointer', fontFamily:'var(--font-mono)', fontSize:12,
              fontWeight:500, letterSpacing:'0.08em', textTransform:'uppercase', whiteSpace:'nowrap',
              transition:'background 0.35s var(--ease), color 0.35s var(--ease)' }}
            onMouseEnter={e=>{ e.currentTarget.style.background='var(--red)'; e.currentTarget.style.color='var(--paper)'; }}
            onMouseLeave={e=>{ e.currentTarget.style.background=ctaBg; e.currentTarget.style.color=ctaFg; }}>
            Partner With Us
          </button>
        </div>

        <button onClick={()=>setMenuOpen(o=>!o)} className="mobile-only"
          style={{ background:'none', border:'1px solid var(--line-2)',
            padding:'9px 14px', cursor:'pointer', fontFamily:'var(--font-mono)', fontSize:12,
            letterSpacing:'0.1em', textTransform:'uppercase', color:brandColor }}>
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
    </nav>

    {menuOpen && (
      <div className="mobile-only" style={{ position:'fixed', top:75, left:0, right:0, zIndex:99,
        background:'var(--paper)', borderBottom:'1px solid var(--line)', padding:'12px var(--gutter) 28px' }}>
        {NAV_ITEMS.filter(n=>n.id!=='home').map(item=>(
          <button key={item.id} onClick={()=>{setPage(item.id); setMenuOpen(false);}}
            style={{ display:'flex', alignItems:'center', gap:14, width:'100%', textAlign:'left',
              background:'none', border:'none', padding:'15px 0',
              borderBottom:'1px solid var(--line)', cursor:'pointer',
              fontFamily:'var(--font-sans)', fontWeight:600, fontSize:20,
              color: page===item.id ? 'var(--red)' : 'var(--ink)' }}>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:12, color:'var(--faint)' }}>{item.num}</span>
            {item.label}
          </button>
        ))}
      </div>
    )}
    </>
  );
}
