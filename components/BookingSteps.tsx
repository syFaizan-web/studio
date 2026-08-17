'use client';

import { motion } from 'framer-motion';
import { bookingSteps } from '@/data/site';

export function BookingSteps() {
  return (
    <section className="bg-[hsl(30_15%_6%)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/50"
          >
            How Booking Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl text-white sm:text-5xl"
          >
            Four steps to locked in.
          </motion.h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bookingSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-7"
            >
              <span className="font-display text-5xl text-white/15">
                {step.step}
              </span>
              <h3 className="mt-4 font-display text-xl text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {step.description}
              </p>
              {i < bookingSteps.length - 1 && (
                <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-white/15 lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
