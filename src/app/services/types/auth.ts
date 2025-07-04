// 로그인 요청 타입
export interface LoginRequest {
  email: string;
  password: string;
}

// 회원가입 요청 타입
export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  businessName?: string;
  businessType?: string;
}

// 인증 응답 타입
export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

// 사용자 정보 타입
export interface User {
  id: number;
  email: string;
  name: string;
  businessName?: string;
  businessType?: string;
  createdAt: string;
  updatedAt: string;
}

// 토큰 갱신 요청 타입
export interface RefreshTokenRequest {
  refreshToken: string;
}

// 토큰 갱신 응답 타입
export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}

// 비밀번호 재설정 요청 타입
export interface ResetPasswordRequest {
  email: string;
}

// 비밀번호 변경 요청 타입
export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}
