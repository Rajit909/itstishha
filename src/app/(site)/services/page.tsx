import Link from "next/link";
import Image from "next/image";
import { getServices } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <section className="py-16 md:py-24 bg-card animate-fade-in">
        <div className="container text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold animate-fade-in-up">Our Services</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            We provide strategic consulting across healthcare, accreditation, and technology to help your organization thrive.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
            {services.map((service, index) => {
              const serviceImage = PlaceHolderImages.find(p => p.id === service.image);
              const isReversed = index % 2 !== 0;
              return (
                <div className="animate-fade-in-up" style={{ animationDelay: `${200 * index}ms`}} key={service.id}>
                    <Card className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
                        <div className={`grid md:grid-cols-2 items-center ${isReversed ? 'md:grid-flow-col-dense' : ''}`}>
                            <div className={`relative h-64 md:h-full ${isReversed ? 'md:col-start-2' : ''}`}>
                                {serviceImage && (
                                    <Image 
                                        src={serviceImage.imageUrl} 
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={serviceImage.imageHint}
                                    />
                                )}
                            </div>
                            <div className={`p-8 md:p-12 ${isReversed ? 'md:col-start-1' : ''}`}>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <service.icon className="h-6 w-6" />
                                    </div>
                                    <h2 className="font-headline text-3xl font-bold">{service.title}</h2>
                                </div>
                                <p className="text-muted-foreground mt-4 text-lg">{service.longDescription}</p>
                                <Button className="mt-6" asChild>
                                    <Link href="/contact">Request Consultation</Link>
                                </Button>
                            </div>
                        </div>
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
