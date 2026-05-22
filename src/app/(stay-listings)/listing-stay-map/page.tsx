"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ListingStayMapRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/tours");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-white">
      <div className="relative flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#fa7301]"></div>
        <p className="mt-4 text-neutral-500 font-medium">Redirecting to tours...</p>
      </div>
    </div>
  );
}
