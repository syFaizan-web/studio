export type Service = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    id: 'weddings',
    title: 'Weddings',
    tagline: 'The big day, frame by frame',
    description:
      'Full-day coverage from the first look to the last dance — candid moments, family portraits, and cinematic highlights that let you relive it all.',
    image:
      'https://images.pexels.com/photos/38823745/pexels-photo-38823745.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Couple under warm lantern light at a wedding',
  },
  {
    id: 'engagements',
    title: 'Engagements',
    tagline: 'Before the forever begins',
    description:
      'Relaxed, editorial-style couple shoots in locations that mean something to you — golden hour light, natural emotion, no stiff posing.',
    image:
      'https://images.pexels.com/photos/37353891/pexels-photo-37353891.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Couple in white sharing a tender moment in a sunlit park',
  },
  {
    id: 'birthdays',
    title: 'Birthdays',
    tagline: 'Every candle, every laugh',
    description:
      'From first birthdays to milestone fiftieths — bright, joyful coverage that captures the people, the cake, and the chaos in equal measure.',
    image:
      'https://images.pexels.com/photos/25956380/pexels-photo-25956380.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Birthday candles spelling BIRTHDAY against a festive background',
  },
  {
    id: 'parties',
    title: 'Private Parties',
    tagline: 'Where the night lives',
    description:
      'Low-light, high-energy coverage for intimate gatherings and big celebrations alike — mood, movement, and the moments you forgot happened.',
    image:
      'https://images.pexels.com/photos/15634076/pexels-photo-15634076.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Energetic nightclub scene with DJs and vibrant red lighting',
  },
  {
    id: 'events',
    title: 'Special Events',
    tagline: 'Conferences, launches, and more',
    description:
      'Professional coverage for corporate events, product launches, and conferences — key moments, candid networking, and stage highlights.',
    image:
      'https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Audience watching a presentation at a conference',
  },
];
