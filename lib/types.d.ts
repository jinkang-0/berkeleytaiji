import { StaticImageData } from "next/image";

export interface Event {
  name: string;
  date: Date;
  from: Date;
  to: Date;
  location: string;
}

export interface CarouselItem {
  image: StaticImageData;
  caption: string;
}

export interface Form {
  name: string;
  chinese: string;
  link: string;
}

export type Breakpoint = "sm" | "md" | "lg" | "xl";
