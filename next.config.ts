import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Without this, Next blocks /_next/* dev assets when the dev server is
  // reached over the tailnet, so nothing hydrates and every animated element
  // stays stuck at its initial (invisible) state.
  allowedDevOrigins: ["mini.tailab7812.ts.net"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "3isexyxg2bd3whr8.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
