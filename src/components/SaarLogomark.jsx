export default function SaarLogomark({ size = 30, color = 'var(--ink)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <rect x="0.6" y="0.6" width="28.8" height="28.8" stroke={color} strokeWidth="1.2"/>
      <rect x="4" y="13" width="22" height="4" fill="var(--red)"/>
      <rect x="13" y="4" width="4" height="22" fill={color}/>
    </svg>
  );
}
