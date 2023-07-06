import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Skills from './Skills'
function AboutMe() {

  const root = useRef<any>(null)
  useLayoutEffect(() => {


    const ctx = gsap.context(() => {
      gsap.from(root.current, {
        x: 1000,
        scrollTrigger: {
          trigger: root.current,
        }
      })

    })
    return () => ctx.revert()
  }, [])

  return (
    <main ref={root} className=' card p-2   shadow-sm m-1 shadow-primary-content'>
      <h1 id='AboutMe' className='card-title text-primary-content  underline  underline-offset-4 '>About me :</h1>
      <article className=' inline-block font-semibold p-2 pl-8 text-primary-content  '>

        <li>a web devloper from algeria</li>
        <li>student at the univercity of constantine</li>
        <li>20 years old</li>


      <Skills/>

      </article>
    </main>
  )
}

export default AboutMe