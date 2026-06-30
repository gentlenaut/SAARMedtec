// ── SAARMedTec — Site content / data ─────────────────────────────────────────
// Edit copy here; components below read from these arrays.

export const NAV_ITEMS = [
  { id: 'home',             label: 'Home',      num: '00' },
  { id: 'about',            label: 'About',     num: '01' },
  { id: 'services',         label: 'Expertise', num: '02' },
  { id: 'turnkey',          label: 'Turnkey',   num: '03' },
  { id: 'service-center',   label: 'Service',   num: '04' },
  { id: 'customer-support', label: 'Support',   num: '05' },
  { id: 'careers',          label: 'Careers',   num: '06' },
  { id: 'contact',          label: 'Contact',   num: '07' },
];

export const STATS = [
  { value: 1984, label: 'Established in Iraq', display: 'Since 1984' },
  { value: 14,   label: 'Clinical specialties', suffix: '' },
  { value: 29,   label: 'Global manufacturer partners', suffix: '' },
  { value: 44,   label: 'First-in-Iraq innovations', suffix: '+' },
];

export const BUSINESS_UNITS = [
  { id:'01', name:'Robotics',                  desc:'Surgical robotics for precision-led intervention',  brands:'Medtronic · Intuitive' },
  { id:'02', name:'Cardiovascular',            desc:'Monitoring, intervention & vascular systems',         brands:'Medtronic · Boston Scientific' },
  { id:'03', name:'Respiratory & Sleep',       desc:'Ventilation, CPAP & pulmonary diagnostics',           brands:'ResMed · Vyaire' },
  { id:'04', name:'Medical Endoscope',         desc:'Endoscopy, visualisation & EBUS systems',             brands:'Olympus' },
  { id:'05', name:'Diabetes',                  desc:'CGM, insulin pumps & glucose management',             brands:'Medtronic MiniMed' },
  { id:'06', name:'Diagnostic & Imaging',      desc:'CT, MRI, X-ray, PET/CT & ultrasound platforms',       brands:'GE Healthcare · Hologic' },
  { id:'07', name:'Urology & Urogynecology',   desc:'Stone management, urodynamics & pelvic health',       brands:'Boston Scientific · Dornier' },
  { id:'08', name:'Disinfection',              desc:'Infection prevention & sterilisation',                brands:'Ecolab · Anios' },
  { id:'09', name:'Spinal & Orthopedic',       desc:'Implants, fixation & deformity systems',              brands:'Zimmer Biomet · Medtronic' },
  { id:'10', name:'Airway & ENT',              desc:'Intubation, laryngoscopy & ENT devices',              brands:'Olympus · Flexicare' },
  { id:'11', name:'Neuroscience',              desc:'Neuromonitoring & neurostimulation',                  brands:'Medtronic · Boston Scientific' },
  { id:'12', name:'Medical Consumables',       desc:'Bedside essentials & clinical-grade supplies',        brands:'Convatec · Medela' },
  { id:'13', name:'Surgical Innovation',       desc:'Energy devices & advanced closure',                   brands:'Olympus · Medtronic' },
  { id:'14', name:'Respiratory Care',          desc:'Respiratory care & airway management systems',        brands:'Flexicare · Vyaire' },
];

// Partner logos (official brand assets in public/assets/partners/).
// Rendered as a monochrome wall on the homepage.
export const PARTNER_LOGOS = Array.from({ length: 32 }, (_, i) =>
  `/assets/partners/Logo-${String(i + 1).padStart(2, '0')}.svg`);

export const PARTNERS = [
  'Medtronic','GE Healthcare','Olympus','Zimmer Biomet',
  'Boston Scientific','Hologic','ResMed','Ziehm Imaging',
  'Dornier MedTech','Convatec','Medela','Flexicare',
  'Vyaire','Ecolab / Anios','Starkey','Celbrea',
];

export const CAPABILITIES = [
  { icon:'supply',   num:'01', title:'Supply & Sourcing',
    desc:'End-to-end supply from forecast to delivery, monitored on SAP and fulfilled from our Iraq warehouse.' },
  { icon:'install',  num:'02', title:'Installation & Commissioning',
    desc:'Turnkey deployment of operating rooms, cath labs and imaging suites — delivered on time and on spec.' },
  { icon:'training', num:'03', title:'Clinical Training',
    desc:'Factory-certified specialists train your teams on every platform, from go-live through proficiency.' },
  { icon:'support',  num:'04', title:'After-Sales Service',
    desc:'In-house certified engineers, genuine spare parts and loaner equipment — nationwide, around the clock.' },
];

export const LANDMARKS = [
  { yr:'2014', name:'Discovery IQ PET/CT',        partner:'GE Healthcare', note:"Iraq's first PET/CT installation" },
  { yr:'2015', name:'CoreValve™ TAVR',            partner:'Medtronic',     note:'First transcatheter aortic valve, Al-Najaf' },
  { yr:'2016', name:'O-Arm™ Neuronavigation',     partner:'Medtronic',     note:"Iraq's first real-time 3D surgical imaging" },
  { yr:'2018', name:'Flexible Pleuroscope',       partner:'Olympus',       note:'First flexible pleuroscope, Thi-Qar' },
  { yr:'2019', name:'MiniMed™ 780G',              partner:'Medtronic',     note:'Automated insulin delivery every 5 minutes' },
  { yr:'2020', name:'3Dimensions™ Mammography',   partner:'Hologic',       note:'3D breast-cancer screening, SmartCurve™' },
  { yr:'2021', name:'THUNDERBEAT',                partner:'Olympus',       note:'Integrated ultrasonic + bipolar energy' },
  { yr:'2022', name:'Evolut™ TAVI',               partner:'Medtronic',     note:'Minimally invasive aortic valve replacement' },
  { yr:'2024', name:'GENTRACE Cyclotron',         partner:'GE Healthcare', note:'Local PET-isotope production for Iraq' },
];

export const CLIENTS = [
  'Iraqi Ministry of Health', 'KIMADIA — State Co. for Medical Appliances',
  'Medical City Health Directorate', 'Iraqi Heart Disease Centers — Baghdad',
  'Al-Najaf Center for Heart Surgery', 'Al-Nasria Heart Center',
  'Ibn Al-Bitar Hospital — Baghdad', 'Farouk Medical Center',
  'Thi-Qar Lung Diseases Center', 'Al-Alami Hospital — Baghdad',
];

// Trust / recognition strip (homepage). Mirrors the credentials on the About page.
export const STANDARDS = [
  { k:'Ministry of Health', v:'Certified partner since 1984' },
  { k:'CE / FDA',           v:'Certifications on the products we distribute' },
  { k:'ISO 9001',           v:'Quality management system' },
  { k:'FCPA & UKBA',        v:'Anti-bribery & ethics compliance' },
];

// Pull-quotes. Replace with real, attributed client quotes before launch.
export const TESTIMONIALS = [
  {
    quote: "SAARMedTec didn't just install the equipment — they trained our team, stocked the spare parts, and answered the phone at 2 a.m. That is the difference between owning a machine and running a service.",
    who:  'Head of Biomedical Engineering',
    org:  'A major Baghdad teaching hospital',
  },
];

// Editorial / thought-leadership cards (homepage). Wire to real articles later.
// `img: null` shows a branded placeholder; set it to '/assets/img/<file>' to use a photo.
export const PERSPECTIVES = [
  { tag:'Supply Chain', read:'5 min read', img:null, icon:'route',
    title:'Why full-consignment models lower the risk of running a modern hospital.' },
  { tag:'Innovation',   read:'6 min read', img:null, icon:'pulse',
    title:'Local PET-isotope production in Iraq — what it changes for oncology.' },
  { tag:'Service',      read:'4 min read', img:null, icon:'support',
    title:'Building nationwide biomedical engineering capacity, one certified team at a time.' },
];
