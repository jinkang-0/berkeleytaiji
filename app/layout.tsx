import type { Metadata, Viewport } from "next";
import { Kaushan_Script, Sen } from "next/font/google";
import "./globals.scss";
import CONFIG from "@/data/config";
import { jsonLd } from "@/data/json-ld";
import ProgressBarProvider from "@/components/ui/progress-bar";
import { GoogleOAuthProvider } from "@react-oauth/google";

// ensure environmental variables are imported
if (!process.env.AUTH_GOOGLE_ID)
  throw new Error(
    "Google OAuth Client ID not included in environment variables."
  );

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
    "CalTaiji",
    "Berkeley",
    "Berkeley Taiji",
    "Taiji",
    "Tai Chi",
    "UC Berkeley",
    "Berkeley",
    "Martial Arts",
    "Chinese Martial Arts",
    "Kungfu",
    "kung fu",
    "UCMAP",
    "UC Martial Arts Program",
    "Club"
  ],
  metadataBase: new URL(CONFIG.siteUrl),
  openGraph: {
    siteName: CONFIG.siteName,
    title: CONFIG.siteName,
    description: CONFIG.siteDescription,
    url: CONFIG.siteUrl,
    type: "website",
    locale: "en_US"
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
        <GoogleOAuthProvider clientId={process.env.AUTH_GOOGLE_ID || ""}>
          <ProgressBarProvider>{children}</ProgressBarProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
