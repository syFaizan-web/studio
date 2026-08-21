'use client';

import Link from 'next/link';
import { Camera, Instagram, Youtube, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig, navLinks } from '@/data/contact';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-amber-900/15 bg-[hsl(40_30%_98%)] pb-28 pt-16 sm:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 text-[hsl(28_25%_12%)] group">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-[hsl(38_75%_48%)]">
                <Camera className="h-4 w-4" strokeWidth={1.5} />
              </div>
              <span className="font-display text-lg tracking-wide font-bold">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-[hsl(28_15%_40%)]">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[hsl(38_75%_40%)]">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-semibold text-[hsl(28_25%_25%)] transition-colors hover:text-[hsl(38_75%_44%)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[hsl(38_75%_40%)]">
              Services
            </h3>
            <ul className="space-y-2.5">
              {['Weddings', 'Engagements', 'Birthdays', 'Private Parties', 'Special Events'].map(
                (s) => (
                  <li key={s}>
                    <Link
                      href="/#services"
                      className="text-xs font-semibold text-[hsl(28_25%_25%)] transition-colors hover:text-[hsl(38_75%_44%)]"
                    >
                      {s}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[hsl(38_75%_40%)]">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-xs text-[hsl(28_25%_25%)] font-semibold">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-[hsl(38_75%_44%)]"
                >
                  <Mail className="h-4 w-4 text-[hsl(38_75%_48%)]" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 transition-colors hover:text-[hsl(38_75%_44%)] font-bold text-[hsl(28_25%_12%)]"
                >
                  <Phone className="h-4 w-4 text-[hsl(38_75%_48%)]" />
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(38_75%_48%)]" />
                {siteConfig.serviceArea}
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-900/15 bg-white text-[hsl(28_25%_20%)] shadow-xs transition-all hover:border-pink-500 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-900/15 bg-white text-[hsl(28_25%_20%)] shadow-xs transition-all hover:border-red-600 hover:bg-red-600 hover:text-white"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-900/15 bg-white text-[hsl(28_25%_20%)] shadow-xs transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-amber-900/10 pt-8 text-xs text-[hsl(28_15%_45%)] sm:flex-row">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Crafted with care for moments that matter.</p>
        </div>
      </div>
    </footer>
  );
}

