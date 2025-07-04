// 가이드 관련 타입 정의

export interface Guide {
  id: number;
  s3Key: string;
  fileName: string;
  createdAt: string;
}

export interface GuidePresignedUrlRequest {
  fileName: string;
}

export interface GuidePresignedUrlResponse {
  presignedUrl: string;
  s3Key: string;
}

export interface GuideRegisterRequest {
  s3Key: string;
  fileName: string;
}

export interface GuideRegisterResponse {
  id: number;
  s3Key: string;
  fileName: string;
  createdAt: string;
}

export interface GuideListResponse {
  content: Guide[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface GuideDetailResponse {
  id: number;
  s3Key: string;
  fileName: string;
  createdAt: string;
}

export interface GuideDeleteResponse {
  // 비어있는 result 객체
  [key: string]: never;
}

// 가이드 API 응답 공통 형태
export interface GuideApiResponse<T> {
  code: number;
  message: string;
  result: T;
}

// 가이드 업로드 진행률 관련 타입
export interface GuideUploadProgress {
  loaded: number;
  total: number;
  percentage: number;
}

export interface GuideFileUploadItem {
  id: string;
  file: File;
  progress: number;
  status: "pending" | "uploading" | "completed" | "error";
  error?: string;
  guide?: Guide;
}

// 페이지네이션 파라미터
export interface Pageable {
  page: number;
  size: number;
  sort?: string[];
}
