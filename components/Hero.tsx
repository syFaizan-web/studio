'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onLoaded = () => setVideoLoaded(true);
    const onError = () => setVideoError(true);
    v.addEventListener('loadeddata', onLoaded);
    v.addEventListener('canplay', onLoaded);
    v.addEventListener('error', onError);

    v.play().catch(() => {
      v.muted = true;
      setIsMuted(true);
      v.play().catch(() => setVideoError(true));
    });

    return () => {
      v.removeEventListener('loadeddata', onLoaded);
      v.removeEventListener('canplay', onLoaded);
      v.removeEventListener('error', onError);
    };
  }, []);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[hsl(40_30%_98%)]"
    >
      {/* Background Video */}
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        {/* Poster / Fallback Background Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.pexels.com/photos/38823745/pexels-photo-38823745.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Cinematic photography background"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            videoLoaded && !videoError ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="auto"
            poster="https://images.pexels.com/photos/38823745/pexels-photo-38823745.jpeg?auto=compress&cs=tinysrgb&w=1920"
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 opacity-100"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-wedding-couple-walking-in-a-field-41539-large.mp4"
              type="video/mp4"
            />
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-having-a-romantic-moment-41544-large.mp4"
              type="video/mp4"
            />
          </video>
        )}
        {/* Minimal Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[hsl(40_30%_98%)]" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-500/20 px-4.5 py-1.5 backdrop-blur-md ring-1 ring-amber-400/30"
        >
          <Sparkles className="h-3.5 w-3.5 text-amber-300" />
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-white sm:text-xs">
            Luxury Wedding &amp; Event Cinema
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-2xl leading-[1.1] text-white text-balance sm:text-3xl lg:text-4xl drop-shadow-md font-light"
        >
          Your Dream Wedding.
          <br />
          <span className="bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-clip-text text-transparent font-normal">
            Timeless Cinematic Memories.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mt-4 max-w-md text-xs text-white/80 sm:text-sm leading-relaxed drop-shadow-sm font-light"
        >
          Luxury photography &amp; film for weddings, engagements, and grand event celebrations.
        </motion.p>
      </motion.div>

      {/* Audio Mute/Unmute Control Toggle */}
      <motion.button
        type="button"
        onClick={toggleSound}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        aria-label={isMuted ? 'Unmute video sound' : 'Mute video sound'}
        className="absolute bottom-8 right-6 z-20 flex h-11 items-center gap-2 rounded-full border border-amber-900/15 bg-white/80 px-4 text-xs font-semibold text-[hsl(28_25%_12%)] backdrop-blur-xl shadow-lg transition-all hover:bg-white sm:bottom-10 sm:right-10"
      >
        {isMuted ? (
          <>
            <VolumeX className="h-4 w-4 text-[hsl(28_25%_40%)]" />
            <span className="hidden sm:inline">Unmute Film</span>
          </>
        ) : (
          <>
            <Volume2 className="h-4 w-4 text-[hsl(38_75%_48%)] animate-pulse" />
            <span>Sound On</span>
          </>
        )}
      </motion.button>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: contentOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-amber-900/30 p-1.5 backdrop-blur-sm">
          <span className="h-2 w-1 animate-scroll-dot rounded-full bg-[hsl(28_25%_12%)]" />
        </div>
      </motion.div>
    </section>
  );
}


