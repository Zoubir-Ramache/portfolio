"use client";

import type { Project } from "@/content/projects";

type ProjectMediaProps = Pick<
  Project,
  | "title"
  | "imageSrc"
  | "imageSrcMobile"
  | "imageAlt"
  | "featured"
  | "featuredBadge"
>;

/** Matches Tailwind `md` — must stay in sync with responsive project images. */
const MD_MIN_WIDTH_MEDIA = "(min-width: 768px)";

export default function ProjectCardMedia({
  title,
  imageSrc,
  imageSrcMobile,
  imageAlt,
  featured,
  featuredBadge,
}: ProjectMediaProps) {
  const heightClass = featured ? "h-80 md:h-96" : "h-72";

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-950 ${heightClass}`}
    >
      {imageSrc && imageSrcMobile ? (
        <picture className="absolute inset-0 block h-full w-full">
          <source media={MD_MIN_WIDTH_MEDIA} srcSet={imageSrc} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrcMobile}
            alt={imageAlt ?? title}
            className="h-full w-full object-contain object-center transition duration-500 group-hover:scale-[1.02] md:object-cover"
          />
        </picture>
      ) : imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt={imageAlt ?? title}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-transparent" />
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
      {featured && featuredBadge ? (
        <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/50 px-4 py-1 text-xs font-medium text-zinc-200 backdrop-blur-md">
          {featuredBadge}
        </div>
      ) : null}
    </div>
  );
}
