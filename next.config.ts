import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === "production";
const basePath = isGithubPages ? "/gusman-luxo" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
