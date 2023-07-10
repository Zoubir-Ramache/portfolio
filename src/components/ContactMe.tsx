import {useRef , useLayoutEffect} from 'react'
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"
import {BsGithub} from "react-icons/bs"
import {BiLogoGmail} from "react-icons/bi"
import { gsap } from 'gsap'
export default function ContactMe() {
  const root = useRef<any>(null)
useLayoutEffect(() => {


  const ctx = gsap.context(() => {
    gsap.from(root.current, {
      x: 1000 , 
      scrollTrigger :{
        trigger:root.current, 
      }
    })

  })
  return () => ctx.revert()
}, [])

  return (
    <div ref={root} className='  mb-20 font-sans card shadow-sm shadow-primary-content m-1 mt-4 p-2 capitalize'>
      <h1 id='Contact' className='card-title text-primary-content underline underline-offset-4 '>Contact me : </h1>
      <main className='flex gap-4 flex-wrap  justify-around mt-4'>
        <div className='card p-1 '>
          
          <a href='https://www.facebook.com/zoubir.remmach?mibextid=ZbWKwL' target='_blank' className=' shadow-sm shadow-primary-content  card-title text-primary-content   btn-ghost p-2 rounded-lg'>
            facebook <BsFacebook size={25} />
          </a>
        </div>
        <a href='https://instagram.com/ramache_zoubir?igshid=MzNlNGNkZWQ4Mg==' target='_blank' className='card p-1 btn-ghost shadow-sm shadow-primary-content items-center flex flex-row '>
          <h1 className=' card-title   text-primary-content  p-2 rounded-lg'>
            instagram 
          </h1>
            <BsInstagram className="inline-block" size={25} />
        </a>
        <a href='mailto:ramachezoubir@gmail.com' target='_blank' className='card p-1  w-32'>
          <h1 className='card-title shadow-sm shadow-primary-content  text-primary-content   btn-ghost p-2 rounded-lg'>
            gmail <BiLogoGmail/>
          </h1>
        </a>
        <a href='https://www.linkedin.com/in/zoubir-ramache-04189a25b' target='_blank' className='card p-1  w-32 '>
          <h1 className='card-title shadow-sm shadow-primary-content   text-primary-content  btn-ghost p-2 rounded-lg'>
            linkdin <AiFillLinkedin size={25} />
          </h1>
        </a>
        <a href='https://github.com/remmachezoubir' target='_blank'  className='card p-1 w-32 '>
          <h1 className='card-title shadow-sm shadow-primary-content   text-primary-content btn-ghost p-2 rounded-lg'>
            github <BsGithub/>
          </h1>
        </a>
      </main>

    </div>
  )
}
