
import { Code, Cloud, Smartphone } from 'lucide-react';
import Image from 'next/image';

export default function DigitalSolutionPage() {
  return (
    <div className="bg-background text-foreground animate-fade-in">
      <section className="py-20 md:py-32 bg-card">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up">Digital Solutions</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Leverage cutting-edge technology to drive innovation, efficiency, and growth with our bespoke digital solutions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl animate-fade-in-left">
              <Image src="/services/digital.jpg" alt="Digital Solution" fill className="object-cover" data-ai-hint="data visualization" />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <div className="animate-fade-in-right">
              <h2 className="text-3xl font-bold mb-4">Transforming Business with Technology</h2>
              <p className="text-lg text-muted-foreground">
                Our digital solutions are designed to modernize your operations and create new opportunities. From custom software to Hospital Information Management Systems (HIMS), we build and implement technology that delivers a competitive advantage.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <Code className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Custom Software Development</h3>
                    <p className="text-muted-foreground">Building tailored applications to meet your unique business needs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Cloud className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">HIMS & ERP Implementation</h3>
                    <p className="text-muted-foreground">Deploying and customizing enterprise systems for streamlined management.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Smartphone className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Mobile & Web Applications</h3>
                    <p className="text-muted-foreground">Creating engaging digital experiences for your customers and staff.</p>
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
