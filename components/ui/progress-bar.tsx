"use client";

import { AppProgressBar } from "next-nprogress-bar";

export default function ProgressBar() {
  return (
    <AppProgressBar
      height="2px"
      color="#ffffff"
      options={{ showSpinner: false }}
    />
  );
}
