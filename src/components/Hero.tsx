import React from 'react'

export default function Hero() {
  return (
    <div id='#home' className=' relative w-full flex flex-col items-center h-auto bg-zinc-200'
    style={{backgroundImage: "url('/v2/header/White BG A.png')",backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundPosition:'bottom'}}

    >

      <div className=' relative w-full lg:h-auto h-auto flex items-center justify-center'>
        <img src="/v2/header/Header Banner.png" alt="" className=' relative lg:w-full md:h-full h-[300px]' />
        <img src="/v2/navigation/LOGO.png" alt="" className=' absolute bottom-0 w-[60%] lg:w-[30%] translate-y-8' />

      </div>

      <div className=' max-w-[1440px] w-full h-full grid grid-cols-1 lg:grid-cols-2 py-32 lg:py-40 lg:px-8'>

        <div className=' relative z-20 w-full h-full flex items-center justify-center' data-aos='fade-up' data-aos-duration={1000}>
          <div className=' flex flex-col items-center justify-center'>
            <img src="/v2/header/Scroll TAB Vertical.png" alt="" />

            <div className=' absolute max-w-[400px] lg:w-full w-[70%] flex flex-col items-center justify-center gap-4 h-[300px]'>
              <h2 className=' ~text-lg/3xl text-center font-bold uppercase'>BECOME ULTIMATE NINJA!</h2>
              <p className='  ~text-xs/lg text-center'>Welcome to <span className=' font-semibold '>ACE – Ninja Path</span>, where your ninja journey begins! Prepare to master powerful skills, forge your own unique path, and face off against epic enemies in thrilling battles. Dive into online PvP duels, join clan wars for incredible rewards, and shape your destiny with a dynamic skill system that lets you build your perfect warrior. Your adventure awaits—are you ready to rise to the challenge?</p>

            </div>
          </div>

        </div>


      </div>

      
      <img src="/v2/header/Big Char.png" alt="" className=' absolute bottom-0 right-0 w-full md:w-[55%]'/>
      <img src="/v2/header/Char.png" alt="" className=' hidden lg:absolute bottom-0 right-0 w-full md:w-[50%]' data-aos='fade-left' data-aos-duration={1200} data-aos-delay={400}/>

        
    </div>
  )
}
