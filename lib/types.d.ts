import type { StaticImageData } from "next/image";
import type {
  DefaultSchemaOptions,
  Schema as SchemaType,
  Types
} from "mongoose";
import { getBlogByBlogId } from "@/api/db";

// types for home page data
interface Event {
  name: string;
  date: string;
  from: string;
  to: string;
  location: string;
  attachments: string[];
}

interface GalleryItem {
  image: StaticImageData;
  caption: string;
}

interface ScheduleItem {
  Day: string;
  From: string;
  To: string;
  Location: string;
  Alternative?: string;
}

// database objects

type PopulatedBlog = Awaited<ReturnType<typeof getBlogByBlogId>>[0];

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

type Prettify<T> = {} & {
  [K in keyof T]: T[K];
};

type Serialize<T> = {
  [K in keyof T]: T[K] extends Types.ObjectId
    ? string
    : T[K] extends Array<infer U>
    ? Array<Serialize<U>>
    : T[K] extends object
    ? Serialize<T[K]>
    : T[K];
};
