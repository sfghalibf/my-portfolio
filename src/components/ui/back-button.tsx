"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.replace("/project")}
      className="my-6 sm:my-14 flex gap-2 transform rounded-lg bg-neutral-800 px-6 py-2 font-medium transition-all duration-300 hover:-translate-x-0.5 text-white"
    >
      <ArrowLeft />
      Back
    </button>
  );
}

export default BackButton;
