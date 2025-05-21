import { Types } from "mongoose";
import { Serialize } from "./types";

/**
 * Get the month from a string of the format "Jan 1, 2025"
 */
export const getMonth = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("en", { month: "short" });
};

/**
 * Get the date from a string of the format "Jan 1, 2025"
 */
export const getDate = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.getDate();
};

export const getTime = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.getTime();
};

/**
 * Returns true if A comes before the date of B and time of T.
 * a: Date object
 * b: "Jan 1, 2024"
 * t: "11:00 PM"
 */
export const compareDate = (a: Date, b: string, t: string) => {
  const d = new Date(`${b} ${t}`);
  return a < d;
};

/**
 * Convert a string to a bool. Any capital variation of "false" will be false.
 * Anything else is true.
 */
export const toBool = (val: string) => {
  if (val.toUpperCase() === "FALSE") return false;
  return true;
};

/**
 * Get the embed link for a YouTube video.
 * Input 1: https://www.youtube.com/watch?v=fRA7bMWEpjo&t=1s
 * Input 2: https://youtu.be/fRA7bMWEpjo?si=YVnhxD_Dk2fbc31o
 * Input 3: https://www.youtube.com/embed/fRA7bMWEpjo?si=nZDt7KKhKbociiLQ
 */
export const getYTEmbed = (link: string) => {
  const url = new URL(link);

  let videoId: string | null = null;
  if (url.pathname.startsWith("/embed")) videoId = url.pathname.split("/")[2];
  if (url.pathname.startsWith("/watch")) videoId = url.searchParams.get("v");
  if (url.hostname === "youtu.be") videoId = url.pathname;

  if (!videoId) return "";
  return `https://www.youtube.com/embed/${videoId}?mute=1`;
};

/**
 * Get the file ID of a Google Drive file.
 * Input: https://drive.google.com/file/d/1nqCUGvWYzCA7sPHXtdphhiF4qt7fq-QJ/view
 * Output: d/1nqCUGvWYzCA7sPHXtdphhiF4qt7fq-QJ
 */
export const getFileId = (link: string) => {
  const url = new URL(link);
  if (url.hostname !== "drive.google.com") return "";
  if (!url.pathname.startsWith("/file/d/")) return "";
  return url.pathname.split("/")[3];
};

/**
 * Transform a Google Drive share link to a user content download link.
 * Input: https://drive.google.com/file/d/1nqCUGvWYzCA7sPHXtdphhiF4qt7fq-QJ/view
 * Output: https://drive.usercontent.google.com/download?id=1nqCUGvWYzCA7sPHXtdphhiF4qt7fq-QJ
 */
export const gDriveToDownload = (link: string) => {
  return `https://drive.usercontent.google.com/download?id=${getFileId(link)}`;
};

/**
 * Formats a list of strings into a grammatically correct sentence.
 *
 * formatList(["Apple"]) => "Apple"
 * formatList(["Apple", "Banana"]) => "Apple and Banana"
 * formatList(["Apple", "Banana", "Citrus"]) => "Apple, Banana, and Citrus"
 */
export const formatList = (items: string[], joinTerm = " and "): string => {
  if (items.length == 0) return "";
  if (items.length == 1) return items[0];
  if (items.length == 2) return items.join(joinTerm);

  const firstTerms = items.slice(0, items.length - 1).join(", ");
  const lastItem = items[items.length - 1];
  return `${firstTerms},${joinTerm}${lastItem}`;
};

export const serializeLeanDoc = <T>(
  doc: T
): T extends Types.ObjectId
  ? string
  : T extends Array<infer U>
  ? Array<Serialize<U>>
  : T extends object
  ? Serialize<T>
  : T => {
  if (doc instanceof Array) return doc.map((d) => serializeLeanDoc(d)) as never;

  if (doc instanceof Types.ObjectId) return doc.toString() as never;

  if (!(doc instanceof Date) && typeof doc === "object") {
    const result: Record<string, unknown> = {};
    for (const key in doc) {
      result[key] = serializeLeanDoc((doc as never)[key]);
    }
    return result as never;
  }

  return doc as never;
};
