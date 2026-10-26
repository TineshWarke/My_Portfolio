const staticCache = [
  {
    key: "Cache-Control",
    value: "public, max-age=604800, stale-while-revalidate=86400",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  async headers() {
    return ["videos", "logos", "icons", "institution", "images", "resume"].map(
      (dir) => ({ source: `/${dir}/:path*`, headers: staticCache })
    );
  },
};

module.exports = nextConfig;
