"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const slides = [
  {
    id: 'slider-1',
    title: 'Pioneering Healthcare Solutions',
    subtitle: 'Driving innovation in patient care and operational excellence.',
  },
  {
    id: 'slider-2',
    title: 'Excellence in Project Accreditation',
    subtitle: 'Your trusted partner in achieving the highest standards of quality and safety.',
  },
  {
    id: 'slider-3',
    title: 'Transformative IT Consulting',
    subtitle: 'Modernizing your infrastructure for a digital-first world.',
  },
];

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 50 }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex h-screen">
          {slides.map((slide) => {
            const slideImage = PlaceHolderImages.find((p) => p.id === slide.id);
            return (
              <div
                className="relative flex-[0_0_100%] h-full transition-opacity duration-700"
                key={slide.id}
              >
                {slideImage && (
                  <Image
                    src={slideImage.imageUrl}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={slides.indexOf(slide) === 0}
                    data-ai-hint={slideImage.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end items-start text-white p-8 md:p-16">
                   <div className="max-w-3xl animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-md">
                      {slide.title}
                    </h1>
                    <p className="mt-4 text-lg md:text-2xl drop-shadow-sm">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 hidden md:block">
        <button
          onClick={scrollPrev}
          className="h-12 w-12 rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/40"
        >
          <ArrowLeft className="h-6 w-6 mx-auto" />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 -translate-y-1/2 hidden md:block">
        <button
          onClick={scrollNext}
          className="h-12 w-12 rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/40"
        >
          <ArrowRight className="h-6 w-6 mx-auto" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              'h-3 w-3 rounded-full bg-white/50 transition-all duration-300',
              index === selectedIndex ? 'w-6 bg-white' : 'hover:bg-white/80'
            )}
          />
        ))}
      </div>
    </section>
  );
}
