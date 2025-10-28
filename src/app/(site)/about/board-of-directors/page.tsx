
"use client";
import { getTeamMembers } from "@/lib/data";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";

export default function BoardOfDirectorsPage() {
  const team = [
    {
      id: '1',
      name: 'Mr. Manish Kumar Vaishnav',
      title: 'Founder & Chairman',
      bio: 'A seasoned healthcare leader with over 18 years of experience in hospital management, strategic planning, and operations. An alumnus of IMS, DAVV Indore, and IIM Rohtak, bringing deep expertise in healthcare strategy and execution.',
      image: 'team-member-1',
    },
    {
      id: '2',
      name: 'Mrs. Sugandh Khandelwal',
      title: 'Co-Founder',
      bio: 'A distinguished healthcare professional with degrees from BBD University, Amity University, Apollo Medvarsity, and Symbiosis International University. Brings extensive expertise in hospital administration, clinical research, and medical tourism.',
      image: 'team-member-2',
    },
  ];

  return (
    <div className="bg-background text-foreground animate-fade-in">
        <section className="py-20 md:py-24 bg-card">
            <div className="container text-center">
            <h1 className="text-3xl md:text-5xl font-bold animate-fade-in-up">Board of Directors</h1>
            <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
                Meet the experienced leaders guiding our vision and strategy.
            </p>
            </div>
        </section>

        <section className="py-16 md:py-24">
            <div className="container space-y-12 md:space-y-16">
            {team.map((member, index) => {
                const memberImage = PlaceHolderImages.find(p => p.id === member.image);
                const isReversed = index % 2 !== 0;
                return (
                <div key={member.id} className="animate-fade-in-up" style={{ animationDelay: `${200 * index}ms`}}>
                    <Card className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
                        <div className={`flex flex-col md:flex-row  ${isReversed ? 'md:flex-row-reverse' : ''}`}>
                            <div className={`h-80 h-full w-5xl ${isReversed ? 'md:col-start-2' : ''}`}>
                                {memberImage && (
                                    <Image
                                        src={memberImage.imageUrl}
                                        alt={member.name}
                                        width={800}
                                        height={600}
                                        className="w-full h-auto object-cover object-top"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        data-ai-hint={memberImage.imageHint || 'professional portrait'}
                                    />
                                )}
                            </div>
                            <div className={`p-6 sm:p-8 md:p-12 ${isReversed ? 'md:col-start-1' : ''}`}>
                                <h2 className="text-2xl sm:text-3xl font-bold">{member.name}</h2>
                                <p className="text-darkbg font-semibold text-md sm:text-lg mt-1">{member.title}</p>
                                <p className="text-muted-foreground mt-4 text-sm sm:text-base">{member.bio}</p>
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
