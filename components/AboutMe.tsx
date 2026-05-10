"use client";

import { motion as m } from "framer-motion";

function AboutMe() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
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
          className="space-y-6 text-lg leading-relaxed text-zinc-400"
        >
          <p>
            I am a web developer from Algeria, currently studying at the
            University of Constantine. I enjoy turning ideas into fast,
            accessible frontends and collaborating closely when building real
            products — like{" "}
            <a
              href="https://rihlaty-client.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
            >
              Rihlaty
            </a>
            , where I shipped features together with two other developers.
          </p>
          <ul className="list-inside list-disc space-y-2 text-zinc-400">
            <li>React / Next.js for apps and marketing surfaces</li>
            <li>Tailwind CSS and component-driven layouts</li>
            <li>Learning continuously across the full stack</li>
          </ul>
        </m.div>
      </div>
    </section>
  );
}

export default AboutMe;
