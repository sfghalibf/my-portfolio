import { ThreeDMarquee } from "@/src/components/ui/3d-margue";
import { projects } from "@/src/data/project";
import BackButton from "../../../components/ui/back-button";
import { cn } from "../../../libs/utils";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const project = projects.find((p) => p.slug === slug);

  return (
    <div className="relative flex h-screen w-full flex-col">
      {/* 3D background */}
      <ThreeDMarquee
        className={cn(
          "pointer-events-none fixed inset-0 z-0 h-screen w-screen",
          project?.slug === "dlc" ? "bg-neutral-400" : "",
        )}
        images={project!.images}
        variant={project?.isMobileApp ? "mobile" : "desktop"}
      />
      {/* dark overlay */}
      <div className="pointer-events-none fixed inset-0 z-10 bg-black/50 dark:bg-black/65" />
      {/* content */}
      <div className="relative z-20 mx-auto max-w-6xl px-8 sm:px-10">
        <BackButton />
        <div className="px-0 sm:px-10 md:px-20">
          <h2 className="text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl">
            {project?.title}
          </h2>
          <div className="text-justify py-8 text-sm text-neutral-200 md:text-base">
            {project?.description}
            <div>
              <ul className="mt-2 space-y-1.5">
                {project!.techStack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
