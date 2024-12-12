import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: process.env.CI ? true : false,
  },
  eslint: {
    ignoreDuringBuilds: process.env.CI ? true : false,
  },
};

export default nextConfig;
 