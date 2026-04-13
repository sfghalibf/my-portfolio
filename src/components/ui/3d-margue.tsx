"use client";

import { cn } from "@/src/libs/utils";
import Image from "next/image";

const config = {
  desktop: {
    COLUMN_COUNT: 5,
    MIN_IMAGES: 35,
    MIN_PER_COLUMN: 7,
    columnOffsets: ["150px", "0px", "100px", "0px", "150px"],
    image: {
      width: 970,
      height: 700,
      aspect: "aspect-[970/700]",
    },
    scale: "scale-75 lg:scale-100",
    transform: "rotateX(55deg) rotateZ(-45deg) translate(-75%, 40%)",
  },

  mobile: {
    COLUMN_COUNT: 5,
    MIN_IMAGES: 15,
    MIN_PER_COLUMN: 3,
    columnOffsets: ["380px", "0px", "150px", "0px", "50px"],
    image: {
      width: 582,
      height: 1280,
      aspect: "aspect-[9/20]",
    },
    scale: "scale-50 sm:scale-75",
    transform: "rotateX(50deg) rotateZ(-35deg) translate(-50%, 25%)",
  },
} as const;

export const ThreeDMarquee = ({
  images,
  className,
  variant = "desktop",
}: {
  images: string[];
  className?: string;
  variant?: "desktop" | "mobile";
}) => {
  const cfg = config[variant];
  const filledImages =
    images.length >= cfg.MIN_IMAGES
      ? images.slice(0, cfg.MIN_IMAGES)
      : Array.from(
          { length: Math.ceil(cfg.MIN_IMAGES / images.length) },
          () => images,
        )
          .flat()
          .slice(0, cfg.MIN_IMAGES);

  const chunkSize = Math.max(
    cfg.MIN_PER_COLUMN,
    Math.ceil(filledImages.length / cfg.COLUMN_COUNT),
  );

  const chunks = Array.from({ length: cfg.COLUMN_COUNT }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return filledImages.slice(start, start + chunkSize);
  });

  return (
    <div
      className={cn(
        "mx-auto block h-150 overflow-hidden rounded-2xl",
        className,
      )}
    >
      <div className="flex size-full items-center justify-center">
        <div className="flex size-full items-center justify-center">
          <div className={cn("size-475 shrink-0", cfg.scale)}>
            <div
              className="relative grid size-full origin-top-left gap-8 transform-3d"
              style={{
                transform: cfg.transform,
                gridTemplateColumns: `repeat(${cfg.COLUMN_COUNT}, minmax(0, 1fr))`,
              }}
            >
              {chunks.map((subarray, colIndex) => (
                <div
                  key={colIndex}
                  style={{ marginTop: cfg.columnOffsets[colIndex] ?? "0px" }}
                  className="flex flex-col items-start gap-8"
                >
                  {subarray.map((image, imageIndex) => (
                    <Image
                      key={imageIndex}
                      src={image}
                      alt=""
                      width={cfg.image.width}
                      height={cfg.image.height}
                      sizes={
                        variant === "mobile"
                          ? "(max-width: 640px) 40vw, 30vw"
                          : "(max-width: 1024px) 20vw, 15vw"
                      }
                      className={cn(
                        cfg.image.aspect,
                        "rounded-lg object-cover ring ring-gray-950/5",
                      )}
                      loading="lazy"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
