
import { School, Mic, BookOpen } from 'lucide-react';
import Image from 'next/image';

export default function AcademicEventsPage() {
  return (
    <div className="bg-background text-foreground animate-fade-in">
      <section className="py-20 md:py-32 bg-card">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up">Academic Events</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Fostering knowledge and innovation by engaging with the academic community through conferences, seminars, and workshops.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl md:order-last animate-fade-in-right">
              <Image src="https://picsum.photos/seed/academic/800/600" alt="Academic Event" fill className="object-cover" data-ai-hint="conference presentation" />
            </div>
            <div className="md:order-first animate-fade-in-left">
              <h2 className="text-3xl font-bold mb-4">Bridging Industry and Academia</h2>
              <p className="text-lg text-muted-foreground">
                We are committed to nurturing the next generation of leaders and innovators. Tishha actively participates in and organizes academic events to share industry insights, foster research, and promote continuous learning.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <Mic className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Guest Lectures & Seminars</h3>
                    <p className="text-muted-foreground">Our experts regularly speak at universities and colleges, sharing practical knowledge and industry trends with students.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <School className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">University Partnerships</h3>
                    <p className="text-muted-foreground">We collaborate with academic institutions on research projects, curriculum development, and internship programs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Workshops & Training</h3>
                    <p className="text-muted-foreground">We conduct workshops on specialized topics, providing hands-on training to students and faculty.</p>
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
