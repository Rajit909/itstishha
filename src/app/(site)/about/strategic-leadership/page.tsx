
import { getStratergicPartners } from "@/lib/data";
import { StrategicLeadershipList } from "./components/strategic-leadership-list";

export default async function StrategicLeadershipPage() {
  const partners = await getStratergicPartners();

  return (
    <div className="bg-background text-foreground animate-fade-in">
      {/* Header Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-lightbluebg via-lightgreenbg to-blue-200 text-center">
        <div className="container px-4 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up text-darkbg">
            Strategic Leadership
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Meet the distinguished leaders providing strategic guidance to our organization.
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto space-y-16">
          <StrategicLeadershipList partners={partners} />
        </div>
      </section>
    </div>
  );
}
