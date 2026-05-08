import { motion as m } from "framer-motion"
import Image from "next/image"
import { BsGithub, BsArrowUpRight } from "react-icons/bs"

function MyProjects() {
  const projects = [
    {
      title: "Facebook App",
      description: "A web application created with Next.js. Note: designed specifically for small screen devices.",
      image: "/images/projects/Screenshot from 2023-07-06 14-33-23.png",
      github: "https://github.com/remmachezoubir/Facebook_app.git",
      demo: "https://facebook-app-alpha.vercel.app/",
      tags: ["Next.js", "Tailwind", "Responsive"]
    },
    {
      title: "Audio Notes",
      description: "A sleek web application built with React and Tailwind CSS for seamless note-taking with a focus on UX.",
      image: "/images/projects/Screenshot from 2023-07-09 00-40-36.png",
      github: "https://github.com/remmachezoubir/o-notes.git",
      demo: "https://o-notes.vercel.app/",
      tags: ["React", "Tailwind", "Productivity"]
    }
  ]

  return (
    <m.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className='max-w-6xl mx-auto py-20 px-4'
      id="Projects"
    >
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className='text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
          Featured Projects
        </h2>
        <p className="text-base-content/60 max-w-lg">
          A showcase of my recent work, blending design and functionality to solve real-world problems.
        </p>
      </div>

      <div className='grid md:grid-cols-2 gap-10'>
        {projects.map((project, index) => (
          <m.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative bg-base-200 rounded-3xl overflow-hidden border border-base-content/5 shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base-900 to-transparent opacity-60"></div>
            </div>

            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-base-content/70 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className='flex gap-4'>
                <a
                  target='_blank'
                  href={project.github}
                  className="btn btn-secondary btn-md text-white px-6 gap-2"
                >
                  <BsGithub size={20} /> GitHub
                </a>
                <a
                  target='_blank'
                  href={project.demo}
                  className="btn btn-primary btn-md text-white px-6 gap-2"
                >
                  Demo <BsArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </m.div>
        ))}
      </div>
    </m.section>
  )
}

export default MyProjects
