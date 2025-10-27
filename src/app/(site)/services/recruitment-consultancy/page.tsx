
import { Users, UserSearch, Briefcase } from 'lucide-react';
import Image from 'next/image';

export default function RecruitmentConsultancyPage() {
  return (
    <div className="bg-background text-foreground animate-fade-in">
      <section className="py-20 md:py-32 bg-card">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up">Recruitment Consultancy</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Find and attract the right talent to build a high-performing team and drive your organization's success.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl animate-fade-in-left">
              <Image src="/services/recruit.jpg" fill className="object-cover" data-ai-hint="job interview" />
            </div>
            <div className="animate-fade-in-right">
              <h2 className="text-3xl font-bold mb-4">Building Your Most Valuable Asset</h2>
              <p className="text-lg text-muted-foreground">
                Our recruitment consultancy is dedicated to sourcing top-tier talent that aligns with your company culture and strategic goals. We manage the entire recruitment lifecycle, from identifying needs to onboarding new hires, ensuring you build a workforce that drives success.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <UserSearch className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Executive Search</h3>
                    <p className="text-muted-foreground">Identifying and attracting high-impact leaders for your most critical roles.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Talent Sourcing & Acquisition</h3>
                    <p className="text-muted-foreground">Leveraging our extensive network to find skilled professionals for all levels.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Briefcase className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Workforce Planning</h3>
                    <p className="text-muted-foreground">Developing strategic plans to meet your organization's future talent needs.</p>
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
