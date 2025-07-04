import { create } from "zustand";
import { tokenStorage } from "../token/tokenUtils";
import type { User } from "../types/auth";

interface AuthState {
  // 상태
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  // 액션
  setAuth: (user: User, accessToken: string, refreshToken: string) => void;
  setUser: (user: User) => void;
  setTokens: (accessToken: string, refreshToken?: string) => void;
  clearAuth: () => void;
  initializeAuth: () => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  // 초기 상태
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  isLoading: false,

  // 로그인 성공 시 인증 정보 설정
  setAuth: (user: User, accessToken: string, refreshToken: string) => {
    // 토큰을 localStorage와 네이티브 앱에 저장
    tokenStorage.setToken("accessToken", accessToken);
    tokenStorage.setToken("refreshToken", refreshToken);

    set({
      user,
      accessToken,
      refreshToken,
      isAuthenticated: true,
    });
  },

  // 사용자 정보 업데이트
  setUser: (user: User) => {
    set({ user });
  },

  // 토큰 업데이트 (리프레시 토큰 갱신 시)
  setTokens: (accessToken: string, refreshToken?: string) => {
    tokenStorage.setToken("accessToken", accessToken);

    if (refreshToken) {
      tokenStorage.setToken("refreshToken", refreshToken);
    }

    set({
      accessToken,
      refreshToken: refreshToken || get().refreshToken,
      isAuthenticated: true,
    });
  },

  // 로그아웃 또는 토큰 만료 시 인증 정보 제거
  clearAuth: () => {
    tokenStorage.removeToken("accessToken");
    tokenStorage.removeToken("refreshToken");

    set({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
    });
  },

  // 앱 초기화 시 저장된 토큰으로 인증 상태 복원
  initializeAuth: () => {
    const accessToken = tokenStorage.getToken("accessToken");
    const refreshToken = tokenStorage.getToken("refreshToken");

    if (accessToken && refreshToken) {
      set({
        accessToken,
        refreshToken,
        isAuthenticated: true,
      });
    }
  },

  // 로딩 상태 설정
  setLoading: (loading: boolean) => {
    set({ isLoading: loading });
  },
}));
