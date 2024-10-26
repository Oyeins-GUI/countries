"use client";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BackButton() {
   const router = useRouter();
   return (
      <div className="flex items-center pt-7 md:mt-10 mb-7 gap-4">
         <button
            onClick={() => router.back()}
            className="flex items-center gap-4 bg-nav-bg text-text shadow-md shadow-nav-bg py-3 px-4 rounded"
         >
            <MoveLeft />
            <p>Back</p>
         </button>
         <Link
            href="/"
            className="flex items-center gap-4 bg-nav-bg text-text shadow-md shadow-nav-bg py-3 px-4 rounded"
         >
            <p>Home</p>
         </Link>
      </div>
   );
}
