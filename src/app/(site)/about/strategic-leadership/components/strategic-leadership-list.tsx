
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";
import type { StratergicPartner } from "@/lib/types";

type StrategicLeadershipListProps = {
  partners: StratergicPartner[];
};

export function StrategicLeadershipList({ partners }: StrategicLeadershipListProps) {
  return (
    <div className="space-y-10 md:space-y-16">
      {partners.map((member, index) => {
        const memberImage = PlaceHolderImages.find((p) => p.id === member.image);
        const isReversed = index % 2 !== 0;

        return (
          <div
            key={member.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${200 * index}ms` }}
          >
            <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl">
              <div
                className={`flex flex-col md:flex-row ${
                  isReversed ? "md:flex-row-reverse" : ""
                } items-stretch`}
              >
                {/* Image Section */}
                <div className="relative w-full md:w-1/2 lg:w-1/3 aspect-[4/3] md:aspect-auto md:min-h-[300px] lg:min-h-[400px]">
                  {memberImage ? (
                    <Image
                      src={memberImage.imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      data-ai-hint={memberImage.imageHint}
                      priority={index < 2} // Optimize initial load
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                      No image available
                    </div>
                  )}
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2  lg:w-full p-6 sm:p-10 lg:p-12 flex flex-col justify-center text-center md:text-left">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {member.name}
                  </h2>
                  <p className="text-primary font-semibold text-base sm:text-lg mt-2">
                    {member.title}
                  </p>
                  <p className="text-muted-foreground mt-4 text-sm sm:text-base leading-relaxed text-justify">
                    {member.bio}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
