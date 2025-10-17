
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
              <Image src="https://picsum.photos/seed/finance/800/600" alt="Financial Consultancy" fill className="object-cover" data-ai-hint="financial chart" />
            </div>
            <div className="animate-fade-in-right">
              <h2 className="text-3xl font-bold mb-4">Driving Profitability and Growth</h2>
              <p className="text-lg text-muted-foreground">
                Our financial consultancy services provide the strategic insights you need to optimize financial performance, manage risk, and make sound investment decisions. We partner with you to build a resilient financial future for your organization.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <LineChart className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Financial Modeling & Analysis</h3>
                    <p className="text-muted-foreground">Providing data-driven forecasts and analysis to support strategic decision-making.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <PiggyBank className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Capital Budgeting & Investment</h3>
                    <p className="text-muted-foreground">Assisting in the evaluation and selection of profitable investment opportunities.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Banknote className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Cost Management</h3>
                    <p className="text-muted-foreground">Identifying opportunities for cost reduction and efficiency improvements.</p>
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
