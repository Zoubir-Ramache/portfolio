"use client";

import {
  RIHLATY_DISPLAY_HOST,
  RIHLATY_HERO,
  RIHLATY_LIVE_URL,
  RIHLATY_TECH_TAGS,
} from "@/content/rihlaty";

export default function RihlatySpotlight() {
  return (
    <div className="relative">
      <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-blue-500/25 to-purple-500/25 blur-2xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm text-zinc-500">{RIHLATY_HERO.eyebrow}</p>
            <h3 className="mt-1 text-2xl font-bold text-white">
              {RIHLATY_HERO.title}
            </h3>
            <p className="mt-2 max-w-xs text-sm text-zinc-400">
              {RIHLATY_HERO.description}
            </p>
          </div>
          <a
            href={RIHLATY_LIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400 transition hover:bg-emerald-500/20"
          >
            Live
          </a>
        </div>

        <a
          href={RIHLATY_LIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mb-8 block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-zinc-950 px-6 py-12 text-center transition hover:border-white/20"
        >
          <span className="text-sm font-medium text-zinc-200 transition group-hover:text-white">
            {RIHLATY_HERO.spotlightTitle}
          </span>
          <span className="mt-2 block text-xs text-zinc-500">
            {RIHLATY_DISPLAY_HOST}
          </span>
        </a>

        <div className="flex flex-wrap gap-3">
          {RIHLATY_TECH_TAGS.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
