// ── Page ↔ URL mapping ───────────────────────────────────────────────────────
// Page ids (used throughout the app and in NAV_ITEMS) map to clean URL paths.

export const PAGES = [
  { id: 'home',             path: '/',         title: 'SAARMedTec — Bridging the Path to Better Care' },
  { id: 'about',            path: '/about',    title: 'About — SAARMedTec' },
  { id: 'services',         path: '/expertise',title: 'Clinical Expertise — SAARMedTec' },
  { id: 'turnkey',          path: '/turnkey',  title: 'Turnkey Solutions — SAARMedTec' },
  { id: 'service-center',   path: '/service',  title: 'Service Center — SAARMedTec' },
  { id: 'customer-support', path: '/support',  title: 'Customer Support — SAARMedTec' },
  { id: 'careers',          path: '/careers',  title: 'Careers — SAARMedTec' },
  { id: 'contact',          path: '/contact',  title: 'Contact — SAARMedTec' },
  { id: 'terms',            path: '/saar360-terms', title: 'SAAR360 Terms & Conditions — SAARMedTec' },
];

const byId = Object.fromEntries(PAGES.map(p => [p.id, p]));
const byPath = Object.fromEntries(PAGES.map(p => [p.path, p]));

export const pathForId = (id) => (byId[id] || PAGES[0]).path;
export const idForPath = (path) => (byPath[path] || PAGES[0]).id;
export const titleForId = (id) => (byId[id] || PAGES[0]).title;
