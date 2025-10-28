
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
    <>
      {partners.map((member, index) => {
        const memberImage = PlaceHolderImages.find(
          (p) => p.id === member.image
        );
        const isReversed = index % 2 !== 0;

        return (
          <div
            key={member.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${200 * index}ms` }}
          >
            <Card className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
              {/* Flex layout replacing grid */}
              <div
                className={`flex flex-col md:flex-row ${
                  isReversed ? "md:flex-row-reverse" : ""
                } items-center`}
              >
                {/* Image Section */}
                <div className="relative md:w-1/2 h-80 md:h-full">
                  {memberImage && (
                    <Image
                      src={memberImage.imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      data-ai-hint={memberImage.imageHint}
                    />
                  )}
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-2xl sm:text-3xl font-bold text-center md:text-left">
                    {member.name}
                  </h2>
                  <p className="text-primary font-semibold text-base sm:text-lg mt-2 text-center md:text-left">
                    {member.title}
                  </p>
                  <p
                    className="text-muted-foreground mt-4 text-sm sm:text-base leading-relaxed"
                    style={{ textAlign: "justify" }}
                  >
                    {member.bio}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        );
      })}
    </>
  );
}
