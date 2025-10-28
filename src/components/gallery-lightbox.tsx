
"use client";

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Image = {
  src: string;
  alt: string;
}

type GalleryLightboxProps = {
  images: Image[];
  selectedIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function GalleryLightbox({ images, selectedIndex, onClose, onPrev, onNext }: GalleryLightboxProps) {
  
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      onNext();
    } else if (e.key === 'ArrowLeft') {
      onPrev();
    } else if (e.key === 'Escape') {
      onClose();
    }
  }, [onNext, onPrev, onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
  
  const selectedImage = images[selectedIndex];

  if (!selectedImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Previous Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-2 sm:left-4 z-10 h-12 w-12 rounded-full bg-white/10 text-white hover:bg-white/20"
          aria-label="Previous image"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>

        {/* Content */}
        <motion.div
          key={selectedIndex}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl h-full max-h-[90vh] p-4 flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()} 
        >
          <div className="relative w-full h-full">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </motion.div>

        {/* Next Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-2 sm:right-4 z-10 h-12 w-12 rounded-full bg-white/10 text-white hover:bg-white/20"
          aria-label="Next image"
        >
          <ArrowRight className="h-6 w-6" />
        </Button>

         {/* Close Button */}
         <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </Button>

      </motion.div>
    </AnimatePresence>
  );
}
