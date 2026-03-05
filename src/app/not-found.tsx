import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-7xl font-bold text-[#0B3C5D] mb-4">404</h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mb-8">
          The page you are looking for doesn&apos;t exist or may have been
          moved.
        </p>

        <Link href="/">
          <Button
            size="xxl"
            className="bg-[#D4A373] text-white px-6 py-3 rounded-full hover:bg-[#c08c5a] transition"
          >
            <ArrowLeft className="mr-2 size-4" /> Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}
