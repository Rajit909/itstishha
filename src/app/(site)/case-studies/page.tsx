
import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <section className="py-20 md:py-32 bg-card animate-fade-in">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up">Our Success Stories</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Explore how we've helped our clients overcome challenges and achieve their goals through strategic partnership and expert execution.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {projects.map((study, index) => {
              const studyImage = PlaceHolderImages.find(p => p.id === study.image);
              return (
                <div key={study.id} className="animate-fade-in-up" style={{ animationDelay: `${200 * index}ms`}}>
                    <Card className="group flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                      {studyImage && (
                        <div className="relative h-64 w-full overflow-hidden">
                          <Image
                            src={studyImage.imageUrl}
                            alt={study.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            data-ai-hint={studyImage.imageHint}
                          />
                        </div>
                      )}
                      <CardHeader>
                        <p className="text-sm font-semibold text-darkbg">{study.client}</p>
                        <CardTitle className="text-2xl leading-tight h-16">{study.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground line-clamp-3">{study.excerpt}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="link" asChild className="p-0 h-auto">
                          <Link href={`/projects/${study.slug}`}>
                            Read Project Details <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
