import React from 'react'

import Footer from '@/components/Footer'
import Navigation from '../battlepass/Navigation'
import Specialoffers from './Specialoffers'
import Passes from './Passes'
import Offers from './Offers'
import Crystallayout from '@/components/layout/Crystallayout'

export default function page() {
  return (
    <Crystallayout>
       <Specialoffers/>
        <Passes/>
        <Offers/>
    </Crystallayout>
    
  )
}
