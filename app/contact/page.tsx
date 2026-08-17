import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { StickyActionBar } from '@/components/StickyActionBar';
import { BookingForm } from '@/components/BookingForm';
import { FAQ } from '@/components/FAQ';
import { siteConfig, whatsappLink } from '@/data/contact';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch to book photography or videography for your wedding, engagement, birthday, or event.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[hsl(30_15%_6%)] pb-12 pt-32 sm:pt-40">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/50">
              Get in Touch
            </p>
            <h1 className="font-display text-4xl text-white sm:text-6xl">
              Let&rsquo;s talk about your day.
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/60">
              Fill out the form below and we will open a pre-filled WhatsApp chat.
              Or reach us directly through any of the channels below.
            </p>
          </div>
        </section>

        {/* Quick contact cards */}
        <section className="bg-[hsl(30_15%_6%)] pb-8">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="grid gap-4 sm:grid-cols-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-white/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[hsl(28_60%_52%)]">
                  <MessageCircle className="h-5 w-5 text-black" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    WhatsApp
                  </p>
                  <p className="text-sm text-white">{siteConfig.phone}</p>
                </div>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-white/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Email
                  </p>
                  <p className="text-sm text-white">{siteConfig.email}</p>
                </div>
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-white/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Phone
                  </p>
                  <p className="text-sm text-white">{siteConfig.phone}</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        <BookingForm />
        <FAQ />
      </main>
      <Footer />
      <StickyActionBar />
    </>
  );
}
