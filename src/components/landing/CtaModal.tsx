import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/landing/ui/dialog";
import { Button } from "@/components/landing/ui/button";
import { Input } from "@/components/landing/ui/input";
import { Label } from "@/components/landing/ui/label";
import { Checkbox } from "@/components/landing/ui/checkbox";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/landing/ui/radio-group";
import { Textarea } from "@/components/landing/ui/textarea";
import { toast } from "sonner";
import LegalInfoModal from "./LegalInfoModal";
import { sendContact } from "@/app/services/apis/landing";

interface CtaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CtaModal = ({ isOpen, onClose }: CtaModalProps) => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    agreed: false,
    surveyAnswer: "",
    otherAnswer: "",
  });
  const [showLegalInfo, setShowLegalInfo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email && !formData.phone) {
      toast.error("이메일 또는 전화번호 중 하나는 반드시 입력해주세요.");
      return;
    }

    if (formData.email && formData.phone) {
      toast.error("이메일 또는 전화번호 중 하나만 입력해주세요.");
      return;
    }

    if (!formData.agreed) {
      toast.error("개인정보 활용에 동의해주세요.");
      return;
    }

    if (!formData.surveyAnswer) {
      toast.error("설문에 응답해주세요.");
      return;
    }

    setIsLoading(true);
    try {
      // 이메일 또는 전화번호를 info로, 설문 응답을 message로 전송
      const info = formData.email || formData.phone;
      const message =
        formData.surveyAnswer === "other"
          ? formData.otherAnswer
          : formData.surveyAnswer;
      
      // API 호출
      await sendContact({
        info,
        message,
      });

      toast.success("무료 체험 신청이 완료되었습니다!", {
        description: "빠른 시일 내에 연락드리겠습니다.",
      });

      setFormData({
        email: "",
        phone: "",
        agreed: false,
        surveyAnswer: "",
        otherAnswer: "",
      });
      onClose();
    } catch (error) {
      console.error("무료 체험 신청 오류:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "신청 중 오류가 발생했습니다. 다시 시도해주세요."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              무료 체험 신청
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <div>
                <Label htmlFor="email">이메일 주소</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                      phone: "",
                    })
                  }
                  placeholder="example@email.com"
                  disabled={!!formData.phone}
                />
              </div>

              <div className="text-center text-sm text-gray-500">또는</div>

              <div>
                <Label htmlFor="phone">전화번호</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                      email: "",
                    })
                  }
                  placeholder="010-0000-0000"
                  disabled={!!formData.email}
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label className="flex flex-col items-center text-base font-semibold">
                현재 플랫폼(배민, 쿠팡이츠 등) 사진 업로드에서 <br />
                <span className="whitespace-nowrap">가장 불편한 점은 무엇인가요?</span>
              </Label>
              <RadioGroup
                value={formData.surveyAnswer}
                onValueChange={(value: string) =>
                  setFormData({ ...formData, surveyAnswer: value })
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="자주 반려됨" id="rejected" />
                  <Label htmlFor="rejected">자주 반려됨</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="사진이 잘 안 나옴" id="quality" />
                  <Label htmlFor="quality">원하는 스타일의 사진이 잘 안 나옴</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="가이드라인이 어려움" id="guidelines" />
                  <Label htmlFor="guidelines">플랫폼 별 가이드라인(픽셀, 해상도 등)이 어려움</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">기타</Label>
                </div>
              </RadioGroup>

              {formData.surveyAnswer === "other" && (
                <Textarea
                  placeholder="기타 불편한 점을 입력해주세요"
                  value={formData.otherAnswer}
                  onChange={(e) =>
                    setFormData({ ...formData, otherAnswer: e.target.value })
                  }
                />
              )}
            </div>

            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="privacy"
                  checked={formData.agreed}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, agreed: checked as boolean })
                  }
                />
                <div className="text-sm">
                  <Label htmlFor="privacy" className="font-medium">
                    개인정보 수집 및 활용 동의 (필수)
                  </Label>
                  <button
                    type="button"
                    onClick={() => setShowLegalInfo(true)}
                    className="text-blue-600 hover:underline ml-2"
                  >
                    개인정보 처리 안내
                  </button>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? "신청 중..." : "무료 체험 신청하기"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <LegalInfoModal
        isOpen={showLegalInfo}
        onClose={() => setShowLegalInfo(false)}
      />
    </>
  );
};

export default CtaModal;
