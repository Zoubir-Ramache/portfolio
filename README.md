# Zoubir Ramache — Portfolio

Personal portfolio website showcasing projects, skills, and contact information. Built with Next.js and a dark, motion-driven UI.

**Live site:** [ramache-zoubir.vercel.app](https://ramache-zoubir.vercel.app/)

## Features

- **Hero** — Introduction with availability status and featured project spotlight (Rihlaty)
- **Projects** — Featured and archived work with live demos, repos, and responsive previews
- **About** — Background and current focus
- **Tech stack** — Tools and technologies used day to day
- **Contact** — Email and social links (GitHub, LinkedIn, Instagram, Facebook)

## Tech stack

| Category | Tools |
|----------|-------|
| Framework | [Next.js 13](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| State | [Zustand](https://zustand-demo.pmnd.rs/) |
| Icons | [React Icons](https://react-icons.github.io/react-icons/) |

## Project structure

```
├── app/              # Next.js App Router (layout, page, global styles)
├── components/       # UI sections (NavBar, Profile, MyProjects, etc.)
├── content/          # Shared data (projects, Rihlaty copy and URLs)
├── Context/          # React context (loading state)
├── lib/              # Utilities (scroll helpers)
└── public/           # Static assets (images, favicon)
```

Project data lives in `content/projects.ts`. To add or edit a project, update the `PROJECTS` array there.

## Getting started

**Prerequisites:** Node.js 18+ and npm.

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Deployment

The site is live on Vercel: [https://ramache-zoubir.vercel.app/](https://ramache-zoubir.vercel.app/)

To deploy your own fork, connect the repository to [Vercel](https://vercel.com/) (or any platform that supports Next.js) and use the default build settings:

- **Build command:** `npm run build`
- **Output:** Next.js default

## Author

**Zoubir Ramache** — Web developer from Algeria

- GitHub: [@Zoubir-Ramache](https://github.com/Zoubir-Ramache/)
- LinkedIn: [zoubir-ramache](https://www.linkedin.com/in/zoubir-ramache-04189a25b)
- Email: [ramachezoubir@gmail.com](mailto:ramachezoubir@gmail.com)

## License

Private project — all rights reserved.
