import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rejishkhanal.com.np",
      },
      {
        protocol: "https",
        hostname: "*.rejishkhanal.com.np",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/technical-seo-specialist-nepal/:path*",
        destination: "/technical-seo-expert-nepal/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
