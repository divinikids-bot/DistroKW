import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.postimg.cc', 'i.pinimg.com', 'moralapparel-us.backendless.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        pathname: '**',
      },
    ],
    // Custom loader config kalau mau ngotak-ngatik
  },
};

export default nextConfig;
