import { Toaster as Sonner } from "@/components/landing/ui/sonner";
import FeaturesSection from "@/components/landing/FeaturesSection";
import FooterSection from "@/components/landing/FooterSection";
import Header from "@/components/landing/Header";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CtaModal from "@/components/landing/CtaModal";
import { useState } from "react";

export default function LandingPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Sonner />
            <div className="min-h-screen">
                <Header onCtaClick={() => setIsModalOpen(true)} />
                <FeaturesSection />
                <TestimonialsSection />
                <FooterSection />
            </div>

            <CtaModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
