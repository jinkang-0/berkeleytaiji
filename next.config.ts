import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.usercontent.google.com",
        pathname: "/download"
      }
    ]
  }
};

export default nextConfig;
