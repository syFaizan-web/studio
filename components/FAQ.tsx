'use client';

import { motion } from 'framer-motion';
import { Sparkles, Plus } from 'lucide-react';
import { faqs } from '@/data/faq';

export function FAQ() {
  return (
    <section className="bg-[hsl(40_30%_98%)] py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-900/15 bg-[hsl(35_25%_94%)] px-4 py-1.5 backdrop-blur-md shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-[hsl(38_75%_48%)]" />
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[hsl(28_25%_20%)] sm:text-xs">
              Frequently Asked Questions
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl text-[hsl(28_25%_12%)] sm:text-5xl"
          >
            Everything You Need{' '}
            <span className="gold-gradient-text">
              To Know.
            </span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-amber-900/15 bg-[hsl(35_25%_94%)] p-5 sm:p-6 shadow-xs transition-all duration-300 open:border-amber-500/40 open:bg-amber-50"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-[hsl(28_25%_12%)] font-bold group-open:text-[hsl(38_75%_44%)]">
                <span>{faq.question}</span>
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-[hsl(38_75%_48%)] transition-transform duration-300 group-open:rotate-45 group-open:bg-gradient-to-r group-open:from-[hsl(38_75%_48%)] group-open:to-[hsl(32_80%_52%)] group-open:text-white">
                  <Plus className="h-4 w-4" />
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-[hsl(28_15%_30%)] border-t border-amber-900/10 pt-4">
                {faq.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}


