import type { NextConfig } from "next";
import createMDX from "@next/mdx";

// ─── MDX configuration ────────────────────────────────────────────────────────
const withMDX = createMDX({
  options: {
    // remarkPlugins and rehypePlugins added in Day 5 when MDX is fully set up
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

// ─── Next.js configuration ────────────────────────────────────────────────────
const nextConfig: NextConfig = {
  // Enable .mdx file extensions for pages and components
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  images: {
    remotePatterns: [
      // GitHub avatar images — used for profile photo if needed
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      // Supabase Storage — added in v2 when images are stored there
      // {
      //   protocol: "https",
      //   hostname: "*.supabase.co",
      // },
    ],
  },

  // Strict mode catches bugs early — keep this on
  reactStrictMode: true,
};

export default withMDX(nextConfig);