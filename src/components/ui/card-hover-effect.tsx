"use client";
import { cn } from "@/src/libs/utils";
import { Project } from "@/src/data/project";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: Project[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className,
      )}
    >
      {items.map((item, idx) => (
        <Link
          key={item.slug}
          href={`project/${item.slug}`}
          className={cn(
            "relative group block p-2 h-full w-full",
            item.status === "ongoing" && "cursor-not-allowed",
          )}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={(e) => {
            if (item.status === "ongoing") {
              e.preventDefault();
            }
          }}
        >
          {hoveredIndex === idx && (
            <motion.span
              layoutId="hoverBackground"
              className="absolute inset-0 h-full w-full rounded-3xl bg-slate-800/80"
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          )}
          <motion.div
            whileTap={{ scale: item.status === "ongoing" ? 1 : 0.95 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Card
              className={cn({
                "bg-neutral-900": item.status === "ongoing",
              })}
            >
              <CardTitle
                className={cn({
                  "opacity-50": item.status === "ongoing",
                })}
              >
                {item.title}
              </CardTitle>
              <CardDescription
                className={cn({
                  "opacity-50": item.status === "ongoing",
                })}
              >
                {item.shortDescription}
              </CardDescription>
            </Card>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-neutral-950 border border-white/20 group-hover:border-slate-700 relative z-20",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className,
      )}
    >
      {children}
    </p>
  );
};
