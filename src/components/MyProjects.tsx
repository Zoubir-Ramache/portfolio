import  { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
function MyProjects() {
  const root = useRef<any>(null)
  useLayoutEffect(() => {


    const ctx = gsap.context(() => {
      gsap.from(root.current, {
        x: -1000,
        scrollTrigger: {
          trigger: root.current,
        }
      })

    })
    return () => ctx.revert()
  }, [])


  return (
    <div ref={root} className='card  shadow-sm shadow-primary-content m-1 mt-4 p-2' id="Projects">
      <h1 className='card-title text-primary-content underline underline-offset-4 '>My Projects : </h1>
      <main className='flex gap-4 flex-wrap  justify-center'>
        <div className='card p-1  w-32'>
          <h1 className='card-title text-primary-content'>
            facebook
          </h1>
        </div>
        <div className='card p-1 w-32'>
          <h1 className='card-title text-primary-content'>
            instagram
          </h1>
        </div>
        <div className='card p-1  w-32'>
          <h1 className='card-title text-primary-content'>
            gmail
          </h1>
        </div>
        <div className='card p-1  w-32 '>
          <h1 className='card-title text-primary-content'>
            linkdin
          </h1>
        </div>
        <div className='card p-1 w-32 '>
          <h1 className='card-title text-primary-content'>
            github
          </h1>
        </div>
      </main>



    </div>
  )
}

export default MyProjects