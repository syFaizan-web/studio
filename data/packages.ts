export type Package = {
  id: string;
  name: string;
  price: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
};

export const packages: Package[] = [
  {
    id: 'essential',
    name: 'Essential',
    price: 'Request a Quote',
    tagline: 'For intimate gatherings and half-day coverage',
    features: [
      'Up to 4 hours of coverage',
      '1 photographer',
      '100+ edited photos',
      'Online gallery for sharing',
      'Delivery in 2 weeks',
    ],
  },
  {
    id: 'signature',
    name: 'Signature',
    price: 'Request a Quote',
    tagline: 'The most popular choice for weddings and full-day events',
    highlighted: true,
    features: [
      'Up to 8 hours of coverage',
      '2 photographers',
      '1 highlight film (2–3 min)',
      '300+ edited photos',
      'Online gallery + print-ready files',
      'Delivery in 3 weeks',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 'Request a Quote',
    tagline: 'Full storytelling coverage for multi-day celebrations',
    features: [
      'Up to 2 days of coverage',
      '2 photographers + 1 videographer',
      'Cinematic film (5–7 min) + reels',
      '500+ edited photos',
      'Premium album included',
      'Priority delivery in 2 weeks',
    ],
  },
];
