'use client';

import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { IntroSection } from '@/components/IntroSection';
import { Marquee } from '@/components/Marquee';
import { Services } from '@/components/Services';
import { Portfolio } from '@/components/Portfolio';
import { FeaturedStory } from '@/components/FeaturedStory';
import { VideoShowcase } from '@/components/VideoShowcase';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Packages } from '@/components/Packages';
import { BookingSteps } from '@/components/BookingSteps';
import { Testimonials } from '@/components/Testimonials';
import { SocialGallery } from '@/components/SocialGallery';
import { About } from '@/components/About';
import { FAQ } from '@/components/FAQ';
import { BookingForm } from '@/components/BookingForm';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { StickyActionBar } from '@/components/StickyActionBar';

export default function Home() {
  // Preserve scroll position/hash on refresh
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <Marquee />
        <Services />
        <Portfolio />
        <FeaturedStory />
        <VideoShowcase />
        <WhyChooseUs />
        <Packages />
        <BookingSteps />
        <Testimonials />
        <SocialGallery />
        <About />
        <FAQ />
        <BookingForm />
        <FinalCTA />
      </main>
      <Footer />
      <StickyActionBar />
    </>
  );
}
