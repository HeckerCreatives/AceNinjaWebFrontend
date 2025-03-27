import { motion } from 'framer-motion'
import React from 'react'


export default function Path() {
  return (
    <div className=' relative w-full h-auto bg-black border-none'>
        <div className=' w-full h-full flex flex-col items-center justify-center -translate-y-32 lg:-translate-y-32 text-white py-32 lg:py-60 border-none'
        style={{backgroundImage: "url('/v2/path/Red BG A.png')",backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundPosition:'top right'}}
        >

            <div className=' w-full flex flex-col ~gap-6/12 items-center justify-center max-w-[1440px] lg:px-8'>
                <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px 0px" }}
                transition={{
                    type: "spring",
                    stiffness: 30,
                    damping: 10,
                    mass: 1,
                    delay: 0
                }}
                className=' flex items-center justify-center ~gap-4/12'>
                    <img src="/v2/path/Title Side A.png" alt="" className=' rotate-180  ~w-12/60'/>
                    <h2 className=' uppercase  ~text-lg/4xl font-bold'>Choose your own path!</h2>
                    <img src="/v2/path/Title Side A.png" alt="" className=' ~w-12/60'/>
                </motion.div>

                <motion.p 
                
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px 0px" }}
                transition={{
                    type: "spring",
                    stiffness: 30,
                    damping: 10,
                    mass: 1,
                    delay: .2
                }}
            className=' w-[70%] text-center ~text-xs/lg'>In ACE, your path is your power! Will you embrace the honor of the Samurai, the arcane mastery of the Mage, the wisdom of the Scholar, the cunning of the Rogue, or the shadowy strength of the Dark path? Each path offers unique skills and abilities, letting you build a warrior that matches your playstyle. Choose wisely, forge your destiny, and become a legend in the world of ACE!</motion.p>

                <div 
                className=' w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-12'>
                    <motion.div 
                     initial={{ opacity: 0, x: -200 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true, margin: "-100px 0px" }}
                     transition={{
                         type: "spring",
                         stiffness: 30,
                         damping: 10,
                         mass: 1,
                         delay: 0
                     }}
                    className=' relative w-full h-auto  flex items-center justify-center max-w-[230px] ' >
                        <img src="/v2/path/Mage Path.png" alt="" className=''/>
                        <div className=' absolute right-2 w-[85%] md:w-[200px] -translate-y-16 flex flex-col gap-4 items-center justify-center'>
                            <p className=' ~text-xs/lg font-black uppercase text-center text-white shadow-text'>Mage Path</p>
                            <p className=' text-xs w-[70%] text-center bg-none drop-shadow-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto labore perferendis minima, nobis culpa beatae.</p>

                        </div>
                    </motion.div>

                    <motion.div 
                     initial={{ opacity: 0, x: -200 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true, margin: "-100px 0px" }}
                     transition={{
                         type: "spring",
                         stiffness: 30,
                         damping: 10,
                         mass: 1,
                         delay: .2
                     }}
                    className=' relative w-full h-auto flex items-center justify-center max-w-[230px] '>
                        <img src="/v2/path/Samurai Path.png" alt="" className=''/>
                        <div className=' absolute right-2 w-[85%] md:w-[200px] -translate-y-16 flex flex-col gap-4 items-center justify-center'>
                            <p className=' ~text-xs/lg font-black uppercase text-center shadow-text'>Samurai Path</p>
                            <p className=' text-xs w-[70%] text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto labore perferendis minima, nobis culpa beatae.</p>

                        </div>
                    </motion.div>

                    <motion.div 
                     initial={{ opacity: 0, y: 200 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-100px 0px" }}
                     transition={{
                         type: "spring",
                         stiffness: 30,
                         damping: 10,
                         mass: 1,
                         delay: .4
                     }}
                    className=' relative w-full h-auto flex items-center justify-center max-w-[230px]' >
                        <img src="/v2/path/Scholar Path.png" alt="" className=''/>
                        <div className=' absolute right-2 w-[85%] md:w-[200px] -translate-y-16 flex flex-col gap-4 items-center justify-center'>
                            <p className=' ~text-xs/lg font-black uppercase text-center shadow-text'>Scholar Path</p>
                            <p className=' text-xs w-[70%] text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto labore perferendis minima, nobis culpa beatae.</p>

                        </div>
                    </motion.div>

                    <motion.div 
                     initial={{ opacity: 0, x: 200 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true, margin: "-100px 0px" }}
                     transition={{
                         type: "spring",
                         stiffness: 30,
                         damping: 10,
                         mass: 1,
                         delay: .2
                     }}
                    className=' relative w-full h-auto flex items-center justify-center max-w-[230px]' >
                        <img src="/v2/path/Rogue Path.png" alt="" className=''/>
                        <div className=' absolute right-2 w-[85%] md:w-[200px] -translate-y-16 flex flex-col gap-4 items-center justify-center'>
                            <p className=' ~text-xs/lg font-black uppercase text-center shadow-text'>Rouge Path</p>
                            <p className=' text-xs w-[70%] text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto labore perferendis minima, nobis culpa beatae.</p>

                        </div>
                    </motion.div>

                    <motion.div 
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px 0px" }}
                    transition={{
                        type: "spring",
                        stiffness: 30,
                        damping: 10,
                        mass: 1,
                        delay: 0
                    }}
                    className=' relative w-full h-auto flex items-center justify-center max-w-[230px]'>
                        <img src="/v2/path/Dark Path.png" alt="" className=''/>
                        <div className=' absolute right-2 w-[85%] md:w-[200px] -translate-y-16 flex flex-col gap-4 items-center justify-center'>
                            <p className=' ~text-xs/lg font-black uppercase text-center shadow-text'>Dark Path</p>
                            <p className=' text-xs w-[70%] text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto labore perferendis minima, nobis culpa beatae.</p>

                        </div>
                    </motion.div>

                </div>

            </div>

            


        </div>

    </div>
  )
}
