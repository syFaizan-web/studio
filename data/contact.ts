export const siteConfig = {
  name: 'Frame & Story',
  tagline: 'Cinematic photography & videography for weddings, events, and the moments that matter.',
  photographerName: 'Aarav Mehta',
  email: 'hello@frameandstory.com',
  phone: '+91 98765 43210',
  whatsapp: '03085614147',
  instagram: 'https://instagram.com/syfaizu',
  youtube: 'https://youtube.com/@frameandstory',
  facebook: 'https://facebook.com/frameandstory',
  serviceArea: 'Mumbai • Pune • Goa • Destination Worldwide',
  stickyBar: {
    ctaText: 'Ready to capture your story?',
    bookLabel: 'Book Now',
    whatsappLabel: 'Chat',
    whatsappMessage: "Hi, I'd like to inquire about your photography/videography services.",
  },
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    message ?? siteConfig.stickyBar.whatsappMessage,
  )}`;

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Services', href: '/#services' },
  { label: 'Packages', href: '/#packages' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];
