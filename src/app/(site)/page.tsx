import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getServices, getClients } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

export default async function HomePage() {
  const services = (await getServices()).slice(0, 3);
  const clients = await getClients();
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[90vh] w-full flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        {heroImage && (
            <Image
                src={heroImage?.imageUrl || ''}
                alt={heroImage?.description || 'Hero background'}
                fill
                className="object-cover -z-10"
                priority
                data-ai-hint={heroImage?.imageHint}
            />
        )}
        <div className="relative z-10 max-w-4xl mx-auto px-4 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4">Driving Excellence</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Propel Your Organization Forward
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Synergy Consult provides expert solutions in healthcare, project accreditation, and IT to help you achieve your strategic goals.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/services">
                Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Schedule a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Our Core Expertise</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We deliver tailored solutions across key industries to meet your most critical challenges.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.id} className="group overflow-hidden flex flex-col text-center items-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild>
                    <Link href="/services">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-full rounded-lg overflow-hidden shadow-xl">
                 <Image
                    src="https://picsum.photos/seed/chooseus/800/600"
                    alt="Team meeting"
                    fill
                    className="object-cover"
                    data-ai-hint="team meeting"
                />
            </div>
            <div>
                <h2 className="text-3xl md:text-4xl font-bold">Why Partner with Synergy Consult?</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Our approach is rooted in partnership, deep industry knowledge, and a commitment to delivering measurable results.
                </p>
                <ul className="mt-8 space-y-6">
                    <li className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-lg">Expert Teams</h3>
                            <p className="text-muted-foreground mt-1">Access seasoned professionals with decades of combined experience in their respective fields.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-lg">Customized Strategies</h3>
                            <p className="text-muted-foreground mt-1">We don't believe in one-size-fits-all. Our solutions are tailored to your unique needs and goals.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-lg">Proven Results</h3>
                            <p className="text-muted-foreground mt-1">We have a track record of success, helping clients achieve accreditation, optimize operations, and innovate.</p>
                        </div>
                    </li>
                </ul>
                <Button className="mt-8" asChild size="lg">
                    <Link href="/about">Meet Our Team</Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We are proud to build lasting partnerships with our clients.
            </p>
          </div>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-5xl mx-auto mt-12"
          >
            <CarouselContent>
              {clients.map((client) => {
                const clientLogo = PlaceHolderImages.find(p => p.id === client.logo);
                return (
                  <CarouselItem key={client.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-4">
                      <Card className="h-full flex flex-col justify-between">
                        <CardContent className="p-8 text-left">
                          <p className="text-lg italic">"{client.testimonial}"</p>
                        </CardContent>
                        <CardFooter className="p-8 pt-0 flex items-center gap-4 bg-card/50">
                           {clientLogo && <Image src={clientLogo.imageUrl} alt={`${client.name} logo`} width={48} height={48} className="h-12 w-12 rounded-full object-contain p-1 bg-white" data-ai-hint={clientLogo.imageHint} />}
                           <div>
                            <h3 className="font-semibold">{client.name}</h3>
                            <p className="text-sm text-muted-foreground">CEO, {client.name}</p>
                           </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Business?</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Let's discuss how Synergy Consult can help you achieve your goals. Schedule a free consultation with our experts today.
          </p>
          <Button size="lg" variant="secondary" className="mt-8" asChild>
            <Link href="/contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
