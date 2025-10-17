import { getTeamMembers } from "@/lib/data";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

export default async function BoardOfDirectorsPage() {
  const team = await getTeamMembers();
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold">Board of Directors</h1>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => {
            const memberImage = PlaceHolderImages.find(p => p.id === member.image);
            return (
                <Card key={member.id} className="text-center group overflow-hidden">
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
            )
        })}
      </div>
    </div>
  );
}
