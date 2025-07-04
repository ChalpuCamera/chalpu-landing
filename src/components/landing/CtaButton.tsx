"use client";

import { useState } from "react";
import { Button } from "@/components/landing/ui/button";
import CtaModal from "@/components/landing/CtaModal";

export default function CtaButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        className="h-14 bg-gradient-to-r from-brand-600 to-teal-600 hover:from-brand-700 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        aria-label="찰푸 무료 체험 신청하기"
      >
        선착순 무료 체험 신청하기
      </Button>

      <CtaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
