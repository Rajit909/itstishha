import { getJobOpenings } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase } from "lucide-react";
import Link from "next/link";

export default async function CareersPage() {
  const jobs = await getJobOpenings();

  return (
    <>
      <section className="py-16 md:py-24 bg-card animate-fade-in">
        <div className="container text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold animate-fade-in-up">Join Our Team</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            We're looking for passionate, talented individuals to help us drive innovation. Explore our open positions and find your future at Tishha.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          {jobs.length > 0 ? (
            <Accordion type="single" collapsible className="w-full space-y-4">
              {jobs.map((job, index) => (
                <div key={job.id} className="animate-fade-in-up" style={{ animationDelay: `${200 * index}ms`}}>
                  <AccordionItem value={job.id} className="border rounded-lg bg-card shadow-sm">
                    <AccordionTrigger className="p-6 text-left hover:no-underline">
                      <div className="flex-1">
                        <h3 className="font-headline text-xl font-semibold">{job.title}</h3>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Briefcase className="mr-2 h-4 w-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-2 h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-6 pt-0">
                      <p className="mb-6">{job.description}</p>
                      <Button asChild>
                        <Link href="/contact">Apply Now</Link>
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-12 border rounded-lg bg-card animate-fade-in-up">
              <h3 className="font-headline text-2xl font-semibold">No Openings Currently</h3>
              <p className="mt-2 text-muted-foreground">
                We're not actively hiring at the moment, but we're always interested in great talent.
              </p>
              <Button className="mt-6" asChild>
                <Link href="https://careeraxisassociates.com">Get in Touch</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
