import { Button } from "@/components/landing/ui/button";

interface HeaderProps {
    onCtaClick: () => void;
}

const Header = ({ onCtaClick }: HeaderProps) => {
    return (
        <div className=" text-black">
            <div className="container mx-auto px-4 py-16 md:py-20">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left space-y-10">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in space-y-4">
                            <div>플랫폼 사진 반려, 이제 그만!</div>
                            <div>한 번에 승인받는</div>
                            <div>사진 촬영 가이드</div>
                        </h1>
                        <p className="text-lg md:text-xl mb-8 opacity-90 animate-slide-up">
                            카메라 그리드 가이드, 굉장히 쉬운 조작, 간단한
                            프로세스
                            <br />
                            <span className="font-semibold">
                                소상공인을 위한 사진 업로드 솔루션
                            </span>
                        </p>

                        <Button
                            onClick={onCtaClick}
                            className="bg-gradient-to-r from-brand-600 to-teal-600 hover:from-brand-700 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            선착순 무료 체험 신청하기
                        </Button>
                    </div>
                    <div className="hidden md:block">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000"
                                alt="고품질 음식 사진"
                                className="rounded-lg shadow-xl w-full max-h-96 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
