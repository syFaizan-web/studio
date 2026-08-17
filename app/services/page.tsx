import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { StickyActionBar } from '@/components/StickyActionBar';
import { Services } from '@/components/Services';
import { VideoShowcase } from '@/components/VideoShowcase';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { BookingSteps } from '@/components/BookingSteps';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Photography and videography services for weddings, engagements, birthdays, private parties, and special events.',
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[hsl(30_15%_6%)] pb-12 pt-32 sm:pt-40">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/50">
              What We Capture
            </p>
            <h1 className="font-display text-4xl text-white sm:text-6xl">
              Services for every celebration.
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/60">
              From the biggest day of your life to the smallest gathering worth
              remembering, we cover it all with the same cinematic eye.
            </p>
          </div>
        </section>
        <Services />
        <VideoShowcase />
        <WhyChooseUs />
        <BookingSteps />
        <section className="bg-[hsl(40_20%_98%)] py-20 text-center">
          <div className="mx-auto max-w-2xl px-5">
            <h2 className="font-display text-3xl text-[hsl(30_10%_10%)] sm:text-4xl">
              Ready to start planning?
            </h2>
            <Link
              href="/#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[hsl(30_10%_12%)] px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-[hsl(30_10%_20%)]"
            >
              Book Your Date
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
