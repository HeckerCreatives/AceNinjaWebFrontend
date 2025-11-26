import React, { useRef, useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
type Props = {
children: React.ReactNode
}
export default function LandingPageLayout({children}: Props) {
    const [activeSection, setActiveSection] = useState<string>("hero"); 
      const router = useRouter()
    
      // Refs for each section
      const heroRef = useRef<HTMLDivElement>(null);
      const pathRef = useRef<HTMLDivElement>(null);
      const screensRef = useRef<HTMLDivElement>(null);
      const downloadRef = useRef<HTMLDivElement>(null);
      const newsRef = useRef<HTMLDivElement>(null);
      const contactRef = useRef<HTMLDivElement>(null);
  return (
     <div className="relative w-full flex flex-col items-center justify-center overflow-x-hidden">
          <Navbar active={activeSection}/>
          <div
          className=' w-full flex items-center justify-center relative'
         
          >
             <Image
                    src="/optimize/path/Red BG B.webp"
                    alt="background"
                    fill
                    priority
                    fetchPriority='high'
                    quality={75}
                    className="object-cover"
                    sizes="100vw"
                  />
             {/* <Image
              src="/v2/path/Red BG B.png"
              alt="background"
              fill
              priority
              quality={75}
              className="object-cover"
            /> */}
          {children}

          </div>
          <Footer />
        </div>
  )
}
