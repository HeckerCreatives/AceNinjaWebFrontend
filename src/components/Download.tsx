'use client'
import React, { useEffect, useState } from 'react'
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { GiSharpShuriken } from 'react-icons/gi'
import axios from 'axios';
  
export interface DLink {
    link: string;
    title: string;
    type: string
  }
  
export default function Download() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
      const [dl, setDl] = useState<DLink[]>([])
    
    
    
            useEffect(() => {
                const getData = async () => {
                    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/downloadlinks/getdownloadlinkslp`)
        
                    setDl(response.data.data)
        
                }
                getData()
            },[])

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



      const renderIcon = (type: string) => {
        switch (type) {
          case "android": 
            return  <img src="/v2/footer/Footer Google BUTTON.png" alt=""  className='  absolute right-4 ~w-32/48' />;
          case "ios":
            return  <img src="/v2/footer/Footer Apple BUTTON.png" alt="" className='absolute ~w-32/48 right-4' />;
          case "pc":
            return  <img src="/v2/footer/Footer Steam BUTTON.png" alt=""  className=' absolute ~w-32/48 right-4' />;
          default:
            return <span className="w-6 h-6">❓</span>;
        }
      };


  return (
    <div id='download' className=' w-full h-auto flex flex-col items-center py-28 lg:px-8'
    // style={{backgroundImage: "url('/v2/download/White BG B.png')",backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundPosition:'bottom'}}
    >
        <div  className=' max-w-[1240px] w-full flex flex-col gap-8 items-center justify-center scroll-mt-40'>
            <div className=' flex items-center justify-center gap-8'>
                <img src="/v2/download/Line.png" alt="" className=' rotate-180' />
                <h2 className=' ~text-xl/4xl font-bold uppercase'>Download</h2>
                <img src="/v2/download/Line.png" alt=""  />
            </div>

            <p className=' ~text-xs/lg font-semibold text-center w-[60%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsam, aspernatur blanditiis ipsum sint mollitia nisi earum neque aut ex velit nulla optio deleniti necessitatibus officia, quos commodi modi iste.</p>

            <div className=' w-full flex flex-col lg:flex-row items-center justify-center ~gap-4/8'>
            {dl.map((item, index) => (
                <a href={item.link} target='_blank' key={index} className=' relative w-[250px] lg:w-[350px] flex items-center justify-center' data-aos='fade-up' data-aos-duration={500}>
                    <img src="/v2/download/Gale.png" alt="" />
                   {renderIcon(item.type)}
                </a>
            ))}
                {/* <div className=' relative w-[250px] lg:w-[350px] flex items-center justify-center' data-aos='fade-up' data-aos-duration={500}>
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
                </div> */}

            </div>

        </div>

    </div>
    
    
  )
}
