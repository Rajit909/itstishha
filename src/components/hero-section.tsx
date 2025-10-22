
"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const slides = [
  {
    id: "slider-1",
  },
  {
    id: "slider-2",
  },
  {
    id: "slider-3",
  },
  {
    id: "slider-4",
  },
];

export function HeroSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  return (
    <section className="relative w-full overflow-hidden">
      <Carousel
        ref={emblaRef}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-0">
          {slides.map((slide, index) => {
            const slideImage = PlaceHolderImages.find(
              (p) => p.id === slide.id
            );

            return (
              <CarouselItem key={slide.id} className="h-[60vh] md:h-[70vh] lg:h-[80vh] relative pl-0">
                  {slideImage && (
                    <Image
                      src={slideImage.imageUrl}
                      alt={slideImage.description}
                      fill
                      priority={index === 0}
                      className="object-cover"
                      data-ai-hint={slideImage.imageHint}
                    />
                  )}
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </section>
  );
}
