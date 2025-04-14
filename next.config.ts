import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "www.ocf.berkeley.edu",
        port: "",
        pathname: "/hosting-logos/*"
      }
    ]
  }
};

export default nextConfig;
