"use client";

import { HeartPulse, ShieldCheck, Cpu, LucideProps } from "lucide-react";
import type { ComponentType } from "react";

const icons: { [key: string]: ComponentType<LucideProps> } = {
  HeartPulse,
  ShieldCheck,
  Cpu,
};

type ServiceIconProps = {
  name: string;
  className?: string;
};

export function ServiceIcon({ name, className }: ServiceIconProps) {
  const Icon = icons[name];
  return Icon ? <Icon className={className} /> : null;
}
