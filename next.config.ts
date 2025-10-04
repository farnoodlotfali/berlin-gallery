import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    localPatterns: [
      {
        pathname: "/cars/**",
        search: "",
      },
    ],
  },
  async rewrites() {
    return [{ source: "/api/:path*", destination: "http://localhost:3034/:path*" }];
  },
};

export default nextConfig;
