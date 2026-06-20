import React from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import { useReveal } from './hooks.js';
import { PAGES, pathForId, idForPath, titleForId } from './routes.js';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import TurnkeyPage from './pages/TurnkeyPage.jsx';
import ServiceCenterPage from './pages/ServiceCenterPage.jsx';
import CustomerSupportPage from './pages/CustomerSupportPage.jsx';
import CareersPage from './pages/CareersPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

// Map page id → component. Each page receives `setPage` (now a navigation
// helper) so existing setPage('contact')-style calls keep working unchanged.
const COMPONENTS = {
  home: HomePage,
  about: AboutPage,
  services: ServicesPage,
  turnkey: TurnkeyPage,
  'service-center': ServiceCenterPage,
  'customer-support': CustomerSupportPage,
  careers: CareersPage,
  contact: ContactPage,
};

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const pageRef = React.useRef(null);

  useReveal();

  // Backwards-compatible API: components still call setPage(id); we navigate.
  const goTo = React.useCallback((id) => navigate(pathForId(id)), [navigate]);
  const page = idForPath(location.pathname);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = titleForId(page);
    if (pageRef.current) {
      pageRef.current.classList.remove('page-enter');
      void pageRef.current.offsetWidth;
      pageRef.current.classList.add('page-enter');
    }
    setTimeout(() => window.__initReveals && window.__initReveals(), 60);
  }, [location.pathname, page]);

  return (
    <div style={{ minHeight:'100vh', position:'relative' }}>
      <Nav page={page} setPage={goTo} />
      <main ref={pageRef} className="page-enter">
        <Routes>
          {PAGES.map(({ id, path }) => {
            const Page = COMPONENTS[id];
            return <Route key={id} path={path} element={<Page setPage={goTo} />} />;
          })}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer setPage={goTo} />
    </div>
  );
}
