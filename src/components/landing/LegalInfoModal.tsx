import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/landing/ui/dialog";
import { ScrollArea } from "@/components/landing/ui/scroll-area";

interface LegalInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LegalInfoModal = ({ isOpen, onClose }: LegalInfoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>개인정보 수집 및 이용 동의서</DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-96 pr-4">
          <div className="space-y-4 text-sm">
            <div className="bg-gray-50 p-3 rounded mb-4">
              <p className="text-xs text-gray-600">
                본 개인정보 처리방침은 「개인정보보호법」 제30조 및 「정보통신망
                이용촉진 및 정보보호 등에 관한 법률」 제27조의2에 따라
                작성되었습니다.
              </p>
            </div>

            <section>
              <h3 className="font-bold text-base mb-2">
                1. 개인정보의 수집 및 이용 목적
              </h3>
              <p className="mb-2">
                「개인정보보호법」 제15조 제1항 제1호에 따라 정보주체의 동의를
                받아 다음 목적으로 개인정보를 처리합니다:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>찰푸 서비스 베타 테스트 및 무료 체험 제공</li>
                <li>서비스 개발을 위한 사용자 피드백 수집 및 분석</li>
                <li>서비스 출시 시 우선 안내 및 알림</li>
                <li>고객 문의 응답 및 서비스 관련 상담</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">
                2. 수집하는 개인정보 항목
              </h3>
              <p className="mb-2">
                「개인정보보호법」 제16조(개인정보의 수집 제한)에 따라 최소한의
                정보만 수집합니다:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  <strong>필수항목:</strong> 이메일 주소 또는 휴대전화번호 (둘
                  중 하나만)
                </li>
                <li>
                  <strong>선택항목:</strong> 서비스 이용 관련 설문조사 응답
                </li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">
                3. 개인정보의 보유 및 이용기간
              </h3>
              <p className="mb-2">
                「개인정보보호법」 제21조(개인정보의 파기)에 따라 수집·이용 목적
                달성 시 지체없이 파기합니다:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>
                  <strong>베타 테스트 참여 정보:</strong> 서비스 정식 출시 후
                  6개월
                </li>
                <li>
                  <strong>서비스 알림 동의 정보:</strong> 동의 철회 시 또는
                  수집일로부터 3년
                </li>
                <li>
                  <strong>고객 문의 정보:</strong> 문의 처리 완료 후 3년
                  (「전자상거래법」 제6조)
                </li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">
                4. 개인정보의 처리 위탁
              </h3>
              <p className="mb-2">
                현재 개인정보 처리를 위탁하고 있지 않습니다. 향후 위탁이 필요한
                경우 「개인정보보호법」 제26조에 따라 사전 고지하고 동의를
                받겠습니다.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">
                5. 정보주체의 권리 및 행사 방법
              </h3>
              <p className="mb-2">
                「개인정보보호법」 제35조~제37조에 따라 다음 권리를 행사할 수
                있습니다:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>개인정보 처리현황 통지 요구</li>
                <li>개인정보 열람 요구</li>
                <li>개인정보 정정·삭제 요구</li>
                <li>개인정보 처리정지 요구</li>
              </ul>
              <p className="mt-2 text-xs text-gray-600">
                ※ 권리 행사는 개인정보보호 담당자에게 서면, 전화, 이메일 등을
                통해 요청하실 수 있습니다.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">
                6. 개인정보 보호책임자
              </h3>
              <p className="mb-2">
                「개인정보보호법」 제31조에 따른 개인정보 보호책임자는 다음과
                같습니다:
              </p>
              <div className="ml-4 bg-gray-50 p-3 rounded">
                <p>
                  <strong>개인정보 보호책임자:</strong> 찰푸 개발팀
                </p>
                <p>
                  <strong>이메일:</strong> chalpuofficial@gmail.com
                </p>
                <p>
                  <strong>연락처:</strong> 이메일을 통한 문의만 가능
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  ※ 개인정보 침해신고센터: privacy.go.kr (국번없이 182)
                </p>
              </div>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">
                7. 개인정보의 안전성 확보 조치
              </h3>
              <p className="mb-2">
                「개인정보보호법」 제29조에 따라 다음과 같은 안전성 확보 조치를
                취하고 있습니다:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>개인정보 암호화 저장 및 전송</li>
                <li>접근 권한 관리 및 접근 통제</li>
                <li>개인정보 처리 시스템 접속 기록 보관</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">
                8. 동의 거부 권리 및 불이익
              </h3>
              <p className="mb-2">
                「개인정보보호법」 제22조에 따라 개인정보 수집·이용에 대한
                동의를 거부할 권리가 있습니다.
              </p>
              <p className="text-red-600 font-medium">
                다만, 필수 항목에 대한 동의를 거부할 경우 베타 테스트 참여가
                제한될 수 있습니다.
              </p>
            </section>

            <section className="border-t pt-4">
              <h3 className="font-bold text-base mb-2">
                9. 개인정보 처리방침 변경
              </h3>
              <p className="text-xs text-gray-600">
                본 개인정보 처리방침은 2025년 7월 4일부터 적용됩니다.
                <br />
                개인정보 처리방침이 변경되는 경우 변경사항을 공지하고 동의를
                받겠습니다.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default LegalInfoModal;
