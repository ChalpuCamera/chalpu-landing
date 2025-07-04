import { Toaster } from "@/components/landing/ui/sonner";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
      <Toaster position="top-right" />
    </div>
  );
}
