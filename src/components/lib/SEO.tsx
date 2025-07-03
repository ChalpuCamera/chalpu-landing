import { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export function generateSEOMetadata({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = "website",
  publishedTime,
  modifiedTime,
  author,
  section,
  tags,
}: SEOProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.chalpu.com";
  const defaultTitle = "찰푸 | 소상공인을 위한 사진 업로드 솔루션";
  const defaultDescription =
    "플랫폼 사진 반려 걱정 없이! 배달앱, 네이버 플레이스 등 각 플랫폼에 최적화된 사진 가이드라인과 AI 자동 보정으로 매출 증대를 경험하세요.";

  const seoTitle = title ? `${title} | 찰푸` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || [
    "음식사진",
    "소상공인",
    "사진업로드",
    "배달앱",
    "네이버플레이스",
  ];
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;
  const seoOgImage = ogImage || "/og-image.jpg";

  // other 객체 생성 시 undefined 값 필터링
  const otherMeta: Record<string, string> = {};
  if (author) otherMeta["article:author"] = author;
  if (section) otherMeta["article:section"] = section;
  if (tags) otherMeta["article:tag"] = tags.join(",");

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    authors: author ? [{ name: author }] : [{ name: "찰푸 팀" }],
    alternates: {
      canonical: fullCanonicalUrl,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: fullCanonicalUrl,
      siteName: "찰푸",
      images: [
        {
          url: seoOgImage,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
      locale: "ko_KR",
      type: ogType,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
      ...(tags && { tags }),
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [seoOgImage],
    },
    other: otherMeta,
  };
}

// 자주 사용되는 SEO 패턴들
export const seoPatterns = {
  homepage: {
    title: "플랫폼 사진 반려 이제 그만! 한 번에 승인받는 사진 촬영 가이드",
    description:
      "카메라 그리드 가이드, 굉장히 쉬운 조작, 간단한 프로세스로 소상공인을 위한 사진 업로드 솔루션을 제공합니다.",
    keywords: [
      "음식사진 가이드",
      "소상공인 사진",
      "배달앱 사진",
      "AI 사진보정",
    ],
  },
  features: {
    title: "찰푸 주요 기능",
    description:
      "플랫폼별 가이드라인 자동 제공, AI 자동 보정, 매출 증대 효과까지",
    keywords: ["플랫폼 가이드라인", "AI 보정", "매출 증대", "음식 사진"],
  },
  pricing: {
    title: "찰푸 요금제",
    description: "소상공인을 위한 합리적인 가격의 사진 업로드 솔루션",
    keywords: ["요금제", "가격", "소상공인", "사진 솔루션"],
  },
};
