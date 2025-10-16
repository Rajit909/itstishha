"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setProgress(scrollPercent);

      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const circumference = 2 * Math.PI * 20; // 2 * pi * radius (20) of the circle
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={cn(
        "fixed bottom-8 right-8 z-50 transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <Button
        size="icon"
        onClick={scrollToTop}
        className="relative h-14 w-14 rounded-full shadow-2xl"
        aria-label="Scroll to top"
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="22"
            cy="22"
            r="20"
            stroke="hsl(var(--border))"
            strokeWidth="3"
          />
          <circle
            cx="22"
            cy="22"
            r="20"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 22 22)"
            strokeLinecap="round"
            className="transition-all duration-300"
          />
        </svg>
        <ArrowUp className="h-6 w-6" />
      </Button>
    </div>
  );
}
