'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, Sparkles, X, Video } from 'lucide-react';
import Link from 'next/link';

interface VideoItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  location: string;
  thumbnail: string;
  videoUrl: string;
}

const sampleVideos: VideoItem[] = [
  {
    id: '1',
    title: 'Priya & Rohan — Royal Wedding Film',
    category: 'Featured Wedding Film',
    duration: '3 min',
    location: 'Udaipur, 2025',
    thumbnail: 'https://images.pexels.com/photos/13811053/pexels-photo-13811053.jpeg?auto=compress&cs=tinysrgb&w=1600',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-wedding-couple-walking-in-a-field-41539-large.mp4',
  },
  {
    id: '2',
    title: 'Aanya & Kabir — Sunset Pre-Wedding Reel',
    category: 'Pre-Wedding Story',
    duration: '2 min',
    location: 'Goa, 2025',
    thumbnail: 'https://images.pexels.com/photos/7634784/pexels-photo-7634784.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-having-a-romantic-moment-41544-large.mp4',
  },
  {
    id: '3',
    title: 'Siddharth Gala Celebration Highlight',
    category: 'Sangeet & Reception',
    duration: '2.5 min',
    location: 'Mumbai, 2025',
    thumbnail: 'https://images.pexels.com/photos/3062549/pexels-photo-3062549.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-people-dancing-at-a-party-41484-large.mp4',
  },
];

export function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <section className="relative overflow-hidden bg-[hsl(40_30%_98%)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-900/15 bg-[hsl(35_25%_94%)] px-4 py-1.5 backdrop-blur-md shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-[hsl(38_75%_48%)]" />
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[hsl(28_25%_20%)] sm:text-xs">
              4K Cinematic Films &amp; Teasers
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl text-[hsl(28_25%_12%)] sm:text-5xl"
          >
            Stories in Motion.{' '}
            <span className="gold-gradient-text">
              Cinematic Excellence.
            </span>
          </motion.h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Featured Film */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="group relative col-span-1 overflow-hidden rounded-3xl border border-amber-900/15 bg-[hsl(35_25%_94%)] shadow-lg lg:col-span-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={sampleVideos[0].thumbnail}
                alt={sampleVideos[0].title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

              <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-amber-500/90 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md shadow-md">
                <Video className="h-3.5 w-3.5" />
                <span>Featured 4K Film</span>
              </div>

              <button
                type="button"
                onClick={() => setActiveVideo(sampleVideos[0])}
                className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-[hsl(38_75%_48%)] to-[hsl(32_80%_52%)] text-white shadow-xl shadow-amber-500/30 transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                aria-label="Play featured film"
              >
                <Play className="h-8 w-8 fill-white text-white translate-x-0.5" />
              </button>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-amber-300">
                  {sampleVideos[0].category}
                </p>
                <h3 className="font-display text-2xl text-white sm:text-3xl">
                  {sampleVideos[0].title}
                </h3>
                <p className="mt-2 text-xs text-white/80 font-medium">{sampleVideos[0].duration} · {sampleVideos[0].location}</p>
              </div>
            </div>
          </motion.div>

          {/* Side Films */}
          <div className="flex flex-col gap-6">
            {sampleVideos.slice(1).map((v, idx) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.15 * (idx + 1) }}
                className="group relative overflow-hidden rounded-3xl border border-amber-900/15 bg-[hsl(35_25%_94%)] shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  
                  <button
                    type="button"
                    onClick={() => setActiveVideo(v)}
                    className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-[hsl(38_75%_48%)] to-[hsl(32_80%_52%)] text-white shadow-lg transition-all duration-300 group-hover:scale-110"
                    aria-label={`Play ${v.title}`}
                  >
                    <Play className="h-6 w-6 fill-white text-white translate-x-0.5" />
                  </button>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-amber-300">
                      {v.category}
                    </p>
                    <h3 className="font-display text-lg text-white">{v.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[hsl(38_75%_48%)] to-[hsl(32_80%_52%)] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-amber-500/20 transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-amber-500/30"
          >
            Watch Full Video Gallery
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-amber-500/30 bg-[hsl(28_25%_12%)] p-2 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="absolute right-4 top-4 z-20 rounded-full bg-black/60 p-2.5 text-white backdrop-blur-md transition-all hover:bg-amber-500 hover:text-black"
                aria-label="Close video player"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
                <video
                  autoPlay
                  controls
                  className="h-full w-full object-contain"
                  src={activeVideo.videoUrl}
                >
                  Your browser does not support HTML5 video player.
                </video>
              </div>

              <div className="p-4 sm:p-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  {activeVideo.category}
                </span>
                <h3 className="font-display text-xl sm:text-2xl mt-1 text-white">
                  {activeVideo.title}
                </h3>
                <p className="text-xs text-white/70 mt-1">
                  {activeVideo.location} · 4K Ultra HD Cinema
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

