import type { Metadata } from "next";
import { Kaushan_Script, Sen } from "next/font/google";
import "./globals.scss";

// import fonts
const kaushanScript = Kaushan_Script({
  variable: "--font-kaushan-script",
  weight: "400",
  subsets: ["latin"]
});

const sen = Sen({
  variable: "--font-sen",
  subsets: ["latin", "latin-ext"]
});

// site metadata
export const metadata: Metadata = {
  title: "CalTaiji",
  description: "The official Taiji club at UC Berkeley."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kaushanScript.variable} ${sen.variable}`}>
        {children}
      </body>
    </html>
  );
}
