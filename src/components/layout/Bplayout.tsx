
'use client'
import { bpLinks } from '@/app/types/data'
import { a, map } from 'framer-motion/client'
import { Equal, ShoppingBag, TicketCheck, X } from 'lucide-react'
import React, { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Footer from '../Footer'
  

export default function Bplayout({
    children
} : { children : React.ReactNode}) {

    const [open, setOpen] = useState(false)



  return (
    <div className=' relative w-full flex flex-col'>
        <nav className=' sticky top-0 z-50 w-full flex flex-col '>
            <div className=' w-full flex items-center justify-center bg-black h-[70px] px-4'>
                <div className=' w-full flex items-center justify-between max-w-[1240px] py-2'>
                    <img src="/logo.png" alt="" width={80} />

                    <div className=' hidden lg:flex items-center gap-6'>
                        {bpLinks.map((item, index) => (
                            <a href={item.path} key={index} className=' text-lg font-semibold text-white'>{item.name}</a>
                        ))}
                    </div>

                    <div className=' flex items-center gap-4 text-white'>
                        
                        <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger className=' relative'>
                            <ShoppingBag size={22}/>
                            <div className=' -translate-y-1 translate-x-1 absolute top-0 right-0 w-4 aspect-square rounded-full bg-red-600  flex items-center justify-center'>
                                <p className=' text-[.5em]'>0</p>
                            </div>
                        </SheetTrigger>
                        <SheetContent className='  flex flex-col items-center'>
                            <div className=' w-full flex flex-col '>
                                <div className=' flex items-center justify-between w-full bg-black p-6 text-white'>
                                    <div className=' flex items-center gap-4'>
                                        <ShoppingBag size={25}/>
                                        <p className=' text-lg'>0 items</p>
                                    </div>

                                    <X size={15} onClick={() => setOpen(false)}/>
                                    
                                </div>
                            
                            </div>
                            <SheetHeader>
                            <SheetTitle className=' text-zinc-400 text-xl'>Your bag is empty.</SheetTitle>
                            <SheetDescription>
                            
                            </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                        </Sheet>


                        

                        <Sheet >
                        <SheetTrigger className=' relative'>
                            <Equal size={25}/>
                        </SheetTrigger>
                        <SheetContent className='  flex flex-col items-center'>
                            <div className=' w-full flex flex-col '>
                                <div className=' flex items-center justify-between w-full bg-zinc-950 p-4 text-white'>
                                    <div className=' flex items-center gap-4'>
                                    <img src="/logo.png" alt="" width={80} />
                                    </div>

                                    <X size={15} onClick={() => setOpen(false)}/>
                                    
                                </div>
                            
                            </div>
                            <div className=' w-full p-4 flex flex-col gap-6'>
                            {bpLinks.map((item, index) => (
                                <a href={item.path} key={index} className=' text-lg font-semibold flex items-center gap-2'><TicketCheck size={20}/>{item.name}</a>
                            ))}
                            </div>
                            <SheetHeader>
                            <SheetTitle className=' text-zinc-400 text-xl'></SheetTitle>
                            <SheetDescription>
                            
                            </SheetDescription>
                            </SheetHeader>

                            
                        </SheetContent>
                        </Sheet>

                    </div>

                </div>

            </div>
        </nav>

        <main className=' relative z-10 w-full flex flex-col items-center justify-center'>
            {children}
        </main>

        <Footer/>

    </div>
  )
}
