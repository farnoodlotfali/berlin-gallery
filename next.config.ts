import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/cars/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
