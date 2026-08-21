'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  MessageCircle,
  Calendar,
  MapPin,
  Users,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Camera,
  Video,
  Film,
  Heart,
  PartyPopper,
  Briefcase,
  Plus,
  Gift,
  HelpCircle,
  User,
  Phone,
  Mail,
  FileText,
  Zap,
} from 'lucide-react';
import { siteConfig, whatsappLink } from '@/data/contact';
import { packages } from '@/data/packages';

const eventTypeOptions = [
  { id: 'Wedding', label: 'Wedding Film & Photo', icon: Heart, desc: 'Full wedding day coverage' },
  { id: 'Engagement', label: 'Engagement / Pre-wedding', icon: Sparkles, desc: 'Cinematic couple session' },
  { id: 'Birthday', label: 'Birthday Celebration', icon: Gift, desc: 'Memorable party moments' },
  { id: 'Private Party', label: 'Private Party / Gala', icon: PartyPopper, desc: 'Intimate or grand party' },
  { id: 'Corporate Event', label: 'Corporate & Brand', icon: Briefcase, desc: 'Professional coverage' },
  { id: 'Other', label: 'Custom / Other', icon: HelpCircle, desc: 'Special custom requirement' },
];

const serviceChoiceOptions = [
  {
    id: 'Photography',
    label: 'Photography Only',
    icon: Camera,
    desc: 'High-res retouched editorial & candid photos',
  },
  {
    id: 'Videography',
    label: 'Videography Only',
    icon: Video,
    desc: 'Cinematic 4K 60fps film & highlight reel',
  },
  {
    id: 'Both',
    label: 'Photo + Video Hybrid',
    icon: Film,
    desc: 'Complete coverage team (Most Popular)',
    recommended: true,
  },
];

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    date: '',
    location: '',
    guests: '',
    services: '',
    package: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [mounted, setMounted] = useState(false);

  // Load saved data from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedStep = localStorage.getItem('bookingStep');
    const savedForm = localStorage.getItem('bookingFormData');
    const savedSubmitted = localStorage.getItem('bookingSubmitted');
    
    if (savedStep) {
      setStep(parseInt(savedStep, 10));
    }
    if (savedForm) {
      try {
        setForm(JSON.parse(savedForm));
      } catch (e) {
        console.error('Error parsing saved form data:', e);
      }
    }
    if (savedSubmitted === 'true') {
      setSubmitted(true);
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('bookingStep', step.toString());
      localStorage.setItem('bookingFormData', JSON.stringify(form));
      localStorage.setItem('bookingSubmitted', submitted.toString());
    }
  }, [step, form, submitted, mounted]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const setField = (field: string, val: string) => {
    setForm((prev) => ({ ...prev, [field]: val }));
  };

  const buildMessage = () => {
    const lines = [
      '✨ *NEW BOOKING INQUIRY — FRAME & STORY*',
      '---------------------------------------',
      `👤 *Name:* ${form.name}`,
      `📞 *Phone/WhatsApp:* ${form.phone}`,
      form.email ? `✉️ *Email:* ${form.email}` : '',
      `🎉 *Event Type:* ${form.eventType}`,
      `🎬 *Service Chosen:* ${form.services}`,
      `📦 *Package Tier:* ${form.package}`,
      form.date ? `📅 *Date:* ${form.date}` : '',
      form.location ? `📍 *Location:* ${form.location}` : '',
      form.guests ? `👥 *Est. Guests:* ${form.guests}` : '',
      form.message ? `💬 *Notes:* ${form.message}` : '',
      '---------------------------------------',
      'Please let me know your availability and detailed quote.',
    ].filter(Boolean);
    return lines.join('\n');
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Name validation
    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (form.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Phone validation
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[\d\s\-()]{10,}$/.test(form.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Email validation (optional but if provided must be valid)
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Date validation (optional but if provided must be valid)
    if (form.date && form.date.startsWith('20')) {
      const selectedDate = new Date(form.date);
      if (isNaN(selectedDate.getTime())) {
        newErrors.date = 'Please enter a valid date';
      }
    }

    // Guests validation (optional but if provided must be valid number)
    if (form.guests && (isNaN(Number(form.guests)) || Number(form.guests) < 1)) {
      newErrors.guests = 'Please enter a valid number of guests';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    const url = whatsappLink(buildMessage());
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    // Clear persisted data after successful submission
    localStorage.removeItem('bookingStep');
    localStorage.removeItem('bookingFormData');
    // Reset form
    setForm({
      eventType: '',
      services: '',
      package: '',
      date: '',
      location: '',
      guests: '',
      name: '',
      phone: '',
      email: '',
      message: '',
    });
    setErrors({});
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    const subject = encodeURIComponent('New Booking Inquiry - Frame & Story');
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    // Clear persisted data after successful submission
    localStorage.removeItem('bookingStep');
    localStorage.removeItem('bookingFormData');
    // Reset form
    setForm({
      eventType: '',
      services: '',
      package: '',
      date: '',
      location: '',
      guests: '',
      name: '',
      phone: '',
      email: '',
      message: '',
    });
    setErrors({});
  };

  const isStep1Valid = !!form.eventType && !!form.services;
  const isStep2Valid = true;
  const isStep3Valid = !!form.name.trim() && !!form.phone.trim() && Object.keys(errors).length === 0;

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <section id="contact" className="relative bg-[hsl(40_30%_98%)] py-24 sm:py-32 overflow-hidden">
      {/* Background glow visual accent */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-900/15 bg-[hsl(35_25%_94%)] px-4 py-1.5 backdrop-blur-md shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-[hsl(38_75%_48%)]" />
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[hsl(28_25%_20%)] sm:text-xs">
              Check Dates &amp; Book Your Event
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl leading-tight text-[hsl(28_25%_12%)] sm:text-5xl"
          >
            Let&rsquo;s Plan Your{' '}
            <span className="gold-gradient-text">
              Story.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl text-sm text-[hsl(28_15%_35%)] sm:text-base"
          >
            Simple 3-step process: Select your event type, choose your preferred date & package, and send your inquiry. Quick responses guaranteed!
          </motion.p>
        </div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-amber-900/15 bg-[hsl(35_25%_94%)] p-6 sm:p-10 shadow-2xl backdrop-blur-2xl ring-1 ring-black/5"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-green-600 shadow-lg shadow-emerald-500/25"
              >
                <CheckCircle2 className="h-7 w-7 text-white" />
              </motion.div>
              <h3 className="font-display text-xl font-bold text-[hsl(28_25%_12%)] sm:text-2xl">
                Inquiry Sent Successfully!
              </h3>
              <p className="mt-2 max-w-md text-sm text-[hsl(28_15%_40%)] leading-relaxed">
                Thank you! We'll get back to you within 2 hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                  localStorage.removeItem('bookingSubmitted');
                }}
                className="mt-6 flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:scale-105"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>New Inquiry</span>
              </button>
            </div>
          ) : (
            <div>
              {/* Stepper Navigation Indicator */}
              <div className="mb-8 border-b border-amber-900/10 pb-6">
                <div className="flex items-center justify-between gap-2 sm:gap-4">
                  {[
                    { number: 1, title: 'What?', subtitle: 'Event Type' },
                    { number: 2, title: 'When?', subtitle: 'Date & Package' },
                    { number: 3, title: 'Who?', subtitle: 'Your Details' },
                  ].map((s) => {
                    const isActive = step === s.number;
                    const isPassed = step > s.number;
                    return (
                      <div
                        key={s.number}
                        onClick={() => {
                          if (s.number < step) setStep(s.number);
                          if (s.number === 2 && isStep1Valid) setStep(2);
                          if (s.number === 3 && isStep1Valid && isStep2Valid) setStep(3);
                        }}
                        className={`flex flex-1 flex-col items-center gap-1 cursor-pointer transition-all ${
                          isActive
                            ? 'opacity-100 scale-105'
                            : isPassed
                            ? 'opacity-80 hover:opacity-100 hover:scale-102'
                            : 'opacity-40'
                        }`}
                      >
                        <div
                          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all ${
                            isActive
                              ? 'bg-gradient-to-r from-[hsl(38_75%_48%)] to-[hsl(32_80%_52%)] text-white shadow-md'
                              : isPassed
                              ? 'bg-amber-500/20 text-[hsl(38_75%_44%)] border border-amber-500/40'
                              : 'border border-amber-900/20 bg-white/50 text-[hsl(28_25%_40%)]'
                          }`}
                        >
                          {isPassed ? <CheckCircle2 className="h-5 w-5 text-[hsl(38_75%_48%)]" /> : s.number}
                        </div>
                        <div className="text-center">
                          <span className="block text-xs font-bold text-[hsl(28_25%_12%)]">{s.title}</span>
                          <span className="block text-[0.65rem] text-[hsl(28_15%_40%)]">{s.subtitle}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* Progress Line */}
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-amber-900/10">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[hsl(38_75%_48%)] to-[hsl(32_80%_52%)]"
                    initial={{ width: '33.3%' }}
                    animate={{ width: `${(step / 3) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {/* STEP 1: EVENT TYPE & SERVICES */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      {/* Quick Preset Buttons (User Friendly 1-Tap Fill) */}
                      <div className="rounded-2xl border border-amber-900/15 bg-white p-4 shadow-xs">
                        <div className="flex items-center gap-1.5 mb-3 text-xs font-bold uppercase tracking-wider text-[hsl(38_75%_44%)]">
                          <Zap className="h-3.5 w-3.5 fill-[hsl(38_75%_48%)] text-[hsl(38_75%_48%)]" />
                          <span>Popular Quick Options</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setForm((f) => ({
                                ...f,
                                eventType: 'Wedding',
                                services: 'Both',
                                package: 'Signature',
                              }));
                            }}
                            className="rounded-full border border-amber-900/15 bg-[hsl(35_25%_94%)] px-4 py-2 text-xs font-semibold text-[hsl(28_25%_12%)] transition-all hover:border-amber-500/50 hover:bg-amber-50 hover:scale-105"
                          >
                            💍 Wedding Package
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setForm((f) => ({
                                ...f,
                                eventType: 'Engagement',
                                services: 'Both',
                                package: 'Essential',
                              }));
                            }}
                            className="rounded-full border border-amber-900/15 bg-[hsl(35_25%_94%)] px-4 py-2 text-xs font-semibold text-[hsl(28_25%_12%)] transition-all hover:border-amber-500/50 hover:bg-amber-50 hover:scale-105"
                          >
                            ✨ Pre-Wedding
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setForm((f) => ({
                                ...f,
                                eventType: 'Private Party',
                                services: 'Photography',
                                package: 'Essential',
                              }));
                            }}
                            className="rounded-full border border-amber-900/15 bg-[hsl(35_25%_94%)] px-4 py-2 text-xs font-semibold text-[hsl(28_25%_12%)] transition-all hover:border-amber-500/50 hover:bg-amber-50 hover:scale-105"
                          >
                            🥂 Party Event
                          </button>
                        </div>
                      </div>

                      {/* Select Event Type Cards */}
                      <div>
                        <label className="mb-3 block text-xs font-bold uppercase tracking-wider text-[hsl(28_25%_20%)]">
                          Choose your event type
                        </label>
                        <div className="grid gap-3 sm:grid-cols-3">
                          {eventTypeOptions.map((item) => {
                            const Icon = item.icon;
                            const selected = form.eventType === item.id;
                            return (
                              <div
                                key={item.id}
                                onClick={() => setField('eventType', item.id)}
                                className={`group flex cursor-pointer flex-col justify-between rounded-2xl border p-4 transition-all ${
                                  selected
                                    ? 'border-amber-500 bg-white ring-2 ring-amber-500/30 shadow-md'
                                    : 'border-amber-900/15 bg-white/70 hover:border-amber-500/40 hover:bg-white'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <div
                                    className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${
                                      selected
                                        ? 'bg-gradient-to-r from-[hsl(38_75%_48%)] to-[hsl(32_80%_52%)] text-white'
                                        : 'bg-[hsl(35_25%_90%)] text-[hsl(28_25%_25%)] group-hover:text-[hsl(38_75%_44%)]'
                                    }`}
                                  >
                                    <Icon className="h-4 w-4" />
                                  </div>
                                  {selected && (
                                    <CheckCircle2 className="h-4 w-4 text-[hsl(38_75%_48%)]" />
                                  )}
                                </div>
                                <div className="mt-3">
                                  <h4 className="text-sm font-bold text-[hsl(28_25%_12%)]">
                                    {item.label}
                                  </h4>
                                  <p className="mt-0.5 text-xs text-[hsl(28_15%_40%)]">{item.desc}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Select Service Cards */}
                      <div>
                        <label className="mb-3 block text-xs font-bold uppercase tracking-wider text-[hsl(28_25%_20%)]">
                          Choose photo, video, or both
                        </label>
                        <div className="grid gap-3 sm:grid-cols-3">
                          {serviceChoiceOptions.map((item) => {
                            const Icon = item.icon;
                            const selected = form.services === item.id;
                            return (
                              <div
                                key={item.id}
                                onClick={() => setField('services', item.id)}
                                className={`relative flex cursor-pointer flex-col justify-between rounded-2xl border p-4 transition-all ${
                                  selected
                                    ? 'border-amber-500 bg-white ring-2 ring-amber-500/30 shadow-md'
                                    : 'border-amber-900/15 bg-white/70 hover:border-amber-500/40 hover:bg-white'
                                }`}
                              >
                                {item.recommended && (
                                  <span className="absolute -top-2.5 right-3 rounded-full bg-gradient-to-r from-[hsl(38_75%_48%)] to-[hsl(32_80%_52%)] px-2.5 py-0.5 text-[0.65rem] font-bold text-white uppercase tracking-wider shadow">
                                    Most Popular
                                  </span>
                                )}
                                <div className="flex items-center justify-between">
                                  <div
                                    className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${
                                      selected
                                        ? 'bg-gradient-to-r from-[hsl(38_75%_48%)] to-[hsl(32_80%_52%)] text-white'
                                        : 'bg-[hsl(35_25%_90%)] text-[hsl(28_25%_25%)]'
                                    }`}
                                  >
                                    <Icon className="h-4 w-4" />
                                  </div>
                                  {selected && (
                                    <CheckCircle2 className="h-4 w-4 text-[hsl(38_75%_48%)]" />
                                  )}
                                </div>
                                <div className="mt-3">
                                  <h4 className="text-sm font-bold text-[hsl(28_25%_12%)]">
                                    {item.label}
                                  </h4>
                                  <p className="mt-0.5 text-xs text-[hsl(28_15%_40%)]">{item.desc}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Step 1 Actions */}
                      <div className="flex justify-end pt-4">
                        <button
                          type="button"
                          onClick={nextStep}
                          disabled={!isStep1Valid}
                          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[hsl(38_75%_48%)] to-[hsl(32_80%_52%)] px-7 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02] disabled:opacity-50"
                        >
                          <span>Next Step</span>
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: DATE, LOCATION & PACKAGE */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      {/* Date, Location, Guests Inputs */}
                      <div className="grid gap-5 sm:grid-cols-3">
                        <div>
                          <label className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[hsl(28_25%_20%)]">
                            <Calendar className="h-3.5 w-3.5 text-[hsl(38_75%_48%)]" />
                            When is your event?
                          </label>
                          <div className="flex flex-wrap gap-1.5 mb-2">
                            {['Next 1-3 Mos', '3-6 Mos', '2026 Season'].map((chip) => (
                              <button
                                key={chip}
                                type="button"
                                onClick={() => setField('date', chip)}
                                className={`rounded-lg px-2 py-0.5 text-[0.7rem] font-semibold border transition-all ${
                                  form.date === chip
                                    ? 'border-amber-500 bg-amber-500 text-white'
                                    : 'border-amber-900/15 bg-white text-[hsl(28_25%_25%)] hover:bg-amber-50'
                                }`}
                              >
                                {chip}
                              </button>
                            ))}
                          </div>
                          <input
                            type="date"
                            name="date"
                            value={form.date.startsWith('20') ? form.date : ''}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-amber-900/15 bg-white px-3 py-2.5 text-sm text-[hsl(28_25%_12%)] outline-none transition-colors focus:border-amber-500"
                          />
                        </div>

                        <div>
                          <label className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[hsl(28_25%_20%)]">
                            <MapPin className="h-3.5 w-3.5 text-[hsl(38_75%_48%)]" />
                            Where is it?
                          </label>
                          <input
                            type="text"
                            name="location"
                            value={form.location}
                            onChange={handleChange}
                            placeholder="e.g. Mumbai, Taj Palace / Goa"
                            className="w-full rounded-xl border border-amber-900/15 bg-white px-4 py-3 text-sm text-[hsl(28_25%_12%)] placeholder-[hsl(28_15%_60%)] outline-none transition-colors focus:border-amber-500"
                          />
                        </div>

                        <div>
                          <label className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[hsl(28_25%_20%)]">
                            <Users className="h-3.5 w-3.5 text-[hsl(38_75%_48%)]" />
                            How many guests?
                          </label>
                          <input
                            type="number"
                            name="guests"
                            value={form.guests}
                            onChange={handleChange}
                            placeholder="~ 200"
                            className="w-full rounded-xl border border-amber-900/15 bg-white px-4 py-3 text-sm text-[hsl(28_25%_12%)] placeholder-[hsl(28_15%_60%)] outline-none transition-colors focus:border-amber-500"
                          />
                        </div>
                      </div>

                      {/* Select Package Cards */}
                      <div>
                        <label className="mb-3 block text-xs font-bold uppercase tracking-wider text-[hsl(28_25%_20%)]">
                          Choose your package
                        </label>
                        <div className="grid gap-4 sm:grid-cols-3">
                          {packages.map((pkg) => {
                            const selected = form.package === pkg.name;
                            return (
                              <div
                                key={pkg.id}
                                onClick={() => setField('package', pkg.name)}
                                className={`relative flex cursor-pointer flex-col justify-between rounded-2xl border p-4 transition-all ${
                                  selected
                                    ? 'border-amber-500 bg-white ring-2 ring-amber-500/30 shadow-md'
                                    : 'border-amber-900/15 bg-white/70 hover:border-amber-500/40 hover:bg-white'
                                }`}
                              >
                                {pkg.highlighted && (
                                  <span className="absolute -top-2.5 right-3 rounded-full bg-gradient-to-r from-[hsl(38_75%_48%)] to-[hsl(32_80%_52%)] px-2.5 py-0.5 text-[0.65rem] font-bold text-white uppercase tracking-wider shadow">
                                    Most Popular
                                  </span>
                                )}
                                <div>
                                  <div className="flex items-center justify-between">
                                    <h4 className="font-display text-base text-[hsl(28_25%_12%)] font-bold">
                                      {pkg.name}
                                    </h4>
                                    {selected && (
                                      <CheckCircle2 className="h-4 w-4 text-[hsl(38_75%_48%)]" />
                                    )}
                                  </div>
                                  <p className="mt-1 text-xs text-[hsl(28_15%_40%)] leading-relaxed">
                                    {pkg.tagline}
                                  </p>
                                </div>

                                <ul className="mt-4 space-y-1.5 border-t border-amber-900/10 pt-3">
                                  {pkg.features.slice(0, 3).map((feat, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-center gap-1.5 text-[0.75rem] text-[hsl(28_25%_20%)] font-medium"
                                    >
                                      <span className="h-1.5 w-1.5 rounded-full bg-[hsl(38_75%_48%)]" />
                                      <span className="truncate">{feat}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Step 2 Actions */}
                      <div className="flex items-center justify-between pt-4">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="flex items-center gap-1.5 rounded-full border border-amber-900/20 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[hsl(28_25%_12%)] transition-all hover:bg-amber-50"
                        >
                          <ChevronLeft className="h-4 w-4" />
                          <span>Back</span>
                        </button>
                        <button
                          type="button"
                          onClick={nextStep}
                          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[hsl(38_75%_48%)] to-[hsl(32_80%_52%)] px-7 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02]"
                        >
                          <span>Next Step</span>
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: CONTACT DETAILS & SUMMARY */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
                        {/* Left Inputs */}
                        <div className="space-y-4">
                          <div>
                            <label className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[hsl(28_25%_20%)]">
                              <User className="h-3.5 w-3.5 text-[hsl(38_75%_48%)]" />
                              Your name
                            </label>
                            <input
                              type="text"
                              name="name"
                              required
                              value={form.name}
                              onChange={(e) => {
                                handleChange(e);
                                if (errors.name) setErrors({ ...errors, name: '' });
                              }}
                              placeholder="Your full name"
                              className={`w-full rounded-xl border px-4 py-3 text-sm text-[hsl(28_25%_12%)] placeholder-[hsl(28_15%_60%)] outline-none transition-colors focus:border-amber-500 ${
                                errors.name ? 'border-red-500 bg-red-50' : 'border-amber-900/15 bg-white'
                              }`}
                            />
                            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                          </div>

                          <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                              <label className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[hsl(28_25%_20%)]">
                                <Phone className="h-3.5 w-3.5 text-[hsl(38_75%_48%)]" />
                                Your phone number
                              </label>
                              <input
                                type="tel"
                                name="phone"
                                required
                                value={form.phone}
                                onChange={(e) => {
                                  handleChange(e);
                                  if (errors.phone) setErrors({ ...errors, phone: '' });
                                }}
                                placeholder="+91 98765 43210"
                                className={`w-full rounded-xl border px-4 py-3 text-sm text-[hsl(28_25%_12%)] placeholder-[hsl(28_15%_60%)] outline-none transition-colors focus:border-amber-500 ${
                                  errors.phone ? 'border-red-500 bg-red-50' : 'border-amber-900/15 bg-white'
                                }`}
                              />
                              {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                            </div>
                            <div>
                              <label className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[hsl(28_25%_20%)]">
                                <Mail className="h-3.5 w-3.5 text-[hsl(38_75%_48%)]" />
                                Your email (optional)
                              </label>
                              <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={(e) => {
                                  handleChange(e);
                                  if (errors.email) setErrors({ ...errors, email: '' });
                                }}
                                placeholder="you@email.com"
                                className={`w-full rounded-xl border px-4 py-3 text-sm text-[hsl(28_25%_12%)] placeholder-[hsl(28_15%_60%)] outline-none transition-colors focus:border-amber-500 ${
                                  errors.email ? 'border-red-500 bg-red-50' : 'border-amber-900/15 bg-white'
                                }`}
                              />
                              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                            </div>
                          </div>

                          <div>
                            <label className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[hsl(28_25%_20%)]">
                              <FileText className="h-3.5 w-3.5 text-[hsl(38_75%_48%)]" />
                              Any special requests?
                            </label>
                            <textarea
                              name="message"
                              rows={3}
                              value={form.message}
                              onChange={handleChange}
                              placeholder="Tell us about multi-day events, specific themes, or custom requests..."
                              className="w-full rounded-xl border border-amber-900/15 bg-white px-4 py-3 text-sm text-[hsl(28_25%_12%)] placeholder-[hsl(28_15%_60%)] outline-none transition-colors focus:border-amber-500"
                            />
                          </div>
                        </div>

                        {/* Right Pre-submit Inquiry Summary Receipt Card */}
                        <div className="rounded-2xl border border-amber-900/15 bg-white p-5 shadow-xs">
                          <h4 className="flex items-center gap-2 font-display text-sm font-bold text-[hsl(28_25%_12%)]">
                            <Sparkles className="h-4 w-4 text-[hsl(38_75%_48%)]" />
                            Booking Summary
                          </h4>
                          <div className="mt-4 space-y-2.5 text-xs text-[hsl(28_25%_20%)] border-t border-amber-900/10 pt-3 font-medium">
                            <div className="flex justify-between">
                              <span className="text-[hsl(28_15%_45%)]">Event Type:</span>
                              <span className="font-bold text-[hsl(38_75%_44%)]">{form.eventType}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[hsl(28_15%_45%)]">Service:</span>
                              <span className="font-bold text-[hsl(38_75%_44%)]">{form.services}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[hsl(28_15%_45%)]">Package:</span>
                              <span className="font-bold text-[hsl(38_75%_44%)]">{form.package}</span>
                            </div>
                            {form.date && (
                              <div className="flex justify-between">
                                <span className="text-[hsl(28_15%_45%)]">Date:</span>
                                <span className="font-bold text-[hsl(38_75%_44%)]">{form.date}</span>
                              </div>
                            )}
                            {form.location && (
                              <div className="flex justify-between">
                                <span className="text-[hsl(28_15%_45%)]">Location:</span>
                                <span className="font-bold text-[hsl(38_75%_44%)] truncate max-w-[140px]">{form.location}</span>
                              </div>
                            )}
                          </div>

                          <div className="mt-6 rounded-xl border border-emerald-600/30 bg-emerald-50 p-3 text-[0.75rem] text-emerald-900 font-semibold">
                            ✓ Choose WhatsApp or Email to send your inquiry.
                          </div>
                        </div>
                      </div>

                      {/* Step 3 Actions */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="flex items-center gap-1.5 rounded-full border border-amber-900/20 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[hsl(28_25%_12%)] transition-all hover:bg-amber-50"
                        >
                          <ChevronLeft className="h-4 w-4" />
                          <span>Back</span>
                        </button>

                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={handleEmailSubmit}
                            disabled={!isStep3Valid}
                            className="flex items-center gap-2 rounded-full border border-blue-600/30 bg-blue-50 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-md transition-all hover:bg-blue-100 hover:scale-[1.02] disabled:opacity-50"
                          >
                            <Mail className="h-4 w-4" />
                            <span>Send via Email</span>
                          </button>

                          <button
                            type="submit"
                            disabled={!isStep3Valid}
                            className="flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-emerald-600/25 transition-all hover:bg-emerald-700 hover:scale-[1.02] disabled:opacity-50"
                          >
                            <Send className="h-4 w-4" />
                            <span>Send via WhatsApp</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          )}

          {/* Contact Direct Footer */}
          <div className="mt-8 flex flex-col items-center gap-3 border-t border-amber-900/10 pt-6 text-xs text-[hsl(28_15%_40%)] sm:flex-row sm:justify-between">
            <span>Or contact us directly:</span>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[hsl(28_25%_12%)] hover:text-[hsl(38_75%_44%)] hover:underline font-semibold"
              >
                {siteConfig.email}
              </a>
              <span>•</span>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-1 text-[hsl(28_25%_12%)] hover:text-[hsl(38_75%_44%)] hover:underline font-bold"
              >
                <Phone className="h-3 w-3 text-[hsl(38_75%_48%)]" />
                <span>{siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


