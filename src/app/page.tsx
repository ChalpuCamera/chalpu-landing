import type { Metadata } from "next";
import BrandHeader from "@/components/landing/BrandHeader";
import Header from "@/components/landing/Header";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ReviewSection from "@/components/landing/ReviewSection";
import FooterSection from "@/components/landing/FooterSection";
import FloatingCtaButton from "@/components/landing/FloatingCtaButton";
import { Toaster as Sonner } from "@/components/landing/ui/sonner";

export const metadata: Metadata = {
  title: "찰푸 | 소상공인을 위한 사진 업로드 솔루션",
  description:
    "플랫폼 사진 반려 걱정 없이! 배달앱, 네이버 플레이스 등 각 플랫폼에 최적화된 사진 가이드라인과 자동 보정으로 매출 증대를 경험하세요.",
  keywords: [
    "음식사진 가이드",
    "소상공인 사진",
    "배달앱 사진",
    "네이버 플레이스 사진",
    "AI 사진보정",
    "플랫폼 가이드라인",
    "사진 반려 방지",
    "매출 증대",
    "음식 촬영",
    "상업 사진",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "찰푸 | 소상공인을 위한 사진 업로드 솔루션",
    description:
      "플랫폼 사진 반려 걱정 없이! 배달앱, 네이버 플레이스 등 각 플랫폼에 최적화된 사진 가이드라인과 자동 보정으로 매출 증대를 경험하세요.",
    type: "website",
    locale: "ko_KR",
    url: "/",
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
};

// 서버 컴포넌트 - SSR로 렌더링
export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.chalpu.com/#website",
        url: "https://www.chalpu.com/",
        name: "찰푸",
        description: "소상공인을 위한 사진 업로드 솔루션",
        publisher: {
          "@id": "https://www.chalpu.com/#organization",
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://www.chalpu.com/?s={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
        inLanguage: "ko-KR",
      },
      {
        "@type": "Organization",
        "@id": "https://www.chalpu.com/#organization",
        name: "찰푸",
        url: "https://www.chalpu.com/",
        logo: {
          "@type": "ImageObject",
          inLanguage: "ko-KR",
          "@id": "https://www.chalpu.com/#/schema/logo/image/",
          url: "https://www.chalpu.com/logo.png",
          contentUrl: "https://www.chalpu.com/logo.png",
          width: 512,
          height: 512,
          caption: "찰푸",
        },
        image: {
          "@id": "https://www.chalpu.com/#/schema/logo/image/",
        },
        sameAs: [],
      },
      {
        "@type": "Service",
        "@id": "https://www.chalpu.com/#service",
        name: "찰푸 사진 업로드 솔루션",
        description:
          "플랫폼 사진 반려 걱정 없이! 배달앱, 네이버 플레이스 등 각 플랫폼에 최적화된 사진 가이드라인과 자동 보정",
        provider: {
          "@id": "https://www.chalpu.com/#organization",
        },
        areaServed: "KR",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "찰푸 서비스",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "플랫폼별 가이드라인 자동 제공",
                description:
                  "배달앱, 네이버 플레이스 등 각 플랫폼에 최적화된 사진 가이드라인 제공",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI 자동 필터 및 보정",
                description:
                  "AI가 음식을 인식하여 최적의 필터와 보정을 자동 적용",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Sonner />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <BrandHeader />
        <Header />
        <FeaturesSection />
        <ReviewSection />
        <FooterSection />
        <FloatingCtaButton />
      </main>
    </>
  );
}
