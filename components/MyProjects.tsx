"use client";

import { motion as m } from "framer-motion";

type Project = {
  title: string;
  year: string;
  description: string;
  tags: string[];
  liveHref?: string;
  repoHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  featured?: boolean;
  featuredBadge?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Rihlaty",
    year: "2026",
    description:
      "My graduation project at the University of Constantine 2: compare travel offers from verified agencies in one place — discovery, agency tiers, and traveler-focused UX. Built with two other developers.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Graduation project"],
    liveHref: "https://rihlaty-client.vercel.app/",
    featured: true,
    featuredBadge: "Graduation project · team of 3 · live",
  },
  {
    title: "Facebook-style app",
    year: "2023",
    description:
      "Next.js social-style UI experiment optimized for small screens.",
    tags: ["Next.js", "React"],
    repoHref: "https://github.com/remmachezoubir/Facebook_app.git",
    liveHref: "https://facebook-app-alpha.vercel.app/",
    imageSrc: "/images/projects/Screenshot from 2023-07-06 14-33-23.png",
    imageAlt: "Facebook app preview",
  },
  {
    title: "Audio notes",
    year: "2023",
    description:
      "React and Tailwind app for capturing and organizing voice notes.",
    tags: ["React", "Tailwind CSS"],
    repoHref: "https://github.com/remmachezoubir/o-notes.git",
    liveHref: "https://o-notes.vercel.app/",
    imageSrc: "/images/projects/Screenshot from 2023-07-09 00-40-36.png",
    imageAlt: "Audio notes app preview",
  },
];

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
            className={`group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition hover:border-white/20 ${
              project.featured ? "lg:col-span-2" : ""
            }`}
          >
            <div
              className={`relative overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-950 ${
                project.featured ? "h-80 md:h-96" : "h-72"
              }`}
            >
              {project.imageSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt ?? project.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-transparent" />
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
              {project.featured && project.featuredBadge && (
                <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/50 px-4 py-1 text-xs font-medium text-zinc-200 backdrop-blur-md">
                  {project.featuredBadge}
                </div>
              )}
            </div>

            <div className="p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <span className="text-sm text-zinc-500">{project.year}</span>
              </div>

              <p className="mt-4 leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.tags.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-2 text-sm text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveHref && (
                  <a
                    href={project.liveHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
                  >
                    View live
                  </a>
                )}
                {project.repoHref && (
                  <a
                    href={project.repoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </m.article>
        ))}
      </div>
    </section>
  );
}

export default MyProjects;
