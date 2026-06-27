import { Music, Headphones, Disc3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ItemsType = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
};

export const Items: ItemsType[] = [
  {
    icon: Music,
    title: "Curated sound",
    subtitle: "Every record is chosen with intention.",
  },
  {
    icon: Headphones,
    title: "Deep listening",
    subtitle: "Music deserves your full attention.",
  },
  {
    icon: Disc3,
    title: "Analog ritual",
    subtitle: "The act of playing a vinyl matters.",
  },
];