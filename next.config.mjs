/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages, served from main:/docs at /snappy-melon.
  output: "export",
  basePath: "/snappy-melon",
  distDir: "docs",
};

export default nextConfig;
