import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import {  useRef, useLayoutEffect } from "react"
import { FiChevronsDown } from "react-icons/fi"
import { useStateContext } from "../Context/FirstProvider"
function Profile() {

  const {  setActiveNavbar } = useStateContext()

  //animation 
  const root = useRef<HTMLDivElement>(null)
  const text = useRef<HTMLDivElement>(null)
  const Myimage = useRef<any>(null)
  const btnDown = useRef<HTMLButtonElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.to(text.current, {
        opacity: 0, scale: .9,
        scrollTrigger: {
          trigger: text.current,
          scrub: 1,
          pin: true
        }
      })

      gsap.from(text.current, {
        duration: 3,
        opacity: 0,

      })
      gsap.to(Myimage.current, {
        opacity: 0,
        scale: .8,
        scrollTrigger: {
          trigger: Myimage.current,
          scrub: 1,
          pin: true
        }
      })

      gsap.from(Myimage.current, {
        duration: 1,
        y: -200, ease: "bounce"
      })
    }, root)


    return () => ctx.revert()
  }, [])

  const handleClick = () => {
    setActiveNavbar(true)
    const about = document.getElementById('AboutMe')
    const position = about?.getBoundingClientRect()    

    window.scrollTo({
      top: window.pageYOffset+(position?.top || 0) -130 , 
      behavior: "smooth"
      
    })
  }
  return (
    <div ref={root} id="profile" className='h-[98vh] flex flex-col p-4'>

      <div className=' h-full flex sm:flex-nowrap flex-wrap justify-around gap-2 sm:gap-8 items-center '>
        <img ref={Myimage} className='rounded-full  shadow-md  shadow-secondary ' width={'300'} src="images/IMG_20230411_153707_085.jpg" alt="ramache zoubir" />

        <p ref={text} className='text-primary-content  font-semibold text-lg  mb-8 sm:mb-0 '>

        As a passionate React web developer, I strive to create immersive and user-centric web applications that seamlessly blend functionality with stunning visuals, delivering exceptional user experiences
        </p>


      </div>
      <div className=' flex justify-center w-full'>

        <button ref={btnDown} className=' btn    hover:btn-primary  shadow-lg shadow-primary btn-circle  h-24 w-24  btn-secondary  animate-bounce ' onClick={handleClick}>
          <FiChevronsDown size={100} />
        </button>
      </div>

    </div>
  )
}

export default Profile