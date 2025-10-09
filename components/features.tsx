"use client"

import { useState, useEffect } from "react"
import { Plus_Jakarta_Sans } from "next/font/google"
import { useIsMobile } from "@/hooks/use-mobile"

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
})

export default function ModernFeatures() {
  const [mounted, setMounted] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="aboutus"
      className={`${plusJakarta.className} py-12 px-4 sm:py-16 md:py-24 bg-[#f6f4ee]`}
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
          {/* Left images */}
          <div className="lg:col-span-2 flex flex-col lg:flex-row gap-6 items-center justify-center">
            {/* First image — always visible */}
            <div className="flex-1 max-w-[400px] h-[380px] sm:h-[450px] lg:h-[520px] bg-gray-200 rounded-md overflow-hidden">
              <img
                src="/images/aboutus1.png"
                alt="placeholder"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Second image — hidden on mobile */}
            <div className="hidden sm:flex flex-1 max-w-[400px] h-[380px] sm:h-[450px] lg:h-[520px] bg-gray-200 rounded-md overflow-hidden">
              <img
                src="/images/aboutus2.png"
                alt="placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right text */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="max-w-[560px] mx-auto md:mx-0">
              <h3 className="font-bold text-[28px] text-[#1C1C1C] mb-4 text-center md:text-left">
                About Us
              </h3>

              <h2 className="font-extrabold text-[20px] sm:text-[22px] md:text-[24px] text-black leading-tight mb-4 tracking-[-0.02em] text-center md:text-left">
                Experience Luxury &amp; Comfort with Serene Towel
              </h2>

              <h4 className="font-semibold text-[18px] text-[#2E2E2E] mb-4 text-center md:text-left">
                Towels Designed For Tranquility
              </h4>

              <p className="font-normal text-[16px] text-[#5A5A5A] mb-6 leading-[1.7] text-center md:text-left">
                Serene Towel is at the forefront of disrupting the towel
                manufacturing industry. True to our name, our mission is to
                offer luxurious, comfortable, and tranquil terry products
                tailored to our customers’ preferences.
              </p>

              <div className="mt-6 flex justify-center md:justify-start">
                <a
                  href="#ourvalues"
                  className="inline-block bg-[#1997B7] text-white font-semibold text-[16px] rounded-[8px] px-[30px] py-[12px] shadow-sm hover:opacity-95"
                >
                  Our Values
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
