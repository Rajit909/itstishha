
import { ListChecks, TrendingUp, Users, ShieldCheck } from "lucide-react";

export default function ObjectivesPage() {
  return (
    <div className="bg-background text-foreground animate-fade-in">
      <section className="py-20 md:py-32 bg-card">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up">Our Objectives</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Our objectives are designed to ensure we consistently deliver value and drive success for our clients, our team, and our community.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
            
            <div className="p-8 flex flex-col items-center text-center border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Deliver Measurable Results</h3>
              <p className="text-muted-foreground text-justify">
                We focus on providing solutions that generate tangible and quantifiable outcomes, ensuring our clients see a clear return on their investment and achieve their strategic goals.
              </p>
            </div>
            
            <div className="p-8 flex flex-col items-center text-center border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Foster Client Partnerships</h3>
              <p className="text-muted-foreground text-justify">
                Our goal is to build long-term, collaborative relationships with our clients, acting as trusted advisors and an integrated part of their team to support their ongoing growth.
              </p>
            </div>

            <div className="p-8 flex flex-col items-center text-center border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <ListChecks className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Uphold Unparalleled Expertise</h3>
              <p className="text-muted-foreground text-justify">
                We are committed to maintaining the highest level of expertise in our fields through continuous learning, ensuring our clients receive the most current and effective advice.
              </p>
            </div>

            <div className="p-8 flex flex-col items-center text-center border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Ensure Integrity and Quality</h3>
              <p className="text-muted-foreground text-justify">
                To conduct all business with the utmost integrity and to set the benchmark for quality in consulting services, ensuring trust and reliability in every engagement.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
