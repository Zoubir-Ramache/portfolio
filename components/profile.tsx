import { FiChevronsDown } from "react-icons/fi"
import { useStateContext } from "../Context/FirstProvider"
import { motion as m } from "framer-motion"
import { useEffect } from "react"
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
      top: window.scrollY - 135 + (position || 0),
      behavior: "smooth"

    })
  }
  return (
    <div id="profile" className='h-[98vh] flex flex-col p-4'>

      <div className=' h-full flex sm:flex-nowrap flex-wrap justify-around gap-2 sm:gap-8 items-center '>
        <m.img
          drag dragConstraints={{ right: 0, left: 0, top: 0, bottom: 0 }} dragElastic={1}
          whileHover={{ scale: 1.05 }} whileTap={{ rotate: 4 }} animate={!loading ? { y:0} : {}} initial={{ y: -500 }} transition={{ type: "spring", stiffness: 120 }}
          className='rounded-full  shadow-md  shadow-secondary ' width={'300'} src="images/IMG_20230411_153707_085.jpg" alt="ramache zoubir" />

        <m.p initial={{ opacity: 0 }} animate={loading ? {} : { opacity: 1 }} transition={{ delay: .3, type: "spring", stiffness: 200 }} className='text-primary-content  font-semibold text-lg  mb-8 sm:mb-0 '>

          As a passionate React web developer, I strive to create immersive and user-centric web applications that seamlessly blend functionality with stunning visuals, delivering exceptional user experiences
        </m.p>


      </div>
      <div className=' flex justify-center w-full'>

        <button className=' btn    hover:btn-primary  shadow-lg shadow-primary btn-circle  h-24 w-24  btn-secondary  animate-bounce ' onClick={handleClick}>
          <FiChevronsDown size={100} />
        </button>
      </div>

    </div>
  )
}

export default Profile