
import Image from "next/image";
import { getClients } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

export async function ClientLogoCarousel() {
  const clients = await getClients();
  const logos = clients.map(client => PlaceHolderImages.find(p => p.id === client.logo)).filter(Boolean);

  // Duplicate logos for a seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Our Valued Clients</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We are proud to have partnered with a diverse range of organizations.
            </p>
          </div>
        </ScrollAnimation>
        <div className="mt-12 relative overflow-hidden">
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {duplicatedLogos.map((logo, index) => (
              logo && (
                <div key={index} className="flex-shrink-0 mx-4 flex items-center justify-center" style={{ width: '180px' }}>
                  <Image
                    src={logo.imageUrl}
                    alt={`Client logo ${index + 1}`}
                    width={150}
                    height={75}
                    className="object-contain h-20 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    data-ai-hint={logo.imageHint}
                  />
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
