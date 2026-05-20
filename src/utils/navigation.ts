// An array of links for navigation bar
const navBarLinks = [
  { name: 'Home', url: '/' },
  { name: 'FixSoftRepair', url: '/products' },
  { name: 'FixSoftMobile', url: '/products/fixsoftmobile' },
  { name: 'Contact', url: '/contact' },
];
// An array of links for footer
const footerLinks = [
  {
    section: 'Products',
    links: [
      { name: 'FixSoftRepair', url: '/products' },
      { name: 'Documentation', url: '/welcome-to-docs/' },
      { name: 'Services', url: '/services' },
    ],
  },
  {
    section: 'Company',
    links: [
      { name: 'About Us', url: '#' },
      { name: 'Blog', url: '/blog' },
      { name: 'Contact', url: '/contact' },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: 'https://www.facebook.com/',
  x: 'https://twitter.com/',
  github: 'https://github.com/',
  google: 'https://www.google.com/',
  slack: 'https://slack.com/',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
