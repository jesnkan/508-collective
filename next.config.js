/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure for Tailwind CSS
  // Next.js will automatically detect tailwindcss/postcss config

  // Enable React Strict Mode for better error handling
  reactStrictMode: true,

  // Configure images (we'll optimize later)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'grainy-gradients.vercel.app',
      },
    ],
  },

  // Environment variables - Next.js handles these automatically
  // but we can configure rewrites, redirects, etc. if needed
};

export default nextConfig;