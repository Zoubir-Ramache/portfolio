import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"
import { BsGithub } from "react-icons/bs"
import { BiLogoGmail } from "react-icons/bi"
import { motion as m, useScroll } from "framer-motion"
export default function ContactMe() {


  const { scrollYProgress } = useScroll()

  return (
    <m.div style={{ scaleX: scrollYProgress }} className='  mb-20 font-sans card shadow-sm shadow-primary-content m-1 mt-4 p-2 capitalize'>
      <h1 id='Contact' className='card-title text-primary-content underline underline-offset-4 '>Contact me : </h1>
      <main className='flex gap-4 flex-wrap  justify-around mt-4'>
        <div className='card p-1 '>

          <m.a whileInView={{ scale: 1 }} initial={{ scale: .6 }} transition={{ delay: .1 }} href='https://www.facebook.com/zoubir.ramach' target='_blank' className=' shadow-sm shadow-primary-content  card-title text-primary-content   btn-ghost p-2 rounded-lg'>
            facebook <BsFacebook size={25} />
          </m.a>
        </div>
        <m.a whileInView={{ scale: 1 }} initial={{ scale: .6 }} transition={{ delay: .1 }} href='https://instagram.com/ramache_zoubir' target='_blank' className='card p-1 btn-ghost shadow-sm shadow-primary-content items-center flex flex-row '>
          <h1 className=' card-title   text-primary-content  p-2 rounded-lg'>
            instagram
          </h1>
          <BsInstagram className="inline-block" size={25} />
        </m.a>
        <m.a whileInView={{ scale: 1 }} initial={{ scale: .6 }} transition={{ delay: .1 }} href='mailto:ramachezoubir@gmail.com' target='_blank' className='card p-1  w-32'>
          <h1 className='card-title shadow-sm shadow-primary-content  text-primary-content   btn-ghost p-2 rounded-lg'>
            gmail <BiLogoGmail />
          </h1>
        </m.a>
        <m.a whileInView={{ scale: 1 }} initial={{ scale: .6 }} transition={{ delay: .1 }} href='https://www.linkedin.com/in/zoubir-ramache-04189a25b' target='_blank' className='card p-1  w-32 '>
          <h1 className='card-title shadow-sm shadow-primary-content   text-primary-content  btn-ghost p-2 rounded-lg'>
            linkdin <AiFillLinkedin size={25} />
          </h1>
        </m.a>
        <m.a whileInView={{ scale: 1 }} initial={{ scale: .6 }} transition={{ delay: .1 }} href='https://github.com/remmachezoubir' target='_blank' className='card p-1 w-32 '>
          <h1 className='card-title shadow-sm shadow-primary-content   text-primary-content btn-ghost p-2 rounded-lg'>
            github <BsGithub />
          </h1>
        </m.a>
      </main>

    </m.div>
  )
}
