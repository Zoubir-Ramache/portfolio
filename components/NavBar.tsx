"use client";

import { useRef } from "react";
import { motion as m } from "framer-motion";
import Logo from "./Logo";

function NavBar() {
  const navbar = useRef<HTMLElement>(null);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    const navH = navbar.current?.getBoundingClientRect().height ?? 72;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - navH - 12;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <m.header
      ref={navbar}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={() => scrollToId("hero")}
          className="text-left transition hover:opacity-90"
        >
          <Logo />
        </button>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400">
          {(
            [
              ["projects", "Projects"],
              ["about", "About"],
              ["stack", "Stack"],
              ["contact", "Contact"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToId(id)}
              className="transition hover:text-white"
            >
              {label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => scrollToId("contact")}
          className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:scale-[1.02] active:scale-[0.98]"
        >
          Hire me
        </button>
      </div>
    </m.header>
  );
}

export default NavBar;
