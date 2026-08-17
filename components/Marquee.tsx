'use client';

import { motion } from 'framer-motion';
import { imageStrip } from '@/data/portfolio';

const marqueeItems = [
  'Weddings',
  'Engagements',
  'Birthdays',
  'Private Parties',
  'Special Events',
  'Cinematic Films',
  'Couple Shoots',
];

export function Marquee() {
  return (
    <section className="overflow-hidden border-y border-[hsl(30_10%_88%)] bg-[hsl(40_20%_98%)] py-6">
      <div className="flex whitespace-nowrap">
        <div className="flex animate-marquee items-center gap-8 pr-8">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="font-display text-2xl text-[hsl(30_10%_30%)] sm:text-3xl"
            >
              {item}
              <span className="ml-8 text-[hsl(28_60%_52%)]">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Image strip */}
      <div className="mt-8 overflow-hidden">
        <div className="flex animate-marquee-slow gap-4 px-2">
          {[...imageStrip, ...imageStrip].map((img, i) => (
            <motion.div
              key={i}
              className="relative h-44 w-72 flex-shrink-0 overflow-hidden rounded-lg sm:h-56 sm:w-96"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.image}
                alt={img.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
