import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { StickyActionBar } from '@/components/StickyActionBar';
import { Packages } from '@/components/Packages';
import { BookingSteps } from '@/components/BookingSteps';
import { FAQ } from '@/components/FAQ';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Packages',
  description:
    'Essential, Signature, and Premium photography and videography packages with custom quotes available.',
};

export default function PackagesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[hsl(30_15%_6%)] pb-12 pt-32 sm:pt-40">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/50">
              Packages
            </p>
            <h1 className="font-display text-4xl text-white sm:text-6xl">
              Coverage that fits.
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/60">
              Three starting points, fully customizable. Share your event details
              and we will build a quote tailored to your date, location, and scope.
            </p>
          </div>
        </section>
        <Packages />
        <BookingSteps />
        <FAQ />
        <section className="bg-[hsl(40_20%_98%)] py-20 text-center">
          <div className="mx-auto max-w-2xl px-5">
            <h2 className="font-display text-3xl text-[hsl(30_10%_10%)] sm:text-4xl">
              Not sure which package?
            </h2>
            <p className="mt-4 text-base text-[hsl(30_5%_35%)]">
              Tell us about your event and we will recommend the right fit.
            </p>
            <Link
              href="/#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[hsl(30_10%_12%)] px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-[hsl(30_10%_20%)]"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <StickyActionBar />
    </>
  );
}
