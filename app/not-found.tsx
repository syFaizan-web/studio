import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { StickyActionBar } from '@/components/StickyActionBar';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] items-center justify-center bg-[hsl(30_15%_6%)] px-5 pt-32">
        <div className="text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            404
          </p>
          <h1 className="font-display text-4xl text-white sm:text-6xl">
            This page drifted out of frame.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base text-white/60">
            The page you are looking for does not exist. Let&rsquo;s get you back to
            the story.
          </p>
          <Link
            href="/"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-all hover:bg-white/90"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back Home
          </Link>
        </div>
      </main>
      <Footer />
      <StickyActionBar />
    </>
  );
}
