
"use client";

import React, { useEffect, useCallback, useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);


  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') onNext();
    else if (e.key === 'ArrowLeft') onPrev();
    else if (e.key === 'Escape') onClose();
  }, [onNext, onPrev, onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    // Reset zoom and position when image changes
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [selectedIndex]);
  
  const selectedImage = images[selectedIndex];

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(prev => Math.min(prev * 1.2, 3));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(prev => {
      const newScale = Math.max(prev / 1.2, 1);
      if (newScale === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return newScale;
    });
  };
  
  const handleResetZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (scale > 1) {
      e.stopPropagation();
      setIsDragging(true);
      setStartPos({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && scale > 1) {
      e.stopPropagation();
      setPosition({
        x: e.clientX - startPos.x,
        y: e.clientY - startPos.y
      });
    }
  };

  const onMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDragging(false);
  };
  
  if (!selectedImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {/* Controls */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={handleZoomIn} className="h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20"><ZoomIn className="h-6 w-6" /></Button>
            <Button variant="ghost" size="icon" onClick={handleZoomOut} className="h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20"><ZoomOut className="h-6 w-6" /></Button>
            <Button variant="ghost" size="icon" onClick={handleResetZoom} className="h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20"><RotateCw className="h-5 w-5" /></Button>
            <Button variant="ghost" size="icon" onClick={onClose} className="h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20"><X className="h-6 w-6" /></Button>
        </div>
        
        <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-2 sm:left-4 z-10 h-12 w-12 rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Previous image">
          <ArrowLeft className="h-6 w-6" />
        </Button>

        {/* Image Content */}
        <motion.div
          key={selectedIndex}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn("relative w-full max-w-4xl h-full max-h-[90vh] p-4 flex items-center justify-center", scale > 1 ? 'cursor-grab' : 'cursor-auto', isDragging ? 'cursor-grabbing' : '')}
          onClick={(e) => e.stopPropagation()}
          onMouseDown={onMouseDown}
          onDoubleClick={(e) => { e.stopPropagation(); handleResetZoom(e); }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <motion.div
              ref={imageRef}
              className="relative w-full h-full"
              style={{
                scale: scale,
                translateX: position.x,
                translateY: position.y,
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
                draggable={false}
              />
            </motion.div>
          </div>
        </motion.div>

        <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-2 sm:right-4 z-10 h-12 w-12 rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Next image">
          <ArrowRight className="h-6 w-6" />
        </Button>
      </motion.div>
    </AnimatePresence>
  );
}
