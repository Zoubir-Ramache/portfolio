// import React from 'react'
import './style.css' 
function Loading() {
  return (
  
    <div className=' fixed w-screen h-screen flex justify-center items-center bg-black z-50'>
      <div className="container flex justify-center items-center">

        <div className="cube">
          <div className="top"></div>
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading