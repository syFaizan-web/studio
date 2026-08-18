'use client';

import { motion } from 'framer-motion';
import { Check, Star, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { packages } from '@/data/packages';

export function Packages() {
  return (
    <section id="packages" className="bg-[hsl(40_30%_98%)] py-24 sm:py-32 relative overflow-hidden">
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
              Tailored Event Packages
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl text-[hsl(28_25%_12%)] sm:text-5xl"
          >
            Choose Your{' '}
            <span className="gold-gradient-text">
              Coverage Scope.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-sm text-[hsl(28_15%_35%)] sm:text-base leading-relaxed"
          >
            Every celebration is unique. These curated packages serve as ideal baselines — share your event schedule for a custom tailored estimate.
          </motion.p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-500 ${
                pkg.highlighted
                  ? 'border-2 border-amber-500 bg-gradient-to-b from-[hsl(35_25%_94%)] via-white to-[hsl(35_25%_94%)] shadow-xl shadow-amber-500/15'
                  : 'border border-amber-900/15 bg-[hsl(35_25%_94%)] hover:border-amber-500/40 shadow-xs'
              }`}
            >
              {pkg.highlighted && (
                <span className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[hsl(38_75%_48%)] to-[hsl(32_80%_52%)] px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                  <Star className="h-3.5 w-3.5 fill-white text-white" />
                  Most Popular Choice
                </span>
              )}
              <div>
                <h3 className="font-display text-2xl text-[hsl(28_25%_12%)] font-bold">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-xs text-[hsl(28_15%_40%)] leading-relaxed">
                  {pkg.tagline}
                </p>
                <p className="mt-6 font-display text-xl font-bold text-[hsl(38_75%_44%)]">
                  {pkg.price}
                </p>

                <ul className="mt-6 space-y-3.5 border-t border-amber-900/10 pt-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[hsl(28_25%_20%)] font-medium">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(38_75%_48%)]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/#contact"
                className={`mt-10 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-all ${
                  pkg.highlighted
                    ? 'bg-gradient-to-r from-[hsl(38_75%_48%)] to-[hsl(32_80%_52%)] text-white shadow-md shadow-amber-500/20 hover:scale-[1.03] hover:shadow-lg'
                    : 'border border-amber-900/20 bg-white text-[hsl(28_25%_12%)] hover:border-amber-500/50 hover:bg-amber-50'
                }`}
              >
                Request Detailed Quote
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


