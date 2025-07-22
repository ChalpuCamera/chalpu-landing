import {
  Camera,
  Image as ImageIcon,
  CheckSquare,
  TrendingUp,
} from "lucide-react";
import CtaButton from "./CtaButton";

const features = [
  {
    icon: (
      <CheckSquare className="h-10 w-10 text-brand-500" aria-hidden="true" />
    ),
    title: "플랫폼별 가이드라인 자동 제공",
    description:
      "배달앱, 네이버 플레이스 등 각 플랫폼에 최적화된 사진 가이드라인을 제공합니다.",
  },
  {
    icon: <Camera className="h-10 w-10 text-brand-500" aria-hidden="true" />,
    title: "음식별 그릇, 컵, 접시 가이드라인",
    description: "음식 종류에 따른 최적의 촬영 구도와 소품 배치를 안내합니다.",
  },
  {
    icon: <ImageIcon className="h-10 w-10 text-teal-500" aria-hidden="true" />,
    title: "음식별 자동 필터 및 보정",
    description: "최적의 필터와 보정을 자동 적용합니다.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-teal-500" aria-hidden="true" />,
    title: "매출과 노출 상승 효과",
    description:
      "품질 높은 사진으로 플랫폼 노출 향상과 매출 증대 효과를 경험하세요.",
  },
];

const FeaturesSection = () => {
  return (
    <section
      className="container mx-auto px-4 section-padding"
      aria-labelledby="features-heading"
    >
      {/* TODO: 추후 이미지 추가 예정 */}
      <div className="max-w-5xl mx-auto mb-12">
        <div className="rounded-lg shadow-xl w-full h-96 bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">이미지 추가 예정</p>
        </div>
      </div>
      <div className="text-center mb-12">
        <h2
          id="features-heading"
          className="text-2xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          주요 기능 및 혜택
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          사진 반려 걱정 없이 비즈니스에 집중하세요
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <article
            key={index}
            className="feature-card flex flex-col items-center"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
