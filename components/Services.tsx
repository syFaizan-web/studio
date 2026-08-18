'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, Video } from 'lucide-react';
import { services } from '@/data/services';

export function Services() {
  return (
    <section id="services" className="bg-[hsl(40_30%_98%)] py-24 sm:py-32 relative overflow-hidden">
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
              What We Capture &amp; Film
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl text-[hsl(28_25%_12%)] sm:text-5xl"
          >
            Moments Worth{' '}
            <span className="gold-gradient-text">
              Keeping Forever.
            </span>
          </motion.h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-amber-900/15 bg-[hsl(35_25%_94%)] transition-all duration-500 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10 ${
                i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <Link href={`/#contact`} className="block">
                <div className="relative aspect-[4/5] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Video Cinema Badge for Videography & Hybrid services */}
                  {(service.title.toLowerCase().includes('video') || service.title.toLowerCase().includes('cinema') || service.title.toLowerCase().includes('wedding')) && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full border border-white/30 bg-black/40 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                      <Video className="h-3 w-3 text-amber-300 animate-pulse" />
                      <span>4K Cinema</span>
                    </div>
                  )}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-amber-300">
                    {service.tagline}
                  </p>
                  <div className="flex items-end justify-between">
                    <h3 className="font-display text-2xl text-white sm:text-3xl">
                      {service.title}
                    </h3>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/40 bg-amber-500/20 text-white transition-all group-hover:bg-gradient-to-r group-hover:from-[hsl(38_75%_48%)] group-hover:to-[hsl(32_80%_52%)] group-hover:text-white">
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col justify-between rounded-3xl border border-amber-900/20 bg-gradient-to-b from-[hsl(35_25%_94%)] to-[hsl(38_30%_90%)] p-8 shadow-sm"
          >
            <div>
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-[hsl(38_75%_48%)]">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl text-[hsl(28_25%_12%)] sm:text-3xl">
                Custom Event Vision?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[hsl(28_15%_35%)]">
                We specialize in bespoke drone cinematography and photo coverage for destination weddings, multi-day celebrations, and private galas worldwide.
              </p>
            </div>

            <Link
              href="/#contact"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[hsl(38_75%_48%)] to-[hsl(32_80%_52%)] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-amber-500/20 transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-amber-500/30"
            >
              Request Custom Quote
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


