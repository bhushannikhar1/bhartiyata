import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['via.placeholder.com', 'picsum.photos', 'dummyimage.com'], // Add placeholder image services here
  },
  typescript: {
    ignoreBuildErrors: true, // This will ignore TypeScript errors during the build process
  },
};

export default nextConfig;
