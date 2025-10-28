"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 50 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const slideImage = PlaceHolderImages.find(p => p.id === slides[selectedIndex].id);

  return (
    <section className="relative w-full h-[85vh] md:h-screen overflow-hidden">
        <AnimatePresence initial={false}>
            <motion.div
                key={selectedIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-0"
            >
                {slideImage && (
                    <Image
                        src={slideImage.imageUrl}
                        alt={slides[selectedIndex].title}
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                        data-ai-hint={slideImage.imageHint}
                    />
                )}
            </motion.div>
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container h-full flex flex-col justify-center items-center text-center text-white">
            <div className="max-w-3xl">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={`title-${selectedIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}
                        exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                        className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-2xl font-headline"
                    >
                        {slides[selectedIndex].title}
                    </motion.h1>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                    <motion.p
                        key={`subtitle-${selectedIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }}
                        exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                        className="mt-4 md:text-xl max-w-2xl mx-auto drop-shadow-lg"
                    >
                        {slides[selectedIndex].subtitle}
                    </motion.p>
                </AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }}
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
