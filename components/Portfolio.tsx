'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioItems, portfolioCategories, type PortfolioItem } from '@/data/portfolio';

export function Portfolio() {
  const [filter, setFilter] = useState<'All' | string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    filter === 'All'
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === filter);

  const openLightbox = (item: PortfolioItem) => {
    const idx = filtered.findIndex((p) => p.id === item.id);
    setLightboxIndex(idx);
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length));
  }, [filtered.length]);

  const prev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? i : (i - 1 + filtered.length) % filtered.length,
    );
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.classList.add('menu-open');
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('menu-open');
    };
  }, [lightboxIndex, closeLightbox, next, prev]);

  // Swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(diff) > 50) {
      if (diff < 0) next();
      else prev();
    }
    setTouchStart(null);
  };

  return (
    <section id="portfolio" className="bg-[hsl(40_30%_98%)] py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-900/15 bg-[hsl(35_25%_94%)] px-4 py-1.5 backdrop-blur-md shadow-sm">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[hsl(28_25%_20%)] sm:text-xs">
                Selected Stories &amp; Works
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-3xl text-[hsl(28_25%_12%)] sm:text-5xl"
            >
              A Look At Our{' '}
              <span className="gold-gradient-text">
                Visual Works.
              </span>
            </motion.h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 text-xs font-bold tracking-wide transition-all sm:text-sm ${
                  filter === cat
                    ? 'bg-gradient-to-r from-[hsl(38_75%_48%)] to-[hsl(32_80%_52%)] text-white shadow-md'
                    : 'border border-amber-900/15 bg-white text-[hsl(28_25%_25%)] hover:border-amber-500/50 hover:bg-amber-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4"
        >
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => openLightbox(item)}
                className="group relative block w-full overflow-hidden rounded-xl"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.alt}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    item.span === 'tall'
                      ? 'aspect-[3/4]'
                      : item.span === 'wide'
                        ? 'aspect-[16/10]'
                        : 'aspect-[4/3]'
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-xs font-medium uppercase tracking-wider text-white/60">
                    {item.category}
                  </p>
                  <h3 className="font-display text-xl text-white">{item.title}</h3>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
            onClick={closeLightbox}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:right-8 sm:top-8"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:left-8"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:right-8"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              key={filtered[lightboxIndex].id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[85vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={filtered[lightboxIndex].image}
                alt={filtered[lightboxIndex].alt}
                className="max-h-[85vh] w-auto rounded-lg object-contain"
              />
              <div className="mt-4 text-center">
                <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                  {filtered[lightboxIndex].category}
                </p>
                <h3 className="font-display text-xl text-white">
                  {filtered[lightboxIndex].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
