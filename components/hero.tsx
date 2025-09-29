"use client"

import React from "react"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
})

export default function ModernHero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/serene towel video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      />

      {/* Slight dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Centered content */}
      <div className="relative z-10 flex items-center justify-center min-h-[100svh] px-4">
        <div className={`${playfair.className} max-w-6xl w-full text-center`}> 
          <h1 className="text-[clamp(48px,10vw,80px)] leading-[0.85] font-[400] uppercase text-[#1ba6cf] tracking-tight">
            INNOVATIONS
          </h1>

          <h2 className="text-[clamp(24px,6vw,80px)] leading-[0.85] font-[400] uppercase text-white tracking-tight mt-2">
            IN TEXTILE ART
          </h2>

          {/* Horizontal rules with centered small since text */}
          <div className="flex items-center justify-center mt-6">
            <div className="flex-1 h-[1px] bg-white/60 max-w-[25%]" />

            <div className="mx-6 text-white text-[clamp(14px,1.6vw,30px)] font-[700] tracking-wider uppercase">
               <span className="text-[clamp(12px,3vw,40px)] font-[700]">SINCE 1993</span> 
            </div>

            <div className="flex-1 h-[1px] bg-white/60 max-w-[25%]" />
          </div>
        </div>
      </div>
    </section>
  )
}
