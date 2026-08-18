'use client';

import { motion } from 'framer-motion';
import { Star, Quote, Sparkles } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export function Testimonials() {
  return (
    <section className="bg-[hsl(40_30%_98%)] py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-900/15 bg-[hsl(35_25%_94%)] px-4 py-1.5 backdrop-blur-md shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-[hsl(38_75%_48%)]" />
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[hsl(28_25%_20%)] sm:text-xs">
              Client Testimonials &amp; Reviews
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl text-[hsl(28_25%_12%)] sm:text-5xl"
          >
            Kind Words From{' '}
            <span className="gold-gradient-text">
              Our Couples.
            </span>
          </motion.h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-3xl border border-amber-900/15 bg-[hsl(35_25%_94%)] p-8 shadow-xs transition-all duration-300 hover:border-amber-500/40 hover:shadow-xl"
            >
              <Quote className="mb-4 h-8 w-8 text-[hsl(38_75%_48%)]/40" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>
              <p className="text-base leading-relaxed text-[hsl(28_25%_15%)] font-medium">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 font-display text-sm font-bold text-[hsl(38_75%_44%)]">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-[hsl(28_25%_12%)]">
                    {t.name}
                  </p>
                  <p className="text-xs text-[hsl(38_75%_40%)] font-semibold">{t.event}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


