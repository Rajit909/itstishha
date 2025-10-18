"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Client } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";

type TestimonialsCarouselProps = {
    clients: Client[];
};

export function TestimonialsCarousel({ clients }: TestimonialsCarouselProps) {
  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full max-w-5xl mx-auto mt-12"
    >
      <CarouselContent>
        {clients.map((client) => {
          const clientLogo = PlaceHolderImages.find(p => p.id === client.logo);
          return (
            <CarouselItem key={client.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-4">
                <Card className="h-full flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 bg-background">
                  <CardContent className="p-8 text-left">
                    <p className="text-lg italic">"{client.testimonial}"</p>
                  </CardContent>
                  <CardFooter className="p-8 pt-0 flex items-center gap-4 bg-background/50">
                     {clientLogo && <Image src={clientLogo.imageUrl} alt={`${client.name} logo`} width={48} height={48} className="h-12 w-12 rounded-full object-contain p-1 bg-white" data-ai-hint={clientLogo.imageHint} />}
                     <div>
                      <h3 className="font-semibold">{client.name}</h3>
                      <p className="text-sm text-muted-foreground">CEO, {client.name}</p>
                     </div>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 md:-left-4" />
      <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 md:-right-4" />
    </Carousel>
  );
}
