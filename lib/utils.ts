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
