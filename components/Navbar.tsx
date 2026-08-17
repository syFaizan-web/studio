'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Camera, Calendar, MessageCircle, Sparkles } from 'lucide-react';
import { navLinks, siteConfig, whatsappLink } from '@/data/contact';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [shrunk, setShrunk] = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40);

    if (latest > lastY.current && latest > 120) {
      setShrunk(true);
    } else if (latest < lastY.current - 4 || latest < 80) {
      setShrunk(false);
    }
    lastY.current = latest;
  });

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ===== Desktop Top Navigation (lg and up) ===== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-[hsl(40_30%_98%/0.92)] backdrop-blur-xl border-b border-amber-900/10 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto hidden max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:flex lg:px-12">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-[hsl(38_75%_48%)] transition-transform duration-300 group-hover:scale-105">
              <Camera className="h-4 w-4" strokeWidth={1.5} />
            </div>
            <span className={`font-display text-lg tracking-wide sm:text-xl transition-colors duration-700 ${
              scrolled ? 'text-[hsl(28_25%_12%)]' : 'text-white'
            }`}>
              {siteConfig.name}
            </span>
          </Link>

          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-[hsl(38_75%_42%)] ${
                    scrolled ? 'text-[hsl(28_25%_25%)]' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div>
            <Link
              href="/#contact"
              onClick={scrollToContact}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-amber-500/30 bg-gradient-to-r from-[hsl(38_75%_48%)] to-[hsl(32_80%_52%)] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-amber-500/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-amber-500/30"
            >
              <Sparkles className="h-3.5 w-3.5 flex-shrink-0 text-white transition-transform duration-300 group-hover:rotate-12" />
              <span className="whitespace-nowrap">Book Your Date</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* ===== Mobile / iPad / Nest Hub Floating Pill Navigation Island ===== */}
      <AnimatePresence>
        {!menuOpen && (
          <motion.div
            initial={{ y: 100, x: '-50%', opacity: 0 }}
            animate={{
              y: 0,
              x: '-50%',
              opacity: 1,
              scale: shrunk ? 0.92 : 1,
            }}
            exit={{ y: 100, x: '-50%', opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed left-1/2 bottom-4 z-50 w-[calc(100%-1.75rem)] max-w-md sm:max-w-lg lg:hidden"
            style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
          >
            <div className="flex items-center justify-between gap-2 rounded-full border border-amber-900/15 bg-[hsl(35_25%_94%/0.95)] p-2 shadow-2xl backdrop-blur-2xl ring-1 ring-black/5">
              {/* Left: Menu icon button */}
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-amber-900/10 text-[hsl(28_25%_12%)] transition-colors hover:bg-black/5"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              {/* Center: Brand logo/name */}
              <Link
                href="/"
                className="flex items-center justify-center gap-1.5 px-1 text-[hsl(28_25%_12%)] text-center min-w-0"
              >
                <Camera className="h-4 w-4 flex-shrink-0 text-[hsl(38_75%_48%)]" strokeWidth={1.5} />
                <span className="font-display text-xs sm:text-sm tracking-wide truncate font-semibold">
                  {siteConfig.name}
                </span>
              </Link>

              {/* Right: Single-line matching Chat & Book Now buttons */}
              <div className="flex flex-shrink-0 items-center gap-2">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 items-center gap-1.5 rounded-full border border-emerald-600/30 bg-emerald-50 px-3.5 text-xs font-semibold text-emerald-900 whitespace-nowrap shrink-0 transition-all hover:bg-emerald-100"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle className="h-4 w-4 flex-shrink-0 text-emerald-600" />
                  <span className="whitespace-nowrap flex-nowrap shrink-0">Chat</span>
                </a>
                <a
                  href="/#contact"
                  onClick={scrollToContact}
                  className="flex h-10 items-center gap-1.5 rounded-full bg-gradient-to-r from-[hsl(38_75%_48%)] to-[hsl(32_80%_52%)] px-3.5 sm:px-4 text-xs font-bold text-white whitespace-nowrap shrink-0 shadow-md transition-all hover:brightness-110"
                >
                  <Calendar className="h-4 w-4 flex-shrink-0 text-white" />
                  <span className="whitespace-nowrap flex-nowrap shrink-0">Book Now</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Full-screen Menu Overlay (mobile / iPad) ===== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[hsl(30_15%_6%)] lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 sm:px-8">
              <Link
                href="/"
                className="flex items-center gap-2 text-white"
                onClick={() => setMenuOpen(false)}
              >
                <Camera className="h-5 w-5" strokeWidth={1.5} />
                <span className="font-display text-lg tracking-wide">
                  {siteConfig.name}
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex h-[calc(100%-80px)] flex-col items-center justify-center gap-6 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-3xl text-white/90 transition-colors hover:text-white sm:text-4xl"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6"
              >
                <Link
                  href="/#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    setTimeout(() => {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black"
                >
                  <Calendar className="h-4 w-4" />
                  Book Your Date
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
