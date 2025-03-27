'use client';

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScroll";
import { useEffect, useState } from "react";
import Loading from "@/components/common/Loading";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Ace",
//   description: "Ace",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);

    // Listen for the window load event
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <html lang="en">
      <title>Ace</title>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full flex items-center justify-center">
          {/* <SmoothScrolling> */}
            <AnimatePresence>
              {isLoaded ? children : <Loading />}
            </AnimatePresence>
          {/* </SmoothScrolling> */}
          <Toaster
              position="top-right"
              reverseOrder={false}
            
             toastOptions={{
              className:' ',
              style:{
                padding: '8px',
                color: 'white',
                backgroundColor: 'black',
                fontSize: '12px'
              }
             }}
             
            />
        </div>
      </body>
    </html>
  );
}
