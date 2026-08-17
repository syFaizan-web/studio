export type Testimonial = {
  id: string;
  name: string;
  event: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya & Rohan',
    event: 'Wedding, Mumbai',
    quote:
      'Every single frame felt like a movie. We laughed, we cried, and we got to relive our day through photos that actually felt like us.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Sneha K.',
    event: '30th Birthday, Pune',
    quote:
      'I forgot the camera was even there. The photos are so natural and full of life — exactly what I wanted for the night.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Arjun & Meera',
    event: 'Engagement, Goa',
    quote:
      'The golden hour shots are unreal. Professional, easy to work with, and genuinely lovely people. Worth every rupee.',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Vikram Shah',
    event: 'Product Launch, Bangalore',
    quote:
      'Covered our entire launch event — stage, crowd, candid moments. Turnaround was fast and the quality was top-notch.',
    rating: 5,
  },
];
