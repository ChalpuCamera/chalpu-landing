import Image from "next/image";
import CtaButton from "@/components/landing/CtaButton";

const Header = () => {
  return (
    <header className="text-black">
      <div className="container mx-auto px-4 py-4 md:py-8">
        <div className="flex justify-center items-center">
          <div className="text-center md:text-center space-y-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in space-y-4">
              <div>
                플랫폼 사진 반려,{" "}
                <span className="whitespace-nowrap">이제 그만!</span>
              </div>
              <div>한 번에 승인받는</div>
              <div>사진 촬영 가이드</div>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 animate-slide-up">
              카메라 그리드 가이드, 굉장히 쉬운 조작,{" "}
              <span className="whitespace-nowrap">간단한 프로세스</span>
              <br />
              <span className="font-semibold">
                자영업자를 위한 사진 업로드 솔루션
              </span>
            </p>

            <CtaButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
