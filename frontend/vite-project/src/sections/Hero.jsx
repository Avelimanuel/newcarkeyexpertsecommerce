import React from "react";
import {motion} from "framer-motion"


const Hero = () => {
  return (
    <section className="bg-center bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1606128031531-52ae98c9707a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGNhciUyMGtleXxlbnwwfHwwfHx8MA%3D%3D')] bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <motion.h1
            initial={{x:-300,opacity:0}}
            whileInView={{x:0,opacity:1}} 
            transition={{delay:0.2,x:{type:"spring",stiffness:5},
            opacity:{duration:1},
            ease:"easeIn",
            duration:1
          }}
          
            className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Lost Your Car Key Or Need A Spare Key?
        </motion.h1>
        <motion.p  initial={{x:300,opacity:0}}
            whileInView={{x:0,opacity:1}} 
            transition={{delay:0.2,x:{type:"spring",stiffness:5},
            opacity:{duration:1},
            ease:"easeIn",
            duration:1
          }} className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Look no further! At CarKey Experts, we specialize in cutting-edge
          car key programming services that ensure you're back on the road in no
          time.
        </motion.p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          
          <motion.h1  initial={{y:200,opacity:0}}
            whileInView={{y:0,opacity:1}} 
            transition={{delay:0.2,y:{type:"spring",stiffness:5},
            opacity:{duration:1},
            ease:"easeIn",
            duration:1
          }} className=" text-4xl lg:text-6xl font-extrabold text-white">0716 884 011</motion.h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;