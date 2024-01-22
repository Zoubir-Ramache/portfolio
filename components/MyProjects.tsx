import {motion as m }from "framer-motion"

function MyProjects() {


    

  return (
    <m.div whileInView={{opacity:1}} initial={{opacity:0}} transition={{delay:.2}} className='card  shadow-sm shadow-primary-content m-1 mt-4 p-2' id="Projects">
      <h1 className='card-title text-primary-content underline underline-offset-4 '>My Projects : </h1>
      <main className='flex gap-4 flex-wrap  py-4 justify-around '>

        <m.div initial={{scaleX:.7}} whileInView={{scaleX:1}} transition={{delay:.1}} className="card mb-8 hover:shadow-md hover:shadow-primary-focus shadow-primary-content dark:shadow-sm dark:shadow-primary-content w-96 bg-base-100 shadow-xl">
          <figure><img src='images/projects/Screenshot from 2023-07-06 14-33-23.png' alt="audio notes"  /></figure>
          <div className="card-body">
            <h2 className="card-title capitalize">facebook app </h2>
            <p> a web application created with next js  , <br /> <i className=' text-info'>note  </i> : this desing is only  for small screen devices ! </p>
            <div className='flex  justify-around'>

              <a className="card-actions " target='_blank' href="https://github.com/remmachezoubir/Facebook_app.git" >
                <button className="btn btn-secondary text-white">github</button>
              </a>
              <a className="card-actions" target='_blank' href="https://facebook-app-alpha.vercel.app/" >
                <button className="btn  btn-info">check</button>
              </a>
            </div>

          </div>
        </m.div>


        <m.div initial={{scaleX:.7}} whileInView={{scaleX:1}} transition={{delay:.1}} className="card mb-8 hover:shadow-md hover:shadow-primary-focus shadow-primary-content dark:shadow-sm dark:shadow-primary-content w-96 bg-base-100 shadow-xl">
          <figure><img src='/images/projects/Screenshot from 2023-07-09 00-40-36.png' alt="audio notes" /></figure>
          <div className="card-body">
            <h2 className="card-title capitalize">audio notes </h2>
            <p> a web application created with react js and tailwind css for taking notes  </p>

            <div className='flex  justify-around'>
              <a className="card-actions " target='_blank' href="https://github.com/remmachezoubir/o-notes.git" >
                <button className="btn btn-secondary text-white">github</button>
              </a>
              <a className="card-actions justify-end" target='_blank' href='https://o-notes.vercel.app/' >
                <button className="btn btn-info ">check</button>
              </a>

            </div>
          </div>
        </m.div>
      </main>


    </m.div>
  )
}

export default MyProjects