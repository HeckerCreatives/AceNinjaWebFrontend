import Skinslayout from '@/components/layout/Skinslayout'
import React from 'react'
import Specialoffers from './Specialoffers'
import Skins from './Skins'
import Offers from './Offers'

export default function page() {
  return (
    <Skinslayout>
       <Specialoffers/>
       <Skins/>
       <Offers/>
    </Skinslayout>
  )
}
