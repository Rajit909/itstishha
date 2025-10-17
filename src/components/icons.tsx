import React from 'react';
import Image from 'next/image';

export const Logo = (props: Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>) => (
    <Image 
        src="/logo.png" 
        alt="Tishha Consultants LLP Logo"
        width={40}
        height={40}
        {...props}
    />
);
