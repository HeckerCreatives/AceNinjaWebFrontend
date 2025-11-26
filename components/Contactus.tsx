import { handleApiError } from '@/lib/errorHandler'
import axios from 'axios'
import { motion } from 'framer-motion'
import { span } from 'framer-motion/client'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import Image from 'next/image'

export default function Contactus() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const sendMessage = async () => {
        setLoading(true)
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contactus/sendmessage`,{
                email: email,
                message: "Subscribing to ace newsletter"
            })
        setLoading(false)
        if(response.data.message === 'success'){
            toast.success('Thanks for subscribing! Stay tuned for the latest news and updates.')
            setEmail('')
            setMessage('')
        }

        } catch (error) {
        setLoading(false)

            handleApiError(error)
        }
    }
  return (
    <div id='contact' className=' relative w-full h-[630px] flex items-center justify-center gap-8 py-20 scroll-m-32'
    
    >
        <Image
        src={`/optimize/contact/Contact BG.webp`}
        alt={'bg'}
        fill
        className="w-full h-auto object-cover object-bottom-left"
        priority
        fetchPriority='high'
        sizes="(max-width: 768px) 90vw, 365px"
        />


        <motion.img src="/optimize/contact/Characters.webp" alt="character" 
        initial={{ opacity: 0, x: -500 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px 0px" }}
        transition={{
            type: "spring",
            stiffness: 30,
            damping: 10,
            mass: 1,
            delay: 0
        }}
        className=' hidden lg:block absolute left-0 bottom-0'/>
      
        <div className=' max-w-[1440px] grid grid-cols-1 lg:grid-cols-[550px_1fr] w-full h-full relative z-50'>

            <div></div>
            <div className=' flex flex-col gap-6 w-full p-6 text-sm' >

                 <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px 0px" }}
                    transition={{
                        type: "spring",
                        stiffness: 30,
                        damping: 10,
                        mass: 1,
                        delay: 0
                    }}
                    className=' w-full flex  text-start'>
                        <p className=' text-3xl w-[60%] lg:w-[80%] text-black'>Subscribe to our newsletter</p>
                    </motion.div>

                    <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px 0px" }}
                    transition={{
                        type: "spring",
                        stiffness: 30,
                        damping: 10,
                        mass: 1,
                        delay: 0
                    }}
                    className=' w-full flex  text-start'>
                        <p className=' ~text-sm/lg w-[60%] text-zinc-700 lg:w-[80%]'>Stay Updated with the Latest News & Offers</p>
                    </motion.div>
              

                <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px 0px" }}
                transition={{
                    type: "spring",
                    stiffness: 30,
                    damping: 10,
                    mass: 1,
                    delay: 0
                }}
                className=' w-full flex gap-6'>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" placeholder='Email' className=' placeholder:text-black w-full p-4 bg-white lg:bg-zinc-200 rounded-md'/>

                    {/* <input type="text" placeholder='Subject' className=' w-full ~p-2/4 bg-white lg:bg-zinc-200 rounded-md' data-aos='fade-up' data-aos-duration={800} data-aos-delay={600}/> */}
                </motion.div>

                {/* <motion.textarea name="" id="" placeholder='Write your message...' value={message} onChange={(e) => setMessage(e.target.value)} required 
                className=' w-full h-[200px] bg-white lg:bg-zinc-200 ~p-2/4 rounded-md'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px 0px" }}
                transition={{
                    type: "spring",
                    stiffness: 30,
                    damping: 10,
                    mass: 1,
                    delay: .2
                }}/> */}

                <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px 0px" }}
                transition={{
                    type: "spring",
                    stiffness: 30,
                    damping: 10,
                    mass: 1,
                    delay: .4
                }}
                className=' w-full flex items-start justify-start'>
                    <button onClick={sendMessage} disabled={loading} className=' flex items-center justify-center'>
                        <Image src="/optimize/contact/Submit BUTTON.png" alt="btn" width={150} height={60} />
                        <p className=' ~text-sm/lg absolute text-black uppercase font-bold flex items-center justify-center gap-2'>
                        {loading && (
                            <span className=' spinner'></span>
                        )}
                        Submit</p>
                    </button>

                </motion.div>

            </div>

        </div>

    </div>
  )
}
