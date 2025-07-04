// 웹뷰 환경 체크
export const isWebView = () => {
  return (
    typeof window !== "undefined" &&
    (window.navigator.userAgent.includes("wv") ||
      window.navigator.userAgent.includes("WebView") ||
      // @ts-expect-error - 안드로이드 네이티브 앱에서 주입하는 인터페이스
      window.Android !== undefined ||
      // @ts-expect-error - iOS 네이티브 앱에서 주입하는 인터페이스
      window.webkit?.messageHandlers !== undefined)
  );
};

// 안드로이드 네이티브 앱 체크
export const isAndroidApp = () => {
  return (
    typeof window !== "undefined" &&
    // @ts-expect-error - 안드로이드 네이티브 앱에서 주입하는 인터페이스
    window.Android !== undefined
  );
};

// iOS 네이티브 앱 체크
export const isIOSApp = () => {
  return (
    typeof window !== "undefined" &&
    // @ts-expect-error - iOS 네이티브 앱에서 주입하는 인터페이스
    window.webkit?.messageHandlers !== undefined
  );
};

// 토큰 저장/조회 유틸리티
export const tokenStorage = {
  getToken: (key: string): string | null => {
    if (typeof window === "undefined") return null;

    // 안드로이드 네이티브 앱에서 토큰 가져오기
    if (isAndroidApp()) {
      try {
        // @ts-expect-error - 안드로이드 네이티브 앱에서 주입하는 인터페이스
        const token = window.Android.getToken(key);
        if (token) return token;
      } catch (e) {
        console.log("안드로이드 앱 브릿지 토큰 조회 실패, localStorage 사용");
      }
    }

    // iOS 네이티브 앱에서 토큰 가져오기
    if (isIOSApp()) {
      try {
        // @ts-expect-error - iOS 네이티브 앱에서 주입하는 인터페이스
        window.webkit.messageHandlers.tokenHandler.postMessage({
          type: "GET_TOKEN",
          key: key,
        });
        // iOS의 경우 비동기적으로 응답을 받아야 하므로 localStorage 사용
      } catch (e) {
        console.log("iOS 앱 브릿지 토큰 조회 실패, localStorage 사용");
      }
    }

    return localStorage.getItem(key);
  },

  setToken: (key: string, value: string): void => {
    if (typeof window === "undefined") return;

    // 안드로이드 네이티브 앱에 토큰 저장
    if (isAndroidApp()) {
      try {
        // @ts-expect-error - 안드로이드 네이티브 앱에서 주입하는 인터페이스
        window.Android.setToken(key, value);
      } catch (e) {
        console.log("안드로이드 앱 브릿지 토큰 저장 실패, localStorage 사용");
      }
    }

    // iOS 네이티브 앱에 토큰 저장
    if (isIOSApp()) {
      try {
        // @ts-expect-error - iOS 네이티브 앱에서 주입하는 인터페이스
        window.webkit.messageHandlers.tokenHandler.postMessage({
          type: "SET_TOKEN",
          key: key,
          value: value,
        });
      } catch (e) {
        console.log("iOS 앱 브릿지 토큰 저장 실패, localStorage 사용");
      }
    }

    localStorage.setItem(key, value);
  },

  removeToken: (key: string): void => {
    if (typeof window === "undefined") return;

    // 안드로이드 네이티브 앱에서 토큰 삭제
    if (isAndroidApp()) {
      try {
        // @ts-expect-error - 안드로이드 네이티브 앱에서 주입하는 인터페이스
        window.Android.removeToken(key);
      } catch (e) {
        console.log("안드로이드 앱 브릿지 토큰 삭제 실패, localStorage 사용");
      }
    }

    // iOS 네이티브 앱에서 토큰 삭제
    if (isIOSApp()) {
      try {
        // @ts-expect-error - iOS 네이티브 앱에서 주입하는 인터페이스
        window.webkit.messageHandlers.tokenHandler.postMessage({
          type: "REMOVE_TOKEN",
          key: key,
        });
      } catch (e) {
        console.log("iOS 앱 브릿지 토큰 삭제 실패, localStorage 사용");
      }
    }

    localStorage.removeItem(key);
  },
};

// 네이티브 앱에 토큰 만료 알림
export const notifyTokenExpired = () => {
  if (isAndroidApp()) {
    try {
      // @ts-expect-error - 안드로이드 네이티브 앱에서 주입하는 인터페이스
      window.Android.onTokenExpired();
    } catch (e) {
      console.log("안드로이드 앱 로그아웃 알림 실패");
    }
  }

  if (isIOSApp()) {
    try {
      // @ts-expect-error - iOS 네이티브 앱에서 주입하는 인터페이스
      window.webkit.messageHandlers.authHandler.postMessage({
        type: "TOKEN_EXPIRED",
      });
    } catch (e) {
      console.log("iOS 앱 로그아웃 알림 실패");
    }
  }
};
