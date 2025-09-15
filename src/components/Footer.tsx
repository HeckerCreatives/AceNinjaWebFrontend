'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaFacebook, FaDiscord, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from 'react-icons/bs';
import Link from 'next/link';

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
                return  <img src="/v2/footer/Footer Google BUTTON.png" alt=""  className=' w-[120px] hover:-translate-y-1 duration-300 ease-linear' />;
              case "ios":
                return  <img src="/v2/footer/Footer Apple BUTTON.png" alt="" className=' w-[120px] hover:-translate-y-1 duration-300 ease-linear' />;
              case "pc":
                return  <img src="/v2/footer/Footer Steam BUTTON.png" alt=""  className=' w-[120px] mr-2 hover:-translate-y-1 duration-300 ease-linear' />;
              default:
                return <span className="w-6 h-6">❓</span>;
            }
          };


  return (
    <footer className=' w-full flex flex-col items-center justify-center bg-black text-white py-6'>

        <div className=' max-w-[1440px] hidden lg:flex flex-col gap-4 w-full'>
            <div className=' w-full grid md:grid-cols-1 lg:grid-cols-3 border-zinc-800 p-8'>
                <div className=' flex flex-col gap-2'>
                    <p className=' text-lg font-medium'>Follow us on:</p>
                    <img src="/v2/footer/Follow un on Line.png" alt="" width={300} />
                    <div className=' flex items-center gap-4 mt-4'>
                        {socials.map((item, index) => (
                            <a key={index} href={item.link} target='_blank'>
                                 {socialIcons[item.type]} 
                            </a>
                        ))}
                      
                    </div>
                    
                </div>

                <div className=' flex items-center justify-center w-full'>
                <img src="/v2/footer/small LOGO Grey.png" alt="" className=' w-[170px]' />

                </div>


                <div className=' flex flex-col gap-2'>
                    <p className=' text-sm md:hidden text-zinc-300'>Download our games on</p>

                    <div className=' flex flex-col gap-2'>
                        {dl.map((item, index) => (
                            <a key={index} href={item.link} target='_blank'>
                                {renderIcon(item.type)} 
                            </a>
                        ))}

                    
                    </div>
                </div>

                
            </div>

            {/* <div className=' flex items-center justify-between flex-wrap gap-6 p-8'>
                <div className='flex items-center gap-4'>
                    {links.map((item, index) => (
                        <a key={index} href={item.path} className=' text-xs md:text-sm font-medium hover:text-yellow-400 transition-colors ease-in-out duration-300'>{item.name}</a>
                    ))}
                </div>

                <img src="/logo.png" alt="" width={60} />
            </div> */}

            
        </div>

        <div className=' max-w-[1440px] flex lg:hidden flex-col gap-4 w-full'>
            <div className=' w-full fmd:grid-cols-1 lg:grid-cols-3 border-zinc-800 p-8 gap-8'>
                

                <img src="/v2/footer/small LOGO Grey.png" alt="" className=' ~w-32/40' />

                <div className=' flex flex-col gap-2'>
                    <p className=' ~text-sm/lg font-medium'>Follow us on:</p>
                    <div className=' flex items-center justify-center gap-4 mt-4'>
                        {socials.map((item, index) => (
                            <a key={index} href={item.link}>
                                 {socialIcons[item.type]} 
                            </a>
                        ))}
                    </div>
                    
                </div>

                <div className=' flex flex-col gap-2'>
                    <p className=' ~text-xs/sm text-zinc-300'>Download our games on</p>

                    <div className=' flex flex-col items-center justify-center gap-2'>


                    {dl.map((item, index) => (
                            <a key={index} href={item.link} target='_blank'>
                                {renderIcon(item.type)} 
                            </a>
                        ))}


                    </div>
                </div>

                
            </div>

         
            
        </div>

        <div className=' flex lg:items-center lg:justify-center flex-col gap-4 text-zinc-300  text-center'>
            <p className=' text-xs md:text-sm max-w-[32rem] text-start lg:text-center'>© 2024 Ace. All rights reserved. Unauthorized use, reproduction, or distribution of any content is strictly prohibited.</p>
            

            <div className=' flex items-start lg:items-center gap-4 text-white underline text-xs md:text-sm'>
                <Link href='/privacypolicy'>Privacy Policy</Link>
                <Link href='/terms&conditions'>Terms & Conditions </Link>

            </div>
        </div>

        
        
    </footer>
  )
}
