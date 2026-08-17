'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { siteConfig } from '@/data/contact';

const images = [
  'https://images.pexels.com/photos/30372608/pexels-photo-30372608.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/27176823/pexels-photo-27176823.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/30682919/pexels-photo-30682919.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/30142374/pexels-photo-30142374.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/5152571/pexels-photo-5152571.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/29708240/pexels-photo-29708240.jpeg?auto=compress&cs=tinysrgb&w=600',
];

export function SocialGallery() {
  return (
    <section className="bg-[hsl(40_20%_98%)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[hsl(30_5%_40%)]"
            >
              Social Proof
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-3xl text-[hsl(30_10%_10%)] sm:text-5xl"
            >
              Follow the journey.
            </motion.h2>
          </div>
          <Link
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-[hsl(30_15%_6%)] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[hsl(30_10%_20%)]"
          >
            <Instagram className="h-4 w-4" />
            Follow on Instagram
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {images.map((src, i) => (
            <motion.a
              key={i}
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt="Instagram post"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                <Instagram className="h-6 w-6 text-white" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
