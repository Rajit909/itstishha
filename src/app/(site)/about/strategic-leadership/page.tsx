import { getStratergicPartners } from "@/lib/data";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

export default async function StrategicLeadershipPage() {
  const Partners = await getStratergicPartners();
  return (
    <div className="container py-16 animate-fade-in">
      <h1 className="text-4xl font-bold animate-fade-in-up">Strategic Leadership</h1>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {Partners.map((member, index) => {
            const memberImage = PlaceHolderImages.find(p => p.id === member.image);
            return (
                <div key={member.id} className="animate-fade-in-up" style={{ animationDelay: `${200 * index}ms`}}>
                    <Card className="text-center group overflow-hidden h-full">
                        <CardContent className="p-0">
                            {memberImage && (
                            <div className="relative h-64 w-full">
                                <Image
                                src={memberImage.imageUrl}
                                alt={member.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                data-ai-hint={memberImage.imageHint}
                                />
                            </div>
                            )}
                            <div className="p-6">
                              <h3 className="text-xl font-semibold">{member.name}</h3>
                              <p className="text-primary font-medium">{member.title}</p>
                              <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )
        })}
      </div>
    </div>
  );
}
