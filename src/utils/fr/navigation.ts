const navBarLinks = [
  { name: 'Accueil', url: '/fr' },
  { name: 'FixSoftRepair', url: '/fr/products' },
  { name: 'FixSoftMobile', url: '/fr/products/fixsoftmobile' },
  { name: 'Contact', url: '/fr/contact' },
];

const footerLinks = [
  {
    section: 'Produits',
    links: [
      { name: 'FixSoftRepair', url: '/fr/products' },
      { name: 'Documentation', url: '/welcome-to-docs/' },
      { name: 'Services', url: '/fr/services' },
    ],
  },
  {
    section: 'Société',
    links: [
      { name: 'À propos', url: '#' },
      { name: 'Blog', url: '/fr/blog' },
      { name: 'Contact', url: '/fr/contact' },
    ],
  },
];

const socialLinks = {
  facebook: 'https://www.facebook.com/fixsoftdz3444/',
  x: '#',
  github: '#',
  google: '#',
  slack: '#',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
