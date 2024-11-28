import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
  //     // Wildcard path matching
  //     {
  //       source: '/blog/:slug',
  //       destination: '/news/:slug',
  //       permanent: true,
  //     },
    ]
  },
  
 
};

export default nextConfig;
