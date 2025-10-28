
import Image from "next/image";
import { getLeaders } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Award, Target, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function AboutPage() {
  const leaders = await getLeaders();

  return (
    <>
      <section className="py-20 md:py-32 bg-card animate-fade-in">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up">About Tishha</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            We are a collective of industry experts passionate about delivering transformative results through collaboration, innovation, and strategic insight.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-right">
            <h2 className="text-3xl md:text-4xl font-bold">Our Mission & Vision</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              To empower organizations to navigate complexity and achieve sustainable growth by providing unparalleled expertise and fostering a culture of continuous improvement.
            </p>
            <ul className="mt-8 space-y-6">
              <li className="flex items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-darkbg mr-6 mt-1 flex-shrink-0">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Excellence</h3>
                  <p className="text-muted-foreground mt-1">We are committed to delivering the highest quality of service and results, setting a benchmark for excellence in the industry.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-darkbg mr-6 mt-1 flex-shrink-0">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Partnership</h3>
                  <p className="text-muted-foreground mt-1">We believe in building long-term partnerships with our clients, working collaboratively to achieve shared goals.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-darkbg mr-6 mt-1 flex-shrink-0">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Impact</h3>
                  <p className="text-muted-foreground mt-1">We are driven by the desire to make a meaningful impact on our clients' businesses and the industries they operate in.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative h-96 md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-xl animate-fade-in-left">
            <Image
              src="/carousel-img/sliderthree.jpeg"
              alt="Tishha Office"
              fill
              className="object-cover"
              data-ai-hint="office whiteboard"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container">
            <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold">Meet Our Leadership</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Our team's diverse expertise is the driving force behind our success and the success of our clients.
                </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {leaders.map((member, index) => {
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
                                    <p className="text-darkbg font-medium">{member.title}</p>
                                    <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                                  </div>
                              </CardContent>
                          </Card>
                        </div>
                    )
                })}
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 animate-fade-in">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Join Our Team</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We are always looking for talented individuals to join our growing team. If you are passionate about making a difference, we would love to hear from you.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link href="/careers">
              View Open Positions
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
