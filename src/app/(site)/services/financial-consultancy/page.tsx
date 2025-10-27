
import { Banknote, LineChart, PiggyBank } from 'lucide-react';
import Image from 'next/image';

export default function FinancialConsultancyPage() {
  return (
    <div className="bg-background text-foreground animate-fade-in">
      <section className="py-20 md:py-32 bg-card">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up">Financial Consultancy</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Navigate complex financial landscapes and ensure long-term stability and growth with our expert guidance.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl animate-fade-in-left">
              <Image src="https://picsum.photos/seed/financial-consultancy/800/600" alt="Financial Consultancy" fill className="object-cover" data-ai-hint="financial chart" />
            </div>
            <div className="animate-fade-in-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Driving Profitability and Growth</h2>
              <p className="text-lg text-muted-foreground">
                Our financial consultancy services provide the strategic insights you need to optimize financial performance, manage risk, and make sound investment decisions. We partner with you to build a resilient financial future for your organization.
              </p>
              <ul className="mt-8 space-y-6">
                <li className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mr-6 mt-1 flex-shrink-0">
                    <LineChart className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Financial Modeling & Analysis</h3>
                    <p className="text-muted-foreground mt-1">Providing data-driven forecasts and analysis to support strategic decision-making.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mr-6 mt-1 flex-shrink-0">
                    <PiggyBank className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Capital Budgeting & Investment</h3>
                    <p className="text-muted-foreground mt-1">Assisting in the evaluation and selection of profitable investment opportunities.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mr-6 mt-1 flex-shrink-0">
                    <Banknote className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Cost Management</h3>
                    <p className="text-muted-foreground mt-1">Identifying opportunities for cost reduction and efficiency improvements.</p>
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
