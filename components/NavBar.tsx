import { HiMiniChatBubbleLeftRight } from "react-icons/hi2"
import { AiFillHome } from "react-icons/ai"
import { BsRocketTakeoff } from "react-icons/bs"
import { useRef } from "react"
import { useStateContext } from "../Context/FirstProvider"
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"
import { motion as m } from "framer-motion"
import Image from "next/image"

function NavBar() {
  const { theme, setTheme, ActiveNavbarOnScroll } = useStateContext()
  const handleTheme = () => {
    if (localStorage.getItem("theme") === 'light') {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  const navbar = useRef<any>(null)

  const ScrollClick = (id: string) => {
    const about = document.getElementById(id)
    const position = about?.getBoundingClientRect()
    const navbarSpace = navbar.current?.getBoundingClientRect()
    window.scrollTo({
      top: window.scrollY + (position?.top || 0) - (navbarSpace?.height || 0) - 20,
      behavior: 'smooth'
    })

    window.removeEventListener('scroll', ActiveNavbarOnScroll)
  }

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <m.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      ref={navbar}
      id="navbar"
      className='flex flex-wrap fixed top-0 items-center w-full z-20 gap-2 justify-around sm:justify-between glass-effect bg-base-100/70 p-2 sm:px-6 rounded-b-3xl shadow-lg'
    >
      <m.div variants={itemVariants}>
        <button onClick={() => ScrollClick('profile')} className="hover:scale-105 transition-transform">
          <Image className='rounded-full border-2 border-primary shadow-md' width={50} height={50} src="/images/RAMACHE_ZOUBIR.png" alt="ramache zoubir" />
        </button>
      </m.div>

      <div className="flex gap-2 sm:gap-4 items-center">
        <m.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => ScrollClick('AboutMe')}
          className='btn btn-ghost btn-sm sm:btn-md normal-case'
        >
          About me <AiFillHome size={18} className="ml-1" />
        </m.button>
        <m.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => ScrollClick('Projects')}
          className='btn btn-ghost btn-sm sm:btn-md normal-case'
        >
          Projects <BsRocketTakeoff size={18} className="ml-1" />
        </m.button>
        <m.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => ScrollClick('Contact')}
          className='btn btn-primary btn-sm sm:btn-md normal-case text-white'
        >
          Contact <HiMiniChatBubbleLeftRight size={18} className="ml-1" />
        </m.button>

        <m.button
          variants={itemVariants}
          whileHover={{ rotate: 15 }}
          className="btn btn-ghost btn-circle btn-sm sm:btn-md"
          onClick={handleTheme}
        >
          {theme !== "dark" ? <MdOutlineDarkMode size={22} /> : <MdOutlineLightMode size={22} />}
        </m.button>
      </div>
    </m.header>
  )
}

export default NavBar
