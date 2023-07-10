import { useRef, useLayoutEffect } from 'react'
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
      <main className='flex gap-4 flex-wrap   justify-around '>

        <div className="card mb-8 hover:shadow-md hover:shadow-primary-focus shadow-primary-content dark:shadow-md dark:shadow-primary-content w-96 bg-base-100 shadow-xl">
          <figure><img src='images/projects/Screenshot from 2023-07-06 14-33-23.png' alt="audio notes" /></figure>
          <div className="card-body">
            <h2 className="card-title">facebook app </h2>
            <p> a web application created with react js and tailwind css for taking notes  </p>

            <a className="card-actions justify-end" target='_blank' href="https://facebook-app-alpha.vercel.app/" >
              <button className="btn btn-primary">check</button>
            </a>
          </div>
        </div>


        <div className="card mb-8 hover:shadow-md hover:shadow-primary-focus shadow-primary-content dark:shadow-md dark:shadow-primary-content w-96 bg-base-100 shadow-xl">
          <figure><img src='/images/projects/Screenshot from 2023-07-09 00-40-36.png' alt="audio notes" /></figure>
          <div className="card-body">
            <h2 className="card-title">audio notes </h2>
            <p> a web application created with react js and tailwind css for taking notes  </p>

            <a className="card-actions justify-end" target='_blank' href='https://o-notes.vercel.app/' >
              <button className="btn btn-primary">check</button>
            </a>
          </div>
        </div>
      </main>


    </div>
  )
}

export default MyProjects