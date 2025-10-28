
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { GalleryLightbox } from '@/components/gallery-lightbox';

const galleryImages = [
  { id: 1, src: '/gallery/conf.jpg', alt: 'National Conference on Nursing Leadership & Excellence 2025', hint: 'competetion' },
  { id: 2, src: '/gallery/confe.jpg', alt: 'National Conference on Nursing Leadership & Excellence 2025', hint: 'team planting' },
  { id: 3, src: '/gallery/confel.jpg', alt: 'National Conference on Nursing Leadership & Excellence 2025' },
  { id: 4, src: '/gallery/conff.jpg', alt: 'National Conference on Nursing Leadership & Excellence 2025', hint: 'team building' },
  { id: 5, src: '/gallery/conffi.jpg', alt: 'National Conference on Nursing Leadership & Excellence 2025', hint: 'office celebration' },
  { id: 7, src: '/gallery/confn.jpg', alt: 'National Conference on Nursing Leadership & Excellence 2025', hint: 'competetion' },
  { id: 8, src: '/gallery/confo.jpg', alt: 'National Conference on Nursing Leadership & Excellence 2025', hint: 'team planting' },
  { id: 9, src: '/gallery/confs.jpg', alt: 'Academic seminar with students', hint: 'university lecture' },
  { id: 10, src: '/gallery/confse.jpg', alt: 'National Conference on Nursing Leadership & Excellence 2025', hint: 'team building' },
  { id: 11, src: '/gallery/confsixt.jpg', alt: 'National Conference on Nursing Leadership & Excellence 2025', hint: 'office celebration' },
  { id: 12, src: '/gallery/conft.jpg', alt: 'National Conference on Nursing Leadership & Excellence 2025', hint: 'tech workshop' },
  { id: 13, src: '/gallery/confth.jpg', alt: 'National Conference on Nursing Leadership & Excellence 2025', hint: 'competetion' },
  { id: 14, src: '/gallery/confthr.jpg', alt: 'National Conference on Nursing Leadership & Excellence 2025', hint: 'team planting' },
  { id: 15, src: '/gallery/conftw.jpg', alt: 'Academic seminar with students', hint: 'university lecture' },
  { id: 33, src: '/gallery/conte.jpg', alt: 'National Conference on Nursing Leadership & Excellence 2025', hint: 'team building' },
  { id: 16, src: '/gallery/gallery-imgo.jpg', alt: 'Quiz Competition Certificate Distribution Ceremony', hint: 'office celebration' },
  { id: 17, src: '/gallery/galleryei.jpeg', alt: 'Quiz Competition Certificate Distribution Ceremony', hint: 'tech workshop' },
  { id: 18, src: '/gallery/galleryf.jpeg', alt: 'Quiz Competition Certificate Distribution Ceremony', hint: 'office celebration' },
  { id: 19, src: '/gallery/galleryel.jpeg', alt: 'Quiz Competition Certificate Distribution Ceremony', hint: 'tech workshop' },
  { id: 20, src: '/gallery/galleryni.jpeg', alt: 'Quiz Competition Certificate Distribution Ceremony', hint: 'office celebration' },
  { id: 21, src: '/gallery/galleryo.jpeg', alt: 'Quiz Competition Certificate Distribution Ceremony', hint: 'tech workshop' },
  { id: 22, src: '/gallery/gallerys.jpeg', alt: 'Quiz Competition Certificate Distribution Ceremony', hint: 'office celebration' },
  { id: 23, src: '/gallery/galleryse.jpeg', alt: 'Quiz Competition Certificate Distribution Ceremony', hint: 'tech workshop' },
  { id: 24, src: '/gallery/galleryt.jpeg', alt: 'Quiz Competition Certificate Distribution Ceremony', hint: 'office celebration' },
  { id: 25, src: '/gallery/galleryte.jpeg', alt: 'Quiz Competition Certificate Distribution Ceremony', hint: 'tech workshop' },
  { id: 26, src: '/gallery/quizcomp.jpg', alt: 'Quiz Competition', hint: 'competetion' },
  { id: 27, src: '/gallery/quizevent.jpg', alt: 'Quiz Competition', hint: 'team planting' },
  { id: 28, src: '/gallery/quizz.jpg', alt: 'Academic seminar with students', hint: 'university lecture' },
  { id: 29, src: '/gallery/scholar.png', alt: 'The Night In Gale Scholar Hunt', hint: 'team building' },
  { id: 30, src: '/gallery/successp.jpg', alt: 'Nausarium- The Nursing Principal Submit', hint: 'office celebration' },
  { id: 31, src: '/gallery/party.jpg', alt: 'The Nursing Principal Submit', hint: 'tech workshop' },
  { id: 32, src: '/gallery/conffou.jpg', alt: 'The Nursing Principal Submit', hint: 'tech workshop' },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-background text-foreground animate-fade-in">
      <section className="py-20 md:py-32 bg-card">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up">Gallery</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            A glimpse into our world. See our team in action, our events, and our community initiatives.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="animate-fade-in-up group"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <Card className="overflow-hidden cursor-pointer">
                  <CardContent className="flex aspect-video items-center justify-center p-0 relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      data-ai-hint={image.hint}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-2 bg-black/50 text-white rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs font-semibold truncate">{image.alt}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <GalleryLightbox
          imageUrl={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}
