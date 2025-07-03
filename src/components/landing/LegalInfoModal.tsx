import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/landing/ui/dialog";
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
            <section>
              <h3 className="font-bold text-base mb-2">1. 개인정보의 수집 및 이용 목적</h3>
              <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>무료 체험 서비스 제공</li>
                <li>고객 상담 및 서비스 안내</li>
                <li>마케팅 및 광고에 활용</li>
                <li>서비스 개선을 위한 통계 분석</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">2. 수집하는 개인정보 항목</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>필수항목: 이메일 주소 또는 휴대전화번호</li>
                <li>선택항목: 설문조사 응답</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">3. 개인정보의 보유 및 이용기간</h3>
              <p>원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>무료 체험 관련 정보: 서비스 제공 완료 후 1년</li>
                <li>마케팅 동의 정보: 동의 철회 시까지</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">4. 개인정보 처리 위탁</h3>
              <p>회사는 서비스 향상을 위해 아래와 같이 개인정보를 위탁하고 있으며, 관련 법령에 따라 위탁계약 시 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하고 있습니다.</p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">5. 정보주체의 권리</h3>
              <p>정보주체는 언제든지 다음과 같은 권리를 행사할 수 있습니다:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>개인정보 처리현황 통지 요구</li>
                <li>개인정보 열람 요구</li>
                <li>개인정보 정정·삭제 요구</li>
                <li>개인정보 처리정지 요구</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">6. 개인정보보호책임자</h3>
              <div className="ml-4">
                <p>이름: 개인정보보호책임자</p>
                <p>연락처: privacy@photoguide.kr</p>
                <p>전화: 1588-0000</p>
              </div>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">7. 동의거부 권리</h3>
              <p>귀하는 개인정보 수집·이용에 동의하지 않을 권리가 있습니다. 다만, 필수 항목에 대한 동의를 거부할 경우 서비스 이용이 제한될 수 있습니다.</p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default LegalInfoModal;