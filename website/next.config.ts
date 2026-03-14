import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ignore typescript errors during build as requested to prioritize building
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
