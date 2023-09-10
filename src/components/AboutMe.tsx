
import Skills from './Skills'
import {motion as m } from "framer-motion"
function AboutMe() {

  
  
    

  return (
    <m.main initial={{scaleX:.3}} whileInView={{scaleX:1}}  className=' card p-2   shadow-sm m-1 shadow-primary-content'>
      <h1 id='AboutMe' className='card-title text-primary-content  underline  underline-offset-4 '>About me :</h1>
      <article className=' inline-block font-semibold p-2 pl-8 text-primary-content  '>

        <li>a web devloper from algeria</li>
        <li>student at the univercity of constantine</li>
        <li>20 years old</li>


      <Skills/>

      </article>
    </m.main>
  )
}

export default AboutMe