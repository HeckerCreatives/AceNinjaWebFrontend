'use client'
import Contactus from "@/components/Contactus";
import Download from "@/components/Download";
import Hero from "@/components/Hero";
import LandingPageLayout from "@/components/layout/LandingPageLayout";
import News from "@/components/News";
import Path from "@/components/Path";
import Screens from "@/components/Screens";
import Image from "next/image";

export default function Home() {
  return (
     <LandingPageLayout>
       <main className="w-full h-auto flex flex-col items-center justify-center">
        
          <Hero />
          <Path />
          <Screens/>
          <div className=' z-10 w-screen' style={{backgroundImage: "url('/optimize/download/White BG B.webp')",backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundPosition:'bottom'}}>
              <Download />
              <News />
          </div>
          <Contactus/>
        
      </main>
    </LandingPageLayout>
  );
}
