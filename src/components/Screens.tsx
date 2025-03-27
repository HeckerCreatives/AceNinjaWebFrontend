'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import TiltCard from './common/Tiltcard';

export default function Screens() {

    useEffect(() => {
        AOS.init({
        offset: 100,
        });
    }, []);


  return (
    <div className=' w-full flex flex-col gap-12 items-center justify-center p-6 md:p-12 text-white border-none'
    style={{backgroundImage: "url('/v2/screens/Red BG B.png')",backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundPosition:'bottom'}}
    
    >
        <div className=' w-full max-w-[1440px] pb-48 flex flex-col gap-28 lg:gap-40 items-center'>
            <div className=' w-full grid grid-cols-1 lg:grid-cols-2 ~gap-8/12'>
                {/* <img src="/v2/screens/Phone A.png" alt=""/> */}

                <motion.div className=' w-full'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px 0px" }}
                transition={{
                    type: "spring",
                    stiffness: 30,
                    damping: 10,
                    mass: 1,
                    delay: .4
                }}>
                <TiltCard
                    image="/v2/screens/Phone A.png"
                    />
                </motion.div>
               

                <div className=' w-full flex flex-col gap-8 items-center justify-center' data-aos="fade-up" data-aos-duration={1000} data-aos-delay={300}>
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
                    className=' flex items-center justify-center gap-4'>
                        <img src="/v2/screens/Title side B.png" alt="" className=' ~w-6/10' />
                        <h2 className=' uppercase ~text-sm/3xl font-bold'>Challenge other players</h2>
                        <img src="/v2/screens/Title side B.png" alt="" className=' rotate-180  ~w-6/10' />
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
                    className=' text-center ~text-xs/lg w-[80%]'>In ACE, the battlefield is yours to conquer! Challenge players from around the globe in intense online PvP battles, climb the ranks, and claim unique rewards for each victory. With a cutting-edge PvP fight system and mechanics, every battle is a test of skill. Want to team up? Dive into custom 2v2 battles for even more strategic gameplay. Will you rise to the top and prove your dominance in the world of ACE?</motion.p>

                </div>

            </div>

            <div className=' w-full grid grid-cols-1 lg:grid-cols-2 ~gap-8/12'>

                <div className=' w-full flex flex-col gap-8 items-center justify-center lg:order-1 order-2'>
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
                    className=' flex items-center justify-center gap-4'>
                        <img src="/v2/screens/Title side B.png" alt="" className=' ~w-6/10' />
                        <h2 className=' uppercase ~text-sm/3xl font-bold'>RISE WITH YOUR CLAN ON TOP!</h2>
                        <img src="/v2/screens/Title side B.png" alt="" className=' rotate-180 ~w-6/10' />
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
                    }}className=' text-center ~text-xs/lg w-[80%]'>Join forces in ACE by becoming part of a powerful clan! Battle alongside your clanmates in thrilling Clan Wars, where you’ll face off against rival clans in a variety of challenges. Earn points with each victory and claim massive resource rewards. The stakes are high, as the clan with the most points at the end of the season will be crowned the ultimate champion. Will your clan rise to the top and claim glory?</motion.p>

                </div>

                <motion.div className=' w-full lg:order-2 order-1'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px 0px" }}
                transition={{
                    type: "spring",
                    stiffness: 30,
                    damping: 10,
                    mass: 1,
                    delay: .4
                }}>
                <TiltCard
                    image="/v2/screens/Phone B.png"
                    />
                </motion.div>

                {/* <img src="/v2/screens/Phone B.png" alt="" data-aos="fade-up" data-aos-duration={1000} className='lg:order-2 order-1'/> */}

            </div>

            <div className=' w-full grid grid-cols-1 lg:grid-cols-2 ~gap-8/12 md:order-none order-last'>

            <motion.div className=' w-full'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px 0px" }}
                transition={{
                    type: "spring",
                    stiffness: 30,
                    damping: 10,
                    mass: 1,
                    delay: .4
                }}>
                <TiltCard
                    image="/v2/screens/Phone C.png"
                    />
                </motion.div>

                {/* <img src="/v2/screens/Phone C.png" alt="" data-aos="fade-up" data-aos-duration={1000}/> */}

                <div className=' w-full flex flex-col gap-8 items-center justify-center' data-aos="fade-up" data-aos-duration={1000} data-aos-delay={300}>
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
                    className=' flex items-center justify-center gap-4'>
                        <img src="/v2/screens/Title side B.png" alt="" className=' ~w-6/10' />
                        <h2 className=' uppercase ~text-sm/3xl font-bold'>Challenge other players</h2>
                        <img src="/v2/screens/Title side B.png" alt="" className=' rotate-180 ~w-6/10' />
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
                        delay: 0.2
                    }}
                    className=' text-center ~text-xs/lg w-[80%]'>In ACE, the battlefield is yours to conquer! Challenge players from around the globe in intense online PvP battles, climb the ranks, and claim unique rewards for each victory. With a cutting-edge PvP fight system and mechanics, every battle is a test of skill. Want to team up? Dive into custom 2v2 battles for even more strategic gameplay. Will you rise to the top and prove your dominance in the world of ACE?</motion.p>

                </div>


            </div>

        </div>
        
        
    </div>
  )
}
