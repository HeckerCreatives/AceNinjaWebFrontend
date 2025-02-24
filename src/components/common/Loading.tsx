import React from 'react'
import { GiSharpShuriken, GiStarShuriken, GiThreePointedShuriken, GiWhirlpoolShuriken } from 'react-icons/gi'

export default function Loading() {
  return (
    <div className=' w-full h-screen flex flex-col gap-4 items-center justify-center'
    style={{backgroundImage: "url('/v2/download/White BG B.png')",backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundPosition:'bottom'}}
    >
        <p className=' text-sm font-bold italic'>Start your journey with ACE...</p>
      
        <div className=' relative flex items-center gap-4'>
           

        <GiSharpShuriken size={50} className=' animate-spin duration-1000'/>
        <GiStarShuriken size={50} className=' animate-spin duration-1000'/>
        <GiWhirlpoolShuriken size={50} className=' animate-spin duration-1000'/>

        </div>
       
       
    </div>
  )
}
