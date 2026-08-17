'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/contact';

export function About() {
  return (
    <section id="about" className="bg-[hsl(30_15%_6%)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.pexels.com/photos/16029823/pexels-photo-16029823.jpeg?auto=compress&cs=tinysrgb&w=1000"
              alt="Portrait of the photographer holding a camera"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/50"
            >
              Behind the Camera
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-3xl leading-[1.15] text-white sm:text-5xl"
            >
              Hi, I&rsquo;m {siteConfig.photographerName}.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 space-y-4 text-base leading-relaxed text-white/70"
            >
              <p>
                I have been pointing a camera at people for over seven years. What
                started as a fascination with light turned into a full-time obsession
                with telling stories — real ones, the kind you feel in your chest
                when you look back at them years later.
              </p>
              <p>
                I shoot weddings, engagements, birthdays, and celebrations of every
                shape, and I believe the best photos happen when people forget the
              </p>
              <p>
                camera is there. My job is to earn that forgetting. Based in Mumbai,
                I travel anywhere the story takes me.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3 text-sm text-white/60"
            >
              <span className="rounded-full border border-white/15 px-4 py-1.5">
                {siteConfig.serviceArea}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
