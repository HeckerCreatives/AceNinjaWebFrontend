import React from 'react'
import Navigation from './Navigation'
import Specialoffers from './Specialoffers'
import Passes from './Passes'
import Offers from './Offers'
import Footer from '@/components/Footer'
import Bplayout from '@/components/layout/Bplayout'


export default function page() {
  return (
    <Bplayout>
        <Specialoffers/>
        <Passes/>
        <Offers/>
    </Bplayout>
   
  )
}
