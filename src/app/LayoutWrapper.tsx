"use client";
import { usePathname } from "next/navigation";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();

  // 랜딩 페이지는 웹뷰 컨테이너 적용하지 않음
  const isLandingPage = pathname === "/";

  if (isLandingPage) {
    return <>{children}</>;
  }

  // 다른 모든 페이지는 웹뷰 컨테이너 적용
  return <div className="webview-container">{children}</div>;
}
