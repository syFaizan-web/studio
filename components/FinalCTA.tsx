'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[hsl(40_30%_98%)] py-28 sm:py-40">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.pexels.com/photos/22735407/pexels-photo-22735407.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury wedding film background"
          className="h-full w-full object-cover opacity-15"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(40_30%_98%/0.9)] via-[hsl(40_30%_98%/0.75)] to-[hsl(40_30%_98%/0.95)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-900/15 bg-[hsl(35_25%_94%)] px-4.5 py-1.5 backdrop-blur-md shadow-sm"
        >
          <Sparkles className="h-3.5 w-3.5 text-[hsl(38_75%_48%)]" />
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[hsl(28_25%_20%)] sm:text-xs">
            Reserve Your 2026/2027 Celebration Date
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9 }}
          className="font-display text-4xl leading-[1.1] text-[hsl(28_25%_12%)] text-balance sm:text-6xl lg:text-7xl"
        >
          Your Special Day. Your Story.
          <br />
          <span className="gold-gradient-text">
            Let&rsquo;s Capture It Forever.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-base text-[hsl(28_15%_30%)] sm:text-lg font-medium"
        >
          Reach out today to secure your event date and start crafting custom cinematic coverage built around your vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10"
        >
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[hsl(38_75%_48%)] to-[hsl(32_80%_52%)] px-9 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-xl shadow-amber-500/25 transition-all duration-300 hover:scale-105 hover:shadow-amber-500/40"
          >
            <span>Book Your Date Now</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


