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
