"use client"

import { Plus_Jakarta_Sans } from "next/font/google"

const jakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
})

export default function ModernCta() {
  return (
    <section className={`${jakarta.className} py-10 px-4 sm:px-6 md:py-12 bg-[#f6f4ee]`}>
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Text Content */}
          <div className="flex-1 pr-0 md:pr-8 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-2">
              Step into the Serene family today!
            </h3>
            <p className="text-sm md:text-base text-black/70 max-w-2xl mx-auto md:mx-0">
              Embrace quality and craftsmanship by stepping into the Serene family today. 
              Discover a world where excellence and customer care are at the heart of everything we do.
            </p>
          </div>

          {/* Button */}
          <div className="shrink-0 mt-4 md:mt-0">
            <button 
              id="contactus" 
              className="bg-[#1ba6cf] text-white font-semibold rounded-lg px-6 py-3 shadow-md hover:opacity-95 transition-all"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
