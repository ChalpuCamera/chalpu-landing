import axios from "axios";
import {
  tokenStorage,
  isWebView,
  notifyTokenExpired,
  isAndroidApp,
  isIOSApp,
} from "../token/tokenUtils";
import { useAuthStore } from "../stores/useAuthStore";

// 기본 axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터 (일반 앱 토큰만 처리)
apiClient.interceptors.request.use(
  (config) => {
    // 일반 앱 토큰만 확인
    const token = tokenStorage.getToken("accessToken");

    if (token) {
      // Bearer 접두사가 이미 있는지 확인
      const bearerToken = token.startsWith("Bearer ")
        ? token
        : `Bearer ${token}`;
      config.headers.Authorization = bearerToken;
    }

    console.log("API 요청:", config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error("요청 인터셉터 에러:", error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터
apiClient.interceptors.response.use(
  (response) => {
    console.log("API 응답 성공:", response.status, response.config.url);
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    console.error("API 응답 에러:", error.response?.status, error.config?.url);

    // 401 에러 (인증 실패)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // 리프레시 토큰으로 새 액세스 토큰 발급
        const refreshToken = useAuthStore.getState().refreshToken;
        if (refreshToken) {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh`,
            { refreshToken }
          );

          const newAccessToken = response.data.accessToken;
          const newRefreshToken = response.data.refreshToken;

          // zustand 스토어에 토큰 업데이트
          useAuthStore.getState().setTokens(newAccessToken, newRefreshToken);

          // 원래 요청 재시도
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiClient(originalRequest);
        }
      } catch (refreshError) {
        // 리프레시 토큰도 만료된 경우
        // zustand 스토어에서 인증 정보 제거
        useAuthStore.getState().clearAuth();

        // 네이티브 앱에게 토큰 만료 알림
        notifyTokenExpired();

        // 웹뷰가 아닌 경우에만 메인 페이지로 리다이렉트 (무한루프 방지)
        if (typeof window !== "undefined" && !isWebView()) {
          console.log("인증 에러 발생 - 메인 페이지로 리다이렉트");
          window.location.href = "/";
        }
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
