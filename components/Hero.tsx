import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div id="home" className="relative w-full flex flex-col items-center h-auto bg-zinc-200">

      {/* Background */}
      <Image
        src="/optimize/header/White BG A.webp"
        alt="background"
        fill
        priority
        fetchPriority='high'
        quality={75}
        className="object-cover"
        sizes="100vw"
      />

      {/* Banner + Logo */}
      <div className="relative w-full h-auto flex items-center justify-center">
        <Image
          src="/optimize/header/Header Banner.webp"
          alt="banner"
          width={1393}
          height={677}
          priority
          quality={75}
        fetchPriority='high'
          className="w-full"
          sizes="100vw"
        />

        <Image
          src="/optimize/navigation/LOGO.webp"
          alt="logo"
          width={417}
          height={256}
          quality={75}
          loading='lazy'
          className="w-[50%] md:w-[30%] absolute bottom-0"
          sizes="(max-width: 768px) 50vw, 30vw"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] w-full h-full grid grid-cols-1 lg:grid-cols-2 py-32 lg:py-40 lg:px-8">

        <div
          className="relative z-20 w-full h-full flex items-center justify-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex flex-col items-center justify-center">

            <Image
              src="/optimize/header/Scroll TAB Vertical.webp"
              alt="tab"
              priority
              width={600}
              height={645}
              fetchPriority='high'
              sizes="(max-width: 768px) 70vw, 400px"
            />

            <div className="absolute max-w-[400px] lg:w-full w-[70%] flex flex-col items-center justify-center gap-4 h-[300px] text-amber-950">
              <h2 className=" text-[1rem] md:text-[1.8rem] text-center font-bold uppercase">
                BECOME ULTIMATE NINJA!
              </h2>
              <p className=" text-sm md:text-lg text-center">
                Welcome to <span className="font-semibold">ACE – Ninja Path</span>, where
                your ninja journey begins! Prepare to master powerful skills, forge your own
                unique path, and face off against epic enemies in thrilling battles. Dive into
                online PvP duels, join clan wars for incredible rewards, and shape your destiny
                with a dynamic skill system that lets you build your perfect warrior. Your
                adventure awaits—are you ready to rise to the challenge?
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Character Image */}
      <Image
        src="/optimize/header/Big Char.webp"
        alt="char"
        width={766}
        height={632}
        priority
        fetchPriority='high'
        className="absolute bottom-0 right-0 w-full md:w-[55%]"
        sizes="(max-width: 768px) 100vw, 55vw"
      />

    </div>
  )
}
