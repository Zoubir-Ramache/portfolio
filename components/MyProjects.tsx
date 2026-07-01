"use client";

import { motion as m } from "framer-motion";
import ProjectCardMedia from "@/components/ProjectCardMedia";
import { PROJECTS } from "@/content/projects";

function MyProjects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Selected work
          </p>
          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Featured projects
          </h2>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <m.article
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.06 }}
            className={`group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/40 backdrop-blur-md transition hover:border-white/20 hover:bg-slate-900/60 shadow-2xl shadow-black/20 ${
              project.featured ? "lg:col-span-2" : ""
            }`}
          >
            <ProjectCardMedia
              title={project.title}
              imageSrc={project.imageSrc}
              imageSrcMobile={project.imageSrcMobile}
              imageAlt={project.imageAlt}
              featured={project.featured}
              featuredBadge={project.featuredBadge}
            />

            <div className="p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <span className="text-sm text-slate-500">{project.year}</span>
              </div>

              <p className="mt-4 leading-relaxed text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.tags.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveHref ? (
                  <a
                    href={project.liveHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                  >
                    View live
                  </a>
                ) : null}
                {project.repoHref ? (
                  <a
                    href={project.repoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    GitHub
                  </a>
                ) : null}
              </div>
            </div>
          </m.article>
        ))}
      </div>
    </section>
  );
}

export default MyProjects;
