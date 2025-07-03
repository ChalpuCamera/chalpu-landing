import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/app/LayoutWrapper";
import GoogleAnalytics from "@/components/lib/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "찰푸 | 소상공인을 위한 사진 업로드 솔루션",
    template: "%s | 찰푸",
  },
  description:
    "플랫폼 사진 반려 걱정 없이! 배달앱, 네이버 플레이스 등 각 플랫폼에 최적화된 사진 가이드라인과 AI 자동 보정으로 매출 증대를 경험하세요.",
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
      "플랫폼 사진 반려 걱정 없이! 배달앱, 네이버 플레이스 등 각 플랫폼에 최적화된 사진 가이드라인과 AI 자동 보정으로 매출 증대를 경험하세요.",
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
      "플랫폼 사진 반려 걱정 없이! AI 기반 음식 사진 가이드라인과 자동 보정으로 매출 증대를 경험하세요.",
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
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: {
      "naver-site-verification": process.env.NAVER_SITE_VERIFICATION || "",
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
        <GoogleAnalytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
