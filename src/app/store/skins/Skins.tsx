import React from 'react'
import Productcards from '@/components/Productcards'

export default function Skins() {
  return (
    <div id='skins' className=' relative w-full flex flex-col gap-12 items-center justify-center h-auto py-16'>
        <svg className=" w-full absolute top-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1727 58" height="58" fill="none" preserveAspectRatio="none"><path fill="#000" d="M0 0h1727v42L864 58l10.5-16L0 58V0Z"></path></svg>

        <h2 className=' text-4xl font-black mt-28'>Skins</h2>

        <div className=' max-w-[1240px] w-full flex flex-wrap gap-8 items-center justify-center mb-28'>
            <Productcards name={''} price={5.99} tag={''} perks={'1000'} />
            <Productcards name={''} price={9.99} tag={''} perks={'500'} />
            <Productcards name={''} price={14.99} tag={''} perks={'200'} />
        </div>

        <svg className=" absolute bottom-0 mt-32 w-full rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1727 58" height="58" fill="none" preserveAspectRatio="none"><path fill="#000" d="M0 0h1727v42L864 58l10.5-16L0 58V0Z"></path></svg>


    </div>
  )
}
