"use client";

import { motion } from "motion/react";
import { LayoutTextFlip } from "../ui/text-flip";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  return (
    <div className="h-dvh content-center">
      <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-300 md:text-4xl lg:text-7xl">
        <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
          <LayoutTextFlip
            text="Hello"
            words={[
              "Welcome",
              "Selamat Datang",
              "أهلاً وسهلاً",
              "欢迎",
              "Bienvenido",
              "Bienvenue",
              "ようこそ",
              "환영합니다",
              "स्वागत है",
              "Willkommen",
            ]}
          />
        </motion.div>
      </h1>
      <div className="px-4 py-5">
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-2xl py-4 text-center text-lg font-normal text-neutral-400"
        >
          I’m Ghalib, Frontend Developer crafting clean, modern web experiences.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => router.push("project")}
            className="w-60 transform rounded-lg bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-200"
          >
            View My Work
          </button>
          <button
            onClick={() => router.push("contact")}
            className="w-60 transform rounded-lg border border-gray-700 bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-900"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </div>
  );
}
