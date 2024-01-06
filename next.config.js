/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
    unoptimized: false,
  },
  rewrites: async function () {
    return [
      {
        source: "/blog",
        destination: "/blog/page/1",
      },
      {
        source: "/blog",
        has: [{ type: "query", key: "page" }],
        destination: "/blog/page/:page",
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
module.exports = withBundleAnalyzer(nextConfig);
