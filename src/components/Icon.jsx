// ── SAARMedTec — Line Icon Set ───────────────────────────────────────────────
// Consistent 24x24 grid, 1.5 stroke, currentColor. No fills, no emoji.

export default function Icon({ name, size = 24, stroke = 1.5, style }) {
  const p = {
    width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: stroke,
    strokeLinecap: 'round', strokeLinejoin: 'round', style,
  };
  const paths = {
    // Capability pillars
    supply: <><path d="M3 7l9-4 9 4v10l-9 4-9-4V7z"/><path d="M3 7l9 4 9-4M12 11v10"/></>,
    install: <><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.1-.5-.5-2.1 2.7-2.5z"/></>,
    training: <><path d="M12 3L2 8l10 5 10-5-10-5z"/><path d="M6 10.5V15c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5M22 8v5"/></>,
    support: <><path d="M5 13a7 7 0 0 1 14 0M3 14a2 2 0 0 1 2-2h1v5H5a2 2 0 0 1-2-2v-1zM21 14a2 2 0 0 0-2-2h-1v5h1a2 2 0 0 0 2-2v-1z"/><path d="M19 17v1a3 3 0 0 1-3 3h-2"/></>,

    // Utility
    arrow: <path d="M5 12h14M13 6l6 6-6 6"/>,
    arrowUpRight: <path d="M7 17L17 7M8 7h9v9"/>,
    plus: <path d="M12 5v14M5 12h14"/>,
    minus: <path d="M5 12h14"/>,
    check: <path d="M4 12l5 5L20 6"/>,
    location: <><path d="M12 21s7-6.3 7-12a7 7 0 0 0-14 0c0 5.7 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></>,
    mail: <><rect x="3" y="5" width="18" height="14"/><path d="M3 6l9 7 9-7"/></>,
    phone: <path d="M5 3h4l2 5-3 2a14 14 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2z"/>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 4 5.8 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.8-4-9s1.5-6.5 4-9z"/></>,
    shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></>,
    grid: <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></>,
    layers: <><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5M3 8v5l9 5 9-5V8"/></>,
    pulse: <path d="M2 12h4l2-6 4 14 3-9 2 3 5-2"/>,
    box: <><path d="M3 7l9-4 9 4v10l-9 4-9-4V7z"/><path d="M3 7l9 4 9-4M12 11v10"/></>,
    warehouse: <><path d="M3 21V8l9-4 9 4v13"/><path d="M7 21v-7h10v7M7 17h10"/></>,
    cpu: <><rect x="6" y="6" width="12" height="12" rx="1"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    award: <><circle cx="12" cy="9" r="6"/><path d="M9 14l-1.5 7L12 18l4.5 3L15 14"/></>,
    building: <><rect x="4" y="3" width="16" height="18"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/></>,
    hospital: <><path d="M3 21h18"/><path d="M5 21V8l7-4 7 4v13"/><path d="M12 7.5v4M10 9.5h4"/><path d="M9.5 21v-4h5v4"/></>,
    target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></>,
    compass: <><circle cx="12" cy="12" r="9"/><path d="M16 8l-2.5 5.5L8 16l2.5-5.5L16 8z"/></>,
    heart: <path d="M12 20s-7-4.5-9-9.5C1.5 6.5 4 3.5 7.5 4.2 9.5 4.6 11 6.2 12 7.5c1-1.3 2.5-2.9 4.5-3.3C20 3.5 22.5 6.5 21 10.5c-2 5-9 9.5-9 9.5z"/>,
    scale: <><path d="M12 3v18M5 7h14M5 7l-3 7h6l-3-7zM19 7l-3 7h6l-3-7zM8 21h8"/></>,
    lungs: <><path d="M12 3v8M9 11c0-1 1-2 1.5-2M9 11c-2 1-4 3-4 6 0 2 1 3 2.5 3S10 21 10 19v-4c0-2-.5-3-1-4zM15 11c0-1-1-2-1.5-2M15 11c2 1 4 3 4 6 0 2-1 3-2.5 3S14 21 14 19v-4c0-2 .5-3 1-4z"/></>,
    chip: <><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/></>,
    route: <><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.5 6H15a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h6.5"/></>,
    handshake: <path d="M3 11l4-4 3 2 4-3 7 5v3l-3 2-3-3M14 12l-2 2-2-2M7 7l-4 4v3l3 2 3-3"/>,
    doc: <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></>,
    bolt: <path d="M13 3L5 13h6l-1 8 8-10h-6l1-8z"/>,
    microscope: <><path d="M6 21h12M9 18a6 6 0 0 0 9-5M9 4l3 3-4 4-3-3 4-4zM7 9l-2 2 3 3 2-2"/></>,
    stent: <><path d="M5 5l14 14M8 4l12 12M4 8l12 12"/><circle cx="5" cy="5" r="1"/><circle cx="19" cy="19" r="1"/></>,
    valve: <><circle cx="12" cy="12" r="8"/><path d="M12 4v16M4 12h16"/></>,
  };
  return <svg {...p}>{paths[name] || paths.grid}</svg>;
}
