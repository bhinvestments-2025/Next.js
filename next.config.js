/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gobhinvestments.com',
      },
    ],
  },
}

module.exports = nextConfig
