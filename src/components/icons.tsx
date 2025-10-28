import React from 'react';
import Image from 'next/image';

export const Logo = (props: Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>) => (
    <Image 
        src="/assets/logo.png" 
        alt="Tishha Consultants LLP Logo"
        width={70}
        height={70}
        {...props}
    />
);
