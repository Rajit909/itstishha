
import Image from 'next/image';

const galleryImages = [
  { id: 1, src: 'https://picsum.photos/seed/gallery1/600/400', alt: 'Community health camp', hint: 'medical checkup' },
  { id: 2, src: 'https://picsum.photos/seed/gallery2/600/400', alt: 'Team volunteering for a tree plantation drive', hint: 'team planting' },
  { id: 3, src: 'https://picsum.photos/seed/gallery3/600/400', alt: 'Academic seminar with students', hint: 'university lecture' },
  { id: 4, src: 'https://picsum.photos/seed/gallery4/600/400', alt: 'Annual company retreat', hint: 'team building' },
  { id: 5, src: 'https://picsum.photos/seed/gallery5/600/400', alt: 'Celebrating a successful project launch', hint: 'office celebration' },
  { id: 6, src: 'https://picsum.photos/seed/gallery6/600/400', alt: 'Workshop on digital innovation', hint: 'tech workshop' },
];

export default function GalleryPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-32 bg-card">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Gallery</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A glimpse into our world. See our team in action, our events, and our community initiatives.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <div key={image.id} className="group relative h-72 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  data-ai-hint={image.hint}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-lg font-semibold">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
