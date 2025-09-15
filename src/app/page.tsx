'use client';

import { useState, useRef, useEffect } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import Contactus from "@/components/Contactus";
import Download from "@/components/Download";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Path from "@/components/Path";
import Screens from "@/components/Screens";
import { useRouter } from 'next/navigation';
import News from '@/components/News';
import LandingPageLayout from '@/components/layout/LandingPageLayout';

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("hero"); // State to track active section
  const router = useRouter()

  // Refs for each section
  const heroRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<HTMLDivElement>(null);
  const screensRef = useRef<HTMLDivElement>(null);
  const downloadRef = useRef<HTMLDivElement>(null);
  const newsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Framer Motion's scroll hook
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", () => {
    const sections = [
        { id: "hero", ref: heroRef },
        { id: "path", ref: pathRef },
        { id: "screens", ref: screensRef },
        { id: "download", ref: downloadRef },
        { id: "news", ref: newsRef },
        { id: "contact", ref: contactRef },
    ];

    let currentSection = "hero"; // Default section

    sections.forEach((section) => {
        const element = section.ref.current;
        if (element) {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top >= 0 && rect.top < windowHeight / 2) {
                currentSection = section.id;
            }
        }
    });

    setActiveSection(currentSection);
});


  return (
    <LandingPageLayout>
       <main className="w-full h-auto flex flex-col items-center justify-center">
        <div id="hero" ref={heroRef} className=' w-full'>
          <Hero />
        </div>
        <div id="path" ref={pathRef} className=' w-full'>
          <Path />
        </div>
        <div id="screens" ref={screensRef} className=' w-full'>
          <Screens />
        </div>
        <div className=' z-10 w-screen' style={{backgroundImage: "url('/v2/download/White BG B.png')",backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundPosition:'bottom'}}>
          <div id="download" ref={downloadRef} className=' w-full'>
            <Download />
          </div>
          <div id="news" ref={newsRef} className=' w-full'>
            <News />
          </div>
        </div>
        
        
        <div id="contact" ref={contactRef} className=' w-full'>
          <Contactus />
        </div>
      </main>
    </LandingPageLayout>
  );
}
