import { getProjects } from "@/lib/data";
import { projectCategories } from "@/lib/project-categories";
import { ProjectList } from "./components/project-list";

export default async function ProjectsPage() {
  const projects = await getProjects();
  const categories = [{ slug: "all", title: "All" }, ...projectCategories];

  return (
    <>
      <section className="py-20 md:py-32 bg-card animate-fade-in">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up">Our Success Stories</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Explore how we've helped our clients overcome challenges and achieve their goals through strategic partnership and expert execution.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <ProjectList projects={projects} categories={categories} />
        </div>
      </section>
    </>
  );
}
