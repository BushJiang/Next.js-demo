import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com',
        port: '',
        pathname: '/ccv2/**',
      },
    ],
  },
};

export default nextConfig;
