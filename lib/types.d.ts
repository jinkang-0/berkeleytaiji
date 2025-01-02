import { StaticImageData } from "next/image";

export interface Event {
  month: string;
  date: string;
  name: string;
  time: string;
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
