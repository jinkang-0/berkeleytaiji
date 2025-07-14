import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "www.ocf.berkeley.edu",
        port: "",
        pathname: "/hosting-logos/*"
      },
      {
        protocol: "https",
        hostname: "drive.usercontent.google.com",
        pathname: "/download"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**/maxresdefault.jpg"
      }
    ]
  }
};

export default nextConfig;
