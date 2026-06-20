import React from 'react';
import Icon from './Icon.jsx';
import { useCounter } from '../hooks.js';

// ── Reveal ───────────────────────────────────────────────────────────────────
export function Reveal({ children, mode, delay = 0, as = 'div', className = '', style, ...rest }) {
  const Tag = as;
  return (
    <Tag data-reveal={mode || true} data-reveal-delay={delay}
      className={className} style={style} {...rest}>
      {children}
    </Tag>
  );
}

// ── Eyebrow ──────────────────────────────────────────────────────────────────
export function Eyebrow({ children, color, style }) {
  return (
    <div className="eyebrow" style={{ color: color || 'var(--red)', display:'flex',
      alignItems:'center', gap:10, ...style }}>
      <span style={{ width:18, height:1, background:'currentColor' }}/>
      {children}
    </div>
  );
}

// ── Counter (animated, counts up when scrolled into view) ─────────────────────
export function Counter({ to, suffix = '', prefix = '', duration = 1600, plain = false }) {
  const [ref, val] = useCounter(to, { duration });
  return <span ref={ref} className="tnum">{prefix}{plain ? val : val.toLocaleString()}{suffix}</span>;
}

// ── Button — ink fill, fills to red on hover (purposeful accent reward) ────────
export function Button({ children, onClick, variant = 'solid', size = 'md', full, icon = 'arrow' }) {
  const ref = React.useRef(null);
  const sizes = {
    sm: { py:11, px:18, fs:12 },
    md: { py:15, px:24, fs:13 },
    lg: { py:18, px:30, fs:14 },
  };
  const s = sizes[size];

  const variants = {
    solid:   { bg:'var(--ink)',  fg:'var(--paper)', bd:'var(--ink)',  hbg:'var(--red)',   hbd:'var(--red)',   hfg:'var(--paper)' },
    accent:  { bg:'var(--red)',  fg:'var(--paper)', bd:'var(--red)',  hbg:'var(--ink)',   hbd:'var(--ink)',   hfg:'var(--paper)' },
    outline: { bg:'transparent', fg:'var(--ink)',   bd:'var(--line-2)', hbg:'var(--ink)', hbd:'var(--ink)',   hfg:'var(--paper)' },
    light:   { bg:'transparent', fg:'var(--on-deep)', bd:'var(--line-deep)', hbg:'var(--paper)', hbd:'var(--paper)', hfg:'var(--ink)' },
    onDark:  { bg:'var(--paper)', fg:'var(--ink)',  bd:'var(--paper)', hbg:'var(--red)',  hbd:'var(--red)',   hfg:'var(--paper)' },
  };
  const v = variants[variant];

  return (
    <button type="button" onClick={onClick} ref={ref}
      style={{
        display:'inline-flex', alignItems:'center', justifyContent:'space-between', gap:18,
        width: full ? '100%' : 'auto',
        padding:`${s.py}px ${s.px}px`,
        background:v.bg, color:v.fg, border:`1px solid ${v.bd}`,
        fontFamily:'var(--font-mono)', fontWeight:500, fontSize:s.fs,
        letterSpacing:'0.08em', textTransform:'uppercase', cursor:'pointer',
        transition:'background 0.4s var(--ease), color 0.4s var(--ease), border-color 0.4s var(--ease)',
      }}
      onMouseEnter={e=>{ const t=e.currentTarget; t.style.background=v.hbg; t.style.color=v.hfg; t.style.borderColor=v.hbd;
        const a=t.querySelector('.btn-ico'); if(a) a.style.transform='translateX(4px)'; }}
      onMouseLeave={e=>{ const t=e.currentTarget; t.style.background=v.bg; t.style.color=v.fg; t.style.borderColor=v.bd;
        const a=t.querySelector('.btn-ico'); if(a) a.style.transform='none'; }}>
      <span style={{ whiteSpace:'nowrap' }}>{children}</span>
      {icon && <span className="btn-ico" style={{ display:'inline-flex', transition:'transform 0.35s var(--ease)' }}>
        <Icon name={icon} size={16}/>
      </span>}
    </button>
  );
}
