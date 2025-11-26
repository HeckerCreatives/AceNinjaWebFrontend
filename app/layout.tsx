import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ace",
  description: "Ace Ninja Path, where your ninja journey begins! Prepare to master powerful skills, forge your own unique path, and face off against epic enemies in thrilling battles. Dive into online PvP duels, join clan wars for incredible rewards, and shape your destiny with a dynamic skill system that lets you build your perfect warrior.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

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
      </body>
    </html>
  );
}
