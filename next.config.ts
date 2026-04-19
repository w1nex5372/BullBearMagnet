import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/config",
        destination: "https://admin.aidra.lt/api/config",
      },
      {
        source: "/widget-ui.html",
        destination: "https://admin.aidra.lt/widget-ui.html",
      },
    ];
  },
};

export default nextConfig;
