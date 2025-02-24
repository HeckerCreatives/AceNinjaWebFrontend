'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function News() {

    useEffect(() => {
        AOS.init({
        offset: 100,
        });
    }, []);

    
  return (
    <div id='news' className=' w-full max-w-[1920px] h-auto flex flex-col items-center justify-between gap-8 p-6 md:p-12 scroll-m-32'>
        <h2 className=' header uppercase'>News</h2>
        <div className=' w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div data-aos="fade-up" 
            data-aos-duration="500"
            className=' flex flex-col gap-2 items-center justify-center w-full h-auto'>
                <div className=' bg-zinc-200 w-full aspect-video'>

                </div>

                <p className=' text-xl font-semibold text-yellow-600'>Ace <span className=' text-xs text-black'>v1.0.0</span></p>
                <h2 className=' text-2xl font-semibold text-center'>NEW: <span>Lorem ipsum doler</span></h2>

            </div>

            <div data-aos="fade-up" 
            data-aos-duration="500"
            data-aos-delay='200'
            className=' flex flex-col gap-2 items-center justify-center w-full h-auto'>
                <div className=' bg-zinc-200 w-full aspect-video'>

                </div>

                <p className=' text-xl font-semibold text-yellow-600'>Ace <span className=' text-xs text-black'>v1.0.0</span></p>
                <h2 className=' text-2xl font-semibold text-center'>UPDATES: <span>Lorem ipsum doler</span></h2>

            </div>

            <div data-aos="fade-up" 
            data-aos-duration="500"
            data-aos-delay='400' className=' flex flex-col gap-2 items-center justify-center w-full h-auto'>
                <div className=' bg-zinc-200 w-full aspect-video'>

                </div>

                <p className=' text-xl font-semibold text-yellow-600'>Ace <span className=' text-xs text-black'>v1.0.0</span></p>
                <h2 className=' text-2xl font-semibold text-center'>ADJUSTMENTS: <span>Lorem ipsum doler</span></h2>

            </div>
        </div>
    </div>
  )
}
