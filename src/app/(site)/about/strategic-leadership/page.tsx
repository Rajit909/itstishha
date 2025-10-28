
"use client";
import { getStratergicPartners } from "@/lib/data";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";

export default function StrategicLeadershipPage() {
  const Partners = [
    {
      id: '1',
      name: 'Prof. (Dr.) Hem Chandra',
      title: 'Honorary Advisor',
      bio: 'Prof. (Dr.) Hem Chandra, a nationally acclaimed healthcare leader with over 40 years of experience, excels as an academician, administrator, and public health expert. An alumnus of top institutions, he has shaped medical education and healthcare policy, currently serving as Advisor to the Honerable President and Director of Hospital Services at Swami Ram Himalayan University.',
      image: 'team-member-3',
    },
    {
      id: '2',
      name: 'Mr. Pramod Panigrahi',
      title: 'Associate Director',
      bio: 'An MICA Ahmedabad alumnus with 20 years of experience in strategic marketing, digital transformation, and healthcare consultancy. Combines academic expertise and practical insight to drive growth, innovation, and future-ready business models across media, technology, and healthcare sectors.',
      image: 'team-member-4',
    },
  ];

  return (
    <div className="bg-background text-foreground animate-fade-in">
      {/* Header Section */}
      <section className="py-20 md:py-32 bg-card text-center">
        <div className="container px-4 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up">
            Strategic Leadership
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Meet the distinguished leaders providing strategic guidance to our organization.
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto space-y-16">
          {Partners.map((member, index) => {
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
        </div>
      </section>
    </div>
  );
}
