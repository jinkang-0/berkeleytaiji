import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("http://www.ocf.berkeley.edu/hosting-logos/*")]
  }
};

export default nextConfig;
