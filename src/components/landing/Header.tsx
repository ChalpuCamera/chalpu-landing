import Image from "next/image";
import CtaButton from "@/components/landing/CtaButton";

const Header = () => {
  return (
    <header className=" text-black">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left space-y-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in space-y-4">
              <div>플랫폼 사진 반려, 이제 그만!</div>
              <div>한 번에 승인받는</div>
              <div>사진 촬영 가이드</div>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 animate-slide-up">
              카메라 그리드 가이드, 굉장히 쉬운 조작, 간단한 프로세스
              <br />
              <span className="font-semibold">
                소상공인을 위한 사진 업로드 솔루션
              </span>
            </p>

            <CtaButton />
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000"
                alt="찰푸를 사용하여 촬영한 고품질 음식 사진 예시 - 플랫폼 승인 보장"
                className="rounded-lg shadow-xl w-full max-h-96 object-cover"
                priority
                width={1000}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
