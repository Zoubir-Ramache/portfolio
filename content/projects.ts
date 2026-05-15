import {
  RIHLATY_LIVE_URL,
  RIHLATY_TECH_TAGS,
} from "@/content/rihlaty";

export type Project = {
  title: string;
  year: string;
  description: string;
  tags: string[];
  liveHref?: string;
  repoHref?: string;
  imageSrc?: string;
  /** Shown below `md` when set; `imageSrc` is used from `md` and up. */
  imageSrcMobile?: string;
  imageAlt?: string;
  featured?: boolean;
  featuredBadge?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Rihlaty",
    year: "2026",
    description:
      "My graduation project at the University of Constantine 2: compare travel offers from verified agencies in one place — discovery, agency tiers, AI-powered recommendations, and traveler-focused UX. Next.js client, Django REST API, Supabase for the database, and Cloudinary for images. Built with two other developers.",
    tags: [...RIHLATY_TECH_TAGS],
    liveHref: RIHLATY_LIVE_URL,
    imageSrc: "/images/projects/rihlaty.png",
    imageSrcMobile: "/images/projects/rihlaty-phone.png",
    imageAlt:
      "Rihlaty homepage — compare travel offers and AI recommendations from verified agencies",
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
