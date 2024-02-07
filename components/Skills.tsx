
import {SiTailwindcss} from 'react-icons/si'
import {BiLogoCss3 , BiLogoReact , BiLogoJavascript , BiLogoJava , BiLogoNodejs} from 'react-icons/bi'
import {TbBrandNextjs} from 'react-icons/tb'
import {BsGit} from 'react-icons/bs'
import {VscTerminalLinux} from 'react-icons/vsc'
import {motion as m }from "framer-motion"
function Skills() {

  
  return (

    <div>
    <h2 className=' card-title text-primary-content underline'>my skills :</h2>
    <div  className=' w-full flex flex-wrap justify-around gap-2 px-8 py-2 capitalize font-bold'>

      <m.li whileInView={{scale:1}} whileHover={{scale:1.1}} initial={{scale:.1}} className=' btn text-lg btn-ghost capitalize shadow-md shadow-secondary '>javascript <BiLogoJavascript  className='skills-icon'/></m.li>
      <m.li whileInView={{scale:1}} whileHover={{scale:1.1}} initial={{scale:.1}} className=' btn text-lg btn-ghost capitalize shadow-md shadow-secondary '>react js <BiLogoReact className='skills-icon'/></m.li>
      <m.li whileInView={{scale:1}} whileHover={{scale:1.1}} initial={{scale:.1}} className=' btn text-lg btn-ghost capitalize shadow-md shadow-secondary '>next js <TbBrandNextjs className='skills-icon'/> </m.li>
      <m.li whileInView={{scale:1}} whileHover={{scale:1.1}} initial={{scale:.1}} className=' btn text-lg btn-ghost capitalize shadow-md shadow-secondary '>css <BiLogoCss3 className='skills-icon'/></m.li>
      <m.li whileInView={{scale:1}} whileHover={{scale:1.1}} initial={{scale:.1}} className=' btn text-lg btn-ghost capitalize shadow-md shadow-secondary '> tailwindcss  <SiTailwindcss className='skills-icon'/></m.li>
      <m.li whileInView={{scale:1}} whileHover={{scale:1.1}} initial={{scale:.1}} className=' btn text-lg btn-ghost capitalize shadow-md shadow-secondary '> nodejs  <BiLogoNodejs className='skills-icon'/></m.li>
      <m.li whileInView={{scale:1}} whileHover={{scale:1.1}} initial={{scale:.1}} className=' btn text-lg btn-ghost capitalize shadow-md shadow-secondary '> java <BiLogoJava className='skills-icon'/></m.li>
      <m.li whileInView={{scale:1}} whileHover={{scale:1.1}} initial={{scale:.1}} className=' btn text-lg btn-ghost capitalize shadow-md shadow-secondary '> git <BsGit className='skills-icon'/></m.li>
      <m.li whileInView={{scale:1}} whileHover={{scale:1.1}} initial={{scale:.1}} className=' btn text-lg btn-ghost capitalize shadow-md shadow-secondary '> linux <VscTerminalLinux className='skills-icon'/> </m.li>

    </div>
    
  </div>


    )
}

export default Skills