import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/lib/GoogleAnalytics";
import { Suspense } from "react";

// 폰트 최적화: 필요한 weight만 로드하고 display=swap 사용
const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-kr",
  preload: true,
});

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-600 mx-auto mb-4"></div>
        <p className="text-gray-600">로딩중...</p>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: {
    default: "찰푸 | 소상공인을 위한 사진 업로드 솔루션",
    template: "%s | 찰푸",
  },
  description:
    "플랫폼 사진 반려 걱정 없이! 배달앱, 네이버 플레이스 등 각 플랫폼에 최적화된 사진 가이드라인과 자동 보정으로 매출 증대를 경험하세요.",
  keywords: [
    "음식사진",
    "소상공인",
    "사진업로드",
    "배달앱",
    "네이버플레이스",
    "AI보정",
    "사진가이드",
    "매출증대",
    "플랫폼최적화",
  ],
  authors: [{ name: "찰푸 팀" }],
  creator: "찰푸",
  publisher: "찰푸",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.chalpu.com"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    title: "찰푸 | 소상공인을 위한 사진 업로드 솔루션",
    description:
      "플랫폼 사진 반려 걱정 없이! 배달앱, 네이버 플레이스 등 각 플랫폼에 최적화된 사진 가이드라인과 자동 보정으로 매출 증대를 경험하세요.",
    siteName: "찰푸",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "찰푸 - 소상공인을 위한 사진 업로드 솔루션",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "찰푸 | 소상공인을 위한 사진 업로드 솔루션",
    description:
      "플랫폼 사진 반려 걱정 없이! 음식 사진 가이드라인과 자동 보정으로 매출 증대를 경험하세요.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      "naver-site-verification":
        process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Preconnect for critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* 환경변수 적용 안될 때 사용 */}
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
        />
        <meta
          name="naver-site-verification"
          content={process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION}
        />
        <GoogleAnalytics />
      </head>
      <body className={`${notoSansKR.variable} font-noto antialiased`}>
        <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
      </body>
    </html>
  );
}
