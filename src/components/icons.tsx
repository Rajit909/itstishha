import React from 'react';

export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <text x="0" y="28" fontFamily="PT Sans, sans-serif" fontSize="24" fontWeight="bold" fill="url(#logo-gradient)">
      Tishha
    </text>
  </svg>
);