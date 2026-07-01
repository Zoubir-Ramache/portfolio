"use client";

import { useEffect } from "react";
import { motion as m } from "framer-motion";
import RihlatySpotlight from "@/components/RihlatySpotlight";
import { useStateContext } from "@/Context/FirstProvider";
import { scrollToSection } from "@/lib/scrollToSection";

function Profile() {
  const { setLoading, loading } = useStateContext();

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <section
      id="hero"
      className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 md:pt-28"
    >
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for freelance work
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
            Building
            <span className="block bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
              modern digital
            </span>
            experiences.
          </h1>

          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={loading ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500/35 to-purple-500/35 opacity-70 blur-lg" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/RAMACHE_ZOUBIR.png"
                alt="Zoubir Ramache"
                className="relative h-32 w-32 rounded-2xl border border-white/10 object-cover shadow-xl md:h-40 md:w-40"
              />
            </div>
          </m.div>

          <m.p
            initial={{ opacity: 0, y: 12 }}
            animate={loading ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-slate-400"
          >
            Developer building clean web experiences — Next.js and React on the
            frontend, and Django, NestJS, or Node.js when the project needs APIs
            or server-side work. Fifth-year student at the University of
            Constantine 2 — currently focused on my graduation project, Rihlaty
            (Django, Supabase, Cloudinary, AI recommendations).
          </m.p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="rounded-2xl bg-white px-7 py-4 font-semibold text-slate-950 shadow-2xl shadow-white/10 transition hover:scale-[1.02] active:scale-[0.98]"
            >
              View projects
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-medium text-white transition hover:bg-white/10"
            >
              Contact
            </button>
          </div>

          <div className="mt-16 flex flex-wrap gap-10 text-sm text-slate-500">
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

        <RihlatySpotlight />
      </div>
    </section>
  );
}

export default Profile;
