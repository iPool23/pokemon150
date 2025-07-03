/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "scontent.fcix2-1.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      }
    ],
  },
};

export default nextConfig;
