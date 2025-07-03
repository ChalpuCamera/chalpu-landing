import { Camera, Image, CheckSquare, TrendingUp } from "lucide-react";

const features = [
    {
        icon: <CheckSquare className="h-10 w-10 text-brand-500" />,
        title: "플랫폼별 가이드라인 자동 제공",
        description:
            "배달앱, 네이버 플레이스 등 각 플랫폼에 최적화된 사진 가이드라인을 제공합니다.",
    },
    {
        icon: <Camera className="h-10 w-10 text-brand-500" />,
        title: "음식별 그릇, 컵, 접시 가이드라인",
        description:
            "음식 종류에 따른 최적의 촬영 구도와 소품 배치를 안내합니다.",
    },
    {
        icon: <Image className="h-10 w-10 text-teal-500" />,
        title: "음식별 자동 필터 및 보정",
        description:
            "AI가 음식을 인식하여 최적의 필터와 보정을 자동 적용합니다.",
    },
    {
        icon: <TrendingUp className="h-10 w-10 text-teal-500" />,
        title: "매출과 노출 상승 효과",
        description:
            "품질 높은 사진으로 플랫폼 노출 향상과 매출 증대 효과를 경험하세요.",
    },
];

const FeaturesSection = () => {
    return (
        <div className="container mx-auto px-4 section-padding">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                    주요 기능 및 혜택
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    사진 반려 걱정 없이 비즈니스에 집중하세요
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div className="mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {feature.title}
                        </h3>
                        <p className="text-gray-600 text-center">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesSection;
