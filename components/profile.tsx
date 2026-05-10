"use client";

import { useEffect } from "react";
import { motion as m } from "framer-motion";
import { useStateContext } from "../Context/FirstProvider";

function Profile() {
  const { setLoading, loading } = useStateContext();

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (!el) return;
    const top =
      el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (!el) return;
    const top =
      el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 md:pt-28"
    >
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for freelance work
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
            Building
            <span className="block bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
              modern digital
            </span>
            experiences.
          </h1>

          <m.p
            initial={{ opacity: 0, y: 12 }}
            animate={loading ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400"
          >
            Developer building clean web experiences — Next.js and React on the
            frontend, and NestJS or Node.js when the project needs APIs or
            server-side work. Fifth-year student at the University of Constantine
            2 — currently focused on my graduation project, Rihlaty.
          </m.p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={scrollToProjects}
              className="rounded-2xl bg-white px-7 py-4 font-semibold text-black shadow-2xl shadow-white/10 transition hover:scale-[1.02] active:scale-[0.98]"
            >
              View projects
            </button>
            <button
              type="button"
              onClick={scrollToContact}
              className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-medium text-white transition hover:bg-white/10"
            >
              Contact
            </button>
          </div>

          <div className="mt-16 flex flex-wrap gap-10 text-sm text-zinc-500">
            <div>
              <h3 className="text-3xl font-bold text-white">3+</h3>
              <p>Shipped projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">5</h3>
              <p>Years at university</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">100%</h3>
              <p>Passion</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-blue-500/25 to-purple-500/25 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm text-zinc-500">Graduation project</p>
                <h3 className="mt-1 text-2xl font-bold text-white">Rihlaty</h3>
                <p className="mt-2 max-w-xs text-sm text-zinc-400">
                  Travel marketplace to compare offers from verified agencies —
                  my final-year project at Constantine 2, built with two other
                  developers.
                </p>
              </div>
              <a
                href="https://rihlaty-client.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400 transition hover:bg-emerald-500/20"
              >
                Live
              </a>
            </div>

            <div className="relative mx-auto mb-8 aspect-square max-h-[280px] max-w-[280px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-950">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/RAMACHE_ZOUBIR.png"
                alt="Zoubir Ramache"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Graduation project",
              ].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-zinc-300"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
