import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ['image/webp', 'image/avif' ], // AVIF first, fallback to WebP
  },
};



export default nextConfig;
