import { ShoppingBag } from 'lucide-react'
import React from 'react'

type Props = {
    name: string
    price: number
    tag: string
    perks: string
}

export default function Bpcards(prop: Props) {
  return (
    <div className=' relative flex flex-col items-center justify-between max-w-[340px] w-full h-[380px] bg-zinc-100 p-6 box-shadow border-4 border-black'>
        {prop.tag !== '' && (
            <p className=' absolute right-2 top-2 bg-red-600 px-4 py-2 text-[.6em] text-white'>{prop.tag}</p>
        )}
        <div className=' w-full flex items-center justify-center'>
            <p className=' text-2xl font-black'>{prop.name}</p>

        </div>

        <div className=' w-full flex items-center justify-between text-white'>
            <p>{prop.perks}</p>
            <p className=' text-lg px-4 py-2 rounded-md bg-black w-fit flex items-center justify-center gap-2'><ShoppingBag size={20}/>$ {prop.price}</p>

        </div>
    </div>
  )
}
