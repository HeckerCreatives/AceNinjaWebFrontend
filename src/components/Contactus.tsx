import React from 'react'

export default function Contactus() {
  return (
    <div id='contact' className=' relative w-full h-[630px] flex items-center justify-center gap-8 py-20 scroll-m-32'
    style={{backgroundImage: "url('/v2/contact/Contact BG.png')",backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundPosition:'left'}}
    
    >

        <img src="/v2/contact/Characters.png" alt="" className=' absolute left-0 bottom-0' data-aos='fade-right' data-aos-duration={800} data-aos-delay={0}/>
        {/* <div className=' flex flex-col gap-6 w-full h-auto p-6'>
            <p className=' text-amber-400 text-sm font-thin'>Contact</p>
            <p className=' text-5xl w-[60%]'>Get in touch with us</p>
      
        </div> */}

        

        <div className=' max-w-[1440px] grid grid-cols-1 lg:grid-cols-[450px_1fr] w-full h-full'>

            <div className=' w-full flex justify-end text-end p-4' data-aos='fade-up' data-aos-duration={800} data-aos-delay={200}>
                <p className=' ~text-3xl/5xl w-[60%] lg:w-[80%]'>Get in touch with us</p>
            </div>

            <div className=' flex flex-col gap-6 w-full p-6 text-sm' >
                <div className=' w-full flex gap-6'>
                    <input type="text" placeholder='Name' className=' w-full ~p-2/4 bg-white lg:bg-zinc-200 rounded-md' data-aos='fade-up' data-aos-duration={800} data-aos-delay={300}/>

                    <input type="email" placeholder='Email' className=' w-full ~p-2/4 bg-white lg:bg-zinc-200 rounded-md' data-aos='fade-up' data-aos-duration={800} data-aos-delay={400}/>
                </div>

                <div className=' w-full flex gap-6'>
                    <input type="text" placeholder='Select' className=' w-full ~p-2/4 bg-white lg:bg-zinc-200 rounded-md' data-aos='fade-up' data-aos-duration={800} data-aos-delay={500}/>

                    <input type="text" placeholder='Subject' className=' w-full ~p-2/4 bg-white lg:bg-zinc-200 rounded-md' data-aos='fade-up' data-aos-duration={800} data-aos-delay={600}/>
                </div>

                <textarea name="" id="" placeholder='Write your message...' className=' w-full h-[200px] bg-white lg:bg-zinc-200 ~p-2/4 rounded-md' data-aos='fade-up' data-aos-duration={800} data-aos-delay={800}/>

                <div className=' w-full flex items-end justify-end'>
                    <button className=' flex items-center justify-center' data-aos='fade-up' data-aos-duration={800} data-aos-delay={1000}>
                        <img src="/v2/contact/Submit BUTTON.png" alt="" />
                        <p className=' ~text-sm/lg absolute text-black uppercase font-bold'>Submit</p>
                    </button>

                </div>

            </div>

        </div>

    </div>
  )
}
