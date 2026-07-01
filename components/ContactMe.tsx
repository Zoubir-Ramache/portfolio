"use client";

import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { motion as m } from "framer-motion";
import { IconType } from "react-icons";

type ContactEntry = {
  name: string;
  Icon: IconType;
  link: string;
};

const CONTACTS: ContactEntry[] = [
  {
    name: "GitHub",
    Icon: BsGithub,
    link: "https://github.com/Zoubir-Ramache/",
  },
  {
    name: "LinkedIn",
    Icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/zoubir-ramache-04189a25b",
  },
  {
    name: "Email",
    Icon: BiLogoGmail,
    link: "mailto:ramachezoubir@gmail.com",
  },
  {
    name: "Instagram",
    Icon: BsInstagram,
    link: "https://instagram.com/ramache_zoubir",
  },
  {
    name: "Facebook",
    Icon: BsFacebook,
    link: "https://www.facebook.com/zoubir.ramach",
  },
];

export default function ContactMe() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-28 pb-32">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-[3rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-10 text-center md:p-16 backdrop-blur-md shadow-2xl shadow-indigo-500/10"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
          Contact
        </p>
        <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
          Let&apos;s build something meaningful.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          Open to freelance work, collaborations, and teams that care about
          craft. Reach out by email or connect on social.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:ramachezoubir@gmail.com"
            className="rounded-2xl bg-white px-8 py-4 font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            Email me
          </a>
          <a
            href="https://github.com/Zoubir-Ramache/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-medium text-white transition hover:bg-white/10"
          >
            GitHub
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {CONTACTS.map(({ name, Icon, link }) => (
            <a
              key={link}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/40 backdrop-blur-sm px-4 py-2 text-sm text-slate-300 transition hover:border-white/20 hover:text-white hover:bg-slate-800/60"
            >
              <Icon className="text-lg" />
              {name}
            </a>
          ))}
        </div>
      </m.div>
    </section>
  );
}
