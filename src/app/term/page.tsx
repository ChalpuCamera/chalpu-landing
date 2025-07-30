// app/terms/page.tsx
export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 border-b pb-4">
            이용약관
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              제1조 (목적)
            </h2>
            <p className="text-gray-700 leading-relaxed">
              이 약관은 찰푸(이하 &quot;회사&quot;)이 제공하는 음식 사진 촬영 가이드, AI
              기반 메뉴 설명 생성, 메뉴판 제작, 홍보물 생성 등 일체의
              서비스(이하 &quot;서비스&quot;)의 이용과 관련하여 회사와 회원 간의
              권리·의무, 책임사항 및 기타 필요한 사항을 규정함을 목적으로
              합니다.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              제2조 (정의)
            </h2>
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-gray-800">사이트</span>
                <span className="text-gray-700">
                  : 회사가 운영하는 웹사이트 및 모바일 앱 (예:
                  https://chalpu.com)
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">회원</span>
                <span className="text-gray-700">
                  : 본 약관에 동의하고 회원가입 절차를 완료한 자 (주로 음식점
                  자영업자)
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">아이디(ID)</span>
                <span className="text-gray-700">
                  : 회원 식별을 위한 문자·숫자의 조합
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">비밀번호</span>
                <span className="text-gray-700">
                  : 회원 정보 보호를 위한 보안 문자 조합
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">콘텐츠</span>
                <span className="text-gray-700">
                  : 회원이 업로드한 음식 사진, 생성된 메뉴판, 포스터, 홍보물 등
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">
                  가이드 서비스
                </span>
                <span className="text-gray-700">
                  : 음식 사진 촬영을 위한 실시간 가이드 및 피드백 기능
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">
                  AI 생성 서비스
                </span>
                <span className="text-gray-700">
                  : AI 기반 메뉴 설명, 메뉴판, 홍보물 자동 생성 기능
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">유료 서비스</span>
                <span className="text-gray-700">
                  : 구독 또는 요금제로 제공되는 프리미엄 기능
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">템플릿</span>
                <span className="text-gray-700">
                  : 업종별 메뉴판 및 홍보물 디자인 양식
                </span>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              제3조 (약관의 효력 및 변경)
            </h2>
            <ol className="text-gray-700 leading-relaxed space-y-2">
              <li>1. 본 약관은 회원가입 시 동의함으로써 효력이 발생합니다.</li>
              <li>
                2. 회사는 약관을 개정할 수 있으며, 개정 시 최소 7일 전 서비스 내
                공지를 통해 사전 고지합니다.
              </li>
              <li>
                3. 회원이 개정 약관 시행일까지 거부 의사를 표시하지 않는 경우,
                동의한 것으로 간주합니다.
              </li>
              <li>
                4. 회원이 개정 약관에 동의하지 않을 경우 서비스 이용을 중단하고
                탈퇴할 수 있습니다.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              제4조 (회원가입 및 이용계약 체결)
            </h2>
            <ol className="text-gray-700 leading-relaxed space-y-2">
              <li>
                1. 회원가입은 이메일 또는 SNS 간편가입(카카오, 구글, 네이버)
                방식으로 진행됩니다.
              </li>
              <li>
                2. 만 14세 이상이어야 하며, 약관 및 개인정보처리방침에 동의해야
                합니다.
              </li>
              <li>
                3. 다음 각 호에 해당하는 경우 가입 승인이 거절될 수 있습니다:
              </li>
            </ol>
            <ul className="text-gray-700 leading-relaxed space-y-1 ml-6 mt-2">
              <li>• 허위 정보 제공</li>
              <li>• 타인의 명의 도용</li>
              <li>• 이전에 서비스 이용 정지 처분을 받은 경우</li>
              <li>• 기타 회사가 정한 가입 요건을 충족하지 않는 경우</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              제5조 (회원정보의 변경)
            </h2>
            <ol className="text-gray-700 leading-relaxed space-y-2">
              <li>
                1. 회원은 개인정보를 직접 수정하거나, 회사에 통지해야 합니다.
              </li>
              <li>
                2. 회원정보 변경을 통지하지 않아 발생한 불이익은 회원의
                책임입니다.
              </li>
              <li>
                3. 가게 정보(상호명, 업종, 주소 등) 변경 시에는 즉시
                업데이트해야 합니다.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              제6조 (아이디, 비밀번호 관리)
            </h2>
            <ol className="text-gray-700 leading-relaxed space-y-2">
              <li>1. 회원은 본인의 ID/비밀번호를 안전하게 관리해야 합니다.</li>
              <li>2. 제3자에게 이용하게 하거나 양도·대여할 수 없습니다.</li>
              <li>
                3. 도용 또는 무단 사용 발견 시 즉시 회사에 알려야 하며, 미통지로
                인한 손해는 회사가 책임지지 않습니다.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              제7조 (회원에 대한 통지)
            </h2>
            <ol className="text-gray-700 leading-relaxed space-y-2">
              <li>
                1. 회사는 이메일, 문자, 사이트 내 알림, 푸시 알림 등으로 통지할
                수 있습니다.
              </li>
              <li>
                2. 불특정 다수 회원에게는 서비스 내 공지사항 게시로 개별 통지를
                갈음할 수 있습니다.
              </li>
              <li>
                3. 회원이 연락처를 잘못 기재하거나 변경사항을 알리지 않아 통지가
                도달하지 않는 경우, 발송한 때에 도달한 것으로 봅니다.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              제8조 (회사의 의무)
            </h2>
            <ol className="text-gray-700 leading-relaxed space-y-2">
              <li>
                1. 회사는 안정적이고 지속적인 서비스 제공에 최선을 다합니다.
              </li>
              <li>
                2. 회원의 개인정보 보호를 위해 보안시스템을 구축하고
                개인정보처리방침을 공시하고 준수합니다.
              </li>
              <li>
                3. 회원으로부터 제기되는 의견이나 불만이 정당하다고 객관적으로
                인정될 경우에는 적절한 절차를 거쳐 즉시 처리합니다.
              </li>
              <li>
                4. AI 서비스의 품질 향상을 위해 지속적으로 기술 개발에
                노력합니다.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              제9조 (회원의 의무)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              다음 행위는 금지됩니다:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  1. 계정 관리 관련
                </h3>
                <ul className="text-gray-700 leading-relaxed space-y-1">
                  <li>• 허위정보 제공 또는 타인 사칭</li>
                  <li>• 개인정보 도용 또는 계정 양도·거래</li>
                  <li>• 복수 계정을 이용한 서비스 중복 이용</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  2. 콘텐츠 관련
                </h3>
                <ul className="text-gray-700 leading-relaxed space-y-1">
                  <li>• 실제 운영하지 않는 가게 정보로 서비스 이용</li>
                  <li>• 타인의 음식 사진을 자신의 메뉴로 등록</li>
                  <li>• 음식과 무관한 이미지 업로드</li>
                  <li>• 저작권, 상표권 등 타인의 지적재산권 침해</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  3. 시스템 관련
                </h3>
                <ul className="text-gray-700 leading-relaxed space-y-1">
                  <li>• 부정한 수단이나 방법으로 서비스 이용</li>
                  <li>• 매크로, 자동화 도구 등을 이용한 서비스 남용</li>
                  <li>• 서비스의 안정적 운영을 방해하는 행위</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  4. 기타
                </h3>
                <ul className="text-gray-700 leading-relaxed space-y-1">
                  <li>
                    • 명예훼손, 모독, 차별, 혐오 등 타인에게 피해를 주는 행위
                  </li>
                  <li>• 음란하거나 폭력적인 내용의 업로드</li>
                  <li>• 관련 법령을 위반하는 행위</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mt-4">
              위반 시 회사는 서비스 이용을 제한할 수 있으며, 손해가 발생한 경우
              배상을 청구할 수 있습니다.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              제10조 (서비스 제공 및 변경)
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  1. 제공 서비스:
                </h3>
                <ul className="text-gray-700 leading-relaxed space-y-1">
                  <li>• 음식 사진 촬영 가이드</li>
                  <li>• AI 기반 메뉴 설명 자동 생성</li>
                  <li>• 업종별 메뉴판 템플릿 제공 및 자동 생성</li>
                  <li>• 포스터, 홍보물 자동 생성</li>
                  <li>• 플랫폼별 사진 규격 최적화</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  2. 서비스는 연중무휴(24시간, 주 7일) 제공을 원칙으로 하나,
                  정기점검, 긴급점검, 설비 장애 등의 경우 일시 중단될 수
                  있습니다.
                </p>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  3. 회사는 서비스 개선을 위해 사전 공지 후 서비스의 내용을
                  변경할 수 있습니다.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              제11조 (유료 서비스)
            </h2>
            <ol className="text-gray-700 leading-relaxed space-y-2">
              <li>
                1. 회사는 기본 서비스 외에 프리미엄 기능을 유료로 제공할 수
                있습니다.
              </li>
              <li>
                2. 유료 서비스의 이용료, 결제방법, 이용기간 등은 서비스 내에서
                별도로 안내합니다.
              </li>
              <li>3. 결제 및 환불 정책은 별도의 결제 약관에 따릅니다.</li>
              <li>
                4. 유료 서비스 미결제 시 해당 기능의 이용이 제한될 수 있습니다.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              제12조 (콘텐츠 권리 및 이용)
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  1. 회원이 업로드한 콘텐츠:
                </h3>
                <ul className="text-gray-700 leading-relaxed space-y-1">
                  <li>• 저작권은 회원에게 있습니다.</li>
                  <li>
                    • 회사는 서비스 운영, 개선, AI 학습 목적으로 해당 콘텐츠를
                    사용할 수 있습니다.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  2. AI가 생성한 콘텐츠:
                </h3>
                <ul className="text-gray-700 leading-relaxed space-y-1">
                  <li>
                    • 회원은 생성된 콘텐츠를 자신의 사업 목적으로 자유롭게
                    사용할 수 있습니다.
                  </li>
                  <li>
                    • 단, 생성된 콘텐츠를 제3자에게 재판매하거나 상업적으로
                    배포하는 것은 제한됩니다.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  3. 회사 제공 템플릿:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  회사의 지적재산권이 적용되며, 서비스 이용 범위 내에서만 사용
                  가능합니다.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              제13조 (개인정보보호)
            </h2>
            <ol className="text-gray-700 leading-relaxed space-y-2">
              <li>
                1. 회사는 관련 법령이 정하는 바에 따라 회원의 개인정보를
                보호하기 위해 노력합니다.
              </li>
              <li>
                2. 개인정보의 보호 및 이용에 대해서는 관련법 및 회사의
                개인정보처리방침이 적용됩니다.
              </li>
              <li>
                3. 서비스 개선을 위해 익명화된 이용 패턴 정보를 수집·분석할 수
                있습니다.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              제14조 (계약 해지 및 이용계약 종료)
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  1. 회원의 해지:
                </h3>
                <ul className="text-gray-700 leading-relaxed space-y-1">
                  <li>• 회원은 언제든지 탈퇴를 요청할 수 있습니다.</li>
                  <li>
                    • 탈퇴 시 관련 법령에 따라 개인정보는 지체없이 삭제됩니다.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  2. 회사의 해지:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  회원이 약관을 위반하거나 서비스의 정상적 운영을 방해한 경우
                  계약을 해지할 수 있습니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  3. 계정 정리:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  1년 이상 미접속 시 휴면계정으로 전환될 수 있으며, 사전 통지 후
                  계정이 삭제될 수 있습니다.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              제15조 (이용 제한)
            </h2>
            <ol className="text-gray-700 leading-relaxed space-y-2">
              <li>
                1. 회사는 회원이 약관 또는 운영정책을 위반한 경우 다음과 같이
                서비스 이용을 제한할 수 있습니다:
              </li>
            </ol>
            <ul className="text-gray-700 leading-relaxed space-y-1 ml-6 mt-2">
              <li>• 경고 및 주의 조치</li>
              <li>• 일부 기능 이용 제한</li>
              <li>• 일시적 이용 정지 (1일~30일)</li>
              <li>• 영구 이용 정지</li>
            </ul>
            <ol
              className="text-gray-700 leading-relaxed space-y-2 mt-4"
              start={2}
            >
              <li>
                2. 이용 제한 시 사전 통지를 원칙으로 하나, 긴급한 경우 사후
                통지할 수 있습니다.
              </li>
              <li>
                3. 회원은 이용 제한에 대해 이의가 있을 경우 소명 자료를 제출할
                수 있습니다.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              제16조 (손해배상)
            </h2>
            <ol className="text-gray-700 leading-relaxed space-y-2">
              <li>
                1. 회사와 회원은 서비스와 관련하여 고의 또는 과실로 상대방에게
                손해를 끼친 경우, 그 손해를 배상할 책임이 있습니다.
              </li>
              <li>
                2. 회사는 무료 서비스 이용과 관련해서는 손해배상책임을 지지
                않습니다.
              </li>
              <li>
                3. 회사는 회원이 서비스를 이용하여 기대하는 수익을 얻지 못하거나
                상실한 것에 대하여 책임을 지지 않습니다.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              제17조 (면책사항)
            </h2>
            <ol className="text-gray-700 leading-relaxed space-y-2">
              <li>
                1. 회사는 다음 각 호의 경우 서비스 제공과 관련된 책임을 지지
                않습니다:
              </li>
            </ol>
            <ul className="text-gray-700 leading-relaxed space-y-1 ml-6 mt-2">
              <li>• 천재지변, 전쟁, 파업 등 불가항력적 사유</li>
              <li>• 회원의 귀책사유로 인한 서비스 이용 장애</li>
              <li>• 회원이 게시한 정보, 자료, 사실의 정확성, 신뢰성</li>
              <li>
                • 회원 상호간 또는 회원과 제3자 상호간 서비스를 매개로 발생한
                분쟁
              </li>
            </ul>
            <ol
              className="text-gray-700 leading-relaxed space-y-2 mt-4"
              start={2}
            >
              <li>
                2. AI 생성 결과의 정확성이나 품질에 대해 완전한 보증을 하지
                않습니다.
              </li>
              <li>
                3. 외부 링크를 통해 연결된 사이트에서 발생한 문제에 대해
                책임지지 않습니다.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              제18조 (분쟁해결)
            </h2>
            <ol className="text-gray-700 leading-relaxed space-y-2">
              <li>
                1. 회사는 회원으로부터 제출되는 불만사항 및 의견을 우선적으로
                처리합니다.
              </li>
              <li>
                2. 회사와 회원 간 분쟁이 발생한 경우, 먼저 협의를 통해
                해결하도록 노력합니다.
              </li>
              <li>
                3. 협의로 해결되지 않는 분쟁에 대해서는 소비자분쟁조정위원회,
                개인정보보호위원회 등 관련 기관의 조정을 신청할 수 있습니다.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              제19조 (준거법 및 관할)
            </h2>
            <ol className="text-gray-700 leading-relaxed space-y-2">
              <li>
                1. 본 약관의 해석 및 회사와 회원 간의 분쟁에 대해서는 대한민국
                법을 적용합니다.
              </li>
              <li>
                2. 서비스 이용으로 발생한 분쟁에 대한 소송은 회사 본사 소재지를
                관할하는 법원에 제기합니다.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              제20조 (규정의 준용)
            </h2>
            <p className="text-gray-700 leading-relaxed">
              본 약관에 명시되지 않은 사항에 대해서는 관련 법령 및 상관습에
              따릅니다.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              제21조 (개정이력)
            </h2>
            <ul className="text-gray-700 leading-relaxed space-y-1">
              <li>
                • <strong>최초 제정일</strong>: 2025년 7월 28일
              </li>
              <li>
                • <strong>시행일</strong>: 2025년 7월 28일
              </li>
              <li>
                • <strong>공고일</strong>: 2025년 7월 28일
              </li>
            </ul>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gray-50 p-6 rounded-lg space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">📞 고객센터</span>:
                chalpuofficial@gmail.com
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">📍 회사 주소</span>: 서울특별시
                마포구 도화동 마포대로 89 12층
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="text-gray-500 space-y-2">
              <p className="font-medium">
                본 약관은 2025년 7월 28일부터 시행됩니다.
              </p>
              <p className="text-sm">찰푸 이용약관</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
