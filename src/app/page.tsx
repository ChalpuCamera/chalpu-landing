import { Metadata } from "next";
import { Toaster as Sonner } from "@/components/landing/ui/sonner";
import FeaturesSection from "@/components/landing/FeaturesSection";
import FooterSection from "@/components/landing/FooterSection";
import Header from "@/components/landing/Header";
import TestimonialsSection from "@/components/landing/TestimonialsSection";

export const metadata: Metadata = {
  title: "찰푸 | 플랫폼 사진 반려 이제 그만! 한 번에 승인받는 사진 촬영 가이드",
  description:
    "카메라 그리드 가이드, 굉장히 쉬운 조작, 간단한 프로세스로 소상공인을 위한 사진 업로드 솔루션을 제공합니다. 배달앱, 네이버 플레이스 등 각 플랫폼에 최적화된 사진 가이드라인과 AI 자동 보정으로 매출 증대를 경험하세요.",
  keywords: [
    "음식사진 가이드",
    "소상공인 사진",
    "배달앱 사진",
    "네이버플레이스 사진",
    "AI 사진보정",
    "플랫폼 최적화",
    "매출 증대",
    "사진 업로드 솔루션",
  ],
  openGraph: {
    title:
      "찰푸 | 플랫폼 사진 반려 이제 그만! 한 번에 승인받는 사진 촬영 가이드",
    description:
      "카메라 그리드 가이드, 굉장히 쉬운 조작, 간단한 프로세스로 소상공인을 위한 사진 업로드 솔루션을 제공합니다.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "찰푸 | 플랫폼 사진 반려 이제 그만!",
    description:
      "소상공인을 위한 사진 업로드 솔루션으로 매출 증대를 경험하세요.",
  },
};

// 구조화된 데이터 (JSON-LD)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "찰푸",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.chalpu.com",
  description: "소상공인을 위한 사진 업로드 솔루션",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        (process.env.NEXT_PUBLIC_SITE_URL || "https://www.chalpu.com") +
        "/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  sameAs: [
    // 소셜 미디어 링크들이 있다면 여기에 추가
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "찰푸",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.chalpu.com",
  logo:
    (process.env.NEXT_PUBLIC_SITE_URL || "https://www.chalpu.com") +
    "/logo.png",
  description: "소상공인을 위한 사진 업로드 솔루션",
  address: {
    "@type": "PostalAddress",
    addressCountry: "KR",
    addressLocality: "서울",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    areaServed: "KR",
    availableLanguage: "Korean",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "찰푸 사진 업로드 솔루션",
  description:
    "플랫폼별 사진 가이드라인과 AI 자동 보정을 통한 소상공인 매출 증대 서비스",
  provider: {
    "@type": "Organization",
    name: "찰푸",
  },
  areaServed: {
    "@type": "Country",
    name: "대한민국",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "찰푸 서비스",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "플랫폼별 가이드라인 자동 제공",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "음식별 그릇, 컵, 접시 가이드라인",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "음식별 자동 필터 및 보정",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "매출과 노출 상승 효과",
        },
      },
    ],
  },
};

// 서버 컴포넌트 - SSR로 렌더링
export default function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />

      <Sonner />
      <div className="min-h-screen">
        <Header />
        <FeaturesSection />
        <TestimonialsSection />
        <FooterSection />
      </div>
    </>
  );
}
