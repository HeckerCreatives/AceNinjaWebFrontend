'use client'
import axios from 'axios'
import React, { JSX, useEffect, useState } from 'react'
import { FaFacebook, FaDiscord, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';

const socialIcons: { [key: string]: JSX.Element } = {
  fb: <FaFacebook className="w-6 h-6" />,   // Facebook
  x: <BsTwitterX className="w-6 h-6 " />,     // Twitter/X
  dc: <FaDiscord className="w-6 h-6" />,   // Discord
  ig: <FaInstagram className="w-6 h-6" />,   // Instagram
  tk: <FaTiktok className="w-6 h-6" />,         // TikTok
  yt: <FaYoutube className="w-6 h-6" />,      // YouTube
}

export interface SocialLink {
    link: string;
    title: string;
    type: string
  }
  

export default function Footer() {
    const [socials, setSocials] = useState<SocialLink[]>([])
    const [dl, setDl] = useState<SocialLink[]>([])

    
        useEffect(() => {
            const getData = async () => {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/sociallinks/getsociallinkslp`)
    
                setSocials(response.data.data)
    
            }
            getData()
        },[])

        useEffect(() => {
            const getData = async () => {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/downloadlinks/getdownloadlinkslp`)
    
                setDl(response.data.data)
    
            }
            getData()
        },[])

        const renderIcon = (type: string) => {
            switch (type) {
              case "android": 
                return  <img src="/optimize/footer/Footer Google BUTTON.webp" alt=""  className=' w-[120px] hover:-translate-y-1 duration-300 ease-linear' />;
              case "ios":
                return  <img src="/optimize/footer/Footer Apple BUTTON.webp" alt="" className=' w-[120px] hover:-translate-y-1 duration-300 ease-linear' />;
              case "pc":
                return  <img src="/optimize/footer/Footer Steam BUTTON.webp" alt=""  className=' w-[120px] mr-2 hover:-translate-y-1 duration-300 ease-linear' />;
              default:
                return <span className="w-6 h-6">❓</span>;
            }
          };


  return (
    <footer className=' w-full flex flex-col items-center justify-center bg-black text-white py-6 '>

        <div className=' max-w-[1440px] hidden lg:flex flex-col gap-4 w-full'>
            <div className=' w-full grid md:grid-cols-1 lg:grid-cols-3 border-zinc-800 p-8'>
                <div className=' flex flex-col gap-2'>
                    <p className=' text-lg font-medium'>Follow us on:</p>
                    <Image src="/optimize/footer/Follow un on Line.webp" alt="line" loading='lazy' width={300} height={10} />
                    <div className=' flex items-start gap-4 mt-4'>
                        {socials.map((item, index) => (
                            <Link key={index} href={item.link} target='_blank'>
                                 {socialIcons[item.type]} 
                            </Link>
                        ))}
                      
                    </div>
                    
                </div>

                <div className=' flex items-center justify-center w-full'>
                <Image src="/optimize/footer/small LOGO Grey.webp" alt="logo" width={170} height={170} priority className=' ' />

                </div>


                <div className=' flex flex-col gap-2'>
                    <p className=' text-sm md:hidden text-zinc-300'>Download our games on</p>

                    <div className=' flex flex-col gap-2'>
                        {dl.map((item, index) => (
                            <Link key={index} href={item.link} target='_blank'>
                                {renderIcon(item.type)} 
                            </Link>
                        ))}

                    
                    </div>
                </div>

                
            </div>
        </div>

        <div className=' max-w-[1440px] flex lg:hidden flex-col gap-4 w-full'>
            <div className=' w-full fmd:grid-cols-1 lg:grid-cols-3 border-zinc-800 p-8 gap-8'>
                

                <Image src="/optimize/footer/small LOGO Grey.webp" alt="logo" width={100} height={100} loading='lazy' className='' />

                <div className=' flex flex-col gap-2'>
                    <p className=' ~text-sm/lg font-medium'>Follow us on:</p>
                    <div className=' flex items-start justify-start gap-4 mt-4'>
                        {socials.map((item, index) => (
                            <Link key={index} href={item.link}>
                                 {socialIcons[item.type]} 
                            </Link>
                        ))}
                    </div>
                    
                </div>

                <div className=' flex flex-col gap-2 mt-4'>
                    <p className=' ~text-xs/sm text-zinc-300'>Download our games on</p>

                    <div className=' flex flex-col items-center justify-center gap-2'>


                    {dl.map((item, index) => (
                            <Link key={index} href={item.link} target='_blank'>
                                {renderIcon(item.type)} 
                            </Link>
                        ))}


                    </div>
                </div>

                
            </div>

         
            
        </div>

        <div className=' flex lg:items-center lg:justify-center flex-col gap-4 text-zinc-300  text-center px-8'>
            <p className=' text-xs md:text-sm max-w-[32rem] text-start lg:text-center'>© 2024 Ace. All rights reserved. Unauthorized use, reproduction, or distribution of any content is strictly prohibited.</p>
            

            <div className=' flex items-start lg:items-center gap-4 text-white underline text-xs md:text-sm' >
                <Link href='/privacypolicy'>Privacy Policy</Link>
                <Link href='/terms&conditions'>Terms & Conditions </Link>

            </div>
        </div>

        
        
    </footer>
  )
}
