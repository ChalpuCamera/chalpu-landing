"use client";

import { useState, useEffect, useCallback } from "react";
import { getGuides, deleteGuide, uploadGuide } from "@/app/services/apis/guide";
import { Guide, GuideFileUploadItem } from "@/app/services/types/guide";
import { toast } from "sonner";
import { Button } from "@/components/landing/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/landing/ui/card";
import { Input } from "@/components/landing/ui/input";
import { Label } from "@/components/landing/ui/label";

export default function AdminPage() {
  const [mounted, setMounted] = useState(false);
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadItems, setUploadItems] = useState<GuideFileUploadItem[]>([]);
  const [dragOver, setDragOver] = useState(false);

  // 토큰 관리 상태
  const [authToken, setAuthToken] = useState("");
  const [tokenInput, setTokenInput] = useState("");
  const [tokenStatus, setTokenStatus] = useState<"none" | "valid" | "invalid">(
    "none"
  );

  // 뷰 모드 상태 (그리드/리스트)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // 클라이언트에서만 렌더링하도록 설정
  useEffect(() => {
    setMounted(true);

    // 로컬 스토리지에서 저장된 토큰 불러오기
    const savedToken = localStorage.getItem("admin_auth_token");
    if (savedToken) {
      setAuthToken(savedToken);
      setTokenInput(savedToken);
      setTokenStatus("valid");
    }
  }, []);

  // 토큰 저장 함수
  const saveToken = () => {
    if (!tokenInput.trim()) {
      toast.error("토큰을 입력해주세요.");
      return;
    }

    try {
      localStorage.setItem("admin_auth_token", tokenInput.trim());
      setAuthToken(tokenInput.trim());
      setTokenStatus("valid");
      toast.success("토큰이 저장되었습니다.");

      // 토큰 저장 후 가이드 목록 다시 로드
      loadGuides();
    } catch (error) {
      console.error("Failed to save token:", error);
      toast.error("토큰 저장에 실패했습니다.");
    }
  };

  // 토큰 제거 함수
  const removeToken = () => {
    localStorage.removeItem("admin_auth_token");
    setAuthToken("");
    setTokenInput("");
    setTokenStatus("none");
    setGuides([]);
    toast.success("토큰이 제거되었습니다.");
  };

  // 토큰 테스트 함수
  const testToken = async () => {
    if (!authToken) {
      toast.error("저장된 토큰이 없습니다.");
      return;
    }

    try {
      // 간단한 API 호출로 토큰 유효성 테스트
      await getGuides({ page: 0, size: 1 });
      setTokenStatus("valid");
      toast.success("토큰이 유효합니다.");
    } catch (error) {
      setTokenStatus("invalid");
      toast.error("토큰이 유효하지 않습니다.");
    }
  };

  // 가이드 목록 로드
  const loadGuides = useCallback(async () => {
    if (!authToken) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await getGuides({ page: 0, size: 50 });
      setGuides(response.content);
      setTokenStatus("valid");
    } catch (error) {
      console.error("Failed to load guides:", error);
      setTokenStatus("invalid");
      toast.error(
        "가이드 목록을 불러오는데 실패했습니다. 토큰을 확인해주세요."
      );
    } finally {
      setLoading(false);
    }
  }, [authToken]);

  useEffect(() => {
    if (mounted && authToken) {
      loadGuides();
    }
  }, [mounted, authToken, loadGuides]);

  // 파일 업로드 처리
  const handleFileUpload = async (files: FileList) => {
    if (!authToken) {
      toast.error("먼저 인증 토큰을 설정해주세요.");
      return;
    }

    const fileArray = Array.from(files);

    // XML 파일만 허용
    const validFiles = fileArray.filter(
      (file) =>
        file.type.includes("xml") || file.name.toLowerCase().endsWith(".xml")
    );

    if (validFiles.length !== fileArray.length) {
      toast.error("XML 파일만 업로드할 수 있습니다.");
    }

    if (validFiles.length === 0) return;

    // 업로드 아이템 생성 (클라이언트에서만 실행되므로 안전)
    const newUploadItems: GuideFileUploadItem[] = validFiles.map(
      (file, index) => ({
        id: `upload-${Date.now()}-${index}-${Math.random()
          .toString(36)
          .substring(2)}`,
        file,
        progress: 0,
        status: "pending",
      })
    );

    setUploadItems((prev) => [...prev, ...newUploadItems]);
    setUploading(true);

    // 파일 업로드 실행
    for (const item of newUploadItems) {
      try {
        // 상태 업데이트: 업로드 시작
        setUploadItems((prev) =>
          prev.map((i) =>
            i.id === item.id ? { ...i, status: "uploading" } : i
          )
        );

        // 파일 업로드
        const guide = await uploadGuide(item.file, (progress) => {
          setUploadItems((prev) =>
            prev.map((i) => (i.id === item.id ? { ...i, progress } : i))
          );
        });

        // 상태 업데이트: 업로드 완료
        setUploadItems((prev) =>
          prev.map((i) =>
            i.id === item.id ? { ...i, status: "completed", guide } : i
          )
        );

        toast.success(`${item.file.name} 업로드 완료`);
      } catch (error) {
        console.error(`Upload failed for ${item.file.name}:`, error);
        setUploadItems((prev) =>
          prev.map((i) =>
            i.id === item.id
              ? {
                  ...i,
                  status: "error",
                  error: error instanceof Error ? error.message : "업로드 실패",
                }
              : i
          )
        );
        toast.error(`${item.file.name} 업로드 실패`);
      }
    }

    setUploading(false);
    // 업로드 완료 후 목록 새로고침
    loadGuides();
  };

  // 가이드 삭제 처리
  const handleDeleteGuide = async (guide: Guide) => {
    if (!authToken) {
      toast.error("먼저 인증 토큰을 설정해주세요.");
      return;
    }

    if (!confirm(`${guide.fileName}을(를) 삭제하시겠습니까?`)) {
      return;
    }

    try {
      await deleteGuide(guide.id);
      setGuides((prev) => prev.filter((g) => g.id !== guide.id));
      toast.success("가이드가 삭제되었습니다.");
    } catch (error) {
      console.error("Failed to delete guide:", error);
      toast.error("가이드 삭제에 실패했습니다.");
    }
  };

  // 드래그 앤 드롭 이벤트 처리
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);

    if (e.dataTransfer.files) {
      handleFileUpload(e.dataTransfer.files);
    }
  };

  // 파일 입력 처리
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFileUpload(e.target.files);
    }
  };

  // 업로드 아이템 제거
  const removeUploadItem = (id: string) => {
    setUploadItems((prev) => prev.filter((item) => item.id !== id));
  };

  // 토큰 상태에 따른 색상
  const getTokenStatusColor = () => {
    switch (tokenStatus) {
      case "valid":
        return "text-green-600";
      case "invalid":
        return "text-red-600";
      default:
        return "text-gray-500";
    }
  };

  const getTokenStatusText = () => {
    switch (tokenStatus) {
      case "valid":
        return "✅ 유효한 토큰";
      case "invalid":
        return "❌ 유효하지 않은 토큰";
      default:
        return "⚠️ 토큰 없음";
    }
  };

  // 클라이언트에서만 렌더링 (하이드레이션 에러 방지)
  if (!mounted) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">가이드 관리</h1>
          <p className="text-gray-600">
            XML 가이드 파일을 업로드하고 관리하세요.
          </p>
        </div>

        {/* 토큰 설정 영역 */}
        <Card className="mb-8 border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🔐 인증 토큰 설정
              <span className={`text-sm font-normal ${getTokenStatusColor()}`}>
                {getTokenStatusText()}
              </span>
            </CardTitle>
            <CardDescription>
              API 요청을 위한 인증 토큰을 설정하세요. 토큰은 브라우저에 안전하게
              저장됩니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-end gap-2">
                <div className="flex-1">
                  <Label htmlFor="token-input">Bearer Token</Label>
                  <Input
                    id="token-input"
                    type="password"
                    placeholder="Bearer 토큰을 입력하세요..."
                    value={tokenInput}
                    onChange={(e) => setTokenInput(e.target.value)}
                    className="font-mono"
                  />
                </div>
                <Button onClick={saveToken} className="mb-0">
                  저장
                </Button>
                {authToken && (
                  <>
                    <Button onClick={testToken} variant="outline">
                      테스트
                    </Button>
                    <Button onClick={removeToken} variant="destructive">
                      제거
                    </Button>
                  </>
                )}
              </div>

              {authToken && (
                <div className="bg-gray-50 p-3 rounded-md">
                  <p className="text-sm text-gray-600">
                    현재 토큰:{" "}
                    <code className="bg-white px-1 rounded text-xs">
                      {authToken.substring(0, 20)}...
                    </code>
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* 토큰이 없을 때 경고 메시지 */}
        {!authToken && (
          <Card className="mb-8 border-l-4 border-l-yellow-500 bg-yellow-50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2">
                <span className="text-yellow-600">⚠️</span>
                <p className="text-yellow-800">
                  API를 사용하려면 먼저 인증 토큰을 설정해주세요.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 파일 업로드 영역 */}
        <Card
          className={`mb-8 ${
            !authToken ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          <CardHeader>
            <CardTitle>파일 업로드</CardTitle>
            <CardDescription>
              XML 가이드 파일을 드래그 앤 드롭하거나 클릭하여 업로드하세요.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragOver
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 hover:border-gray-400"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                type="file"
                multiple
                accept=".xml,application/xml,text/xml"
                onChange={handleFileInput}
                className="hidden"
                id="file-upload"
                disabled={!authToken}
              />
              <label htmlFor="file-upload" className="cursor-pointer block">
                <div className="mb-4">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-lg font-medium text-gray-900 mb-2">
                  파일을 여기로 드래그하거나 클릭하여 업로드
                </div>
                <div className="text-sm text-gray-500">
                  XML 파일만 지원됩니다 (최대 10MB)
                </div>
              </label>
            </div>
          </CardContent>
        </Card>

        {/* 업로드 진행률 */}
        {uploadItems.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>업로드 진행 상황</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {uploadItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900">
                          {item.file.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {item.status === "completed"
                            ? "완료"
                            : item.status === "error"
                            ? "오류"
                            : item.status === "uploading"
                            ? `${item.progress}%`
                            : "대기"}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            item.status === "completed"
                              ? "bg-green-500"
                              : item.status === "error"
                              ? "bg-red-500"
                              : "bg-blue-500"
                          }`}
                          style={{
                            width: `${
                              item.status === "completed" ? 100 : item.progress
                            }%`,
                          }}
                        />
                      </div>
                      {item.error && (
                        <div className="text-sm text-red-600 mt-1">
                          {item.error}
                        </div>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeUploadItem(item.id)}
                      className="ml-2"
                    >
                      제거
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* 가이드 목록 */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>가이드 목록</CardTitle>
                <CardDescription>
                  업로드된 가이드를 확인하고 관리하세요.
                </CardDescription>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                  그리드
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                  리스트
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {!authToken ? (
              <div className="text-center py-8 text-gray-500">
                인증 토큰을 설정하면 가이드 목록을 확인할 수 있습니다.
              </div>
            ) : loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">로딩 중...</p>
              </div>
            ) : guides.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                업로드된 가이드가 없습니다.
              </div>
            ) : (
              <div className="h-[32rem] overflow-auto">
                {viewMode === "grid" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {guides.map((guide) => (
                      <div key={guide.id} className="border rounded-lg p-3">
                        <div className="mb-3">
                          <div className="w-full h-32 bg-gray-100 border rounded flex items-center justify-center">
                            <div className="text-center">
                              <svg
                                className="mx-auto h-10 w-10 text-gray-400 mb-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                              <span className="text-gray-500 text-xs">
                                XML 가이드
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-medium text-gray-900 truncate text-sm">
                            {guide.fileName}
                          </h3>
                          <p className="text-xs text-gray-500">
                            ID: {guide.id}
                          </p>
                          <p className="text-xs text-gray-500">
                            업로드:{" "}
                            {new Date(guide.createdAt).toLocaleDateString()}
                          </p>
                          <div className="flex space-x-2">
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => handleDeleteGuide(guide)}
                              className="h-7 px-2 text-xs"
                            >
                              삭제
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-1">
                    {guides.map((guide) => (
                      <div
                        key={guide.id}
                        className="border rounded-lg p-3 flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <svg
                              className="h-8 w-8 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-gray-900 truncate text-sm">
                              {guide.fileName}
                            </h3>
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <span>ID: {guide.id}</span>
                              <span>
                                업로드:{" "}
                                {new Date(guide.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDeleteGuide(guide)}
                            className="h-7 px-2 text-xs"
                          >
                            삭제
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
