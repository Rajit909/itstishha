
import { ShieldCheck, CheckSquare, Award } from 'lucide-react';
import Image from 'next/image';

export default function QualityAccreditationPage() {
  return (
    <div className="bg-background text-foreground animate-fade-in">
      <section className="py-20 md:py-32 bg-card">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up">Quality Accreditation</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Achieve and maintain the highest standards of quality and excellence with our expert accreditation guidance.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl animate-fade-in-left">
              <Image src="/services/quality.jpg" alt="Quality Accreditation" fill className="object-cover" data-ai-hint="official document" />
            </div>
            <div className="animate-fade-in-right">
              <h2 className="text-3xl font-bold mb-4">A Mark of Excellence</h2>
              <p className="text-lg text-muted-foreground">
                We guide organizations through the complexities of achieving and maintaining prestigious quality accreditations (e.g., NABH, NABL, JCI). Our systematic approach ensures you not only meet regulatory requirements but also foster a culture of continuous improvement.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <CheckSquare className="h-6 w-6 text-darkbg mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Gap Analysis & Readiness</h3>
                    <p className="text-muted-foreground">Assessing your current state and creating a clear roadmap to accreditation.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-6 w-6 text-darkbg mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Process Implementation</h3>
                    <p className="text-muted-foreground">Helping you implement the required quality and safety protocols effectively.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-darkbg mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Continuous Compliance</h3>
                    <p className="text-muted-foreground">Providing support for maintaining standards and preparing for re-accreditation.</p>
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
