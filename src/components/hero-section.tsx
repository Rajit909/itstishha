"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {

    const sliderImages = [
        PlaceHolderImages.find(p => p.id === 'slider-1'),
        PlaceHolderImages.find(p => p.id === 'slider-2'),
        PlaceHolderImages.find(p => p.id === 'slider-3'),
    ].filter(Boolean);

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] text-white overflow-hidden">
        <Carousel
        opts={{
            align: "start",
            loop: true,
        }}
        plugins={[
            Autoplay({
            delay: 1000,
            stopOnInteraction: false,
            }),
        ]}
        className="w-full h-full"
        >
            <CarouselContent className="h-full">
                {sliderImages.map((image, index) => (
                image && (
                    <CarouselItem key={index} className="h-full">
                        <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover"
                            data-ai-hint={image.imageHint}
                        />
                    </CarouselItem>
                )
                ))}
            </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4">
            <div className="animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    Transforming Healthcare Horizons
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
                    Pioneering strategic solutions in healthcare, accreditation, and technology to build world-class facilities for a healthier tomorrow.
                </p>
                <Button asChild className="mt-8" size="lg">
                    <Link href="/about">Discover Our Vision <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
        </div>
    </section>
  );
}
