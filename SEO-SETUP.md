# 찰푸 SEO 최적화 가이드

이 프로젝트는 Next.js 13+ App Router를 사용하여 SEO 최적화가 적용되어 있습니다.

## 🚀 적용된 SEO 최적화 사항

### 1. 메타데이터 최적화

- **Title Tags**: 페이지별 최적화된 제목
- **Meta Descriptions**: 검색 결과에 표시될 설명
- **Keywords**: 관련 키워드 설정
- **Open Graph**: 소셜 미디어 공유 최적화
- **Twitter Cards**: 트위터 공유 최적화

### 2. 구조화된 데이터 (Schema.org)

- **Website Schema**: 웹사이트 정보
- **Organization Schema**: 회사 정보
- **Service Schema**: 서비스 정보
- **JSON-LD 형식**: Google 권장 방식

### 3. 기술적 SEO

- **robots.txt**: 검색 엔진 크롤링 가이드
- **sitemap.xml**: 사이트 구조 정보
- **manifest.json**: PWA 매니페스트
- **Semantic HTML**: 의미있는 HTML 구조

### 4. 성능 최적화

- **서버 사이드 렌더링**: 초기 로딩 속도 향상
- **이미지 최적화**: Next.js Image 컴포넌트 활용
- **코드 분할**: 필요한 코드만 로드
- **압축**: Gzip 압축 활성화

### 5. 접근성 (Accessibility)

- **ARIA 레이블**: 스크린 리더 지원
- **시맨틱 태그**: header, section, article 등 사용
- **Alt 텍스트**: 이미지 대체 텍스트 최적화

## 🛠️ 설정 방법

### 1. 환경 변수 설정

`.env.local` 파일을 생성하고 다음 내용을 추가하세요:

```bash
# 사이트 기본 설정
NEXT_PUBLIC_SITE_URL=https://www.your-domain.com

# SEO 인증 키
GOOGLE_SITE_VERIFICATION=your-google-site-verification-code
NAVER_SITE_VERIFICATION=your-naver-site-verification-code

# 분석 도구
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_TAG_MANAGER=GTM-XXXXXXX
```

### 2. Google Search Console 설정

1. [Google Search Console](https://search.google.com/search-console)에 사이트 등록
2. 소유권 확인 (메타 태그 방식 사용)
3. `GOOGLE_SITE_VERIFICATION` 환경 변수에 추가

### 3. Google Analytics 설정

1. [Google Analytics](https://analytics.google.com)에서 속성 생성
2. 측정 ID를 `NEXT_PUBLIC_GOOGLE_ANALYTICS`에 추가

### 4. 네이버 웹마스터도구 설정

1. [네이버 웹마스터도구](https://searchadvisor.naver.com)에 사이트 등록
2. 소유권 확인 코드를 `NAVER_SITE_VERIFICATION`에 추가

## 📊 SEO 성과 측정

### 주요 지표

- **Core Web Vitals**: 페이지 로딩 성능
- **검색 노출**: Google Search Console에서 확인
- **클릭률**: 검색 결과 클릭률
- **순위**: 주요 키워드 검색 순위

### 도구

- **Google Search Console**: 검색 성과 분석
- **Google Analytics**: 웹사이트 트래픽 분석
- **PageSpeed Insights**: 페이지 속도 측정
- **Lighthouse**: 전반적인 웹사이트 품질 평가

## 🌐 도메인 설정 (www vs non-www)

### 중요한 SEO 이슈

- `www.chalpu.com`과 `chalpu.com`은 검색 엔진에서 **다른 사이트로 인식**
- 중복 콘텐츠 문제 및 SEO 점수 분산 가능성
- **www 버전으로 통일** 설정 완료

### 적용된 해결 방법

1. **자동 리다이렉트**: `chalpu.com` → `www.chalpu.com`
2. **Canonical URL**: www 버전으로 통일
3. **일관된 URL 사용**: 모든 설정에서 www 버전 사용

## 🔧 추가 최적화 방법

### 1. 콘텐츠 최적화

- 키워드 리서치 후 자연스러운 키워드 배치
- 고품질 콘텐츠 정기 업데이트
- 내부 링크 구조 최적화

### 2. 기술적 개선

- 페이지 로딩 속도 개선
- 모바일 최적화 (반응형 디자인)
- HTTPS 적용
- 404 페이지 최적화

### 3. 로컬 SEO (소상공인 대상)

- Google My Business 등록
- 지역 키워드 최적화
- 고객 리뷰 관리
- 지역 디렉토리 등록

## 🎯 소상공인 특화 SEO 전략

### 1. 타겟 키워드

- "음식 사진 촬영"
- "배달앱 사진 가이드"
- "네이버 플레이스 사진"
- "소상공인 사진 솔루션"

### 2. 지역별 최적화

- 지역명 + 서비스명 조합
- 지역 커뮤니티 활용
- 지역 언론 보도 활용

### 3. 업종별 콘텐츠

- 음식 종류별 사진 가이드
- 플랫폼별 최적화 팁
- 성공 사례 스토리

## 📈 정기 점검 사항

### 월별 점검

- [ ] Google Search Console 오류 확인
- [ ] 페이지 로딩 속도 측정
- [ ] 키워드 순위 확인
- [ ] 백링크 상태 점검

### 분기별 점검

- [ ] 콘텐츠 업데이트
- [ ] 경쟁사 SEO 분석
- [ ] 새로운 키워드 발굴
- [ ] 구조화된 데이터 검증

이 가이드를 통해 찰푸 웹사이트의 SEO 성과를 지속적으로 개선할 수 있습니다.
