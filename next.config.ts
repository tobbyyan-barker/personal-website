import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  images: {
    unoptimized: isGithubPages,
  },
  basePath: isGithubPages ? "/personal-website" : "",
  assetPrefix: isGithubPages ? "/personal-website/" : "",
  trailingSlash: isGithubPages,
};

export default nextConfig;
