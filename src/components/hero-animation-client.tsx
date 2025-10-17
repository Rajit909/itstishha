
"use client";

import dynamic from "next/dynamic";

const HeroAnimation = dynamic(() => import('@/components/hero-animation'), { ssr: false });

export default function HeroAnimationClient() {
  return <HeroAnimation />;
}
