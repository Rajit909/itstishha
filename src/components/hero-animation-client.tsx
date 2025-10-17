
"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const HeroAnimation = dynamic(() => import('@/components/hero-animation'), { ssr: false });

export default function HeroAnimationClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <>{isClient && <HeroAnimation />}</>;
}
