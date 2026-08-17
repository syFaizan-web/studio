import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { StickyActionBar } from '@/components/StickyActionBar';
import { Portfolio } from '@/components/Portfolio';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Parties',
  description:
    'Low-light, high-energy photography and film for private parties and nightlife celebrations.',
};

export default function PartiesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[hsl(30_15%_6%)] pb-12 pt-32 sm:pt-40">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/50">
              Portfolio
            </p>
            <h1 className="font-display text-4xl text-white sm:text-6xl">
              Private Parties.
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/60">
              Where the night lives — mood, movement, and the moments you forgot
              happened, captured in low light and high energy.
            </p>
          </div>
        </section>
        <Portfolio />
        <section className="bg-[hsl(30_15%_6%)] py-20 text-center">
          <div className="mx-auto max-w-2xl px-5">
            <h2 className="font-display text-3xl text-white sm:text-4xl">
              Throwing a party?
            </h2>
            <Link
              href="/#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-all hover:bg-white/90"
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
