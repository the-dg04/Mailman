/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/proxy/:url*',
            destination: 'https://:url*',
          },
        ]
      },
};

export default nextConfig;
