/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gravatar.com'
      },
    ],
  },
  experimental: {
    appDir: true,
  },
  env:{
    apikey: process.env.APIKEY,
    service: process.env.SERVICE
  },
  headers: () => [{
    source: '/:path*',
    headers: [
      {
        key: 'Cache-Control',
        value: 'no-store'
      }
    ]
  }]
}

module.exports = nextConfig
