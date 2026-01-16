import { motion } from 'framer-motion'
import React from 'react'


export default function Path() {
  return (
    <div className=' relative w-full h-auto bg-black border-spacing-2 border-black'>
        <div className=' w-full h-full flex flex-col items-center justify-center -translate-y-32 lg:-translate-y-32 text-white py-32 lg:py-60 border-none'
        style={{backgroundImage: "url('/optimize/path/Red BG A.webp')",backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundPosition:'top right'}}
        >

            <div className=' w-full hidden md:flex flex-col gap-6 items-center justify-center max-w-[1440px] lg:px-8 border-none'>
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
                className=' flex items-center justify-center gap-6'>
                    <img src="/optimize/path/Title Side A.webp" alt="" className=' rotate-180 w-[5rem]  md:w-[10rem]'/>
                    <h2 className=' uppercase text-[1.2rem] md:text-[2rem] font-bold whitespace-no-wrap text-center'>Choose your own path!</h2>
                    <img src="/optimize/path/Title Side A.webp" alt="" className=' w-[5rem]  md:w-[10rem]'/>
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
                className=' w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-12'>
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
                    className=' relative w-full h-auto  flex items-center justify-center ' >
                       
                        <img src="/optimize/path/Mage Path.webp" alt="" className=' w-full'/>
                        <div className=' absolute right-2 w-[85%] md:w-[200px] -translate-y-16 flex flex-col gap-4 items-center justify-center'>
                            <p className='  text-xs md:text-lg font-black uppercase text-center text-white shadow-text'>Mage Path</p>
                            <p className=' text-xs w-[70%] text-center bg-none drop-shadow-sm'>Master elemental magic to control the battle field and devastate enemies from afar</p>

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
                    className=' relative w-full h-auto flex items-center justify-center'>
                        {/* <div className=' absolute w-full h-full bg-zinc-950/20'>

                        </div> */}
                        <img src="/optimize/path/Samurai Path.webp" alt="" className=' w-full'/>
                        <div className=' absolute right-2 w-[85%] md:w-[200px] -translate-y-16 flex flex-col gap-4 items-center justify-center'>
                            <p className='  text-xs md:text-lg font-black uppercase text-center shadow-text'>Samurai Path</p>
                            <p className=' text-xs w-[70%] text-center'>Excel in swordsmanship and honor, wielding your katana with precision and power</p>

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
                    className=' relative w-full h-auto flex items-center justify-center ' >
                        {/* <div className=' absolute w-full h-full bg-zinc-950/20'>

                        </div> */}
                        <img src="/optimize/path/Scholar Path.webp" alt="" className=' w-full'/>
                        <div className=' absolute right-2 w-[80%] -translate-y-16 flex flex-col gap-4 items-center justify-center'>
                            <p className=' text-xs md:text-lg font-black uppercase text-center shadow-text'>Scholar Path</p>
                            <p className=' text-xs w-[80%] text-center'>Uncover ancient secrets and wield mystical knowledge to outsmart enemies</p>
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
                    className=' relative w-full h-auto flex items-center justify-center' >
                        {/* <div className=' absolute w-full h-full bg-zinc-950/20'>

                        </div> */}
                        <img src="/optimize/path/Rogue Path.webp" alt="" className=' w-full'/>
                        <div className=' absolute right-2 w-[85%] md:w-[200px] -translate-y-16 flex flex-col gap-4 items-center justify-center'>
                            <p className='  text-xs md:text-lg font-black uppercase text-center shadow-text'>Rouge Path</p>
                            <p className=' text-xs w-[70%] text-center'>Specialize in stealth and agility, executing lethal strikes and evading attacks</p>

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
                    className=' relative w-full h-auto flex items-center justify-center'>
                        {/* <div className=' absolute w-full h-full bg-zinc-950/20'>

                        </div> */}
                        <img src="/optimize/path/Dark Path.webp" alt="" className=' w-full'/>
                        <div className=' absolute right-2 w-[85%] md:w-[200px] -translate-y-16 flex flex-col gap-4 items-center justify-center'>
                            <p className=' text-xs md:text-lg font-black uppercase text-center shadow-text'>Dark Path</p>
                            <p className=' text-xs w-[70%] text-center'>Wield forbidden powers to manipulate and overpower enemies, embracing the shadows</p>

                        </div>
                    </motion.div>

                </div>

            </div>

            <div className=' w-full flex md:hidden flex-col gap-6 items-center justify-center max-w-[1440px] lg:px-8 border-none'>
                <motion.div 
              
                className=' flex items-center justify-center gap-6'>
                    <img src="/optimize/path/Title Side A.webp" alt="" className=' rotate-180 w-[5rem]  md:w-[10rem]'/>
                    <h2 className=' uppercase text-[1.2rem] md:text-[2rem] font-bold whitespace-no-wrap text-center'>Choose your own path!</h2>
                    <img src="/optimize/path/Title Side A.webp" alt="" className=' w-[5rem]  md:w-[10rem]'/>
                </motion.div>

                <motion.p 
        
            className=' w-[70%] text-center ~text-xs/lg'>In ACE, your path is your power! Will you embrace the honor of the Samurai, the arcane mastery of the Mage, the wisdom of the Scholar, the cunning of the Rogue, or the shadowy strength of the Dark path? Each path offers unique skills and abilities, letting you build a warrior that matches your playstyle. Choose wisely, forge your destiny, and become a legend in the world of ACE!</motion.p>

                <div 
                className=' w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-12'>
                    <motion.div 
                     
                    className=' relative w-full h-auto  flex items-center justify-center ' >
                       
                        <img src="/optimize/path/Mage Path.webp" alt="" className=' w-full'/>
                        <div className=' absolute right-2 w-[85%] md:w-[200px] -translate-y-16 flex flex-col gap-4 items-center justify-center'>
                            <p className='  text-xs md:text-lg font-black uppercase text-center text-white shadow-text'>Mage Path</p>
                            <p className=' text-xs w-[70%] text-center bg-none drop-shadow-sm'>Master elemental magic to control the battle field and devastate enemies from afar</p>

                        </div>
                    </motion.div>

                    <motion.div 
                    
                    className=' relative w-full h-auto flex items-center justify-center'>
                        {/* <div className=' absolute w-full h-full bg-zinc-950/20'>

                        </div> */}
                        <img src="/optimize/path/Samurai Path.webp" alt="" className=' w-full'/>
                        <div className=' absolute right-2 w-[85%] md:w-[200px] -translate-y-16 flex flex-col gap-4 items-center justify-center'>
                            <p className='  text-xs md:text-lg font-black uppercase text-center shadow-text'>Samurai Path</p>
                            <p className=' text-xs w-[70%] text-center'>Excel in swordsmanship and honor, wielding your katana with precision and power</p>

                        </div>
                    </motion.div>

                    <motion.div 
                    
                    className=' relative w-full h-auto flex items-center justify-center ' >
                        {/* <div className=' absolute w-full h-full bg-zinc-950/20'>

                        </div> */}
                        <img src="/optimize/path/Scholar Path.webp" alt="" className=' w-full'/>
                        <div className=' absolute right-2 w-[80%] -translate-y-16 flex flex-col gap-4 items-center justify-center'>
                            <p className=' text-xs md:text-lg font-black uppercase text-center shadow-text'>Scholar Path</p>
                            <p className=' text-xs w-[80%] text-center'>Uncover ancient secrets and wield mystical knowledge to outsmart enemies</p>
                        </div>
                    </motion.div>

                    <motion.div 
                    
                    className=' relative w-full h-auto flex items-center justify-center' >
                        {/* <div className=' absolute w-full h-full bg-zinc-950/20'>

                        </div> */}
                        <img src="/optimize/path/Rogue Path.webp" alt="" className=' w-full'/>
                        <div className=' absolute right-2 w-[85%] md:w-[200px] -translate-y-16 flex flex-col gap-4 items-center justify-center'>
                            <p className='  text-xs md:text-lg font-black uppercase text-center shadow-text'>Rouge Path</p>
                            <p className=' text-xs w-[70%] text-center'>Specialize in stealth and agility, executing lethal strikes and evading attacks</p>

                        </div>
                    </motion.div>

                    <motion.div 
                    
                    className=' relative w-full h-auto flex items-center justify-center'>
                        {/* <div className=' absolute w-full h-full bg-zinc-950/20'>

                        </div> */}
                        <img src="/optimize/path/Dark Path.webp" alt="" className=' w-full'/>
                        <div className=' absolute right-2 w-[85%] md:w-[200px] -translate-y-16 flex flex-col gap-4 items-center justify-center'>
                            <p className=' text-xs md:text-lg font-black uppercase text-center shadow-text'>Dark Path</p>
                            <p className=' text-xs w-[70%] text-center'>Wield forbidden powers to manipulate and overpower enemies, embracing the shadows</p>

                        </div>
                    </motion.div>

                </div>

            </div>

            


        </div>

    </div>
  )
}
