import React from 'react';

export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <text x="0" y="28" fontFamily="PT Sans, sans-serif" fontSize="24" fontWeight="bold" fill="hsl(var(--foreground))">
      Tishha
    </text>
  </svg>
);