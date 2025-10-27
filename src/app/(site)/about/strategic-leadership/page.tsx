import { getStratergicPartners } from "@/lib/data";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

export default async function StrategicLeadershipPage() {
  const Partners = await getStratergicPartners();
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto text-center animate-fade-in">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 animate-fade-in-up">
          Strategic Leadership
        </h1>
  
        {/* Divider line for style */}
        <div className="mx-auto mt-4 h-1 w-24 bg-primary rounded-full"></div>
  
        {/* Grid of Cards */}
        <div className="mt-16 flex gap-5 sm:cols-2 lg:cols-3 justify-center">
          {Partners.map((member, index) => {
            const memberImage = PlaceHolderImages.find(
              (p) => p.id === member.image
            );
  
            return (
              <div
                key={member.id}
                className="animate-fade-in-up flex justify-center"
                style={{ animationDelay: `${200 * index}ms` }}
              >
                <Card className="w-full max-w-xs text-center group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl border border-gray-100 bg-white">
                  <CardContent className="p-0">
                    {memberImage && (
                      <div className="relative h-64 w-full overflow-hidden">
                        <Image
                          src={memberImage.imageUrl}
                          alt={member.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          data-ai-hint={memberImage.imageHint}
                        />
                      </div>
                    )}
  
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mt-1">
                        {member.title}
                      </p>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
  
}
