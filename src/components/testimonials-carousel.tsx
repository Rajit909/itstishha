"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Client } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";

type TestimonialsCarouselProps = {
    clients: Client[];
};

export function TestimonialsCarousel({ clients }: TestimonialsCarouselProps) {
  // Duplicate clients for a seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="relative mt-12 w-full overflow-hidden">
      <div className="flex animate-marquee hover:[animation-play-state:paused]">
        {duplicatedClients.map((client, index) => {
          const clientLogo = PlaceHolderImages.find(p => p.id === client.logo);
          return (
            <div key={index} className="flex-shrink-0 p-4" style={{ width: 'clamp(300px, 40vw, 400px)'}}>
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
          );
        })}
      </div>
    </div>
  );
}