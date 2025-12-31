import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [new URL('https://res.cloudinary.com/**'),
      {
          protocol: 'https',
          hostname: 'www.facebook.com',
          port: '',
          pathname: '/**',
        },
    ],
   }
};

export default nextConfig;
