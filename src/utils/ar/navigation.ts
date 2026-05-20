const navBarLinks = [
  { name: 'الرئيسية', url: '/ar' },
  { name: 'FixSoftRepair', url: '/ar/products' },
  { name: 'FixSoftMobile', url: '/ar/products/fixsoftmobile' },
  { name: 'تواصل معنا', url: '/ar/contact' },
];

const footerLinks = [
  {
    section: 'المنتجات',
    links: [
      { name: 'FixSoftRepair', url: '/ar/products' },
      { name: 'التوثيق', url: '/welcome-to-docs/' },
      { name: 'الخدمات', url: '/ar/services' },
    ],
  },
  {
    section: 'الشركة',
    links: [
      { name: 'من نحن', url: '#' },
      { name: 'المدونة', url: '/ar/blog' },
      { name: 'تواصل معنا', url: '/ar/contact' },
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
