
"use client";

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
    {
        id: "slider-1",
        title: "Pioneering Healthcare Solutions",
        subtitle:
        "Driving innovation in patient care and operational excellence.",
    },
    {
        id: "slider-2",
        title: "Excellence in Project Accreditation",
        subtitle:
        "Your trusted partner in achieving the highest standards of quality and safety.",
    },
    {
        id: "slider-3",
        title: "Transformative IT Consulting",
        subtitle: "Modernizing your infrastructure for a digital-first world.",
    },
    {
        id: "slider-4",
        title: "Strategic Financial Guidance",
        subtitle: "Optimizing financial performance for sustainable growth.",
    },
];

export function HeroSection() {
  return (
    <section className="relative w-full">
      <Carousel
        className="w-full"
        plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
        opts={{ loop: true }}
      >
        <CarouselContent>
          {slides.map((slide) => {
            const slideImage = PlaceHolderImages.find(
              (p) => p.id === slide.id
            );
            return (
              <CarouselItem key={slide.id}>
                <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] w-full">
                  {slideImage && (
                    <Image
                      src={slideImage.imageUrl}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      data-ai-hint={slideImage.imageHint}
                      priority
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-20">
                    <div className="text-white max-w-3xl animate-fade-in-up">
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg">
                        {slide.title}
                      </h1>
                      <p className="mt-4 text-base md:text-lg lg:text-xl drop-shadow-md">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
      </Carousel>
    </section>
  );
}

