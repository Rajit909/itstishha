
import { Layers, PencilRuler, Workflow } from 'lucide-react';
import Image from 'next/image';

export default function PlanningDesigningPage() {
  return (
    <div className="bg-background text-foreground animate-fade-in">
      <section className="py-20 md:py-32 bg-card">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up">Planning & Designing</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            From blueprint to reality, we provide expert planning and design services to build the foundation for your success.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl animate-fade-in-left">
              <Image src="/services/plannning.webp" alt="online team discussion" fill className="object-cover" data-ai-hint="architecture blueprint" />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <div className="animate-fade-in-right">
              <h2 className="text-3xl font-bold mb-4">Strategic Frameworks for Lasting Infrastructure</h2>
              <p className="text-lg text-muted-foreground">
              A well-designed hospital not only optimizes functionality but also significantly enhances patient care, operational efficiency, and overall healthcare outcomes. At TISHHA Consultants LLP, we specialize in crafting environments that seamlessly integrate with the evolving needs of patients, healthcare professionals, and technology.              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <Layers className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Strategic Master Planning</h3>
                    <p className="text-muted-foreground">Developing long-term strategic plans for facility development and expansion.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <PencilRuler className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Functional Space Planning</h3>
                    <p className="text-muted-foreground">Creating functional and aesthetic spaces that enhance user experience and efficiency.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Workflow className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Process Workflow Design</h3>
                    <p className="text-muted-foreground">Optimizing operational flows to improve productivity and reduce costs.</p>
                  </div>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
