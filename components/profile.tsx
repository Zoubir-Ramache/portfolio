import { FiChevronsDown } from "react-icons/fi"
import { useStateContext } from "../Context/FirstProvider"
import { motion as m } from "framer-motion"
import { useEffect } from "react"
import Image from "next/image"

function Profile() {
  const { setActiveNavbar, setLoading, loading } = useStateContext()

  useEffect(() => {
    setLoading(false)
  }, [setLoading])

  const handleClick = () => {
    setActiveNavbar(true)
    const about = document.getElementById('AboutMe')
    const position = about?.getBoundingClientRect().top
    window.scrollTo({
      top: window.scrollY - 100 + (position || 0),
      behavior: "smooth"
    })
  }

  return (
    <div id="profile" className='min-h-[95vh] flex flex-col justify-center items-center p-6 relative overflow-hidden'>
      {/* Decorative backgrounds */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className='flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full'>
        <m.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={!loading ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          whileHover={{ scale: 1.05 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <Image
            className='relative rounded-full aspect-square object-cover border-4 border-base-100 shadow-2xl'
            width={320}
            height={320}
            src="/images/RAMACHE_ZOUBIR.png"
            alt="ramache zoubir"
          />
        </m.div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 max-w-xl">
          <m.h1
            initial={{ opacity: 0, x: 50 }}
            animate={!loading ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            Ramache Zoubir
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={!loading ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, type: "spring" }}
            className='text-xl md:text-2xl font-medium leading-relaxed'
          >
            Passionate <span className="text-primary">React Developer</span> crafting immersive, user-centric web experiences with modern tech and stunning visuals.
          </m.p>
        </div>
      </div>

      <m.div
        initial={{ opacity: 0 }}
        animate={!loading ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className='absolute bottom-10 flex justify-center w-full'
      >
        <m.button
          whileHover={{ y: 5 }}
          className='btn btn-circle btn-lg btn-ghost border-2 border-primary/30 hover:border-primary text-primary'
          onClick={handleClick}
        >
          <FiChevronsDown size={40} className="animate-bounce" />
        </m.button>
      </m.div>
    </div>
  )
}

export default Profile
