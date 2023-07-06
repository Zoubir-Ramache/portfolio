import { useEffect, useLayoutEffect, useRef } from "react"
import { NavBar, Profile, MyProjects, ContactMe, AboutMe } from "./components"
import { useStateContext } from "./Context/FirstProvider"
import { gsap } from "gsap"


function App() {

  const { ActiveNavbar, setActiveNavbar , theme , setTheme  } = useStateContext()

  

  useEffect(()=>{

    const currentTheme= localStorage.getItem('theme')
    setTheme(currentTheme || 'dark')
  }, [])
  useEffect(() => {
    const Myevent = () => {
      const scrollPosition = window.pageYOffset
      
      if (scrollPosition > 400) {
        setActiveNavbar(true)
      } else {
        setActiveNavbar(false)
      }
      

    }
    window.addEventListener('scroll', Myevent)
    

    return () => window.removeEventListener('scroll', Myevent)
  }, [])

  return (
    <div data-theme={theme} className=" bg-base-100 overflow-hidden font-mono text-primary-content ">

      {ActiveNavbar && <NavBar />}
      <Profile />
      <div className='mt-24 '>
        <AboutMe />
        <MyProjects />
        <ContactMe />
      </div>

    </div>
  )
}

export default App
