import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Включает ESLint только в development
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
