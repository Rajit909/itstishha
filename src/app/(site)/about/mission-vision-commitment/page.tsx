
import { Eye, Rocket, CheckCircle } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

export default function MissionPage() {
  const missionImage = PlaceHolderImages.find(p => p.id === 'mission-image');
  const visionImage = PlaceHolderImages.find(p => p.id === 'vision-image');
  const commitmentImage = PlaceHolderImages.find(p => p.id === 'commitment-image');

  const principles = [
    {
      title: "Our Mission",
      description: "To empower organizations to navigate complexity and achieve sustainable growth by providing unparalleled expertise and fostering a culture of continuous improvement and innovation. We are dedicated to delivering measurable results that make a lasting impact.",
      icon: <Rocket className="h-10 w-10" />,
      image: missionImage
    },
    {
      title: "Our Vision",
      description: "To be the most trusted and sought-after consultancy partner, recognized for our strategic excellence, innovative solutions, and unwavering commitment to client success. We aspire to be at the forefront of industry transformation.",
      icon: <Eye className="h-10 w-10" />,
      image: visionImage
    },
    {
      title: "Our Commitment",
      description: "We are committed to excellence, integrity, and transparency in everything we do. Our clients' success is our ultimate measure of success, and we dedicate ourselves to building strong, lasting partnerships based on trust and mutual respect.",
      icon: <CheckCircle className="h-10 w-10" />,
      image: commitmentImage
    }
  ];

  return (
    <div className="bg-background text-foreground animate-fade-in">
       <section className="py-20 md:py-24 bg-gradient-to-br from-lightbluebg via-lightgreenbg to-blue-200">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up text-darkbg">Guiding Principles</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            The foundation of our purpose and the values that shape our every action.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={principle.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <Card className="group relative overflow-hidden rounded-2xl shadow-lg h-[450px] transition-all duration-300 hover:shadow-2xl">
                    {principle.image && (
                        <Image
                            src={principle.image.imageUrl}
                            alt={principle.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            data-ai-hint={principle.image.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                        <div className="mb-4 text-darkbg bg-background/20 backdrop-blur-sm rounded-full h-16 w-16 flex items-center justify-center border border-primary/30">
                            {principle.icon}
                        </div>
                        <h2 className="text-3xl font-bold">{principle.title}</h2>
                        <p className="mt-2 text-primary-foreground/90 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500">
                            {principle.description}
                        </p>
                    </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
