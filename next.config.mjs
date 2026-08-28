/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Marketing photography is served from /public and optimised by next/image.
  // No remote patterns are configured: every image ships with the site, so
  // there is no third-party host to trust or to go down.
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
