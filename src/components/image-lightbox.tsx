
"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

type ImageItem = {
  src: string;
  alt: string;
};

type ImageLightboxProps = {
  images: ImageItem[];
  startIndex: number;
  onClose: () => void;
};

export function ImageLightbox({ images, startIndex, onClose }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [zoom, setZoom] = useState(1);
  const [direction, setDirection] = useState(0);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setZoom(1);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setZoom(1);
  }, [images.length]);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.5));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, handleNext, handlePrev]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '1000px' : '-1000px',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '1000px' : '-1000px',
      opacity: 0,
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Content Container - Prevents clicks from closing modal */}
      <div
        className="relative z-10 flex flex-col items-center justify-center w-full h-full"
      >
        {/* Image transition container */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={1200}
              height={800}
              className="object-contain max-w-[90vw] max-h-[80vh] transition-transform duration-300"
              style={{ transform: `scale(${zoom})` }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 hover:text-white"
            onClick={handleZoomIn}
          >
            <ZoomIn />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 hover:text-white"
            onClick={handleZoomOut}
          >
            <ZoomOut />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 hover:text-white"
            onClick={onClose}
          >
            <X />
          </Button>
        </div>

        {/* Navigation */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Button
            variant="ghost"
            size="icon"
            className="text-white h-12 w-12 hover:bg-white/20 hover:text-white"
            onClick={handlePrev}
          >
            <ChevronLeft size={32} />
          </Button>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <Button
            variant="ghost"
            size="icon"
            className="text-white h-12 w-12 hover:bg-white/20 hover:text-white"
            onClick={handleNext}
          >
            <ChevronRight size={32} />
          </Button>
        </div>

        {/* Caption */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center bg-black/30 px-4 py-2 rounded-lg">
          <p>{images[currentIndex].alt}</p>
          <p className="text-sm opacity-80">{currentIndex + 1} / {images.length}</p>
        </div>
      </div>
    </motion.div>
  );
}
