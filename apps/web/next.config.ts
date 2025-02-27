import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental:{
    serverActions: {
      allowedOrigins: [
        'localhost:3000', // localhost
        'fictional-spoon-q6766wjpj563xr96-3000.app.github.dev' // codespace
      ],
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
        protocol: "https",
      },
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        hostname:"www.w3schools.com",
        protocol: "https",
      }
    ],
  }
};

export default nextConfig;
