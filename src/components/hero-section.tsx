"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import HeroAnimationClient from "./hero-animation-client";


export function HeroSection() {

  return (
    <section className="relative h-[70vh] md:h-[90vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        <HeroAnimationClient />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4 animate-fade-in-up animation-delay-200">Driving Excellence</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in-up animation-delay-400">
            Propel Your Organization Forward
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/90 animate-fade-in-up animation-delay-600">
            Tishha provides expert solutions in healthcare, project accreditation, and IT to help you achieve your strategic goals.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-800">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/services">
                Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
              <Link href="/contact">
                Schedule a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
  )
}
