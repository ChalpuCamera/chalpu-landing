import apiClient from "./base";

// 어드민 토큰을 헤더에 포함하는 헬퍼 함수
const getAdminHeaders = () => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (typeof window !== "undefined") {
    const adminToken = localStorage.getItem("admin_auth_token");
    if (adminToken) {
      const bearerToken = adminToken.startsWith("Bearer ")
        ? adminToken
        : `Bearer ${adminToken}`;
      headers.Authorization = bearerToken;
    }
  }

  return headers;
};
import {
  Guide,
  GuidePresignedUrlRequest,
  GuidePresignedUrlResponse,
  GuideRegisterRequest,
  GuideRegisterResponse,
  GuideListResponse,
  GuideDetailResponse,
  GuideDeleteResponse,
  GuideApiResponse,
  Pageable,
  GuideUploadProgress,
} from "../types/guide";

/**
 * 가이드 전체 목록 조회 (Admin)
 */
export const getGuides = async (
  pageable: Pageable
): Promise<GuideListResponse> => {
  const params = new URLSearchParams();
  params.append("page", pageable.page.toString());
  params.append("size", pageable.size.toString());

  if (pageable.sort) {
    pageable.sort.forEach((sortParam) => {
      params.append("sort", sortParam);
    });
  }

  const response = await apiClient.get<GuideApiResponse<GuideListResponse>>(
    `/api/guides?${params.toString()}`,
    { headers: getAdminHeaders() }
  );
  return response.data.result;
};

/**
 * 가이드 상세 조회 (Admin)
 */
export const getGuide = async (
  guideId: number
): Promise<GuideDetailResponse> => {
  const response = await apiClient.get<GuideApiResponse<GuideDetailResponse>>(
    `/api/guides/${guideId}`,
    { headers: getAdminHeaders() }
  );
  return response.data.result;
};

/**
 * 가이드 업로드용 Presigned URL 생성 (Admin)
 */
export const getGuidePresignedUrl = async (
  fileName: string
): Promise<GuidePresignedUrlResponse> => {
  const request: GuidePresignedUrlRequest = { fileName };

  const response = await apiClient.post<
    GuideApiResponse<GuidePresignedUrlResponse>
  >("/api/guides/presigned-url", request, { headers: getAdminHeaders() });
  return response.data.result;
};

/**
 * S3에 가이드 파일 직접 업로드 (XML 원본 데이터 전송)
 */
export const uploadGuideToS3 = async (
  presignedUrl: string,
  file: File,
  onProgress?: (progress: GuideUploadProgress) => void
): Promise<void> => {
  console.log("🚀 S3 업로드 시작:", {
    fileName: file.name,
    fileSize: file.size,
    fileType: file.type,
    presignedUrl: presignedUrl.substring(0, 100) + "...",
  });

  try {
    // 1. XML 파일의 원본 데이터를 텍스트로 읽기
    console.log("📖 XML 파일 원본 데이터 읽는 중...");
    const xmlContent = await file.text();
    console.log("📝 XML 내용 미리보기:", xmlContent.substring(0, 200) + "...");

    // 2. S3에 XML 원본 데이터 업로드 (Authorization 헤더 없이)
    await apiClient.put(presignedUrl, xmlContent, {
      headers: {
        "Content-Type": "application/xml",
        // S3에는 Authorization 헤더 불필요하므로 명시적으로 제거
        Authorization: undefined,
      },
      onUploadProgress: (progressEvent) => {
        if (progressEvent.total && onProgress) {
          const progress: GuideUploadProgress = {
            loaded: progressEvent.loaded,
            total: progressEvent.total,
            percentage: Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            ),
          };
          console.log("📊 업로드 진행률:", progress.percentage + "%");
          onProgress(progress);
        }
      },
    });

    console.log("✅ S3 업로드 성공!");
  } catch (error) {
    console.error("❌ S3 업로드 실패:", error);
    if (error instanceof Error) {
      console.error("에러 상세:", error.message);
    }
    throw error;
  }
};

/**
 * 가이드 정보 등록 (Admin) - S3 업로드 완료 후 호출
 */
export const registerGuide = async (
  s3Key: string,
  fileName: string
): Promise<GuideRegisterResponse> => {
  const request: GuideRegisterRequest = { s3Key, fileName };

  const response = await apiClient.post<
    GuideApiResponse<GuideRegisterResponse>
  >("/api/guides/register", request, { headers: getAdminHeaders() });
  return response.data.result;
};

/**
 * 가이드 삭제 (Admin)
 */
export const deleteGuide = async (guideId: number): Promise<void> => {
  await apiClient.delete<GuideApiResponse<GuideDeleteResponse>>(
    `/api/guides/${guideId}`,
    { headers: getAdminHeaders() }
  );
};

/**
 * 가이드 파일 전체 업로드 프로세스 (통합 함수)
 * 1. Presigned URL 생성
 * 2. S3에 파일 업로드
 * 3. 서버에 메타데이터 등록
 */
export const uploadGuide = async (
  file: File,
  onProgress?: (progress: number) => void
): Promise<Guide> => {
  try {
    // 1. Presigned URL 생성
    const { presignedUrl, s3Key } = await getGuidePresignedUrl(file.name);

    // 2. S3에 파일 업로드
    await uploadGuideToS3(presignedUrl, file, (progress) => {
      if (onProgress) {
        onProgress(progress.percentage);
      }
    });

    // 3. 서버에 메타데이터 등록
    const guide = await registerGuide(s3Key, file.name);

    return guide;
  } catch (error) {
    console.error("Guide upload failed:", error);
    throw error;
  }
};

/**
 * 여러 가이드 파일 동시 업로드
 */
export const uploadMultipleGuides = async (
  files: File[],
  onProgress?: (fileIndex: number, progress: number) => void
): Promise<Guide[]> => {
  const results: Guide[] = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    try {
      const guide = await uploadGuide(file, (progress) => {
        if (onProgress) {
          onProgress(i, progress);
        }
      });
      results.push(guide);
    } catch (error) {
      console.error(`Failed to upload ${file.name}:`, error);
      throw error;
    }
  }

  return results;
};
