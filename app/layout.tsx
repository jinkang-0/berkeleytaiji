import type { Metadata, Viewport } from "next";
import { Kaushan_Script, Sen } from "next/font/google";
import ProgressBar from "@/components/ui/progress-bar";
import Hero from "@/components/ui/hero";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import "./globals.scss";
import CONFIG from "@/data/config";
import { jsonLd } from "@/data/json-ld";

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
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#282b2f"
};

export const metadata: Metadata = {
  title: CONFIG.siteName,
  description: CONFIG.siteDescription,
  keywords: [
    "Taiji",
    "Tai Chi",
    "UC Berkeley",
    "Berkeley",
    "Martial Arts",
    "Chinese Martial Arts",
    "Kungfu",
    "UCMAP",
    "UC Martial Arts Program",
    "Club"
  ],
  authors: [
    {
      name: "jinkang-0",
      url: "https://jfang.dev"
    }
  ],
  creator: "jinkang-0",
  metadataBase: new URL(CONFIG.siteUrl),
  openGraph: {
    siteName: CONFIG.siteName,
    title: CONFIG.siteName,
    description: CONFIG.siteDescription,
    url: CONFIG.siteUrl,
    type: "website",
    locale: "en_US"
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${kaushanScript.variable} ${sen.variable}`}>
        <ProgressBar />
        <Hero />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
