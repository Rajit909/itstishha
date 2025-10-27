
import { getTeamMembers } from "@/lib/data";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

export default async function BoardOfDirectorsPage() {
  const team = await getTeamMembers();
  return (
    <div className="bg-background text-foreground animate-fade-in">
        <section className="py-20 md:py-32 bg-card">
            <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up">Board of Directors</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
                Meet the experienced leaders guiding our vision and strategy.
            </p>
            </div>
        </section>

        <section className="py-16 md:py-24">
            <div className="container space-y-16">
            {team.map((member, index) => {
                const memberImage = PlaceHolderImages.find(p => p.id === member.image);
                const isReversed = index % 2 !== 0;
                return (
                <div key={member.id} className="animate-fade-in-up" style={{ animationDelay: `${200 * index}ms`}}>
                    <Card className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
                        <div className={`grid md:grid-cols-2 items-center ${isReversed ? 'md:grid-flow-col-dense' : ''}`}>
                            <div className={`relative h-80 md:h-96 ${isReversed ? 'md:col-start-2' : ''}`}>
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
                            <div className={`p-8 md:p-12 ${isReversed ? 'md:col-start-1' : ''}`}>
                                <h2 className="text-3xl font-bold">{member.name}</h2>
                                <p className="text-primary font-semibold text-lg mt-1">{member.title}</p>
                                <p className="text-muted-foreground mt-4 text-base">{member.bio}</p>
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
