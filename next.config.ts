import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SEO 최적화를 위한 설정
  poweredByHeader: false,
  compress: true,

  // 이미지 최적화
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  // 보안 헤더
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // 리다이렉트 설정 (필요시)
  async redirects() {
    return [
      // www 없는 도메인을 www 있는 도메인으로 리다이렉트
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "chalpu.com",
          },
        ],
        destination: "https://www.chalpu.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
