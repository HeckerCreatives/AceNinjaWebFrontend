'use client'
import React from 'react'
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { GiSharpShuriken } from 'react-icons/gi'
  

export default function Download() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
          return
        }
     
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
     
        api.on("select", () => {
          setCurrent(api.selectedScrollSnap() + 1)
        })
      }, [api])

      console.log(current)


  return (
    <div className=' w-full h-auto flex flex-col items-center py-28 lgpx-8'
    style={{backgroundImage: "url('/v2/download/White BG B.png')",backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundPosition:'bottom'}}
    >
        <div id='download' className=' max-w-[1240px] w-full flex flex-col gap-8 items-center justify-center scroll-mt-40'>
            <div className=' flex items-center justify-center gap-8'>
                <img src="/v2/download/Line.png" alt="" className=' rotate-180' />
                <h2 className=' ~text-xl/4xl font-bold uppercase'>Download</h2>
                <img src="/v2/download/Line.png" alt=""  />
            </div>

            <p className=' ~text-xs/lg font-semibold text-center w-[60%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsam, aspernatur blanditiis ipsum sint mollitia nisi earum neque aut ex velit nulla optio deleniti necessitatibus officia, quos commodi modi iste.</p>

            <div className=' w-full flex flex-col lg:flex-row items-center justify-center ~gap-4/8'>
                <div className=' relative w-[250px] lg:w-[350px] flex items-center justify-center' data-aos='fade-up' data-aos-duration={500}>
                    <img src="/v2/download/Gale.png" alt="" />
                    <img src="/v2/footer/Footer Steam BUTTON.png" alt="" className=' absolute right-4 ~w-32/48' />
                </div>

                <div className=' relative w-[250px] lg:w-[350px] flex items-center justify-center' data-aos='fade-up' data-aos-duration={500} data-aos-delay={200}>
                    <img src="/v2/download/Terra.png" alt="" />
                    <a href="/" className=' absolute ~w-32/48 right-4'><img  src="/v2/footer/Footer Google BUTTON.png" alt="btn-playstore"/></a>

                </div>

                <div className=' relative w-[250px] lg:w-[350px] flex items-center justify-center'  data-aos='fade-up' data-aos-duration={500} data-aos-delay={400}>
                    <img src="/v2/download/Blaze.png" alt="" />
                    <a href="/" className=' absolute ~w-32/48 right-4'><img  src="/v2/footer/Footer Apple BUTTON.png" alt="btn-playstore"/></a>
                </div>

            </div>

        </div>

        <div id='news' className=' relative max-w-[1440px] w-full h-auto mt-20 lg:flex hidden flex-col gap-8 scroll-mt-24'
        data-aos='fade-up' data-aos-duration={500} data-aos-delay={600}
        >
            <img src="/v2/download/Scroll TAB Horizontal.png" alt="" />

            <div className=' absolute w-full h-full flex flex-col items-center p-20'>
                <div className=' w-full flex flex-col items-center p-8'>
                    <div className=' flex items-center justify-center gap-12'>
                        <img src="/v2/download/Title Side D.png" alt="" className=' rotate-180 w-[40px]'/>
                        <h2 className=' text-3xl font-bold uppercase'>News</h2>
                        <img src="/v2/download/Title Side D.png" alt="" className=' w-[40px]'/>

                    </div>
                </div>

                <div className=' grid grid-cols-3 w-full h-full p-16 gap-4'>

               
                    <div className=' w-full h-full border-4 border-amber-900 bg-white rounded-sm p-[.1rem]'>
                        <div className=' w-full h-full flex flex-col border-[1px] border-amber-500 p-2'>

                            <div className=' w-full aspect-video bg-zinc-200'>

                            </div>

                            <div className=' w-full h-full p-4 flex flex-col items-center justify-center gap-4'>
                                <h2 className=' text-2xl font-bold text-amber-800'>Ace <span className=' text-xs text-black'>v1.0.0</span></h2>
                                <p className=' text-lg text-center'>NEWS: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus labore sapiente...</p>

                            </div>

                        </div>

                    </div>

                    <div className=' w-full h-full border-4 border-amber-900 bg-white rounded-sm p-[.1rem]'>
                        <div className=' w-full h-full flex flex-col border-[1px] border-amber-500 p-2'>

                            <div className=' w-full aspect-video bg-zinc-200'>

                            </div>

                            <div className=' w-full h-full p-4 flex flex-col items-center justify-center gap-4'>
                                <h2 className=' text-2xl font-bold text-amber-800'>Ace <span className=' text-xs text-black'>v1.0.0</span></h2>
                                <p className=' text-lg text-center'>NEWS: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus labore sapiente...</p>

                            </div>

                        </div>

                    </div>

                    <div className=' w-full h-full border-4 border-amber-900 bg-white rounded-sm p-[.1rem]'>
                        <div className=' w-full h-full flex flex-col border-[1px] border-amber-500 p-2'>

                            <div className=' w-full aspect-video bg-zinc-200'>

                            </div>

                            <div className=' w-full h-full p-4 flex flex-col items-center justify-center gap-4'>
                                <h2 className=' text-2xl font-bold text-amber-800'>Ace <span className=' text-xs text-black'>v1.0.0</span></h2>
                                <p className=' text-lg text-center'>NEWS: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus labore sapiente...</p>

                            </div>

                        </div>

                    </div>

                </div>
               
            </div>

        </div>

        <div id='news' className=' relative max-w-[1440px] w-full h-auto mt-20 lg:hidden flex flex-col gap-8 scroll-mt-24'
        data-aos='fade-up' data-aos-duration={500} data-aos-delay={600}
        >

            <div className=' w-full h-full flex flex-col items-center'>
                <div className=' w-full flex flex-col items-center p-8'>
                    <div className=' flex items-center justify-center ~gap-6/12'>
                        <img src="/v2/download/Title Side D.png" alt="" className=' rotate-180 ~w-8/10'/>
                        <h2 className=' ~text-lg/3xl font-bold uppercase'>News</h2>
                        <img src="/v2/download/Title Side D.png" alt="" className=' ~w-8/10'/>

                    </div>
                </div>

                <Carousel  setApi={setApi}>
                <CarouselContent className=''>
                    <CarouselItem className=' relative flex items-center justify-center'>
                        <img src="/v2/header/Scroll TAB Vertical.png" alt="" />

                        <div className=' absolute w-[70%] md:w-[60%] h-[70%] border-4 border-amber-900 bg-white rounded-sm p-[.1rem]'>
                            <div className=' w-full h-full flex flex-col border-[1px] border-amber-500 p-2'>

                                <div className=' w-full aspect-video bg-zinc-200'>

                                </div>

                                <div className=' w-full h-full p-4 flex flex-col items-center justify-center gap-4'>
                                    <h2 className=' ~text-sm/2xl font-bold text-amber-800'>Ace <span className=' text-xs text-black'>v1.0.0</span></h2>
                                    <p className=' ~text-xs/lg text-center'>NEWS: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus labore sapiente...</p>

                                </div>

                            </div>

                        </div>
                    </CarouselItem>

                    <CarouselItem className=' relative flex items-center justify-center'>
                        <img src="/v2/header/Scroll TAB Vertical.png" alt="" />

                        <div className=' absolute w-[70%] md:w-[60%] h-[70%] border-4 border-amber-900 bg-white rounded-sm p-[.1rem]'>
                            <div className=' w-full h-full flex flex-col border-[1px] border-amber-500 p-2'>

                                <div className=' w-full aspect-video bg-zinc-200'>

                                </div>

                                <div className=' w-full h-full p-4 flex flex-col items-center justify-center gap-4'>
                                    <h2 className=' ~text-sm/2xl font-bold text-amber-800'>Ace <span className=' text-xs text-black'>v1.0.0</span></h2>
                                    <p className=' ~text-xs/lg text-center'>NEWS: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus labore sapiente...</p>

                                </div>

                            </div>

                        </div>
                    </CarouselItem>

                    <CarouselItem className=' relative flex items-center justify-center'>
                        <img src="/v2/header/Scroll TAB Vertical.png" alt="" />

                        <div className=' absolute w-[70%] md:w-[60%] h-[70%] border-4 border-amber-900 bg-white rounded-sm p-[.1rem]'>
                            <div className=' w-full h-full flex flex-col border-[1px] border-amber-500 p-2'>

                                <div className=' w-full aspect-video bg-zinc-200'>

                                </div>

                                <div className=' w-full h-full p-4 flex flex-col items-center justify-center gap-4'>
                                    <h2 className=' ~text-sm/2xl font-bold text-amber-800'>Ace <span className=' text-xs text-black'>v1.0.0</span></h2>
                                    <p className=' ~text-xs/lg text-center'>NEWS: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus labore sapiente...</p>

                                </div>

                            </div>

                        </div>
                    </CarouselItem>
                   
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
                </Carousel>

                <div className=' flex items-center justify-center gap-2 mt-6'>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <GiSharpShuriken key={index} className={`${current === index + 1 ? ' text-amber-900 size-8 ' : 'text-zinc-500 size-6'} transition-all ease-linear duration-300`}/>
                    ))}

                </div>


                {/* <div className=' grid grid-cols-3 w-full h-full p-16 gap-4'>

               
                    <div className=' w-full h-full border-4 border-amber-900 bg-white rounded-sm p-[.1rem]'>
                        <div className=' w-full h-full flex flex-col border-[1px] border-amber-500 p-2'>

                            <div className=' w-full aspect-video bg-zinc-200'>

                            </div>

                            <div className=' w-full h-full p-4 flex flex-col items-center justify-center gap-4'>
                                <h2 className=' text-2xl font-bold text-amber-800'>Ace <span className=' text-xs text-black'>v1.0.0</span></h2>
                                <p className=' text-lg text-center'>NEWS: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus labore sapiente...</p>

                            </div>

                        </div>

                    </div>

                    <div className=' w-full h-full border-4 border-amber-900 bg-white rounded-sm p-[.1rem]'>
                        <div className=' w-full h-full flex flex-col border-[1px] border-amber-500 p-2'>

                            <div className=' w-full aspect-video bg-zinc-200'>

                            </div>

                            <div className=' w-full h-full p-4 flex flex-col items-center justify-center gap-4'>
                                <h2 className=' text-2xl font-bold text-amber-800'>Ace <span className=' text-xs text-black'>v1.0.0</span></h2>
                                <p className=' text-lg text-center'>NEWS: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus labore sapiente...</p>

                            </div>

                        </div>

                    </div>

                    <div className=' w-full h-full border-4 border-amber-900 bg-white rounded-sm p-[.1rem]'>
                        <div className=' w-full h-full flex flex-col border-[1px] border-amber-500 p-2'>

                            <div className=' w-full aspect-video bg-zinc-200'>

                            </div>

                            <div className=' w-full h-full p-4 flex flex-col items-center justify-center gap-4'>
                                <h2 className=' text-2xl font-bold text-amber-800'>Ace <span className=' text-xs text-black'>v1.0.0</span></h2>
                                <p className=' text-lg text-center'>NEWS: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus labore sapiente...</p>

                            </div>

                        </div>

                    </div>

                </div> */}
               
            </div>

        </div>
       
    </div>
    
    
  )
}
