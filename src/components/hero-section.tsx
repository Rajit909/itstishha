
"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: "slider-1",
    title: "Empowering Healthcare, Inspiring Change",
    subtitle:
      "Driving transformation in healthcare and beyond through strategic consulting and innovative digital solutions.",
    imageHint: "doctor tablet",
  },
  {
    id: "slider-4",
    title: "National Nursing Conference 2025 – Lucknow",
    subtitle: "Glimpses of Inspiration, Innovation & Leadership — Lucknow Edition by TISHHA.",
    imageHint: "conference audience",
  },
  {
    id: "slider-3",
    title: "Building the Future of Business, Together",
    subtitle: "From strategic planning to flawless execution, we are your dedicated partners in growth and success.",
    imageHint: "science laboratory",
  },
];

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full h-[85vh] md:h-screen overflow-hidden" ref={emblaRef}>
      <div className="absolute inset-0 z-0 flex">
        {slides.map((slide, index) => {
          const slideImage = PlaceHolderImages.find(p => p.id === slide.id);
          return (
            <div className="relative flex-[0_0_100%] h-full" key={index}>
              <AnimatePresence>
                {selectedIndex === index && slideImage && (
                  <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 1.5, ease: 'easeOut' } }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0"
                  >
                    <Image
                        src={slideImage.imageUrl}
                        alt={slide.title}
                        fill
                        priority={index === 0}
                        className="object-cover"
                        sizes="100vw"
                        data-ai-hint={slideImage.imageHint}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
        
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container h-full flex flex-col justify-center items-center text-center text-white">
        <div className="max-w-3xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${selectedIndex}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } }}
              exit={{ opacity: 0, y: -30, transition: { duration: 0.3, ease: "easeIn" } }}
              className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-2xl font-headline"
            >
              {slides[selectedIndex].title}
            </motion.h1>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p
              key={`subtitle-${selectedIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.5 } }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }}
              className="mt-4 md:text-xl max-w-2xl mx-auto drop-shadow-lg"
            >
              {slides[selectedIndex].subtitle}
            </motion.p>
          </AnimatePresence>
          <motion.div
            key={`buttons-${selectedIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.7 } }}
            className="mt-8 flex flex-wrap gap-4 justify-center"
          >
            <Button size="lg" asChild>
              <Link href="/services">
                Explore Our Services
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get In Touch
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
