'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function IntroSection() {
  return (
    <section className="bg-[hsl(40_30%_98%)] py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center justify-center gap-2"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-900/15 bg-[hsl(35_25%_94%)] px-4 py-1.5 backdrop-blur-md shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[hsl(38_75%_48%)]" />
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[hsl(28_25%_20%)] sm:text-xs">
              Our Vision &amp; Philosophy
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-center font-display text-3xl leading-[1.2] text-[hsl(28_25%_12%)] text-balance sm:text-5xl"
        >
          Every Frame Tells Your{' '}
          <span className="gold-gradient-text">
            Unique Story.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-[hsl(28_15%_30%)] sm:text-lg"
        >
          We do not just take photos. We capture romance, emotion, and the in-between
          moments — the laughter, the tearful glances, and the quiet magic before the grand celebration begins. That is where real beauty lives, and that is what we preserve forever.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-12 h-px w-24 bg-gradient-to-r from-transparent via-[hsl(38_75%_48%)] to-transparent"
        />
      </div>
    </section>
  );
}


