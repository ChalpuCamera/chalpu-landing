module.exports = {
  apps: [
    {
      name: "chalpu-web",
      script: "npm",
      args: "start",
      cwd: "/home/ubuntu/chalpu-web",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        // 사이트 기본 설정
        NEXT_PUBLIC_SITE_URL: "https://www.chalpu.com",

        // SEO 인증 키
        NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: "FpySdiv9_TbkjVCcZC3EQguW2k19ARaj6CnhPyvZnxQ",
        NEXT_PUBLIC_NAVER_SITE_VERIFICATION: "19ab39ad9f4fe8aadec8e57ac82d4ea49ab89193",

        // 분석 도구
        NEXT_PUBLIC_GOOGLE_ANALYTICS: "G-4S4Y8G91RJ",

        // 선택사항 (추후 필요시 활성화)
        // NEXT_PUBLIC_GOOGLE_TAG_MANAGER: '',
        // NEXT_PUBLIC_FACEBOOK_PIXEL: '',
        // NEXT_PUBLIC_KAKAO_PIXEL: ''
      },
    },
  ],
};
