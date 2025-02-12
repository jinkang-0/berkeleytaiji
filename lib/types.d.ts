import { StaticImageData } from "next/image";

export interface Event {
  name: string;
  date: string;
  from: string;
  to: string;
  location: string;
}

export interface GalleryItem {
  image: StaticImageData;
  caption: string;
}

export interface Form {
  name: string;
  chinese: string;
  link: string;
}

export type Breakpoint = "sm" | "md" | "lg" | "xl";
