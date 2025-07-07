"use client";

import { useState, useEffect, useCallback } from "react";
import {
  getGuides,
  deleteGuide,
  uploadGuide,
  getGuidePresignedUrl,
  uploadGuideToS3,
} from "@/app/services/apis/guide";
import { Guide } from "@/app/services/types/guide";
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
import Image from "next/image";

export default function AdminPage() {
  const [mounted, setMounted] = useState(false);
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);

  // 토큰 관리 상태
  const [authToken, setAuthToken] = useState("");
  const [tokenInput, setTokenInput] = useState("");
  const [tokenStatus, setTokenStatus] = useState<"none" | "valid" | "invalid">(
    "none"
  );

  // 뷰 모드 상태 (그리드/리스트)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // 파일 쌍 업로드 관련 상태
  interface FileUploadPair {
    id: string;
    imageFile: File | null;
    xmlFile: File | null;
    fileName: string;
    uploading: boolean;
    progress: number;
    error: string | null;
    completed: boolean;
    nameMatchError: boolean;
  }

  const [uploadPairs, setUploadPairs] = useState<FileUploadPair[]>([
    {
      id: "pair-1",
      imageFile: null,
      xmlFile: null,
      fileName: "",
      uploading: false,
      progress: 0,
      error: null,
      completed: false,
      nameMatchError: false,
    },
  ]);

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

  // 새 파일 쌍 추가
  const addNewPair = () => {
    const newPair: FileUploadPair = {
      id: `pair-${Date.now()}`,
      imageFile: null,
      xmlFile: null,
      fileName: "",
      uploading: false,
      progress: 0,
      error: null,
      completed: false,
      nameMatchError: false,
    };
    setUploadPairs((prev) => [...prev, newPair]);
  };

  // 파일 쌍 제거
  const removePair = (id: string) => {
    setUploadPairs((prev) => prev.filter((pair) => pair.id !== id));
  };

  // 파일명 매칭 검증 함수
  const validateFileNameMatch = (
    imageFile: File | null,
    xmlFile: File | null
  ) => {
    if (!imageFile || !xmlFile) return { isValid: true, fileName: "" };

    const imageName = imageFile.name.replace(/\.(png|jpg|jpeg)$/i, "");
    const xmlName = xmlFile.name.replace(/\.xml$/i, "");

    return {
      isValid: imageName === xmlName,
      fileName: imageName === xmlName ? imageName : "",
    };
  };

  // 이미지 파일 선택
  const handleImageSelect = (pairId: string, file: File) => {
    setUploadPairs((prev) =>
      prev.map((pair) => {
        if (pair.id === pairId) {
          const validation = validateFileNameMatch(file, pair.xmlFile);
          return {
            ...pair,
            imageFile: file,
            fileName: validation.fileName,
            nameMatchError: !validation.isValid,
          };
        }
        return pair;
      })
    );
  };

  // XML 파일 선택
  const handleXmlSelect = (pairId: string, file: File) => {
    setUploadPairs((prev) =>
      prev.map((pair) => {
        if (pair.id === pairId) {
          const validation = validateFileNameMatch(pair.imageFile, file);
          return {
            ...pair,
            xmlFile: file,
            fileName: validation.fileName,
            nameMatchError: !validation.isValid,
          };
        }
        return pair;
      })
    );
  };

  // 이미지 파일 제거
  const removeImageFile = (pairId: string) => {
    setUploadPairs((prev) =>
      prev.map((pair) => {
        if (pair.id === pairId) {
          // XML 파일이 있으면 XML 파일명으로, 없으면 빈 문자열
          const fileName = pair.xmlFile
            ? pair.xmlFile.name.replace(/\.xml$/i, "")
            : "";
          return {
            ...pair,
            imageFile: null,
            fileName,
            nameMatchError: false, // 파일이 하나만 있을 때는 에러 없음
          };
        }
        return pair;
      })
    );
    // 파일 input 초기화
    const input = document.getElementById(
      `image-${pairId}`
    ) as HTMLInputElement;
    if (input) input.value = "";
  };

  // XML 파일 제거
  const removeXmlFile = (pairId: string) => {
    setUploadPairs((prev) =>
      prev.map((pair) => {
        if (pair.id === pairId) {
          // 이미지 파일이 있으면 이미지 파일명으로, 없으면 빈 문자열
          const fileName = pair.imageFile
            ? pair.imageFile.name.replace(/\.(png|jpg|jpeg)$/i, "")
            : "";
          return {
            ...pair,
            xmlFile: null,
            fileName,
            nameMatchError: false, // 파일이 하나만 있을 때는 에러 없음
          };
        }
        return pair;
      })
    );
    // 파일 input 초기화
    const input = document.getElementById(`xml-${pairId}`) as HTMLInputElement;
    if (input) input.value = "";
  };

  // 개별 파일 쌍 업로드
  const uploadPair = async (pair: FileUploadPair) => {
    if (!pair.imageFile || !pair.xmlFile || !authToken) return;

    setUploadPairs((prev) =>
      prev.map((p) =>
        p.id === pair.id
          ? { ...p, uploading: true, progress: 0, error: null }
          : p
      )
    );

    try {
      // 1. 이미지 파일 업로드
      const imageExt = pair.imageFile.name.split(".").pop();
      const imagePresigned = await getGuidePresignedUrl(
        `${pair.fileName}.${imageExt}`
      );

      setUploadPairs((prev) =>
        prev.map((p) => (p.id === pair.id ? { ...p, progress: 25 } : p))
      );

      await uploadGuideToS3(imagePresigned.presignedUrl, pair.imageFile);

      // 2. XML 파일 업로드
      const xmlPresigned = await getGuidePresignedUrl(`${pair.fileName}.xml`);

      setUploadPairs((prev) =>
        prev.map((p) => (p.id === pair.id ? { ...p, progress: 50 } : p))
      );

      await uploadGuideToS3(xmlPresigned.presignedUrl, pair.xmlFile);

      // 3. 서버에 메타데이터 등록
      setUploadPairs((prev) =>
        prev.map((p) => (p.id === pair.id ? { ...p, progress: 75 } : p))
      );

      const response = await fetch("/api/guides/register-pair", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authToken.startsWith("Bearer ")
            ? authToken
            : `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          fileName: pair.fileName,
          imageS3Key: imagePresigned.s3Key,
          xmlS3Key: xmlPresigned.s3Key,
        }),
      });

      if (!response.ok) throw new Error("서버 등록 실패");

      setUploadPairs((prev) =>
        prev.map((p) =>
          p.id === pair.id
            ? { ...p, progress: 100, completed: true, uploading: false }
            : p
        )
      );

      toast.success(`${pair.fileName} 업로드 완료`);
    } catch (error) {
      console.error("업로드 실패:", error);
      setUploadPairs((prev) =>
        prev.map((p) =>
          p.id === pair.id
            ? {
                ...p,
                uploading: false,
                error: error instanceof Error ? error.message : "업로드 실패",
              }
            : p
        )
      );
      toast.error(`${pair.fileName} 업로드 실패`);
    }
  };

  // 전체 업로드
  const uploadAll = async () => {
    const validPairs = uploadPairs.filter(
      (pair) =>
        pair.imageFile &&
        pair.xmlFile &&
        !pair.completed &&
        !pair.nameMatchError
    );

    for (const pair of validPairs) {
      await uploadPair(pair);
    }

    // 업로드 완료 후 가이드 목록 새로고침
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
              이미지(PNG/JPG)와 XML 파일을 쌍으로 업로드하세요. 파일 이름은
              동일해야 합니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {uploadPairs.map((pair, index) => (
                <div key={pair.id} className="border rounded-lg p-4 bg-gray-50">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-gray-900">
                      파일 쌍 {index + 1}
                      {pair.fileName && (
                        <span className="ml-2 text-sm text-gray-600">
                          ({pair.fileName})
                        </span>
                      )}
                    </h3>
                    {uploadPairs.length > 1 && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removePair(pair.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        제거
                      </Button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* 이미지 파일 선택 */}
                    <div className="space-y-2">
                      <Label
                        htmlFor={`image-${pair.id}`}
                        className="text-sm font-medium"
                      >
                        이미지 파일 (PNG/JPG)
                      </Label>
                      <div className="relative">
                        <input
                          id={`image-${pair.id}`}
                          type="file"
                          accept=".png,.jpg,.jpeg,image/png,image/jpeg"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleImageSelect(pair.id, file);
                          }}
                          className="w-full p-2 border rounded-md text-sm"
                          disabled={pair.uploading || pair.completed}
                        />
                        {pair.imageFile && (
                          <div className="mt-2 p-2 bg-blue-50 rounded text-sm flex items-center justify-between">
                            <span className="text-blue-700">
                              ✓ {pair.imageFile.name}
                            </span>
                            <button
                              onClick={() => removeImageFile(pair.id)}
                              disabled={pair.uploading || pair.completed}
                              className="text-red-500 hover:text-red-700 ml-2 disabled:opacity-50"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* XML 파일 선택 */}
                    <div className="space-y-2">
                      <Label
                        htmlFor={`xml-${pair.id}`}
                        className="text-sm font-medium"
                      >
                        XML 파일
                      </Label>
                      <div className="relative">
                        <input
                          id={`xml-${pair.id}`}
                          type="file"
                          accept=".xml,application/xml,text/xml"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleXmlSelect(pair.id, file);
                          }}
                          className="w-full p-2 border rounded-md text-sm"
                          disabled={pair.uploading || pair.completed}
                        />
                        {pair.xmlFile && (
                          <div className="mt-2 p-2 bg-green-50 rounded text-sm flex items-center justify-between">
                            <span className="text-green-700">
                              ✓ {pair.xmlFile.name}
                            </span>
                            <button
                              onClick={() => removeXmlFile(pair.id)}
                              disabled={pair.uploading || pair.completed}
                              className="text-red-500 hover:text-red-700 ml-2 disabled:opacity-50"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 파일명 불일치 에러 메시지 */}
                  {pair.nameMatchError && (
                    <div className="mt-4 p-3 bg-orange-50 rounded-md">
                      <div className="flex items-center text-orange-700">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        파일명이 일치하지 않습니다. 이미지와 XML 파일의
                        이름(확장자 제외)이 동일해야 합니다.
                      </div>
                    </div>
                  )}

                  {/* 업로드 상태 */}
                  {pair.uploading && (
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">
                          업로드 중...
                        </span>
                        <span className="text-sm text-gray-600">
                          {pair.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${pair.progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* 완료 상태 */}
                  {pair.completed && (
                    <div className="mt-4 p-3 bg-green-50 rounded-md">
                      <div className="flex items-center text-green-700">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        업로드 완료
                      </div>
                    </div>
                  )}

                  {/* 에러 상태 */}
                  {pair.error && (
                    <div className="mt-4 p-3 bg-red-50 rounded-md">
                      <div className="flex items-center text-red-700">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {pair.error}
                      </div>
                    </div>
                  )}

                  {/* 개별 업로드 버튼 */}
                  {pair.imageFile && pair.xmlFile && !pair.completed && (
                    <div className="mt-4">
                      <Button
                        onClick={() => uploadPair(pair)}
                        disabled={pair.uploading || pair.nameMatchError}
                        className="w-full"
                      >
                        {pair.uploading
                          ? "업로드 중..."
                          : pair.nameMatchError
                          ? "파일명 불일치"
                          : "이 쌍 업로드"}
                      </Button>
                    </div>
                  )}
                </div>
              ))}

              {/* 컨트롤 버튼들 */}
              <div className="flex justify-between items-center pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={addNewPair}
                  disabled={!authToken}
                >
                  + 파일 쌍 추가
                </Button>

                <Button
                  onClick={uploadAll}
                  disabled={
                    !authToken ||
                    uploadPairs.some((p) => p.uploading) ||
                    !uploadPairs.some(
                      (p) =>
                        p.imageFile &&
                        p.xmlFile &&
                        !p.completed &&
                        !p.nameMatchError
                    )
                  }
                  className="px-6"
                >
                  전체 업로드
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

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
                              {/* <Image
                                src={`https://cdn.chalpu.com/${guide.s3Key}`}
                                alt={guide.fileName}
                                className="max-h-full max-w-full"
                              /> */}
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
                            {/* <Image
                              src={`https://cdn.chalpu.com/${guide.s3Key}`}
                              alt={guide.fileName}
                              className="max-h-8 max-w-8"
                            /> */}
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
