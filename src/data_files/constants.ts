import ogImageSrc from '@images/social.png';

export const SITE = {
  title: 'FixSoft',
  tagline: 'Professional Software Solutions',
  description:
    'FixSoft delivers professional web development, mobile apps, desktop software, and SaaS solutions tailored for businesses. Discover FixSoftRepair — our all-in-one repair shop management system.',
  description_short:
    'FixSoft delivers professional software solutions: web, mobile, desktop, and SaaS for businesses.',
  url: 'https://fixsoft.dz',
  author: 'FixSoft',
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    inLanguage: 'en-US',
    '@id': SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      '@type': 'WebSite',
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: 'en_US',
  type: 'website',
  url: SITE.url,
  title: `${SITE.title}: Professional Software & SaaS Solutions`,
  description:
    'FixSoft builds professional web platforms, mobile apps, and custom software for businesses. Try FixSoftRepair — the complete repair shop management system for phones, cars, electronics, and more.',
  image: ogImageSrc,
};

const ic = `display:flex;align-items:center;gap:10px;color:#6B7280;font-family:Arial,sans-serif;font-size:14px;font-weight:700;padding:12px 20px`;

export const partnersData = [
  {
    icon: `<div style="${ic}">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6B7280" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <line x1="12" y1="2" x2="12" y2="22"/>
      </svg>
      <span>React</span>
    </div>`,
    name: 'React',
    href: '#',
  },
  {
    icon: `<div style="${ic}">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6B7280" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
      <span>Laravel</span>
    </div>`,
    name: 'Laravel',
    href: '#',
  },
  {
    icon: `<div style="${ic}">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6B7280" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
      <span>Flutter</span>
    </div>`,
    name: 'Flutter',
    href: '#',
  },
  {
    icon: `<div style="${ic}">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6B7280" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
      <span>Android</span>
    </div>`,
    name: 'Android',
    href: '#',
  },
  {
    icon: `<div style="${ic}">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6B7280" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
      </svg>
      <span>MySQL</span>
    </div>`,
    name: 'MySQL',
    href: '#',
  },
];
