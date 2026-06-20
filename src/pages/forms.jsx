// ── Shared form primitives ───────────────────────────────────────────────────

export const inputStyle = {
  width:'100%', border:'1px solid var(--line-2)', borderRadius:0,
  padding:'12px 14px', fontFamily:'var(--font-sans)', fontSize:14.5,
  color:'var(--ink)', background:'var(--paper)', outline:'none',
  boxSizing:'border-box', resize:'vertical',
  transition:'border-color 0.25s var(--ease)',
};

export function FieldLabel({ children }) {
  return <label className="eyebrow" style={{ display:'block', color:'var(--muted)',
    fontSize:10, marginBottom:9 }}>{children}</label>;
}

export function FormFields({ fields }) {
  return (
    <>
      {fields.map(f=>(
        <div key={f} style={{ marginBottom:18 }}>
          <FieldLabel>{f}</FieldLabel>
          <input placeholder={f} style={inputStyle} className="fld"/>
        </div>
      ))}
    </>
  );
}
