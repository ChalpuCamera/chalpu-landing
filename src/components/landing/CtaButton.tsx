export default function CtaButton() {
  return (
    <>

      {/* 앱 다운로드 버튼 */}
      <div className="mt-6">
        <a
          href="https://play.google.com/store/apps/details?id=com.chalpu.chalpu_android&pcampaignid=web_share"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-12 bg-chalpu hover:bg-chalpu-600 text-white px-6 py-3 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-lg"
          aria-label="구글 플레이에서 찰푸 앱 다운로드"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
          </svg>
          Google Play에서 다운로드
        </a>
      </div>
    </>
  );
}
