import { motion as m } from "framer-motion";

function Loading() {
  return (
    <div className='fixed w-screen h-screen flex justify-center items-center bg-base-100 z-50'>
      <div className="relative flex justify-center items-center">
        <m.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            borderRadius: ["20%", "50%", "20%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="w-16 h-16 bg-primary shadow-lg shadow-primary/50"
        />
        <m.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -180, -360],
            borderRadius: ["50%", "20%", "50%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute w-8 h-8 bg-secondary shadow-md shadow-secondary/50"
        />
      </div>
    </div>
  )
}

export default Loading
