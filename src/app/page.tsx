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

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("hero"); // State to track active section
  const router = useRouter()

  // Refs for each section
  const heroRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<HTMLDivElement>(null);
  const screensRef = useRef<HTMLDivElement>(null);
  const downloadRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Framer Motion's scroll hook
  const { scrollYProgress } = useScroll();

  // Update the active section based on scroll position
  useMotionValueEvent(scrollYProgress, "change", () => {
    const sections = [
      { id: "hero", ref: heroRef },
      { id: "path", ref: pathRef },
      { id: "screens", ref: screensRef },
      { id: "download", ref: downloadRef },
      { id: "contact", ref: contactRef },
    ];

    sections.forEach((section) => {
      const element = section.ref.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Detect if the section is in the viewport
        if (rect.top >= 0 && rect.top < windowHeight / 1) {
          setActiveSection(section.id);
        }
      }
    });
  });


  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-x-hidden">
      <Navbar active={activeSection}/>
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
        <div id="download" ref={downloadRef} className=' w-full'>
          <Download />
        </div>
        <div id="contact" ref={contactRef} className=' w-full'>
          <Contactus />
        </div>
      </main>
      <Footer />
    </div>
  );
}
