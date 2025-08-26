const BrandHeader = () => {
  return (
    <section className="bg-slate-50 border-b border-slate-200/60 py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="flex items-center space-x-2">
            {/* Favicon 디자인 아이콘 */}
            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center p-1 border border-blue-100">
              <svg className="w-full h-full" viewBox="0 0 32 32" fill="none">
                {/* 배경 */}
                <rect width="32" height="32" rx="6" fill="#3B82F6" />

                {/* 카메라 렌즈 - 큰 원 */}
                <circle
                  cx="16"
                  cy="16"
                  r="8"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />

                {/* 카메라 렌즈 - 중심점 */}
                <circle cx="16" cy="16" r="3" fill="white" />

                {/* 카메라 플래시 */}
                <rect x="21" y="9" width="3" height="2" rx="1" fill="white" />
              </svg>
            </div>

            {/* 서비스 이름 */}
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              <span className="text-slate-800">찰푸</span>
            </h1>

            {/* 서브 텍스트 */}
            <div className="hidden sm:flex items-center space-x-2 text-slate-500">
              <span className="text-sm font-medium">|</span>
              <span className="text-sm font-medium">
                소상공인을 위한 사진 솔루션
              </span>
            </div>
          </div>

          {/* 베타 배지 */}
          <div className="flex items-center justify-center bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
            <span className="text-xs font-semibold text-blue-700 tracking-wide">
              BETA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandHeader;
