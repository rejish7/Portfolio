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
      // Canonical host: www permanently redirects to the apex domain so link
      // equity consolidates on one host instead of splitting across two.
      // (If the host/CDN already issues a temporary 307, replace it with a 301
      // in the Vercel/Cloudflare dashboard — this rule is the in-app fallback.)
      {
        source: "/:path*",
        destination: "https://rejishkhanal.com.np/:path*",
        permanent: true,
        has: [{ type: "host", value: "www.rejishkhanal.com.np" }],
      },
      // Legacy URL rename — kept as two rules so the empty-suffix case does not
      // produce a trailing-slash hop (which caused a double redirect chain).
      {
        source: "/technical-seo-specialist-nepal",
        destination: "/technical-seo-expert-nepal",
        permanent: true,
      },
      {
        source: "/technical-seo-specialist-nepal/:path+",
        destination: "/technical-seo-expert-nepal/:path+",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      {
        source: "/:all.(png|jpg|jpeg|webp|avif|svg|ico|woff2)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
    ];
  },
};

export default nextConfig;
