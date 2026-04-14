import { projects } from "@/src/data/project";
import { HoverEffect } from "../../components/ui/card-hover-effect";

export default function MyProject() {
  return (
    <div
      className="max-w-7xl mx-auto px-8 pb-2"
      style={{ viewTransitionName: "project" }}
    >
      <div className="pt-15 pb-2 mx-2">
        <h1 className="mb-4 text-2xl font-bold tracking-tight drop-shadow-lg md:text-4xl text-slate-300 max-w-4xl">
          Projects
        </h1>
        <div className="mt-6 text-zinc-400 max-w-2xl">
          A collection of projects built in collaboration with UI/UX designers
          and backend developers.
        </div>
      </div>
      <HoverEffect items={projects} />
    </div>
  );
}
