
import { Eye, Rocket, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function MissionPage() {
  return (
    <div className="bg-background text-foreground animate-fade-in">
       <section className="py-20 md:py-32 bg-card">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up">Mission, Vision & Commitment</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Our guiding principles define our purpose and shape our every action.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container space-y-20">
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl animate-fade-in-left">
              <Image src="https://picsum.photos/seed/mission/800/600" alt="Our Mission" fill className="object-cover" data-ai-hint="business strategy" />
            </div>
            <div className="animate-fade-in-right">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Rocket className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                To empower organizations to navigate complexity and achieve sustainable growth by providing unparalleled expertise and fostering a culture of continuous improvement and innovation. We are dedicated to delivering measurable results that make a lasting impact.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl md:order-last animate-fade-in-right">
              <Image src="https://picsum.photos/seed/vision/800/600" alt="Our Vision" fill className="object-cover" data-ai-hint="future cityscape" />
            </div>
            <div className="md:order-first animate-fade-in-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Eye className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                To be the most trusted and sought-after consultancy partner, recognized for our strategic excellence, innovative solutions, and unwavering commitment to client success. We aspire to be at the forefront of industry transformation.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl animate-fade-in-left">
              <Image src="https://picsum.photos/seed/commitment/800/600" alt="Our Commitment" fill className="object-cover" data-ai-hint="team handshake" />
            </div>
            <div className="animate-fade-in-right">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Our Commitment</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                We are committed to excellence, integrity, and transparency in everything we do. Our clients' success is our ultimate measure of success, and we dedicate ourselves to building strong, lasting partnerships based on trust and mutual respect.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
