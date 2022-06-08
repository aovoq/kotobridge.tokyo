/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
      optimizeFonts: true,
   },
   reactStrictMode: true,
   compiler: {
      styledComponents: true,
   },
}

module.exports = nextConfig
