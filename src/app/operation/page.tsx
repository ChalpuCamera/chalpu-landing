export default function Operation() {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 border-b pb-4">
              운영정책
            </h1>
            
            <div className="text-gray-700 leading-relaxed mb-8">
              <p className="mb-4">
                찰푸(chalpu.com, 이하 &quot;회사&quot;)이 제공하는 서비스(이하 &quot;서비스&quot;)의 공정하고 안정적인 운영을 위하여, 
                회원이 준수해야 할 세부 사항과 위반 시 조치 기준을 아래와 같이 정합니다. 
                회원은 본 운영정책 및 이용약관을 숙지하고 성실히 준수해야 합니다.
              </p> 
            </div>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">제1조 (목적)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                본 정책은 음식 사진 촬영, AI 콘텐츠 생성, 메뉴판 제작 등 서비스 이용과정에서
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>• 회원의 책임 있는 이용을 유도하고</li>
                <li>• 플랫폼의 공정성과 신뢰성을 유지하며</li>
                <li>• 건전한 자영업자 지원 생태계를 조성하기 위해 마련되었습니다.</li>
              </ul>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">제2조 (용어 정의)</h2>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-gray-800">회원</span>
                  <span className="text-gray-700">: 찰푸 서비스에 가입한 이용자 (음식점 자영업자 등)</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">담당자</span>
                  <span className="text-gray-700">: 서비스 운영 및 고객 응대를 담당하는 찰푸 운영자</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">콘텐츠</span>
                  <span className="text-gray-700">: 회원이 업로드한 음식 사진, 생성된 메뉴판, 포스터, 홍보물 등 사용자 생성 자료</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">가이드 서비스</span>
                  <span className="text-gray-700">: 음식 사진 촬영을 위한 실시간 가이드 및 피드백 기능</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">AI 생성 서비스</span>
                  <span className="text-gray-700">: AI 기반 메뉴 설명, 메뉴판, 홍보물 자동 생성 기능</span>
                </div>
              </div>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">제3조 (정책 적용 및 변경)</h2>
              <ol className="text-gray-700 leading-relaxed space-y-2">
                <li>1. 본 정책은 서비스 내 고지를 통해 효력이 발생하며,</li>
                <li>2. 관련 법령 및 회사 정책에 따라 수시로 개정될 수 있습니다.</li>
                <li>3. 개정 시 서비스 내 공지사항 또는 알림을 통해 사전 안내합니다.</li>
              </ol>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">제4조 (콘텐츠 제한 기준)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                회원이 업로드하거나 생성한 콘텐츠가 다음 각 호에 해당하는 경우, 
                사전 통보 없이 삭제되거나 접근 제한될 수 있습니다.
              </p>
  
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-3">1. 법령 위반 콘텐츠</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-1">
                    <li>• 허위사실 유포, 명예훼손, 개인정보 유출</li>
                    <li>• 지식재산권(저작권, 상표권 등) 침해</li>
                    <li>• 음식 관련 허위·과장 광고 (식품위생법 위반 등)</li>
                  </ul>
                </div>
  
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-3">2. 윤리 기준 위반 콘텐츠</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-1">
                    <li>• 음란, 폭력, 차별, 혐오 표현이 포함된 콘텐츠</li>
                    <li>• 타인의 사진이나 콘텐츠를 무단 복제하거나 도용한 경우</li>
                    <li>• 실제 음식과 다른 허위 이미지 업로드</li>
                  </ul>
                </div>
  
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-3">3. 서비스 목적에 부합하지 않는 콘텐츠</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-1">
                    <li>• 음식과 무관한 이미지 또는 내용</li>
                    <li>• 무단 광고, 홍보, 타 업체 정보가 포함된 콘텐츠</li>
                    <li>• 경쟁업체 비방 또는 부당한 비교 광고</li>
                  </ul>
                </div>
  
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-3">4. 기술적 제한 콘텐츠</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-1">
                    <li>• 악성코드, 바이러스가 포함된 파일</li>
                    <li>• 서비스 시스템에 부하를 주는 과도한 용량의 파일</li>
                    <li>• 저화질 또는 식별 불가능한 이미지</li>
                  </ul>
                </div>
              </div>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">제5조 (부정이용 및 이용제한)</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-3">1. 부정이용 유형</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">계정 부정 사용</h4>
                      <p className="text-gray-700">타인의 계정 도용, 복수 계정으로 서비스 중복 이용</p>
                    </div>
  
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">시스템 악용</h4>
                      <p className="text-gray-700">매크로/자동화 도구 사용, 해킹 시도, 시스템 오류 악용</p>
                    </div>
  
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">콘텐츠 부정 생성</h4>
                      <ul className="text-gray-700 leading-relaxed space-y-1 ml-4">
                        <li>• 실제 운영하지 않는 가게 정보로 서비스 이용</li>
                        <li>• 타인의 음식 사진을 자신의 메뉴로 등록</li>
                        <li>• AI 생성 결과를 상업적으로 무단 배포</li>
                      </ul>
                    </div>
  
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">서비스 남용</h4>
                      <ul className="text-gray-700 leading-relaxed space-y-1 ml-4">
                        <li>• 과도한 API 호출로 서비스 안정성 저해</li>
                        <li>• 무료 서비스 한도를 우회하려는 시도</li>
                      </ul>
                    </div>
                  </div>
                </div>
  
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-3">2. 제재 조치 유형</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-2">
                    <li><span className="font-medium">경고 조치</span>: 1차 위반 시 경고 메시지 발송</li>
                    <li><span className="font-medium">기능 제한</span>: 특정 기능(촬영 가이드, AI 생성 등) 일시 사용 제한</li>
                    <li><span className="font-medium">콘텐츠 제한</span>: 업로드 또는 생성 콘텐츠 삭제, 새로운 콘텐츠 생성 제한</li>
                    <li><span className="font-medium">계정 정지</span>: 일시적(1일~30일) 또는 영구적 서비스 이용 정지</li>
                    <li><span className="font-medium">법적 조치</span>: 중대한 위반 시 관련 기관 신고 및 손해배상 청구</li>
                  </ul>
                </div>
  
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-3">3. 처리 절차</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-2">
                    <li><span className="font-medium">사전 경고</span>: 경미한 위반 시 개선 기회 제공 후 제재</li>
                    <li><span className="font-medium">즉시 조치</span>: 중대한 위반 또는 시스템 위협 시 사전 고지 없이 즉시 제재</li>
                    <li><span className="font-medium">이의제기</span>: 제재 후 7영업일 이내 소명서 제출 시 재검토</li>
                  </ul>
                </div>
              </div>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">제6조 (서비스 이용 기준)</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-3">1. 촬영 가이드 서비스 이용 시</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-2">
                    <li>• 실제 본인이 운영하는 음식점의 메뉴만 촬영해야 합니다</li>
                    <li>• 제공된 가이드를 준수하여 촬영하되, 고의로 시스템을 속이는 행위는 금지됩니다</li>
                    <li>• 촬영된 이미지는 개인 또는 해당 음식점 운영 목적으로만 사용해야 합니다</li>
                  </ul>
                </div>
  
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-3">2. AI 생성 서비스 이용 시</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-2">
                    <li>• 생성된 콘텐츠의 저작권은 회사와 이용자에게 공동으로 귀속됩니다</li>
                    <li>• 생성된 콘텐츠를 상업적으로 재판매하거나 타인에게 제공하는 것은 제한됩니다</li>
                    <li>• AI가 생성한 메뉴 설명이나 홍보 문구는 실제 메뉴와 일치해야 합니다</li>
                  </ul>
                </div>
  
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-3">3. 콘텐츠 보관 및 삭제</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-2">
                    <li>• 회원이 업로드한 원본 이미지는 회원 요청 시 즉시 삭제됩니다</li>
                    <li>• 생성된 콘텐츠는 서비스 개선을 위해 익명화하여 활용될 수 있습니다</li>
                    <li>• 회원 탈퇴 시 모든 개인 콘텐츠는 즉시 삭제됩니다</li>
                  </ul>
                </div>
              </div>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">제7조 (기타 운영 기준)</h2>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li><span className="font-medium">서비스 정상 이용</span>: 의도적으로 음식 이미지가 아닌 다른 이미지로 배경 제거 서비스를 이용하는 행위 금지</li>
                <li><span className="font-medium">커뮤니티 질서</span>: 고객센터 및 피드백 채널에서의 욕설, 위협, 무례한 태도는 이용 제한 사유</li>
                <li><span className="font-medium">반복 위반</span>: 동일 유형 위반을 3회 이상 반복할 경우 <span className="font-semibold text-red-600">서비스 영구 정지</span> 조치</li>
                <li><span className="font-medium">긴급 조치</span>: 서비스 안정성을 위협하는 행위 발견 시 <span className="font-semibold text-red-600">사전 고지 없이 즉시 조치</span></li>
              </ul>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">제8조 (문의 및 소명 접수)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                운영정책 관련 문의 또는 제재에 대한 이의제기는
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <div className="flex items-center">
                  <span className="font-medium text-gray-800 w-20">이메일</span>
                  <span className="text-gray-700">: chalpuofficail@gmail.com</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium text-gray-800 w-20">앱 내</span>
                  <span className="text-gray-700">: 설정 &gt; 고객센터 &gt; 문의하기</span>
                </div>
              </div>
              <p className="text-gray-700 mt-3">를 통해 접수할 수 있습니다.</p>
            </section>
  
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <div className="text-gray-500 space-y-2">
                <p className="font-medium text-lg">📅 시행일: 2025년 7월 28일</p>
                <p className="text-sm">찰푸 운영정책</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }