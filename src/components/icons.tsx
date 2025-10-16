import React from 'react';

export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="200" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <style>
      {`
        .synergy-text { fill: hsl(var(--primary)); }
        .consult-text { fill: hsl(var(--foreground)); }
        @media (prefers-color-scheme: dark) {
          .consult-text { fill: hsl(var(--foreground)); }
        }
      `}
    </style>
    <text x="0" y="28" fontFamily="PT Sans, sans-serif" fontSize="24" fontWeight="bold" className="synergy-text">
      tishha
    </text>
    <text x="68" y="28" fontFamily="PT Sans, sans-serif" fontSize="24" className="consult-text">
      consultancy
    </text>
  </svg>
);
