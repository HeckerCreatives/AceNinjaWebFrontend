import { links } from '@/app/types/data'
import { Youtube } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <footer className=' w-full flex items-center justify-center bg-black text-white py-6'>

        <div className=' max-w-[1440px] hidden lg:flex flex-col gap-4 w-full'>
            <div className=' w-full flex items-start justify-between border-zinc-800 p-8'>
                <div className=' flex flex-col gap-2'>
                    <p className=' text-lg font-medium'>Follow us on:</p>
                    <img src="/v2/footer/Follow un on Line.png" alt="" />
                    <div className=' flex items-center gap-4 mt-4'>
                        <a href="https://www.youtube.com/">
                            <img src="/youtube.png" alt="" className=' h-[20px] md:h-[30px]' />
                        </a>

                        <a href="https://web.facebook.com/">
                        <img src="/facebook.png" alt="" className=' h-[20px] md:h-[30px]' />
                        </a>
                    </div>
                    
                </div>

                <img src="/v2/footer/small LOGO Grey.png" alt="" className=' w-[170px]' />

                <div className=' flex flex-col gap-2'>
                    <p className=' text-sm md:hidden text-zinc-300'>Download our games on</p>

                    <div className=' flex flex-col gap-2'>

                        <img src="/v2/footer/Footer Steam BUTTON.png" alt=""  className=' w-[120px] mr-2 hover:-translate-y-1 duration-300 ease-linear' />
                        <img src="/v2/footer/Footer Google BUTTON.png" alt=""  className=' w-[120px] hover:-translate-y-1 duration-300 ease-linear' />
                        <img src="/v2/footer/Footer Apple BUTTON.png" alt="" className=' w-[120px] hover:-translate-y-1 duration-300 ease-linear' />


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
            <div className=' w-full flex flex-col items-center justify-between border-zinc-800 p-8 gap-8'>
                

                <img src="/v2/footer/small LOGO Grey.png" alt="" className=' ~w-32/40' />

                <div className=' flex flex-col gap-2'>
                    <p className=' ~text-sm/lg font-medium'>Follow us on:</p>
                    <div className=' flex items-center justify-center gap-4 mt-4'>
                        <a href="https://www.youtube.com/">
                            <img src="/youtube.png" alt="" className=' h-[20px] md:h-[30px]' />
                        </a>

                        <a href="https://web.facebook.com/">
                        <img src="/facebook.png" alt="" className=' h-[20px] md:h-[30px]' />
                        </a>
                    </div>
                    
                </div>

                <div className=' flex flex-col gap-2'>
                    <p className=' ~text-xs/sm text-zinc-300'>Download our games on</p>

                    <div className=' flex flex-col items-center justify-center gap-2'>

                        <img src="/v2/footer/Footer Steam BUTTON.png" alt=""  className=' w-[120px] hover:-translate-y-1 duration-300 ease-linear' />
                        <img src="/v2/footer/Footer Google BUTTON.png" alt=""  className=' w-[120px] hover:-translate-y-1 duration-300 ease-linear' />
                        <img src="/v2/footer/Footer Apple BUTTON.png" alt="" className=' w-[120px] hover:-translate-y-1 duration-300 ease-linear' />


                    </div>
                </div>

                
            </div>

         
            
        </div>

        
        
    </footer>
  )
}
