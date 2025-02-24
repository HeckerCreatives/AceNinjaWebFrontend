'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function Screens() {

    useEffect(() => {
        AOS.init({
        offset: 100,
        });
    }, []);


  return (
    <div className=' w-full flex flex-col gap-12 items-center justify-center p-6 md:p-12 text-white'
    style={{backgroundImage: "url('/v2/screens/Red BG B.png')",backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundPosition:'bottom'}}
    
    >
        <div className=' w-full max-w-[1440px] pb-48 flex flex-col gap-28 lg:gap-40 items-center'>
            <div className=' w-full grid grid-cols-1 lg:grid-cols-2 ~gap-8/12'>
                <img src="/v2/screens/Phone A.png" alt="" data-aos="fade-up" data-aos-duration={1000} />

                <div className=' w-full flex flex-col gap-8 items-center justify-center' data-aos="fade-up" data-aos-duration={1000} data-aos-delay={300}>
                    <div className=' flex items-center justify-center gap-4'>
                        <img src="/v2/screens/Title side B.png" alt="" className=' ~w-6/10' />
                        <h2 className=' uppercase ~text-sm/3xl font-bold'>Challenge other players</h2>
                        <img src="/v2/screens/Title side B.png" alt="" className=' rotate-180  ~w-6/10' />
                    </div>

                    <p className=' text-center ~text-xs/sm w-[80%]'>In ACE, the battlefield is yours to conquer! Challenge players from around the globe in intense online PvP battles, climb the ranks, and claim unique rewards for each victory. With a cutting-edge PvP fight system and mechanics, every battle is a test of skill. Want to team up? Dive into custom 2v2 battles for even more strategic gameplay. Will you rise to the top and prove your dominance in the world of ACE?</p>

                </div>

            </div>

            <div className=' w-full grid grid-cols-1 lg:grid-cols-2 ~gap-8/12'>

                <div className=' w-full flex flex-col gap-8 items-center justify-center lg:order-1 order-2' data-aos="fade-up" data-aos-duration={1000} data-aos-delay={300}>
                    <div className=' flex items-center justify-center gap-4'>
                        <img src="/v2/screens/Title side B.png" alt="" className=' ~w-6/10' />
                        <h2 className=' uppercase ~text-sm/3xl font-bold'>RISE WITH YOUR CLAN ON TOP!</h2>
                        <img src="/v2/screens/Title side B.png" alt="" className=' rotate-180 ~w-6/10' />
                    </div>

                    <p className=' text-center ~text-xs/sm w-[80%]'>Join forces in ACE by becoming part of a powerful clan! Battle alongside your clanmates in thrilling Clan Wars, where you’ll face off against rival clans in a variety of challenges. Earn points with each victory and claim massive resource rewards. The stakes are high, as the clan with the most points at the end of the season will be crowned the ultimate champion. Will your clan rise to the top and claim glory?</p>

                </div>

                <img src="/v2/screens/Phone B.png" alt="" data-aos="fade-up" data-aos-duration={1000} className='lg:order-2 order-1'/>

            </div>

            <div className=' w-full grid grid-cols-1 lg:grid-cols-2 ~gap-8/12 md:order-none order-last'>

                <img src="/v2/screens/Phone C.png" alt="" data-aos="fade-up" data-aos-duration={1000}/>

                <div className=' w-full flex flex-col gap-8 items-center justify-center' data-aos="fade-up" data-aos-duration={1000} data-aos-delay={300}>
                    <div className=' flex items-center justify-center gap-4'>
                        <img src="/v2/screens/Title side B.png" alt="" className=' ~w-6/10' />
                        <h2 className=' uppercase ~text-sm/3xl font-bold'>Challenge other players</h2>
                        <img src="/v2/screens/Title side B.png" alt="" className=' rotate-180 ~w-6/10' />
                    </div>

                    <p className=' text-center ~text-xs/sm w-[80%]'>In ACE, the battlefield is yours to conquer! Challenge players from around the globe in intense online PvP battles, climb the ranks, and claim unique rewards for each victory. With a cutting-edge PvP fight system and mechanics, every battle is a test of skill. Want to team up? Dive into custom 2v2 battles for even more strategic gameplay. Will you rise to the top and prove your dominance in the world of ACE?</p>

                </div>


            </div>

        </div>
        {/* <div className=' w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12'>
            <div data-aos="zoom-in" className=' w-full'>
                <img src="/screen1.png" alt="" className=' w-full' />
            </div>

            <div data-aos="zoom-in-left" className=' w-full flex flex-col justify-center gap-4 md:p-8'>
                <h2 className=' text-4xl font-semibold '>BECOME <span className=''>ULTIMATE NINJA!</span></h2>
                <p className=' text-xl'>Welcome to <span className=' font-semibold'>ACE – Ninja Path</span>, where your ninja journey begins! Prepare to master powerful skills, forge your own unique path, and face off against epic enemies in thrilling battles. Dive into online PvP duels, join clan wars for incredible rewards, and shape your destiny with a dynamic skill system that lets you build your perfect warrior. Your adventure awaits—are you ready to rise to the challenge?</p>
               

            </div>
        </div>

         <div className='w-full grid grid-cols-1 order-last md:grid-cols-2 gap-6 md:gap-12'>
            <div data-aos="zoom-in" className=' w-full md:hidden block'>
                <img src="/pathfinal.png" alt="" className=' w-full rounded-3xl' />
            </div>
            
            <div data-aos="zoom-in-left" className=' w-full flex flex-col justify-center gap-4 md:p-8'>
                <h2 className=' text-4xl font-semibold '><span className=''>CHOOSE YOUR OWN PATH!</span></h2>
                <p className=' text-xl'>In <span className=' font-semibold'>ACE</span>, your path is your power! Will you embrace the honor of the <span className=' font-semibold'>Samurai</span>, the arcane mastery of the <span className=' font-semibold'>Mage</span>, the wisdom of the <span className=' font-semibold'>Scholar</span>, the cunning of the <span className=' font-semibold'>Rogue</span>, or the shadowy strength of the <span className=' font-semibold'>Dark</span> path? Each path offers unique skills and abilities, letting you build a warrior that matches your playstyle. Choose wisely, forge your destiny, and become a legend in the world of ACE!</p>
                

            </div>

            <div data-aos="zoom-in" className=' w-full md:block hidden'>
                <img src="/pathfinal.png" alt="" className=' w-full rounded-3xl' />
            </div>
        </div>

         <div className=' w-full grid grid-cols-1 order-last md:grid-cols-2 gap-6 md:gap-12'>
            <div data-aos="zoom-in" className=' w-full'>
                <img src="/vs.png" alt="" className=' w-full' />
            </div>

            <div data-aos="zoom-in-left" className=' w-full flex flex-col justify-center gap-4 md:p-8'>
                <h2 className=' text-4xl font-semibold '><span className=''>CHALLENGE OTHER PLAYERS!</span></h2>
                <p className=' text-xl'>In ACE, the battlefield is yours to conquer! Challenge players from around the globe in intense online PvP battles, climb the ranks, and claim unique rewards for each victory. With a cutting-edge PvP fight system and mechanics, every battle is a test of skill. Want to team up? Dive into custom 2v2 battles for even more strategic gameplay. Will you rise to the top and prove your dominance in the world of ACE?</p>
                

            </div>
        </div>

         <div className=' w-full grid grid-cols-1 order-last md:grid-cols-2 gap-6 md:gap-12'>

            <div data-aos="zoom-in" className=' w-full block md:hidden'>
                <img src="/rank.png" alt="" className=' w-full' />
            </div>
           

            <div data-aos="zoom-in-left" className=' w-full flex flex-col justify-center gap-4 md:p-8'>
                <h2 className=' text-4xl font-semibold '><span className=''>RISE WITH YOUR CLAN ON TOP!</span></h2>
                <p className=' text-xl'>Join forces in ACE by becoming part of a powerful clan! Battle alongside your clanmates in thrilling Clan Wars, where you’ll face off against rival clans in a variety of challenges. Earn points with each victory and claim massive resource rewards. The stakes are high, as the clan with the most points at the end of the season will be crowned the ultimate champion. Will your clan rise to the top and claim glory?</p>
               

            </div>

             <div data-aos="zoom-in" className=' w-full hidden md:block'>
                <img src="/rank.png" alt="" className=' w-full' />
            </div>
        </div>

        <div className=' w-full grid grid-cols-1 order-last md:grid-cols-2 gap-6 md:gap-12'>
             <div data-aos="zoom-in" className=' w-full'>
                <img src="/custom.png" alt="" className=' w-full' />
            </div>
            <div data-aos="zoom-in-left" className=' w-full flex flex-col justify-center gap-4 md:p-8'>
                <h2 className=' text-4xl font-semibold '><span className=''>UNLIMITED CHARACTER CUSTOMIZATION!</span></h2>
                <p className=' text-xl'>In ACE, unleash your creativity with extensive Character Customization options! Choose from a wide range of outfits, hairstyles, and intricate face and eye details to make your character truly unique. Equip powerful weapons that not only enhance your look but also provide tactical advantages in battle. Customize your character to stand out both in style and on the battlefield!</p>
               

            </div>

            
        </div> */}

        
    </div>
  )
}
