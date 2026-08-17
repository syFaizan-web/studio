'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Video } from 'lucide-react';

const gallery = [
  {
    image:
      'https://images.pexels.com/photos/32878576/pexels-photo-32878576.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Couple in traditional attire during a pre-wedding shoot',
  },
  {
    image:
      'https://images.pexels.com/photos/5804242/pexels-photo-5804242.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Bride and groom sharing an intimate moment by a large window',
  },
  {
    image:
      'https://images.pexels.com/photos/22735407/pexels-photo-22735407.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Couple embracing in a romantic wedding setting in low light',
  },
  {
    image:
      'https://images.pexels.com/photos/33953635/pexels-photo-33953635.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Indian couple embracing under a tree with hanging flowers',
  },
];

export function FeaturedStory() {
  return (
    <section className="bg-[hsl(40_30%_98%)] py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-amber-900/15 bg-[hsl(35_25%_94%)] shadow-xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.pexels.com/photos/5804239/pexels-photo-5804239.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Bride and groom sharing an intimate moment by the window"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-3 rounded-2xl border border-white/30 bg-black/40 p-4 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white">
                  <Video className="h-5 w-5 fill-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Cinematic Feature</p>
                  <p className="text-xs text-amber-200">2-Day Grand Celebration</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-white/90">4K Ultra HD</span>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-900/15 bg-[hsl(35_25%_94%)] px-4 py-1.5 backdrop-blur-md shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-[hsl(38_75%_48%)]" />
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[hsl(28_25%_20%)] sm:text-xs">
                Featured Wedding Film &amp; Story
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-3xl leading-[1.15] text-[hsl(28_25%_12%)] sm:text-5xl"
            >
              A Story Worth{' '}
              <span className="gold-gradient-text">
                Remembering Forever.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-base leading-relaxed text-[hsl(28_15%_30%)] sm:text-lg"
            >
              Two days, three locations, and one celebration that refused to sit
              still. From the haldi at sunrise to the baraat at midnight, we
              followed every moment — the laughter, the tears, and the chaos in
              between — to tell the full story of a wedding that was anything but
              ordinary.
            </motion.p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {gallery.map((g, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="relative overflow-hidden rounded-2xl border border-amber-900/10 bg-[hsl(35_25%_94%)] aspect-[4/3]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={g.image}
                    alt={g.alt}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-2.5 text-xs font-semibold text-[hsl(28_25%_20%)]"
            >
              <span className="rounded-full border border-amber-900/15 bg-[hsl(35_25%_94%)] px-4 py-1.5 shadow-xs">
                ✨ 2-Day Complete Coverage
              </span>
              <span className="rounded-full border border-amber-900/15 bg-[hsl(35_25%_94%)] px-4 py-1.5 shadow-xs">
                🎬 4K Cinematic Highlight Film
              </span>
              <span className="rounded-full border border-amber-900/15 bg-[hsl(35_25%_94%)] px-4 py-1.5 shadow-xs">
                📸 500+ Retouched Photos
              </span>
              <span className="rounded-full border border-amber-900/15 bg-[hsl(35_25%_94%)] px-4 py-1.5 shadow-xs">
                📖 Premium Flush-Mount Album
              </span>
            </motion.div>

            <Link
              href="/#contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[hsl(38_75%_48%)] to-[hsl(32_80%_52%)] px-7 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-amber-500/20 transition-all hover:scale-[1.03] hover:shadow-lg"
            >
              Plan Your Story With Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

