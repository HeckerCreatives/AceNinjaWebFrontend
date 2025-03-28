import { handleApiError } from '@/lib/errorHandler'
import axios from 'axios'
import { motion } from 'framer-motion'
import { span } from 'framer-motion/client'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

export default function Contactus() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const sendMessage = async () => {
        setLoading(true)
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contactus/sendmessage`,{
                email: email,
                message: message
            })
        setLoading(false)
        if(response.data.message === 'success'){
            toast.success('Message sent successfully')
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
    style={{backgroundImage: "url('/v2/contact/Contact BG.png')",backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundPosition:'left'}}
    
    >

        <motion.img src="/v2/contact/Characters.png" alt="" 
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
        className=' absolute left-0 bottom-0'/>
        {/* <div className=' flex flex-col gap-6 w-full h-auto p-6'>
            <p className=' text-amber-400 text-sm font-thin'>Contact</p>
            <p className=' text-5xl w-[60%]'>Get in touch with us</p>
      
        </div> */}

        

        <div className=' max-w-[1440px] grid grid-cols-1 lg:grid-cols-[450px_1fr] w-full h-full'>

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
            className=' w-full flex justify-end text-end p-4'>
                <p className=' ~text-3xl/5xl w-[60%] lg:w-[80%]'>Get in touch with us</p>
            </motion.div>

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
                className=' w-full flex gap-6'>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" placeholder='Email' className=' w-full ~p-2/4 bg-white lg:bg-zinc-200 rounded-md'/>

                    {/* <input type="text" placeholder='Subject' className=' w-full ~p-2/4 bg-white lg:bg-zinc-200 rounded-md' data-aos='fade-up' data-aos-duration={800} data-aos-delay={600}/> */}
                </motion.div>

                <motion.textarea name="" id="" placeholder='Write your message...' value={message} onChange={(e) => setMessage(e.target.value)} required 
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
                }}/>

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
                className=' w-full flex items-end justify-end'>
                    <button onClick={sendMessage} disabled={loading} className=' flex items-center justify-center'>
                        <img src="/v2/contact/Submit BUTTON.png" alt="" />
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
