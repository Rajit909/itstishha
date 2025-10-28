
import { Handshake, Target, Building2 } from 'lucide-react';
import Image from 'next/image';

export default function OperationalAcquisitionPage() {
  return (
    <div className="bg-background text-foreground animate-fade-in">
      <section className="py-20 md:py-32 bg-card">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up">Operational Acquisition & Management</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            From due diligence to seamless integration, we provide end-to-end support for your operational acquisition needs.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl animate-fade-in-left">
              <Image src="/services/operational.jpg" alt="Operational Acquisition" fill className="object-cover" data-ai-hint="business handshake" />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <div className="animate-fade-in-right">
              <h2 className="text-3xl font-bold mb-4">Seamless Transitions, Lasting Value</h2>
              <p className="text-lg text-muted-foreground">
                We specialize in managing the acquisition and operational takeover of healthcare facilities and other businesses. Our team ensures a smooth transition by handling everything from initial valuation and due diligence to post-acquisition management and optimization.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <Target className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Due Diligence & Valuation</h3>
                    <p className="text-muted-foreground">Conducting comprehensive assessments to ensure informed investment decisions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Handshake className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Integration & Transition Management</h3>
                    <p className="text-muted-foreground">Executing a detailed plan for seamless integration of operations and culture.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Building2 className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Post-Acquisition Operations</h3>
                    <p className="text-muted-foreground">Providing ongoing management to drive efficiency, growth, and profitability.</p>
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
