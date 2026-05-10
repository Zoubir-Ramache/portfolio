"use client";

import { useId } from "react";

type LogoProps = {
  /** Show “Zoubir” next to the mark */
  showWordmark?: boolean;
  className?: string;
};

export default function Logo({
  showWordmark = true,
  className = "",
}: LogoProps) {
  const uid = useId().replace(/:/g, "");
  const gradId = `logo-edge-${uid}`;

  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="Zoubir Ramache — home"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden
      >
        <defs>
          <linearGradient
            id={gradId}
            x1="8"
            y1="4"
            x2="36"
            y2="36"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#818cf8" />
            <stop offset="0.5" stopColor="#a78bfa" />
            <stop offset="1" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
        <rect
          x="1.5"
          y="1.5"
          width="37"
          height="37"
          rx="11"
          stroke={`url(#${gradId})`}
          strokeWidth="2"
          fill="rgba(255,255,255,0.04)"
        />
        <text
          x="20"
          y="26.5"
          textAnchor="middle"
          fontSize="19"
          fontWeight={800}
          fill="white"
          fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
        >
          Z
        </text>
      </svg>
      {showWordmark && (
        <span className="text-xl font-bold tracking-tight text-white">
          Zoubir<span className="text-zinc-500">.</span>
        </span>
      )}
    </span>
  );
}
