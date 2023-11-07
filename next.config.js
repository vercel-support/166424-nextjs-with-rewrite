/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/demo-blog',
        destination:
          'https://166424-gatsbyjs-with-path-prefix.preview.vercel-support.app/demo-blog',
      },
      {
        source: '/demo-blog/:path*',
        destination:
          'https://166424-gatsbyjs-with-path-prefix.preview.vercel-support.app/demo-blog/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
