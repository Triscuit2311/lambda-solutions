"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

const backgroundImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/engine-FwNdgeqscl9f3yMaAh363cFrkG0yj2.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/car-XqTEJuyHPUZYfAw16J8eFJl61dNTIA.jpeg",
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-primary text-accent-light py-32 overflow-hidden">
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-30" : "opacity-0"
          }`}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={index === 0 ? "High performance engine" : "Modified sports car"}
            fill
            className="object-cover transform scale-110 transition-transform duration-10000 ease-linear"
            style={{
              transform: `scale(${index === currentImageIndex ? 1.2 : 1.1})`,
            }}
            priority
          />
        </div>
      ))}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Revolutionizing Motorsports Software</h1>
        <p className="text-xl mb-8">Cutting-edge research and development for high-performance racing</p>
        <Link
          href="#contact"
          className="bg-coral text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}

