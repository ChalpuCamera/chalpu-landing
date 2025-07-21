"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/landing/ui/button";
import CtaModal from "@/components/landing/CtaModal";

export default function FloatingCtaButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const headerElement = document.querySelector('header');
    headerRef.current = headerElement;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (headerElement) {
      observer.observe(headerElement);
    }

    return () => {
      if (headerElement) {
        observer.unobserve(headerElement);
      }
    };
  }, []);

  if (isHeaderVisible) return null;

  return (
    <>
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <Button
          onClick={() => setIsModalOpen(true)}
          className="h-14 bg-gradient-to-r from-brand-600 to-teal-600 hover:from-brand-700 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          aria-label="찰푸 체험 신청하기"
        >
          선착순 무료 체험 신청하기
        </Button>
      </div>

      <CtaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}