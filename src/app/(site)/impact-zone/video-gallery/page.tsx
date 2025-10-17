
import { PlayCircle } from 'lucide-react';
import Image from 'next/image';

const videos = [
  { id: 1, title: 'Our CSR Journey', thumbnail: 'https://picsum.photos/seed/video1/600/400', hint: 'documentary film' },
  { id: 2, title: 'A Day at Tishha', thumbnail: 'https://picsum.photos/seed/video2/600/400', hint: 'corporate video' },
  { id: 3, title: 'Insights from our CEO', thumbnail: 'https://picsum.photos/seed/video3/600/400', hint: 'interview talk' },
  { id: 4, title: 'Client Success Story: HealthForward', thumbnail: 'https://picsum.photos/seed/video4/600/400', hint: 'client testimonial' },
];

export default function VideoGalleryPage() {
  return (
    <div className="bg-background text-foreground animate-fade-in">
      <section className="py-20 md:py-32 bg-card">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up">Video Gallery</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Watch our stories. See our impact, hear from our leaders, and learn about our culture through video.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div key={video.id} className="group relative h-72 rounded-lg overflow-hidden shadow-lg cursor-pointer animate-fade-in-up" style={{ animationDelay: `${200 * index}ms`}}>
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  data-ai-hint={video.hint}
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                  <PlayCircle className="h-16 w-16 text-white/80 group-hover:text-white transition-colors duration-300" />
                  <p className="mt-4 text-white text-xl font-bold">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
