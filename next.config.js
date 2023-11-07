/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/dream-blog',
        destination:
          'https://166424-gatsbyjs-with-path-prefix.preview.vercel-support.app/demo-blog',
      },
      {
        source: '/dream-blog/:path*',
        destination:
          'https://166424-gatsbyjs-with-path-prefix.preview.vercel-support.app/demo-blog/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
