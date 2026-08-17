import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { StickyActionBar } from '@/components/StickyActionBar';
import { About } from '@/components/About';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Testimonials } from '@/components/Testimonials';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet the photographer behind Frame & Story — philosophy, experience, and the approach that shapes every frame.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[hsl(30_15%_6%)] pb-12 pt-32 sm:pt-40">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/50">
              Behind the Camera
            </p>
            <h1 className="font-display text-4xl text-white sm:text-6xl">
              The person behind the lens.
            </h1>
          </div>
        </section>
        <About />
        <WhyChooseUs />
        <Testimonials />
        <section className="bg-[hsl(40_20%_98%)] py-20 text-center">
          <div className="mx-auto max-w-2xl px-5">
            <h2 className="font-display text-3xl text-[hsl(30_10%_10%)] sm:text-4xl">
              Let&rsquo;s work together.
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
