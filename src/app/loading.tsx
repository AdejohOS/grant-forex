import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="relative aspect-video">
          <Image
            src="/images/grant_no_bg.png"
            alt="Grant Forex"
            width={80}
            height={80}
          />
        </div>

        <p className="text-[#0B3C5D] font-medium">Loading...</p>
      </div>
    </div>
  );
}
