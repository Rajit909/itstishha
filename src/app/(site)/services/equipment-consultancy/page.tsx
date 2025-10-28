
import { HardHat, Wrench, Microscope } from 'lucide-react';
import Image from 'next/image';

export default function EquipmentConsultancyPage() {
  return (
    <div className="bg-background text-foreground animate-fade-in">
      <section className="py-20 md:py-32 bg-card">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up">Equipment Consultancy</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Ensuring you have the right tools to succeed with expert advice on equipment procurement, planning, and management.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl animate-fade-in-left">
              <Image src="/services/equipment.jpg" alt="Medical Equipment" fill className="object-cover" data-ai-hint="medical equipment" />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <div className="animate-fade-in-right">
              <h2 className="text-3xl font-bold mb-4">Equipping Your Vision for Success</h2>
              <p className="text-lg text-muted-foreground">
                Our equipment consultancy service provides strategic guidance for the procurement and management of medical and industrial equipment. We help you make cost-effective decisions that enhance your operational capabilities and support your long-term goals.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <Microscope className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Technology Assessment & Selection</h3>
                    <p className="text-muted-foreground">Analyzing your needs to recommend the most suitable and advanced equipment.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <HardHat className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Procurement & Installation Planning</h3>
                    <p className="text-muted-foreground">Managing the end-to-end procurement process, from vendor negotiation to installation.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Wrench className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Lifecycle Management</h3>
                    <p className="text-muted-foreground">Advising on maintenance, upgrades, and disposal to maximize your return on investment.</p>
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
