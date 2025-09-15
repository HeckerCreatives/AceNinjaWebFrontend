'use client'
import { links } from '@/app/types/data'
import { AnimatePresence, motion } from 'framer-motion';
import { AlignJustify, Menu, X } from 'lucide-react';
import { useParams, usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react'

type Prop = {
    active: string
}

export default function Navbar(prop: Prop) {
    const [open, setOpen] = useState(false)
    const imgRef = useRef<HTMLImageElement>(null);
    const [maskStyle, setMaskStyle] = useState({});
    const path = usePathname()
    const [id, setId] = useState('')

    useEffect(() => {
      if (imgRef.current) {
        const { width, height } = imgRef.current.getBoundingClientRect();
        setMaskStyle({
          maskImage: `url('/v2/navigation/menu.png')`,
          WebkitMaskImage: `url('/v2/navigation/menu.png')`,
          maskSize: `${width}px ${height}px`,
          WebkitMaskSize: `${width}px ${height}px`,
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
        });
      }
    }, [imgRef]);

    const variants = {
        open: {
            with: 500,
            height: 350,
            transition: { duration : 0.8, ease: [0.76, 0, 0.24, 1]}
        },
        closed: {
            with: 0,
            height: 0,
            transition: { duration : 0.8,delay: 0.35, ease: [0.76, 0, 0.24, 1]}

        }
    }
    const perspective =  {
        initial:{
            opacity: 0,
            translateY: 90

        },
        enter: (index: number) => ({
            opacity: 1,
            transition: {delay: 0.6 + (index * 0.1),
                duration: 0.4
            },
            translateY: 0

        }),
        exit:{
            opacity: 0

        }
    }



  return (
    <nav className=' fixed z-50 top-0 max-w-[1440px] w-full h-auto text-white px-8'

    >
        <div className=' w-full hidden lg:flex items-center justify-between py-6 px-10'
        style={{backgroundImage: "url('/v2/navigation/Header TAB.png')",backgroundRepeat:'no-repeat',backgroundSize:'contain', backgroundPosition:'center'}}

        >
            <div className=' flex items-center gap-8'>
                <img src="/v2/navigation/small LOGO.png" loading='lazy' alt="" width={115} />

                <div className=' hidden lg:flex items-center gap-8'>
                    {links.map((item, index) => (
                        <>
                            {/* <a href={item.path} key={index} className={`text-sm font-semibold uppercase text-black hover:text-red-900 ${item.path.split('/')[1].includes(prop.active) && 'text-red-900 underline'} cursor-pointer `}>{item.name}</a> */}

                            <a href={item.path} key={index} className={`text-sm font-semibold uppercase text-black hover:text-red-900  cursor-pointer `}>{item.name}</a>
                        </>
                        
                    ))}
                </div>
            </div>

            <button onClick={() => setOpen(!open)}  className=' lg:hidden block'>
                {open ? <X size={30} /> : <AlignJustify size={30} />}
            </button>

            <a href={`${process.env.NEXT_PUBLIC_LOGIN_URL}`} target='_blank' className='bg-yellow-600 px-6 py-2 rounded-sm text-sm hover:scale-105 transition-all duration-200 '>Login</a>
            {/* <img src='/v2/navigation/store BUTTON.png' alt="" width={130} /> */}


        </div>




        <div className=' fixed top-0 right-0'>
            <button  onClick={() => setOpen(!open)} className=' absolute lg:hidden right-0 z-20 h-[40px] aspect-square p-2 flex items-center justify-center '
            style={{backgroundImage: "url('/v2/navigation/Box.png')",backgroundRepeat:'no-repeat',backgroundSize:'contain', backgroundPosition:'center'}}
            >
                {!open ? <img src='/v2/navigation/Humburger.png' width={30}/> : <img src='/v2/navigation/X.png' width={30}/>}

            </button>

            <motion.div
            variants={variants}
            animate={open ? 'open' : 'closed'}
            initial='closed'
            className=' relative'
            >
                <img ref={imgRef} src="/v2/navigation/Group 3.png" alt="" className=' h-full' />

                {/* <img
                    src="/v2/navigation/Big Char.png"
                    alt=""
                    className="absolute bottom-0 left-0 w-[200px] h-[220px] -translate-y-4 opacity-30 mask-img"
                /> */}


{/* <div className="relative h-full">
  <img ref={imgRef} src="/v2/navigation/menu.png" alt="" className=' h-full' />
  <img
    src="/v2/navigation/Big Char.png"
    alt=""
    className="absolute bottom-0 right-0 w-[85%] opacity-30 -translate-x-20 -translate-y-4  mask-img"
  />
</div> */}

                <AnimatePresence>
                    {open && (
                        <div className=' absolute top-16 right-6 flex flex-col gap-4'>
                            {links.map((item, index) => (
                            <motion.a
                            custom={index}
                            variants={perspective}
                            initial='initial'
                            animate='enter'
                            exit='exit'
                            key={index} href={item.path} className={`text-sm font-medium text-end uppercase flex items-center gap-4 justify-end ${item.path.split('/')[1].includes(prop.active) && 'underline'}`}>
                                {item.name === 'Store' ? (
                                    <img src='/v2/navigation/store BUTTON.png' alt="" width={110} className=' mt-4' />
                                ) : (
                                    <>
                                    {item.path.split('/')[1].includes(prop.active) && <img src="/v2/navigation/kunai2.png" alt="" width={25} className=' kunai rotate-45' />}

                                    {item.name}
                                    </>
                                )}
                                </motion.a>
                            ))}



                        </div>
                    )}
                </AnimatePresence>



            </motion.div>
        </div>

    </nav>
  )
}
