
import { FileSearch, Lightbulb, BarChart } from 'lucide-react';
import Image from 'next/image';

export default function FeasibilityStudyPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-32 bg-card">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Feasibility Studies</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Make confident, strategic decisions with our thorough feasibility studies and data-driven insights.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image src="https://picsum.photos/seed/feasibility/800/600" alt="Feasibility Study" fill className="object-cover" data-ai-hint="market research" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Validating Your Vision</h2>
              <p className="text-lg text-muted-foreground">
                Before you invest significant resources into a new project, our feasibility studies provide a comprehensive evaluation of its potential for success. We analyze market viability, financial projections, and operational requirements to give you a clear picture of the risks and rewards.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <BarChart className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Market & Competitive Analysis</h3>
                    <p className="text-muted-foreground">Assessing market demand, competition, and positioning to identify opportunities.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FileSearch className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Financial Viability Assessment</h3>
                    <p className="text-muted-foreground">Developing detailed financial models, including ROI and break-even analysis.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Operational & Technical Feasibility</h3>
                    <p className="text-muted-foreground">Evaluating the resources, technology, and expertise required for successful implementation.</p>
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
