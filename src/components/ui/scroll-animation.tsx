"use client";

import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import React from 'react';

type AnimationType = 
  | 'fade-in' 
  | 'fade-in-up' 
  | 'slide-in-from-left' 
  | 'slide-in-from-right' 
  | 'zoom-in';

type ScrollAnimationProps = {
  children: React.ReactNode;
  animation: AnimationType;
  delay?: number;
  className?: string;
};

export function ScrollAnimation({ 
  children, 
  animation, 
  delay = 0, 
  className 
}: ScrollAnimationProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationClass = `animate-${animation}`;

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0',
        inView ? `animate-in ${animationClass}` : '',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
