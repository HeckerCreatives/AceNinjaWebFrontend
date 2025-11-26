"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Image from "next/image"

interface TiltCardProps {
  
  image: string
}

export default function TiltCard({ image }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig)
  const scale = useSpring(isHovered ? 1.05 : 1, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()

    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const x = (e.clientX - centerX) / rect.width
    const y = (e.clientY - centerY) / rect.height

    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden cursor-pointer"
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        mouseX.set(0)
        mouseY.set(0)
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative h-full w-full">

        <div className="relative h-full flex flex-col z-10" style={{ transform: "translateZ(20px)" }}>
          <div className="relative w-full mb-4">
            <Image
              src={image}
              alt="screen"
              loading="lazy"
              width={300}
              height={100}
              className="object-cover w-full"
            />
          </div>
        

          <motion.div
            className="absolute inset-0 w-full h-ful opacity-0 pointer-events-none"
            style={
              {
                opacity: useTransform(mouseX, [-0.5, 0, 0.5], [0.05, 0.1, 0.05]),
                backgroundImage:
                  "radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.2) 0%, transparent 80%)",
                "--x": useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]),
                "--y": useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]),
              } as any
            }
          />
        </div>
      </div>
    </motion.div>
  )
}

