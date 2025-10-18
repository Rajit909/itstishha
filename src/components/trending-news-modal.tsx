"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";

export function TrendingNewsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedTishhaSite");
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("hasVisitedTishhaSite", "true");
      }, 1000); // Open modal after 1 second
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubscribe = () => {
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our trending news.",
    });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        <div className="relative h-48 w-full">
            <Image 
                src="https://picsum.photos/seed/news/500/300"
                alt="Trending News"
                fill
                className="object-cover"
                data-ai-hint="news article"
            />
        </div>
        <div className="p-6">
            <DialogHeader>
            <DialogTitle>Trending News</DialogTitle>
            <DialogDescription>
                Stay updated with the latest insights and trends from our experts.
            </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 my-4">
            <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold">The Future of AI in Healthcare</h4>
                <p className="text-sm text-muted-foreground">
                Discover how artificial intelligence is revolutionizing patient diagnostics and treatment plans.
                </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold">Navigating New Accreditation Standards</h4>
                <p className="text-sm text-muted-foreground">
                    Our latest guide helps you understand and prepare for the upcoming changes in industry accreditation.
                </p>
            </div>
            </div>
            <div className="mt-4 flex flex-col gap-4">
                <Input type="email" placeholder="Enter your email to subscribe" />
                <Button onClick={handleSubscribe}>Subscribe</Button>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
