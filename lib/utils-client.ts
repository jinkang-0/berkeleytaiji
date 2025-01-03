"use client";

export const remToPx = (rem: number) => {
  if (typeof getComputedStyle === "undefined") return rem * 16;
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};
