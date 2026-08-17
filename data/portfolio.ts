export type PortfolioCategory =
  | 'Weddings'
  | 'Engagements'
  | 'Birthdays'
  | 'Parties'
  | 'Events';

export type PortfolioItem = {
  id: string;
  title: string;
  category: PortfolioCategory;
  image: string;
  alt: string;
  span?: 'tall' | 'wide' | 'normal';
};

export const portfolioCategories: ('All' | PortfolioCategory)[] = [
  'All',
  'Weddings',
  'Engagements',
  'Birthdays',
  'Parties',
  'Events',
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Lantern Vows',
    category: 'Weddings',
    image:
      'https://images.pexels.com/photos/38823745/pexels-photo-38823745.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Couple under warm lantern light at a wedding',
    span: 'tall',
  },
  {
    id: 'p2',
    title: 'Sunlit Promise',
    category: 'Engagements',
    image:
      'https://images.pexels.com/photos/37353891/pexels-photo-37353891.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Couple in white in a sunlit park',
    span: 'normal',
  },
  {
    id: 'p3',
    title: 'The First Dance',
    category: 'Weddings',
    image:
      'https://images.pexels.com/photos/16229516/pexels-photo-16229516.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Top-down view of a bride and groom embracing during a dance',
    span: 'wide',
  },
  {
    id: 'p4',
    title: 'Golden Hour',
    category: 'Engagements',
    image:
      'https://images.pexels.com/photos/32552665/pexels-photo-32552665.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Couple sharing an intimate moment in a sunlit field',
    span: 'normal',
  },
  {
    id: 'p5',
    title: 'Sixteen Candles',
    category: 'Birthdays',
    image:
      'https://images.pexels.com/photos/25956380/pexels-photo-25956380.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Birthday candles spelling BIRTHDAY',
    span: 'normal',
  },
  {
    id: 'p6',
    title: 'Sweet Celebrations',
    category: 'Birthdays',
    image:
      'https://images.pexels.com/photos/32333371/pexels-photo-32333371.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Young woman celebrating her birthday with friends and cakes',
    span: 'tall',
  },
  {
    id: 'p7',
    title: 'Neon Nights',
    category: 'Parties',
    image:
      'https://images.pexels.com/photos/15634076/pexels-photo-15634076.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Energetic nightclub scene with DJs and red lighting',
    span: 'normal',
  },
  {
    id: 'p8',
    title: 'Confetti Rain',
    category: 'Parties',
    image:
      'https://images.pexels.com/photos/5191740/pexels-photo-5191740.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'People dancing under falling confetti in a nightclub',
    span: 'wide',
  },
  {
    id: 'p9',
    title: 'Center Stage',
    category: 'Events',
    image:
      'https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Audience watching a presentation at a conference',
    span: 'normal',
  },
  {
    id: 'p10',
    title: 'The Keynote',
    category: 'Events',
    image:
      'https://images.pexels.com/photos/34774344/pexels-photo-34774344.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Speaker holding a microphone at a presentation event',
    span: 'normal',
  },
  {
    id: 'p11',
    title: 'Window Light',
    category: 'Weddings',
    image:
      'https://images.pexels.com/photos/5804239/pexels-photo-5804239.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Bride and groom sharing an intimate moment by a window',
    span: 'normal',
  },
  {
    id: 'p12',
    title: 'Floral Embrace',
    category: 'Engagements',
    image:
      'https://images.pexels.com/photos/15213984/pexels-photo-15213984.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Couple embracing against a floral backdrop with engagement ring',
    span: 'tall',
  },
];

export const imageStrip = portfolioItems.slice(0, 8).map((p) => ({
  image: p.image,
  alt: p.alt,
}));
