"use client";

import { motion as m } from "framer-motion";
import { RIHLATY_LIVE_URL } from "@/content/rihlaty";

function AboutMe() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            About me
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight text-white md:text-5xl">
            Creating interfaces that feel intentional and polished.
          </h2>
        </div>

        <m.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg leading-relaxed text-slate-400"
        >
          <p>
            I am a web developer from Algeria and a graduate of the{" "}
            <strong className="font-semibold text-slate-200">
              University of Constantine 2
            </strong>
            . Much of my recent focus has been on{" "}
            <a
              href={RIHLATY_LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
            >
              Rihlaty
            </a>
            , my graduation project — a platform where travelers compare offers
            from verified agencies and get AI-powered trip recommendations. I
            built it in collaboration with two other developers.
          </p>
          <ul className="list-inside list-disc space-y-2 text-slate-400">
            <li>
              Next.js and React for UIs; Django (Rihlaty), NestJS, or Node.js
              when I am on APIs or backend pieces
            </li>
            <li>Tailwind CSS and component-driven layouts</li>
            <li>Shipped key features on a team-based graduation project</li>
          </ul>
        </m.div>
      </div>
    </section>
  );
}

export default AboutMe;
