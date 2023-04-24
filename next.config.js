/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
    remotePatterns: [
      {
        hostname: "i.imgur.com",
      },
    ],
  },
};

module.exports = nextConfig;
