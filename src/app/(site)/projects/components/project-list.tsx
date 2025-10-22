
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/types";

type ProjectCategory = {
    slug: string;
    title: string;
}

type ProjectListProps = {
  projects: Project[];
  categories: ProjectCategory[];
};

export function ProjectList({ projects, categories }: ProjectListProps) {
  const searchParams = useSearchParams();
  const initialStatus = searchParams.get("status") || "all";
  const [activeCategory, setActiveCategory] = useState(initialStatus);

  useEffect(() => {
    setActiveCategory(initialStatus);
  }, [initialStatus]);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) =>
          project.status.toLowerCase() === activeCategory
        );

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-2 mb-12 animate-fade-in-up">
        {categories.map((category) => (
          <Button
            key={category.slug}
            variant={activeCategory === category.slug ? "default" : "outline"}
            onClick={() => setActiveCategory(category.slug)}
            className="transition-all duration-200"
          >
            {category.title}
          </Button>
        ))}
      </div>

      <motion.div
        layout
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => {
            const projectImage = PlaceHolderImages.find((p) => p.id === project.image);
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="group flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                  {projectImage && (
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={projectImage.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={projectImage.imageHint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <p className="text-sm font-semibold text-primary">{project.client}</p>
                    <CardTitle className="text-2xl leading-tight h-16">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-3">{project.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" asChild className="p-0 h-auto">
                      <Link href={`/projects/${project.slug}`}>
                        Read Project Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
