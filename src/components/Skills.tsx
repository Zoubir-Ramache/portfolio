
import {SiTailwindcss} from 'react-icons/si'
import {BiLogoCss3 , BiLogoReact , BiLogoJavascript , BiLogoJava , BiLogoNodejs} from 'react-icons/bi'
import {TbBrandNextjs} from 'react-icons/tb'
import {BsGit} from 'react-icons/bs'
import {VscTerminalLinux} from 'react-icons/vsc'
function Skills() {
  return (

    <footer>
    <h2 className=' card-title text-primary-content underline'>my skills :</h2>
    <div className=' w-full flex flex-wrap justify-around gap-2 px-8 capitalize font-bold'>

      <li className='btn text-lg btn-ghost capitalize '>javascript <BiLogoJavascript  className='skills-icon'/></li>
      <li className='btn text-lg btn-ghost capitalize '>react js <BiLogoReact className='skills-icon'/></li>
      <li className='btn text-lg btn-ghost capitalize '>next js <TbBrandNextjs className='skills-icon'/> </li>
      <li className='btn text-lg btn-ghost capitalize '>css <BiLogoCss3 className='skills-icon'/></li>
      <li className='btn text-lg btn-ghost capitalize '> tailwindcss  <SiTailwindcss className='skills-icon'/></li>
      <li className='btn text-lg btn-ghost capitalize '> nodejs  <BiLogoNodejs className='skills-icon'/></li>
      <li className='btn text-lg btn-ghost capitalize '> java <BiLogoJava className='skills-icon'/></li>
      <li className='btn text-lg btn-ghost capitalize '> git <BsGit className='skills-icon'/></li>
      <li className='btn text-lg btn-ghost capitalize '> linux <VscTerminalLinux className='skills-icon'/> </li>

    </div>
    
  </footer>


    )
}

export default Skills