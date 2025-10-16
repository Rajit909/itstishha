import Image from "next/image";
import { getTeamMembers } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default async function AboutPage() {
  const team = await getTeamMembers();

  return (
    <>
      <section className="py-16 md:py-24 bg-card">
        <div className="container text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">About Synergy Consult</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a collective of industry experts passionate about delivering transformative results through collaboration, innovation, and strategic insight.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">Meet Our Leadership</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Our team's diverse expertise is the driving force behind our success and the success of our clients.
                </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {team.map((member) => {
                    const memberImage = PlaceHolderImages.find(p => p.id === member.image);
                    return (
                        <Card key={member.id} className="text-center hover:shadow-xl transition-shadow duration-300">
                            <CardContent className="p-6">
                                {memberImage && (
                                <div className="relative h-32 w-32 rounded-full mx-auto mb-4 overflow-hidden ring-4 ring-primary/10">
                                    <Image
                                    src={memberImage.imageUrl}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={memberImage.imageHint}
                                    />
                                </div>
                                )}
                                <h3 className="font-headline text-xl font-semibold">{member.name}</h3>
                                <p className="text-primary font-medium">{member.title}</p>
                                <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
      </section>
    </>
  );
}
