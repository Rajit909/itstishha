import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getServices, getClients } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default async function HomePage() {
  const services = (await getServices()).slice(0, 3);
  const clients = await getClients();
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-center text-white">
        <Image
          src={heroImage?.imageUrl || ''}
          alt={heroImage?.description || 'Hero background'}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage?.imageHint}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
            Driving Excellence in Healthcare and Technology
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Synergy Consult provides expert solutions in healthcare, project accreditation, and IT to propel your organization forward.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link href="/services">
              Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Services Section */}
      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Core Expertise</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We deliver tailored solutions across key industries to meet your most critical challenges.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.id} className="flex flex-col text-center items-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button variant="outline" asChild>
                    <Link href="/services">Learn More</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Partner with Synergy Consult?</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Our approach is rooted in partnership, deep industry knowledge, and a commitment to delivering measurable results.
                </p>
                <ul className="mt-8 space-y-4">
                    <li className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Expert Teams</h3>
                            <p className="text-muted-foreground">Access seasoned professionals with decades of combined experience in their respective fields.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Customized Strategies</h3>
                            <p className="text-muted-foreground">We don't believe in one-size-fits-all. Our solutions are tailored to your unique needs and goals.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Proven Results</h3>
                            <p className="text-muted-foreground">We have a track record of success, helping clients achieve accreditation, optimize operations, and innovate.</p>
                        </div>
                    </li>
                </ul>
                <Button className="mt-8" asChild>
                    <Link href="/about">Meet Our Team</Link>
                </Button>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
                 <Image
                    src="https://picsum.photos/seed/chooseus/800/600"
                    alt="Team meeting"
                    fill
                    className="object-cover"
                    data-ai-hint="team meeting"
                />
            </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We are proud to build lasting partnerships with our clients.
            </p>
          </div>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-4xl mx-auto mt-12"
          >
            <CarouselContent>
              {clients.map((client) => {
                const clientLogo = PlaceHolderImages.find(p => p.id === client.logo);
                return (
                  <CarouselItem key={client.id}>
                    <div className="p-4">
                      <Card className="overflow-hidden">
                        <CardContent className="p-8 text-center">
                          <p className="text-xl italic">"{client.testimonial}"</p>
                          <div className="mt-6 flex justify-center items-center flex-col">
                            <h3 className="font-semibold text-lg">{client.name}</h3>
                             {clientLogo && <Image src={clientLogo.imageUrl} alt={`${client.name} logo`} width={120} height={60} className="mt-2 object-contain" data-ai-hint={clientLogo.imageHint} />}
                          </div>
                        </CardContent>
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
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Ready to Transform Your Business?</h2>
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
