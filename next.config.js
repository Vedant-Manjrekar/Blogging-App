/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "i.imgur.com",
      },
    ],
  },
};

module.exports = nextConfig;
