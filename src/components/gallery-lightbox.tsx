
"use client";

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

type GalleryLightboxProps = {
  imageUrl: string;
  onClose: () => void;
};

export function GalleryLightbox({ imageUrl, onClose }: GalleryLightboxProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Main Content: Stop propagation to prevent closing when clicking content */}
        <motion.div
          initial={{ scale: 0.9, y: -20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl h-full max-h-[90vh] p-4 flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()} // This is crucial
        >
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute -top-2 -right-2 z-10 h-10 w-10 rounded-full bg-white/20 text-white hover:bg-white/30"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>

          {/* Image Container */}
          <div className="relative w-full h-full">
            <Image
              src={imageUrl}
              alt="Enlarged gallery image"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
