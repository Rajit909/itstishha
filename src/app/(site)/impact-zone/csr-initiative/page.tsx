
"use client";

import { HandHeart, Users, Leaf } from "lucide-react";
import Image from "next/image";

export default function CsrInitiativePage() {
  return (
    <div className="bg-background text-foreground animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-lightbluebg via-lightgreenbg to-blue-200">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up text-darkbg">
            CSR Initiative
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            At TISHHA Consultants LLP, Corporate Social Responsibility is not just a commitment—
            it’s a mission to empower the healthcare ecosystem by bridging critical gaps in skills,
            knowledge, and leadership across all strata of healthcare delivery.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-lightbluebg">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl animate-fade-in-left">
              <Image
                src="/assets/csr.jpg"
                alt="CSR Initiative"
                fill
                className="object-cover"
              />
            </div>
            <div className="animate-fade-in-right">
              <h2 className="text-3xl font-bold mb-4 text-darkbg">Empowering Healthcare, Inspiring Change</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We believe in nurturing the next generation of healthcare leaders through CSR-driven
                academic and professional initiatives that reach across rural and urban India.
              </p>
              <p className="text-lg text-muted-foreground text-justify">
                Whether it’s a village-level health awareness drive, a nursing leadership bootcamp, or
                a national-level academic conclave — TISHHA Cares is transforming healthcare, one step
                at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Students & Aspiring Professionals */}
      <section className="py-16 md:py-24 bg-lightgreenbg">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center text-darkbg">
            For Students & Aspiring Professionals
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-center mb-10">
            Through our CSR-driven academic initiatives, we engage students from diverse healthcare
            disciplines—MBBS, BDS, BAMS, BHMS, B.Sc. Nursing, GNM, Pharmacy, Physiotherapy, Lab
            Technology, Radiology, and Hospital Administration—across rural and urban India.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-card shadow-md">
              <HandHeart className="h-10 w-10 text-darkbg mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-darkbg">Skill Development Workshops</h3>
              <p className="text-muted-foreground">
                Hands-on sessions to enhance clinical, technical, and leadership skills.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card shadow-md">
              <Users className="h-10 w-10 text-darkbg mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-darkbg">Leadership Bootcamps</h3>
              <p className="text-muted-foreground">
                Encouraging teamwork, problem-solving, and compassionate healthcare leadership.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card shadow-md">
              <Leaf className="h-10 w-10 text-darkbg mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-darkbg">Academic Engagement</h3>
              <p className="text-muted-foreground">
                Webinars, debates, quizzes, and recognition awards fostering innovation and merit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Working Professionals */}
      <section className="py-16 md:py-24 bg-lightbluebg">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center text-darkbg">
            For Working Professionals & Support Staff
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-center mb-10">
            TISHHA’s CSR arm actively contributes to upskilling and re-skilling of healthcare
            professionals including Doctors, Nurses, Hospital Administrators, Technicians,
            Paramedical Staff, and Frontline Personnel.
          </p>

          <ul className="space-y-6 max-w-4xl mx-auto">
            <li>
              <h3 className="font-semibold text-xl text-darkbg">Continuing Professional Education (CPE)</h3>
              <p className="text-muted-foreground">
                Enhancing knowledge and clinical excellence across healthcare roles.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-xl text-darkbg">
                Healthcare Quality & NABH/NABL Sensitization Programs
              </h3>
              <p className="text-muted-foreground">
                Promoting patient safety, accreditation readiness, and quality culture.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-xl text-darkbg">
                Leadership Development in Nursing & Non-Medical Roles
              </h3>
              <p className="text-muted-foreground">
                Building confidence and decision-making capabilities in healthcare managers.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-xl text-darkbg">
                Interdisciplinary Conferences & Clinical Case Discussions
              </h3>
              <p className="text-muted-foreground">
                Sharing real-world experiences and fostering collaborative problem-solving.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-xl text-darkbg">Community Health Awareness Drives</h3>
              <p className="text-muted-foreground">
                Empowering communities through first-aid education and preventive health programs.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-16 md:py-24 bg-lightgreenbg">
        <div className="container text-center max-w-5xl">
          <h2 className="text-3xl font-bold mb-6 text-darkbg">
            Transforming Healthcare, One Step at a Time
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-justify">
            As a part of our vision, we collaborate with academic institutions, hospitals,
            government agencies, and NGOs to expand the reach and impact of our CSR programs.
          </p>
          <p className="text-lg text-muted-foreground text-justify">
            Whether it’s a village-level health awareness campaign, a state-level nursing quiz,
            or a national leadership conclave, <strong>TISHHA Cares</strong> is committed to building
            a healthier and more empowered India.
          </p>
        </div>
      </section>
    </div>
  );
}
