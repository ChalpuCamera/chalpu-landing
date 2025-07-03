"use client";
import { useState } from "react";
import { Button } from "@/components/landing/ui/button";
import { Input } from "@/components/landing/ui/input";
import { toast } from "@/components/landing/ui/sonner";

const FooterSection = () => {
  const [contactEmail, setContactEmail] = useState("");

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactEmail) {
      toast.error("이메일을 입력해주세요");
      return;
    }
    toast.success("문의가 접수되었습니다", {
      description: "빠른 시일 내에 답변 드리겠습니다.",
    });
    setContactEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Chalpu</h3>
            <p className="text-gray-300 mb-6">
              자영업자를 위한 최고의 사진 촬영 가이드 및 AI 솔루션
            </p>
            <div className="flex flex-col space-y-2">
              <p className="text-gray-300">
                <span className="font-medium">이메일:</span> example@kr
              </p>
              <p className="text-gray-300">
                <span className="font-medium">전화:</span> 02-000-0000
              </p>
              <p className="text-gray-300">
                <span className="font-medium">주소:</span> 서울특별시
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">문의하기</h3>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="이메일 주소를 입력해주세요"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="bg-gray-800 border-gray-700"
                />
              </div>
              <Button disabled type="submit" className="w-full">
                문의하기
              </Button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} Chalpu. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
