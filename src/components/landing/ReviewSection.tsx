import { Card, CardContent } from "@/components/landing/ui/card";
import { Star } from "lucide-react";
import CtaButton from "./CtaButton";

const ReviewSection = () => {
  const reviews = [
    {
      name: "김○○ (치킨집 사장님)",
      content:
        "간단하고 편리한 가이드 덕분에 한 번에 승인받았어요! 이전에는 3-4번씩 재촬영했는데 이제는 걱정 없어요.",
      rating: 5,
    },
    {
      name: "박○○ (카페 운영)",
      content:
        "기본 카메라로 찍을 때 보다 사진 퀄리티가 확 달라졌어요! 고객님들이 사진 보고 많이 찾아오시네요. 매출도 20% 늘었어요.",
      rating: 5,
    },
    {
      name: "이○○ (분식점)",
      content:
        "복잡한 가이드라인 때문에 스트레스 받았는데, 이제는 앱이 알아서 다 해줘서 너무 편해요!",
      rating: 5,
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            실제 자영업자 후기
          </h3>
          <p className="text-lg text-gray-600">
            이미 많은 사장님들이 효과를 체험하고 있어요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    &quot;{review.content}&quot;
                  </p>
                </div>
                <p className="text-sm font-semibold text-gray-800">
                  {review.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
