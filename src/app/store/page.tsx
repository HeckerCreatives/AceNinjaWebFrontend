import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Screens from '@/components/Screens'
import React from 'react'
import Cards from './Cards'
import { store } from '../types/data'

export default function page() {
  return (
    <div className=" relative w-full flex flex-col items-center justify-center overflow-x-hidden">
      <Navbar active={''}/>
      <main className=" w-full h-auto flex flex-col items-center justify-center">
        <div className=' max-w-[900px] w-full h-auto md:h-screen'>
            <div className=' w-full grid grid-cols-1 md:grid-cols-2 gap-12 p-6 mt-32'>

                {store.map((item, index) => (
                    <Cards key={index} name={item.name} route={item.path}/>
                ))}
              
            </div>

            

        </div>
       
        
      </main>
      <Footer/>

    </div>
  )
}
