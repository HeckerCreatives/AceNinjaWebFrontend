'use client'
import { ArrowRight, MoveRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
    name: string
    route: string
}

export default function Cards(prop: Props) {
  const router = useRouter()

  const navigate = () => {
    router.push(prop.route)
  }
  return (
    <div onClick={navigate} className=' flex flex-col  w-full h-[250px] bg-zinc-100 rounded-md shadow-lg overflow-hidden hover:scale-105 ease-in-out duration-500'>
        <div className=' h-[70%] w-full bg-zinc-200'>

        </div>

        <div className=' w-full h-[30%] flex items-center gap-6 p-6'>
            <MoveRight size={15}/>
            <p className=' text-sm'>{prop.name}</p>

        </div>
    </div>
  )
}
