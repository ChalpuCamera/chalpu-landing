import Image from "next/image";

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Chalpu</h3>
            <p className="text-gray-300 mb-6">
              자영업자를 위한 <br />
              <span className="whitespace-nowrap">
                최고의 사진 촬영 가이드 및 사진 관리 솔루션
              </span>
            </p>
            <div className="flex flex-col space-y-2">
              <p className="text-gray-300">
                <span className="font-medium">이메일:</span>{" "}
                chalpuofficial@gmail.com
              </p>
              <p className="text-gray-300">
                <span className="font-medium">주소:</span> 서울특별시 마포구
                도화동 마포대로 89 12층
              </p>
            </div>
          </div>

          {/* 문의하기 */}
          <div>
            <h3 className="text-xl font-bold mb-4">문의하기</h3>
            <div className="flex flex-col gap-4 mb-6">
              <a
                href="https://open.kakao.com/o/sCpB58Hh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-yellow-400 text-black font-medium py-3 px-4 rounded-lg hover:bg-yellow-500 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3z" />
                </svg>
                카카오톡 문의하기
              </a>
            </div>

            <div className="text-center">
              <p className="text-gray-300 mb-2 text-sm">모바일 접속</p>
              <div className="bg-white p-3 rounded-lg inline-block">
                <Image
                  src={"/kakao_qr.jpeg"}
                  alt="카카오톡 오픈채팅 QR 코드"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>

          {/* 앱 다운로드 */}
          <div>
            <h3 className="text-xl font-bold mb-4">앱 다운로드</h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.chalpu.chalpu_android&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gray-800 text-white font-medium py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play에서 다운로드
              </a>

              <div className="text-center">
                <p className="text-gray-300 mb-2 text-sm">모바일 접속</p>
                <div className="bg-white p-3 rounded-lg inline-block">
                  <Image
                    src={"/playstore_qr.jpeg"}
                    alt="카카오톡 오픈채팅 QR 코드"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} Chalpu. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
