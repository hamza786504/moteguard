/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shtheme.com',
      },
    ],
  },
};

export default nextConfig;