
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
import { Card, CardContent } from "@/components/ui/card";
import type { Client } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";

type TestimonialsCarouselProps = {
  clients: Client[];
};

export function TestimonialsCarousel({ clients }: TestimonialsCarouselProps) {
  return (
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
      className="w-full max-w-5xl mx-auto mt-12"
    >
      <CarouselContent>
        {clients.map((client) => {
          const clientLogo = PlaceHolderImages.find((p) => p.id === client.logo);
          const nameParts = client.name.includes(',') ? client.name.split(',') : [client.name, ''];

          return (
            <CarouselItem key={client.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-4 h-full">
                <Card className="h-full flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 bg-background">
                  <CardContent className="p-6 flex-grow">
                    <p className="italic">"{client.testimonial}"</p>
                  </CardContent>
                  <div className="p-6 pt-4 flex items-center gap-4 bg-background/50 border-t">
                    {clientLogo && (
                      <Image
                        src={clientLogo.imageUrl}
                        alt={`${client.name} logo`}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-full object-contain p-1 bg-white"
                        data-ai-hint={clientLogo.imageHint}
                      />
                    )}
                    <div>
                      <h3 className="font-semibold">{nameParts[0]}</h3>
                      {nameParts[1] && <p className="text-sm text-muted-foreground">
                        {nameParts[1]}
                      </p>}
                    </div>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 md:-left-4" />
      <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 md:-right-4" />
    </Carousel>
  );
}
