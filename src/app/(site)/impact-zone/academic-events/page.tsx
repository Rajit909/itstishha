"use client";

import { School, Mic, BookOpen } from "lucide-react";
import Image from "next/image";

export default function AcademicEventsPage() {
  return (
    <div className="bg-background text-foreground animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-card text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up">
            Academic Events
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Empowering Healthcare, Inspiring Change — Through our CSR
            initiative <strong>TISHHA CARES</strong>, we aim to strengthen the
            healthcare ecosystem by bridging academic and practical learning
            across India.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl md:order-last animate-fade-in-right">
              <Image
                src="/carousel-img/sliderone.jpeg"
                alt="Academic Event"
                fill
                className="object-cover"
              />
            </div>

            <div className="md:order-first animate-fade-in-left">
              <h2 className="text-3xl font-bold mb-4">
                Building a Resilient Healthcare Future
              </h2>
              <p className="text-lg text-muted-foreground text-justify">
                At <strong>TISHHA Consultants LLP</strong>, we believe that the
                foundation of a resilient and progressive healthcare system lies
                in continuous academic engagement, practical learning, and
                leadership development. Through{" "}
                <strong>TISHHA CARES</strong>, we curate academic events that
                foster knowledge-sharing, enhance competencies, and inspire
                excellence among healthcare professionals and students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Offerings */}
      <section className="py-20 bg-muted/20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Key Offerings
          </h2>

          <p className="text-muted-foreground text-lg text-center max-w-4xl mx-auto mb-12">
            Our academic events span across all healthcare disciplines for
            Students and Professionals with a special focus on Medical (both
            Allopathic & AYUSH), Nursing, Paramedical Sciences, Hospital
            Management, Pharmacy, and Allied Health — particularly in Tier 2 &
            Tier 3 cities of India.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-2xl shadow-md hover:shadow-lg transition-all">
              <Mic className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold text-xl mb-2">
                Quizzes & Debate Competitions
              </h3>
              <p className="text-muted-foreground">
                Designed to test knowledge, critical thinking, and presence of
                mind in clinical and administrative contexts.
              </p>
            </div>

            <div className="p-6 bg-card rounded-2xl shadow-md hover:shadow-lg transition-all">
              <BookOpen className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold text-xl mb-2">
                Poster & Research Paper Presentations
              </h3>
              <p className="text-muted-foreground">
                Promoting scientific thinking, innovation, and presentation
                skills among emerging healthcare leaders.
              </p>
            </div>

            <div className="p-6 bg-card rounded-2xl shadow-md hover:shadow-lg transition-all">
              <School className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold text-xl mb-2">Academic Programs</h3>
              <p className="text-muted-foreground">
                Structured programs connecting theory to practice through
                webinars, workshops, and symposiums.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Academic Programs
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-card rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Webinars, Seminars & Symposiums
              </h3>
              <p className="text-muted-foreground">
                Regular knowledge-sharing sessions on healthcare quality,
                accreditation, leadership, and clinical best practices.
              </p>
            </div>

            <div className="p-6 bg-card rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Workshops & Hands-On Training
              </h3>
              <p className="text-muted-foreground">
                Focused on NABH compliance, patient safety, infection control,
                soft skills, and real-world hospital scenarios.
              </p>
            </div>

            <div className="p-6 bg-card rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                State & National Conferences
              </h3>
              <p className="text-muted-foreground">
                Large-scale academic gatherings featuring expert panels, paper
                presentations, awards, and networking opportunities.
              </p>
            </div>

            <div className="p-6 bg-card rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                AI-Proctored Exams & Scholar Hunt Tests
              </h3>
              <p className="text-muted-foreground">
                Competitive platforms at national and state levels recognizing
                top healthcare students and future leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            All events under <strong>TISHHA CARES</strong> are conducted either
            free or at a highly subsidized cost, making them accessible to
            institutions and professionals in underserved areas. A structured
            annual academic calendar ensures consistency — with events organized
            at college, city, district, divisional, and state levels.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-6">
            Participation is recognized through{" "}
            <strong>certificates, medals, cash prizes,</strong> and{" "}
            <strong>scholarships</strong>, celebrating excellence and inspiring
            lifelong learning.
          </p>
        </div>
      </section>
    </div>
  );
}
