/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during builds
  },
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