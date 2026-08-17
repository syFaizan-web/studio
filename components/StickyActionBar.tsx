'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { siteConfig, whatsappLink } from '@/data/contact';

export function StickyActionBar() {
  const [visible, setVisible] = useState(false);
  const [scrolledDeep, setScrolledDeep] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 500) setVisible(true);
      else setVisible(false);

      if (y > 1200) setScrolledDeep(true);
      else setScrolledDeep(false);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0, x: '-50%', scale: 0.9 }}
          animate={{
            y: 0,
            opacity: 1,
            x: '-50%',
            scale: scrolledDeep ? 0.95 : 1,
          }}
          exit={{ y: 80, opacity: 0, x: '-50%', scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="fixed bottom-6 left-1/2 z-40 hidden lg:flex items-center justify-center pointer-events-auto"
        >
          {/* Desktop Centered Floating Navigation Bar */}
          <div className="flex items-center gap-3 rounded-full border border-amber-900/15 bg-[hsl(35_25%_94%/0.95)] px-3.5 py-2.5 shadow-2xl backdrop-blur-2xl ring-1 ring-black/5">
            {/* Quick Availability Badge */}
            <div className="flex items-center gap-1.5 px-3 text-xs font-semibold tracking-wider text-[hsl(28_25%_20%)]">
              <Sparkles className="h-3.5 w-3.5 text-[hsl(38_75%_48%)]" />
              <span className="whitespace-nowrap">2026/2027 Dates Open</span>
            </div>

            <div className="h-4 w-px bg-amber-900/15" />

            {/* Chat WhatsApp Action (Single Line) */}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex h-10 items-center gap-1.5 rounded-full border border-emerald-600/30 bg-emerald-50 px-4 text-xs font-semibold text-emerald-900 whitespace-nowrap shrink-0 transition-all hover:bg-emerald-100"
            >
              <MessageCircle className="h-4 w-4 text-emerald-600" />
              <span className="whitespace-nowrap flex-nowrap shrink-0">Chat WhatsApp</span>
            </a>

            {/* Book Now Action (Single Line) */}
            <a
              href="/#contact"
              onClick={scrollToContact}
              className="flex h-10 items-center gap-1.5 rounded-full bg-gradient-to-r from-[hsl(38_75%_48%)] to-[hsl(32_80%_52%)] px-5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-amber-500/20 whitespace-nowrap shrink-0 transition-all hover:scale-[1.02] hover:brightness-110"
            >
              <Calendar className="h-4 w-4 flex-shrink-0 text-white" />
              <span className="whitespace-nowrap flex-nowrap shrink-0">{siteConfig.stickyBar.bookLabel}</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}



