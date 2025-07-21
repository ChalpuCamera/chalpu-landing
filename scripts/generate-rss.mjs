import fs from 'fs';
import path from 'path';

function generateRSS() {
  const baseUrl = "https://www.chalpu.com";
  const currentDate = new Date().toUTCString();
  
  const rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>찰푸 | 소상공인을 위한 사진 업로드 솔루션</title>
    <link>${baseUrl}</link>
    <description>플랫폼 사진 반려 걱정 없이! 배달앱, 네이버 플레이스 등 각 플랫폼에 최적화된 사진 가이드라인과 자동 보정으로 매출 증대를 경험하세요.</description>
    <language>ko-KR</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${baseUrl}/logo.png</url>
      <title>찰푸</title>
      <link>${baseUrl}</link>
      <description>찰푸 로고</description>
      <width>512</width>
      <height>512</height>
    </image>
    
    <item>
      <title>찰푸 서비스 소개 - 소상공인을 위한 사진 업로드 솔루션</title>
      <link>${baseUrl}</link>
      <description>플랫폼 사진 반려 걱정 없이! 배달앱, 네이버 플레이스 등 각 플랫폼에 최적화된 사진 가이드라인과 자동 보정으로 매출 증대를 경험하세요. AI가 음식을 인식하여 최적의 필터와 보정을 자동 적용합니다.</description>
      <pubDate>${currentDate}</pubDate>
      <guid isPermaLink="true">${baseUrl}</guid>
      <category>소상공인</category>
      <category>음식사진</category>
      <category>AI 보정</category>
      <category>사진 가이드</category>
    </item>
    
    <item>
      <title>플랫폼별 가이드라인 자동 제공</title>
      <link>${baseUrl}#features</link>
      <description>배달앱, 네이버 플레이스 등 각 플랫폼에 최적화된 사진 가이드라인을 자동으로 제공합니다. 플랫폼별 요구사항에 맞춰 사진을 업로드하여 반려율을 줄이고 매출을 증대시키세요.</description>
      <pubDate>${new Date(Date.now() - 24 * 60 * 60 * 1000).toUTCString()}</pubDate>
      <guid isPermaLink="true">${baseUrl}#features</guid>
      <category>가이드라인</category>
      <category>플랫폼 최적화</category>
    </item>
    
    <item>
      <title>AI 자동 필터 및 보정 기능</title>
      <link>${baseUrl}#ai-correction</link>
      <description>AI가 음식을 인식하여 최적의 필터와 보정을 자동으로 적용합니다. 전문적인 사진 편집 지식 없이도 고품질의 음식 사진을 만들 수 있습니다.</description>
      <pubDate>${new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toUTCString()}</pubDate>
      <guid isPermaLink="true">${baseUrl}#ai-correction</guid>
      <category>AI 기술</category>
      <category>자동 보정</category>
    </item>

  </channel>
</rss>`;

  // public 폴더에 RSS 파일 생성
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'rss.xml'), rssContent, 'utf8');
  console.log('RSS feed generated successfully at /public/rss.xml');
}

export default generateRSS;

// 직접 실행 시
if (import.meta.url === `file://${process.argv[1]}`) {
  generateRSS();
}