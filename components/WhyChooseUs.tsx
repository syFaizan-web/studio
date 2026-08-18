'use client';

import { motion } from 'framer-motion';
import { Film, Camera, Clock, MapPin, Sparkles, type LucideIcon } from 'lucide-react';
import { whyChooseUs, stats } from '@/data/site';

const iconMap: Record<string, LucideIcon> = {
  Film,
  Camera,
  Clock,
  MapPin,
};

export function WhyChooseUs() {
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
              Why Couples &amp; Event Hosts Choose Us
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl text-[hsl(28_25%_12%)] sm:text-5xl"
          >
            Real Reasons,{' '}
            <span className="gold-gradient-text">
              Uncompromised Quality.
            </span>
          </motion.h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Camera;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-3xl border border-amber-900/15 bg-[hsl(35_25%_94%)] p-7 transition-all duration-300 hover:border-amber-500/40 hover:shadow-xl shadow-xs"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10 text-[hsl(38_75%_48%)]">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl text-[hsl(28_25%_12%)] font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[hsl(28_15%_35%)]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 gap-8 rounded-3xl border border-amber-900/15 bg-gradient-to-r from-[hsl(35_25%_94%)] via-white to-[hsl(35_25%_94%)] p-10 sm:grid-cols-4 sm:p-14 shadow-lg"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl text-[hsl(38_75%_44%)] sm:text-5xl font-bold">
                {s.value}
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[hsl(28_25%_25%)] sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


