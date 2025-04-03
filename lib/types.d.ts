import { StaticImageData } from "next/image";
import type { DefaultSchemaOptions, Schema as SchemaType } from "mongoose";

export interface Event {
  name: string;
  date: string;
  from: string;
  to: string;
  location: string;
  attachments: string[];
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

export interface ScheduleItem {
  Day: string;
  From: string;
  To: string;
  Location: string;
  Alternative?: string;
}

// utility types

type ModelTypeFromSchema<S> = S extends SchemaType<unknown, infer Model>
  ? Model
  : never;

type TypeFromSchema<S> = S extends SchemaType<
  unknown,
  ModelTypeFromSchema<S>,
  object,
  object,
  object,
  object,
  DefaultSchemaOptions,
  infer DocType
>
  ? DocType
  : never;
