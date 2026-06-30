import Section from '../components/Section.jsx';
import { Reveal, Eyebrow } from '../components/primitives.jsx';
import PageHead from './PageHead.jsx';

// SAAR360 Terms & Conditions — DRAFT scaffold structured to Apple App Store and
// Google Play expectations. Replace the body copy with legally reviewed text.
const SECTIONS = [
  { t:'1. Acceptance of Terms', p:'By downloading, accessing or using the SAAR360 application and platform ("SAAR360", the "Service"), you agree to be bound by these Terms & Conditions. If you do not agree, do not use the Service. These Terms apply to all users, including hospital, clinical and administrative accounts.' },
  { t:'2. The Service', p:'SAAR360 provides inventory management, equipment tracking, service ticketing, logistics and related healthcare supply-chain features. SAARMedTec may add, modify or discontinue features at any time. The Service is provided to authorised customers under separate service agreements.' },
  { t:'3. Eligibility & Accounts', p:'You must be at least 18 and authorised by your organisation to use SAAR360. You are responsible for the confidentiality of your credentials and for all activity under your account. Notify SAARMedTec immediately of any unauthorised use.' },
  { t:'4. Acceptable Use', p:'You agree not to misuse the Service, including attempting to access data you are not authorised to view, reverse-engineering the application, disrupting its operation, or using it to violate any law or third-party right.' },
  { t:'5. Data & Privacy', p:'SAAR360 processes operational and account data to deliver the Service. Data is handled in accordance with our Privacy Policy and applicable regulations. We do not sell personal data. You retain ownership of your organisation’s data; you grant SAARMedTec a limited licence to process it to operate the Service.' },
  { t:'6. Intellectual Property', p:'SAAR360, including its software, design, trademarks and content, is owned by SAARMedTec or its licensors and is protected by law. No rights are granted except the limited right to use the Service as permitted by these Terms.' },
  { t:'7. Third-Party Services', p:'The Service may integrate with third-party platforms (including app-store providers and device manufacturers). Your use of those services is governed by their respective terms; SAARMedTec is not responsible for third-party services.' },
  { t:'8. Disclaimers', p:'The Service is provided "as is" and "as available" without warranties of any kind, to the maximum extent permitted by law. SAARMedTec does not warrant that the Service will be uninterrupted, error-free or secure.' },
  { t:'9. Limitation of Liability', p:'To the maximum extent permitted by law, SAARMedTec shall not be liable for any indirect, incidental, special or consequential damages, or for loss of data, profits or business arising from use of the Service.' },
  { t:'10. Termination', p:'We may suspend or terminate access to the Service for breach of these Terms or where required by a service agreement. You may stop using the Service at any time.' },
  { t:'11. Changes to These Terms', p:'We may update these Terms from time to time. Material changes will be notified within the Service or by other reasonable means. Continued use after changes take effect constitutes acceptance.' },
  { t:'12. Governing Law', p:'These Terms are governed by the laws of the Republic of Iraq, without regard to conflict-of-laws principles, unless otherwise agreed in a service agreement.' },
  { t:'13. Contact', p:'Questions about these Terms can be directed to Info@SAARMedTec.com.' },
];

export default function TermsPage() {
  return (
    <div>
      <PageHead num="08" crumb="SAAR360 · Legal"
        title="SAAR360 Terms & Conditions"
        lead="The terms that govern use of the SAAR360 application and platform. This is a draft scaffold pending legal review." />

      <Section bg="var(--paper)" pad="0 0 clamp(80px,10vw,128px)">
        <div style={{ display:'grid', gridTemplateColumns:'0.6fr 2fr', gap:64 }} className="who-grid">
          <Reveal>
            <Eyebrow>Last updated</Eyebrow>
            <p style={{ fontSize:14, color:'var(--muted)', marginTop:16, lineHeight:1.6 }}>
              Draft · 2026<br/>Pending legal review
            </p>
          </Reveal>

          <div style={{ borderTop:'1px solid var(--ink)' }}>
            {SECTIONS.map((s,i)=>(
              <Reveal key={s.t} delay={Math.min(i,6)*30} style={{ padding:'30px 0',
                borderBottom:'1px solid var(--line)' }}>
                <h2 style={{ fontSize:'clamp(18px,2vw,22px)', fontWeight:600,
                  letterSpacing:'-0.01em', marginBottom:12 }}>{s.t}</h2>
                <p style={{ fontSize:15.5, lineHeight:1.75, color:'var(--ink-2)', maxWidth:760 }}>{s.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
