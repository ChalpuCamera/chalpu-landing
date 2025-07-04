import apiClient from "./base";
import { useAuthStore } from "../stores/useAuthStore";
import type {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  ResetPasswordRequest,
  ChangePasswordRequest,
  User,
} from "../types/auth";
import type { ApiResponse } from "../types/common";

// 로그인
const login = async (data: LoginRequest): Promise<AuthResponse> => {
  const response = await apiClient.post<ApiResponse<AuthResponse>>(
    "/auth/login",
    data
  );

  const authData = response.data.data;

  // zustand 스토어에 인증 정보 저장
  useAuthStore
    .getState()
    .setAuth(authData.user, authData.accessToken, authData.refreshToken);

  return authData;
};

// 회원가입
const register = async (data: RegisterRequest): Promise<AuthResponse> => {
  const response = await apiClient.post<ApiResponse<AuthResponse>>(
    "/auth/register",
    data
  );

  const authData = response.data.data;

  // zustand 스토어에 인증 정보 저장
  useAuthStore
    .getState()
    .setAuth(authData.user, authData.accessToken, authData.refreshToken);

  return authData;
};

// 로그아웃
const logout = async (): Promise<void> => {
  await apiClient.post("/auth/logout");

  // zustand 스토어에서 인증 정보 제거 (토큰도 함께 삭제됨)
  useAuthStore.getState().clearAuth();
};

// 토큰 갱신
const refreshToken = async (
  data: RefreshTokenRequest
): Promise<RefreshTokenResponse> => {
  const response = await apiClient.post<ApiResponse<RefreshTokenResponse>>(
    "/auth/refresh",
    data
  );
  return response.data.data;
};

// 현재 사용자 정보 조회
const getCurrentUser = async (): Promise<User> => {
  const response = await apiClient.get<ApiResponse<User>>("/auth/me");
  const user = response.data.data;

  // zustand 스토어에 사용자 정보 업데이트
  useAuthStore.getState().setUser(user);

  return user;
};

// 비밀번호 재설정 요청
const resetPassword = async (data: ResetPasswordRequest): Promise<void> => {
  await apiClient.post("/auth/reset-password", data);
};

// 비밀번호 변경
const changePassword = async (data: ChangePasswordRequest): Promise<void> => {
  await apiClient.put("/auth/change-password", data);
};

// 이메일 인증
const verifyEmail = async (token: string): Promise<void> => {
  await apiClient.post("/auth/verify-email", { token });
};

// 이메일 인증 재발송
const resendVerificationEmail = async (): Promise<void> => {
  await apiClient.post("/auth/resend-verification");
};

export {
  login,
  register,
  logout,
  refreshToken,
  getCurrentUser,
  resetPassword,
  changePassword,
  verifyEmail,
  resendVerificationEmail,
};
