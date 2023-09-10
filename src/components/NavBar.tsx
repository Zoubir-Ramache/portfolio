import { HiMiniChatBubbleLeftRight } from "react-icons/hi2"
import { AiFillHome } from "react-icons/ai"
import { BsRocketTakeoff } from "react-icons/bs"
import {  useRef } from "react"
import { useStateContext } from "../Context/FirstProvider"
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"
import {motion as m} from "framer-motion"

function NavBar() {
  const { theme , setTheme , ActiveNavbarOnScroll} = useStateContext()
  const handleTheme=()=>{
    if(localStorage.getItem("theme") === 'light'){
      localStorage.setItem('theme','dark')
    setTheme('dark')
    }else{
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  const navbar = useRef<any>(null)




  const ScrollClick = (id:string)=>{
    const about = document.getElementById(id)
    const position = about?.getBoundingClientRect()
    const navbarSpace= navbar.current?.getBoundingClientRect()
    window.scrollTo({
      top: window.pageYOffset+(position?.top || 0) - navbarSpace.height - 20 , 
      behavior:'smooth'
    })
    
    window.removeEventListener('scroll' , ActiveNavbarOnScroll)
    
    
  }
  
  return (
    <m.header animate={{x:0}} initial={{x:400}} ref={navbar}  id="navbar" className='  flex flex-wrap  fixed top-0  items-center w-full z-20  gap-2 justify-around sm:justify-between   bg-primary p-1 sm:px-4 rounded-b-3xl'>
      <div>
        <a href="#profile">
          <img className='rounded-full  shadow-md   shadow-secondary ' width={'60'} src="images/IMG_20230411_153707_085.jpg" alt="ramache zoubir" /></a>
      </div>
      {/* add the opacity for the img  */}

      <a onClick={()=>ScrollClick('AboutMe')} className='btn btn-secondary  text-sm sm:text-lg      capitalize '>
        About me <AiFillHome size={20} />
      </a>
      <a  onClick={()=>ScrollClick('Projects')} className='btn btn-secondary text-sm sm:text-lg    capitalize  '>
        My projects <BsRocketTakeoff size={20} />
      </a>
      <a  onClick={()=>ScrollClick('Contact')} className='btn btn-secondary text-sm sm:text-lg     capitalize '>
        Contact me <HiMiniChatBubbleLeftRight size={20} />
      </a>

      <button className="btn btn-secondary btn-circle" onClick={handleTheme}>
        {theme !=="dark"?<MdOutlineDarkMode size={25} />
        :<MdOutlineLightMode size={25}/>}
        </button>
    </m.header>
  )
}

export default NavBar