
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
        <CarouselContent>
          {slides.map((slide, index) => {
            const slideImage = PlaceHolderImages.find((p) => p.id === slide.id);
            return (
              <CarouselItem key={slide.id}>
                <div className="relative aspect-video">
                  {slideImage && (
                    <Image
                      src={slideImage.imageUrl}
                      alt={slideImage.description}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      data-ai-hint={slideImage.imageHint}
                    />
                  )}
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
