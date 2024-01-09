/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
    unoptimized: false,
    minimumCacheTTL: 60 * 60 * 24,
  },
  rewrites: async function () {
    return [
      {
        source: "/blog",
        has: [{ type: "query", key: "page" }],
        destination: "/blog/page/:page",
      },
      {
        source: "/blog",
        destination: "/blog/page/1",
      },
    ];
  },
  redirects: async function () {
    return [
      {
        source: "/blog/page/:page",
        destination: "/blog?page=:page",
        permanent: true,
      },
    ];
  },
};
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
// module.exports = withBundleAnalyzer(nextConfig);
module.exports = nextConfig;
