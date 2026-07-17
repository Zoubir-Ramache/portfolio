"use client";

import { motion as m } from "framer-motion";
import { SKILLS_BY_CATEGORY } from "./Skills";

export default function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-16">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Tech stack
        </p>
        <h2 className="mt-4 text-4xl font-black text-white">Tools I use</h2>
      </div>

      <div className="space-y-16">
        {SKILLS_BY_CATEGORY.map((category, catIdx) => (
          <div key={category.title}>
            <h3 className="mb-6 text-xl font-bold tracking-wide text-zinc-400">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
              {category.skills.map(({ name, Icon }, i) => (
                <m.div
                  key={name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (catIdx * 2 + i) * 0.03 }}
                  className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]"
                >
                  <Icon className="h-8 w-8 shrink-0 text-zinc-200" />
                  <h4 className="text-lg font-semibold capitalize text-white">
                    {name}
                  </h4>
                </m.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
