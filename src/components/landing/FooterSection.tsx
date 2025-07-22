import Image from "next/image";

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
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
          <div>
            <h3 className="text-xl font-bold">문의하기</h3>
            <div className="flex flex-row gap-6 items-center">
              <div className="flex flex-col justify-center">
                <a
                  href="https://open.kakao.com/o/sCpB58Hh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-w-64 bg-yellow-400 text-black font-medium py-3 px-4 rounded-lg hover:bg-yellow-500 transition-colors w-full"
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

              <div className="text-center mt-2">
                <p className="text-gray-300 mb-2 text-sm">모바일 접속</p>
                <div className="bg-white p-3 rounded-lg">
                  <Image
                    src={"/qr.jpeg"}
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
