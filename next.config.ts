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
      }
    ]
  }
};

export default nextConfig;
