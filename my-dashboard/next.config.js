/** @type {import('next').NextConfig} */


const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/auth/:path*',
        destination: 'https://example.com/api/auth/:path*', // Replace with your actual domain
      },
    ];
  },
}
  
module.exports = nextConfig
