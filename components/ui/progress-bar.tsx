"use client";

import { ProgressProvider } from "@bprogress/next/app";

export default function ProgressBarProvider({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProgressProvider
      height="4px"
      color="#dfb86a"
      options={{ showSpinner: false }}
    >
      {children}
    </ProgressProvider>
  );
}
