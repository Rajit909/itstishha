
"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const slides = [
  {
    id: "slider-1",
    title: "Expert Guidance for Your Success",
    subtitle: "Navigate complexity with our strategic consultancy.",
  },
  {
    id: "slider-2",
    title: "Achieve Excellence in Healthcare",
    subtitle: "Optimize operations and enhance patient care.",
  },
  {
    id: "slider-3",
    title: "Drive Innovation with Technology",
    subtitle: "Leverage IT solutions for a competitive edge.",
  },
  {
    id: "slider-4",
    title: "Unlock Your Project's Potential",
    subtitle: "Comprehensive support for accreditation and management.",
  },
];

export function HeroSection() {
  return (
    <section className="w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="h-[60vh] md:h-[70vh] lg:h-[80vh]">
          {slides.map((slide) => {
            const slideImage = PlaceHolderImages.find((p) => p.id === slide.id);
            return (
              <CarouselItem key={slide.id} className="h-full">
                <div className="relative h-full w-full">
                  {slideImage && (
                    <Image
                      src={slideImage.imageUrl}
                      alt={slideImage.description}
                      fill
                      className="object-contain"
                      priority={slide.id === 'slider-1'}
                      data-ai-hint={slideImage.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white p-4 md:p-8 rounded-lg bg-black/30 backdrop-blur-sm max-w-xs md:max-w-md lg:max-w-2xl">
                      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        {slide.title}
                      </h1>
                      <p className="mt-4 text-lg md:text-xl">
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

    