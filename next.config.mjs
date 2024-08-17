/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        hostname: 'sm.ign.com',
      },
      {
        protocol: 'https',
        hostname: 'www.elbalad.news',
      },
      {
        protocol: 'https',
        hostname: 'media.gemini.media',
      },
    ],
  },
};

export default nextConfig;
