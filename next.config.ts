import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  eslint: {
    // Disable ESLint during builds to avoid the react/no-unescaped-entities errors
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      // /x.html → /x
      { source: '/:path*.html', destination: '/:path*' },
    ]
  },
}

export default nextConfig
