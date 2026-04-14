/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Timeline } from "../../components/ui/timeline";

export default function CarrerPage() {
  const data = [
    {
      title: "2020",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
            Graduated with a Bachelor’s Degree in Computer Science.
          </p>
          <p className="text-xs font-normal text-neutral-200 md:text-sm">
            In addition to my formal education, I independently completed
            several courses to further develop my skills, including basic
            programming, web development, and mobile application development.
          </p>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
            I began my professional career after being accepted into a role at a
            university.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
            Since then, I started building websites and developing practical
            skills in web development, focusing on creating efficient, scalable,
            and user-friendly solutions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/project/dlc/1.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/project/ella/1.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/project/keuangan/12.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/project/tasha/15.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2025",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-200 md:text-sm">
            Graduated with a Master’s Degree in Data Science and Artificial
            Intelligence.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
            Motivated by the rapid evolution of AI, I pursued this degree to
            expand my expertise, enhance my problem-solving capabilities, and
            prepare myself to build impactful AI-driven solutions in real-world
            applications.
          </p>
          <div className="mb-8 grid grid-cols-2 gap-4">
            <img
              src="/graduate-picture-3.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/graduate-picture-2.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Present",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
            Currently, I am actively developing, maintaining, and enhancing web
            applications, focusing on scalability, performance optimization, and
            delivering reliable, user-focused solutions.
          </p>
          <div className="mb-8 grid grid-cols-4 gap-4">
            <img
              src="/project/dlc/11.png"
              alt="hero template"
              width={500}
              height={500}
              className="col-span-2 h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/project/integrated-admission/1.png"
              alt="feature template"
              width={500}
              height={500}
              className="col-span-2 h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
          <div className="flex flex-wrap gap-4">
            <img
              src="/project/keuangan-mobile/7.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="h-28 md:h-56 lg:h-72 w-fit rounded-lg object-contain shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <img
              src="/project/keuangan-mobile/13.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="h-28 md:h-56 lg:h-72 w-fit rounded-lg object-contain shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <img
              src="/project/keuangan-mobile/6.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="h-28 md:h-56 lg:h-72 w-fit rounded-lg object-contain shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <img
              src="/project/keuangan-mobile/9.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="h-28 md:h-56 lg:h-72 w-fit rounded-lg object-contain shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div
      className="max-w-7xl mx-auto px-8 pb-112.5"
      style={{ viewTransitionName: "career" }}
    >
      <div className="pt-15 mx-2">
        <h1 className="mb-4 text-2xl font-bold tracking-tight drop-shadow-lg md:text-4xl text-slate-300 max-w-4xl">
          Career
        </h1>
        <div className="mt-6 text-zinc-400 max-w-2xl">
          My journey through education and professional experience.
        </div>
      </div>
      <Timeline data={data} />
    </div>
  );
}
