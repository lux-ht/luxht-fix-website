import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output configuration for static export (Cloudflare Pages)
  output: 'export',

  // Base path for serving the site under /fix
  basePath: '/fix',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Trailing slashes for better compatibility
  trailingSlash: true,
};

export default nextConfig;
