import { getProjectBySlug, getProjects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle, Target, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map(study => ({
    slug: study.slug,
  }));
}

export default async function ProjectPage({ params: { slug } }: ProjectPageProps) {
  const study = await getProjectBySlug(slug);

  if (!study) {
    notFound();
  }

  const studyImage = PlaceHolderImages.find(p => p.id === study.image);

  return (
    <article className="py-16 md:py-24">
      <div className="container max-w-5xl">
        <header className="mb-12 text-center">
          <p className="text-primary font-semibold mb-2">Project: {study.client}</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {study.title}
          </h1>
        </header>

        {studyImage && (
          <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-lg mb-12">
            <Image
              src={studyImage.imageUrl}
              alt={study.title}
              fill
              className="object-cover"
              priority
              data-ai-hint={studyImage.imageHint}
            />
          </div>
        )}
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-2 prose dark:prose-invert lg:prose-xl max-w-none">
            <div className="mb-12">
              <h2 className="flex items-center gap-3"><Target className="h-8 w-8 text-primary" /> The Challenge</h2>
              <p>{study.challenge}</p>
            </div>
            <div className="mb-12">
              <h2 className="flex items-center gap-3"><Zap className="h-8 w-8 text-primary" /> Our Solution</h2>
              <p>{study.solution}</p>
            </div>
            <div>
              <h2 className="flex items-center gap-3"><CheckCircle className="h-8 w-8 text-primary" /> The Result</h2>
              <p>{study.result}</p>
            </div>
          </div>
          <aside className="md:col-span-1 space-y-8">
            {study.testimonial && (
              <Card className="bg-card">
                <CardContent className="p-6">
                  <p className="text-lg italic">"{study.testimonial.text}"</p>
                  <p className="mt-4 font-semibold text-right">- {study.testimonial.author}</p>
                </CardContent>
              </Card>
            )}
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div>
                  <h4 className="font-semibold">Client</h4>
                  <p className="text-muted-foreground">{study.client}</p>
                 </div>
                 <div>
                  <h4 className="font-semibold">Services</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {study.services.map(service => (
                      <Badge key={service} variant="secondary">{service}</Badge>
                    ))}
                  </div>
                 </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </article>
  );
}
