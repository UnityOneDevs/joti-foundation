import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async rewrites() {
    return [
      // /x.html → /x
      { source: '/:path*.html', destination: '/:path*' },
    ]
  },
}

export default nextConfig
