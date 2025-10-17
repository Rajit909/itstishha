
import Link from "next/link";
import Image from "next/image";
import { getCaseStudies } from "@/lib/data";
import { projectCategories, ProjectCategory } from "@/lib/project-categories";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/types";

type CaseStudyCategoryPageProps = {
  params: {
    category: string;
  };
};

export async function generateStaticParams() {
  return projectCategories.map(category => ({
    category: category.slug,
  }));
}

const getCategory = (slug: string): ProjectCategory | undefined => {
  return projectCategories.find(c => c.slug === slug);
}

const getStudiesForCategory = async (category: ProjectCategory): Promise<CaseStudy[]> => {
  const allStudies = await getCaseStudies();
  return allStudies.filter(study => 
    study.services.some(service => category.services.includes(service))
  );
}

export default async function CaseStudyCategoryPage({ params }: CaseStudyCategoryPageProps) {
  const category = getCategory(params.category);
  
  if (!category) {
    notFound();
  }
  
  const caseStudies = await getStudiesForCategory(category);

  return (
    <>
      <section className="py-20 md:py-32 bg-card animate-fade-in">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up">{category.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Explore our success stories in {category.title.toLowerCase()}.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          {caseStudies.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
              {caseStudies.map((study, index) => {
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
                        <p className="text-sm font-semibold text-primary">{study.client}</p>
                        <CardTitle className="text-2xl leading-tight h-16">{study.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground line-clamp-3">{study.excerpt}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="link" asChild className="p-0 h-auto">
                          <Link href={`/case-studies/${study.slug}`}>
                            Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                );
              })}
            </div>
          ) : (
             <div className="text-center py-12 border rounded-lg bg-card animate-fade-in-up">
              <h3 className="font-headline text-2xl font-semibold">No Case Studies Found</h3>
              <p className="mt-2 text-muted-foreground">
                There are currently no case studies available for this category.
              </p>
              <Button className="mt-6" asChild>
                <Link href="/case-studies">View All Case Studies</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
