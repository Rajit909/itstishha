
import { BrainCircuit, Handshake, Lightbulb } from 'lucide-react';

export default function PhilosophyPage() {

  return (
    <div className="bg-background text-foreground animate-fade-in">
      <section className="py-20 md:py-32 bg-gradient-to-br from-lightbluebg via-lightgreenbg to-blue-200">
        <div className="container text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up text-darkbg">Our Philosophy</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Our approach is built on a foundation of collaboration, strategic insight, and a relentless pursuit of innovation to drive transformative results for our clients.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-8 border rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Handshake className="h-12 w-12 mx-auto text-darkbg mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-darkbg">Collaboration</h2>
              <p className="text-muted-foreground text-justify">
                We believe in the power of partnership. By working closely with our clients, we become an extension of their team, aligning our goals and strategies to achieve shared success. True breakthroughs come from collective effort.
              </p>
            </div>
            <div className="p-8 border rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <BrainCircuit className="h-12 w-12 mx-auto text-darkbg mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-darkbg">Strategic Insight</h2>
              <p className="text-muted-foreground text-justify">
                Data drives our decisions. We combine deep industry knowledge with rigorous analysis to provide clear, actionable insights. Our strategic guidance empowers clients to navigate complexity with confidence and precision.
              </p>
            </div>
            <div className="p-8 border rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <Lightbulb className="h-12 w-12 mx-auto text-darkbg mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-darkbg">Innovation</h2>
              <p className="text-muted-foreground text-justify">
                The status quo is our starting point, not our destination. We constantly explore emerging trends and technologies to develop forward-thinking solutions that not only solve today’s challenges but also anticipate tomorrow’s opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
