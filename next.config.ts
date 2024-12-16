import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  eslint: {
    dirs: ['src'],
  },
  reactStrictMode: true,
}
 
export default nextConfig