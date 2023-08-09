
import {SiTailwindcss} from 'react-icons/si'
import {BiLogoCss3 , BiLogoReact , BiLogoJavascript , BiLogoJava , BiLogoNodejs} from 'react-icons/bi'
import {TbBrandNextjs} from 'react-icons/tb'
import {BsGit} from 'react-icons/bs'
import {VscTerminalLinux} from 'react-icons/vsc'
import { useEffect, useRef } from 'react'
import { gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/all'
function Skills() {

  const root = useRef<HTMLDivElement>(null)
  useEffect(()=>{

    const ctx = gsap.context(()=>{
      gsap.registerPlugin(ScrollTrigger)
      gsap.set('.gsap-animation' , {x: 300})

      gsap.to('.gsap-animation' , {
        x:0 ,
        ease:'bounce',
        stagger :{
          each:.2
        } , 
        scrollTrigger:{
          trigger:'.gsap-animation' , 
          start:"top bottom",
        }
      })

    }, root)
    return ()=>ctx.revert()
  }, [])
  return (

    <footer>
    <h2 className=' card-title text-primary-content underline'>my skills :</h2>
    <div ref={root} className=' w-full flex flex-wrap justify-around gap-2 px-8 py-2 capitalize font-bold'>

      <li className=' gsap-animation btn text-lg btn-ghost capitalize shadow-md shadow-secondary '>javascript <BiLogoJavascript  className='skills-icon'/></li>
      <li className=' gsap-animation btn text-lg btn-ghost capitalize shadow-md shadow-secondary '>react js <BiLogoReact className='skills-icon'/></li>
      <li className=' gsap-animation btn text-lg btn-ghost capitalize shadow-md shadow-secondary '>next js <TbBrandNextjs className='skills-icon'/> </li>
      <li className=' gsap-animation btn text-lg btn-ghost capitalize shadow-md shadow-secondary '>css <BiLogoCss3 className='skills-icon'/></li>
      <li className=' gsap-animation btn text-lg btn-ghost capitalize shadow-md shadow-secondary '> tailwindcss  <SiTailwindcss className='skills-icon'/></li>
      <li className=' gsap-animation btn text-lg btn-ghost capitalize shadow-md shadow-secondary '> nodejs  <BiLogoNodejs className='skills-icon'/></li>
      <li className=' gsap-animation btn text-lg btn-ghost capitalize shadow-md shadow-secondary '> java <BiLogoJava className='skills-icon'/></li>
      <li className=' gsap-animation btn text-lg btn-ghost capitalize shadow-md shadow-secondary '> git <BsGit className='skills-icon'/></li>
      <li className=' gsap-animation btn text-lg btn-ghost capitalize shadow-md shadow-secondary '> linux <VscTerminalLinux className='skills-icon'/> </li>

    </div>
    
  </footer>


    )
}

export default Skills