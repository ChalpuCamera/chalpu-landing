// app/privacy/page.tsx
export default function Privacy() {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 border-b pb-4">
              개인정보처리방침
            </h1>
            
            <div className="text-gray-700 leading-relaxed mb-8">
              <p className="mb-4">
                찰푸(이하 &apos;회사&apos;)는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고, 
                이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립·공개합니다.
              </p>
              <p className="text-sm font-medium">
                ○ 이 개인정보처리방침은 2025년 7월 28일부터 적용됩니다.
              </p>
            </div>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">제1조 (개인정보의 처리 목적)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                회사는 다음의 목적을 위해 개인정보를 처리합니다. 처리한 개인정보는 명시된 목적 이외의 용도로는 
                이용되지 않으며, 이용 목적 변경 시「개인정보 보호법」제18조에 따라 별도의 동의를 받는 등 
                필요한 조치를 이행할 예정입니다.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">1. 회원가입 및 관리</h3>
                  <p className="text-gray-700 leading-relaxed">
                    회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 
                    각종 고지·통지 목적으로 개인정보를 처리합니다.
                  </p>
                </div>
  
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">2. 서비스 제공</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-1">
                    <li>• 음식 사진 촬영 가이드 서비스 제공</li>
                    <li>• AI 기반 메뉴 설명(디스크립션) 생성 서비스 제공</li>
                    <li>• 메뉴판 자동 생성 서비스 제공</li>
                    <li>• 포스터 및 홍보물 생성 서비스 제공</li>
                    <li>• 플랫폼별 사진 규격 최적화 서비스 제공</li>
                  </ul>
                </div>
  
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">3. 개인화 서비스 제공</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-1">
                    <li>• 사용자 업종별 맞춤 템플릿 제공</li>
                    <li>• 가게 정보에 맞춤화된 콘텐츠 생성</li>
                    <li>• 촬영 가이드 및 피드백 제공</li>
                  </ul>
                </div>
  
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">4. 마케팅 및 광고 활용 (선택 동의 시)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    신규 서비스 개발 및 맞춤 서비스 제공, 이벤트·프로모션 안내 등을 목적으로 개인정보를 처리합니다.
                  </p>
                </div>
  
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">5. 서비스 개선 및 분석</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-1">
                    <li>• 서비스 이용 통계 분석</li>
                    <li>• 사용자 선호도 분석 및 서비스 개선</li>
                    <li>• 사진 품질 및 AI 성능 향상</li>
                  </ul>
                </div>
              </div>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">제2조 (처리하는 개인정보 항목)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                회사는 다음의 개인정보 항목을 처리하고 있습니다.
              </p>
  
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">1. 회원가입 및 관리</h3>
                  <p className="text-gray-700">소셜 로그인 시: 각 플랫폼에서 제공하는 이메일 (카카오, 구글, 네이버)</p>
                </div>
  
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">2. 가게 정보 및 서비스 이용</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 필수항목: 가게명</li>
                    <li>• 선택항목: 가게 주소, 업종</li>
                  </ul>
                </div>
  
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">3. 촬영 및 콘텐츠 생성 서비스 이용</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 업로드한 음식 사진 및 메타데이터</li>
                    <li>• 메뉴명, 가격, 메뉴 설명</li>
                    <li>• 생성된 메뉴판, 포스터, 홍보물 데이터</li>
                    <li>• 서비스 이용 기록 및 설정 정보</li>
                  </ul>
                </div>
  
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">4. 자동 수집 정보</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 접속 IP 주소, 쿠키, 방문일시</li>
                    <li>• 서비스 이용 기록, 접속 로그</li>
                    <li>• 디바이스 정보(OS, 브라우저 종류 등)</li>
                    <li>• 앱 사용 패턴 및 기능 이용 현황</li>
                  </ul>
                </div>
              </div>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">제3조 (개인정보의 처리 및 보유 기간)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 
                동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
              </p>
  
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <p className="text-gray-700"><span className="font-medium">회원가입 정보</span> → 회원 탈퇴 후 30일까지 (서비스 제공)</p>
                <p className="text-gray-700"><span className="font-medium">가게 정보</span> → 회원 탈퇴 후 30일까지 (서비스 제공)</p>
                <p className="text-gray-700"><span className="font-medium">업로드 사진 및 생성 콘텐츠</span> → 사용자 삭제 요청 시 또는 회원 탈퇴 후 30일까지 (서비스 제공)</p>
                <p className="text-gray-700"><span className="font-medium">서비스 이용 기록</span> → 탈퇴 후 30일까지 (서비스 개선 및 분석)</p>
                <p className="text-gray-700"><span className="font-medium">접속 로그 기록</span> → 탈퇴 후 30일까지 (통신비밀보호법)</p>
                <p className="text-gray-700"><span className="font-medium">부정 이용 기록</span> → 탈퇴 후 30일까지 (부정 이용 방지)</p>
                <p className="text-gray-700"><span className="font-medium">소비자 불만·분쟁처리 기록</span> → 탈퇴 후 30일까지 (전자상거래법)</p>
              </div>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">제4조 (개인정보의 제3자 제공)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 
                정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조에 해당하는 경우에만 
                개인정보를 제3자에게 제공합니다.
              </p>
              <p className="text-gray-700 font-medium">
                현재 회사는 정보주체의 개인정보를 제3자에게 제공하고 있지 않습니다.
              </p>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">제5조 (개인정보처리의 위탁)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
              </p>
  
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Amazon Web Services (AWS)</h3>
                  <p className="text-gray-700">위탁업무: 클라우드 서버 운영 및 데이터 저장</p>
                  <p className="text-gray-700">보유 및 이용기간: 위탁계약 종료 시까지</p>
                </div>
  
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Google LLC</h3>
                  <p className="text-gray-700">위탁업무: 구글 소셜 로그인 서비스 제공</p>
                  <p className="text-gray-700">위탁 개인정보: 이메일</p>
                  <p className="text-gray-700">보유 및 이용기간: 회원 탈퇴 후 30일 또는 서비스 해지 시까지</p>
                </div>
  
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">카카오 코퍼레이션</h3>
                  <p className="text-gray-700">위탁업무: 카카오 소셜 로그인 서비스 제공</p>
                  <p className="text-gray-700">위탁 개인정보: 이메일</p>
                  <p className="text-gray-700">보유 및 이용기간: 회원 탈퇴 후 30일 또는 서비스 해지 시까지</p>
                </div>
  
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">네이버 코퍼레이션</h3>
                  <p className="text-gray-700">위탁업무: 네이버 소셜 로그인 서비스 제공</p>
                  <p className="text-gray-700">위탁 개인정보: 이메일</p>
                  <p className="text-gray-700">보유 및 이용기간: 회원 탈퇴 후 30일 또는 서비스 해지 시까지</p>
                </div>
              </div>
  
              <p className="text-gray-700 leading-relaxed mt-4">
                회사는 위탁계약 체결 시 「개인정보 보호법」 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 
                기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 
                계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.
              </p>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">제6조 (정보주체의 권리·의무 및 행사방법)</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">① 권리 행사</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
                  </p>
                  <ol className="text-gray-700 space-y-1">
                    <li>1. 개인정보 열람 요구</li>
                    <li>2. 오류 등이 있을 경우 정정·삭제 요구</li>
                    <li>3. 처리정지 요구</li>
                  </ol>
                </div>
  
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">② 권리 행사 방법</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    위 권리 행사는 회사에 대해 서면, 전화, 전자우편 등을 통하여 하실 수 있으며 
                    회사는 이에 대해 지체없이 조치하겠습니다.
                  </p>
                  <p className="text-gray-700 font-medium">연락처: chalpuofficial@gmail.com</p>
                </div>
  
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">③ 권리 행사 시 주의사항</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-1">
                    <li>• 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 권리를 행사하실 수 있습니다.</li>
                    <li>• 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」에 의하여 정보주체의 권리가 제한될 수 있습니다.</li>
                    <li>• 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 삭제를 요구할 수 없습니다.</li>
                  </ul>
                </div>
              </div>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">제7조 (개인정보의 파기)</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">① 파기원칙</h3>
                  <p className="text-gray-700 leading-relaxed">
                    회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 
                    지체없이 해당 개인정보를 파기합니다.
                  </p>
                </div>
  
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">② 파기방법</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-1">
                    <li>• 전자적 파일 형태: 기록을 재생할 수 없도록 <strong>로우레벨 포맷(Low Level Format)</strong> 등의 방법을 이용하여 파기</li>
                    <li>• 기타 기록물, 인쇄물, 서면 등: 분쇄하거나 소각하여 파기</li>
                  </ul>
                </div>
  
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">계정 및 데이터 삭제 안내</h3>
                  <p className="text-gray-700 mb-4">(앱/개발자 이름: <strong>찰푸</strong>)</p>
  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">계정 삭제 절차</h4>
                    <ol className="text-gray-700 leading-relaxed space-y-2">
                      <li>1. 앱 실행 → 하단 메뉴 &quot;마이페이지&quot; 선택</li>
                      <li>2. 화면 하단의 <strong>&quot;회원 탈퇴&quot;</strong> 버튼 탭</li>
                      <li>3. 안내 메시지 확인 후 <strong>&quot;탈퇴&quot;</strong> 선택</li>
                      <li>4. &quot;삭제 요청 완료&quot; 메시지를 확인하면 요청이 접수됩니다.</li>
                    </ol>
                    <p className="text-gray-700 mt-3">
                      ※ 앱 접근이 어려운 경우 chalpuofficial@gmail.com으로 &quot;계정 삭제 요청&quot; 메일을 주시면 
                      3 영업일 이내 처리 안내를 드립니다.
                    </p>
                  </div>
  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">삭제·보관되는 데이터 종류 및 기간</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-gray-700 border border-gray-300">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="border border-gray-300 p-2 text-left">구분</th>
                            <th className="border border-gray-300 p-2 text-left">예시 항목</th>
                            <th className="border border-gray-300 p-2 text-left">처리 방식</th>
                            <th className="border border-gray-300 p-2 text-left">보관 기간</th>
                            <th className="border border-gray-300 p-2 text-left">보관 사유</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-2">개인 식별 정보</td>
                            <td className="border border-gray-300 p-2">이메일, 이름, 프로필 사진, 내부 사용자 ID</td>
                            <td className="border border-gray-300 p-2">삭제 요청 즉시 접근 불가 처리 → 30일 경과 후 물리적 삭제</td>
                            <td className="border border-gray-300 p-2">최대 30일</td>
                            <td className="border border-gray-300 p-2">사용자가 실수로 삭제 요청한 경우 복구 지원, 보안 로그 대응</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2">사용자 콘텐츠</td>
                            <td className="border border-gray-300 p-2">촬영 사진, 메뉴·가이드 설정 등 앱 내에서 생성한 데이터</td>
                            <td className="border border-gray-300 p-2">동일</td>
                            <td className="border border-gray-300 p-2">최대 30일</td>
                            <td className="border border-gray-300 p-2">동일</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2">인증 정보</td>
                            <td className="border border-gray-300 p-2">OAuth 액세스·리프레시 토큰 등</td>
                            <td className="border border-gray-300 p-2">동일</td>
                            <td className="border border-gray-300 p-2">최대 30일</td>
                            <td className="border border-gray-300 p-2">동일</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2">시스템 로그</td>
                            <td className="border border-gray-300 p-2">서버 접근/오류 로그</td>
                            <td className="border border-gray-300 p-2">동일</td>
                            <td className="border border-gray-300 p-2">최대 30일</td>
                            <td className="border border-gray-300 p-2">서비스 안정성, 악용·보안 사고 분석</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="text-gray-700 mt-4 space-y-2">
                      <p>• 30일이 지나면 백엔드 저장소와 백업에서 완전히 제거되어 복구가 불가능합니다.</p>
                      <p>• 관련 정책이 변경될 경우 앱 공지 및 본 페이지를 통해 사전 안내해 드립니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">제8조 (개인정보의 안전성 확보조치)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
              </p>
  
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">1. 관리적 조치</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-1">
                    <li>• 내부관리계획 수립 및 시행</li>
                    <li>• 개인정보 취급 직원의 최소화 및 교육</li>
                    <li>• 정기적인 자체 감사 실시</li>
                  </ul>
                </div>
  
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">2. 기술적 조치</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-1">
                    <li>• 개인정보처리시스템 등의 접근권한 관리</li>
                    <li>• 접근통제시스템 설치</li>
                    <li>• 개인정보의 암호화</li>
                    <li>• 해킹 등에 대비한 기술적 대책</li>
                  </ul>
                </div>
  
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">3. 물리적 조치</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-1">
                    <li>• 전산실, 자료보관실 등의 접근통제</li>
                  </ul>
                </div>
              </div>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">제9조 (개인정보를 자동으로 수집하는 장치의 설치·운영 및 거부)</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">① 쿠키의 사용 목적</h3>
                  <p className="text-gray-700 leading-relaxed">
                    회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 
                    수시로 불러오는 &apos;쿠키(cookie)&apos;를 사용합니다.
                  </p>
                </div>
  
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">② 쿠키 설치·운영 및 거부</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-1">
                    <li>• 웹브라우저 상단의 도구 &gt; 인터넷 옵션 &gt; 개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부할 수 있습니다.</li>
                    <li>• 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.</li>
                  </ul>
                </div>
              </div>
            </section>
  
            <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">제10조 (개인정보 보호책임자)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 
              정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">▶ 개인정보 보호책임자</h3>
                <div className="space-y-1 text-gray-700">
                  <p>성명: 박우성</p>
                  <p>직책: 팀장</p>
                  <p>연락처: chalpuofficial@gmail.com</p>
                  <p>전화: 010-5671-9936</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">▶ 개인정보 보호 담당부서</h3>
                <div className="space-y-1 text-gray-700">
                  <p>부서명: 개발팀</p>
                  <p>담당자: 주병주</p>
                  <p>연락처: chalpuofficial@gmail.com</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mt-4">
              정보주체는 회사의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 
              관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 회사는 정보주체의 문의에 대해 
              지체없이 답변 및 처리해드릴 것입니다.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">제11조 (개인정보의 열람청구를 접수·처리하는 부서)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              정보주체는 「개인정보 보호법」 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">▶ 개인정보 열람청구 접수·처리 부서</h3>
              <div className="space-y-1 text-gray-700">
                <p>부서명: 개발팀</p>
                <p>담당자: 주병주</p>
                <p>연락처: chalpuofficial@gmail.com</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">제12조 (정보주체의 권익침해에 대한 구제방법)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 
              한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">관련 기관 연락처</h3>
              <div className="space-y-2 text-gray-700">
                <p>1. 개인정보분쟁조정위원회: (국번없이) 1833-6972 (www.kopico.go.kr)</p>
                <p>2. 개인정보침해신고센터: (국번없이) 118 (privacy.kisa.or.kr)</p>
                <p>3. 대검찰청: (국번없이) 1301 (www.spo.go.kr)</p>
                <p>4. 경찰청: (국번없이) 182 (ecrm.cyber.go.kr)</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 
              규정에 의한 요구에 대하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 
              행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">제13조 (개인정보 처리방침 변경)</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">① 변경 공지</h3>
                <p className="text-gray-700 leading-relaxed">
                  이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 
                  있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">② 시행일</h3>
                <div className="text-gray-700 space-y-1">
                  <p>공고일자: 2025년 7월 28일</p>
                  <p>시행일자: 2025년 7월 28일</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">③ 이전 버전 확인</h3>
                <p className="text-gray-700 leading-relaxed">
                  이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다.
                </p>
                <p className="text-gray-600 italic">해당사항 없음 (최초 제정)</p>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <div className="text-gray-500 space-y-2">
              <p className="font-medium">본 방침은 2025년 7월 28일부터 시행됩니다.</p>
              <p className="text-sm">찰푸 개인정보처리방침</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}