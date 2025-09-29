"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ModernCta() {
  return (
    <section className="py-10 px-4 sm:px-6 md:py-12 bg-[#f6f4ee]">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">
          <div className="flex-1 pr-8">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-2">Step into the Serene family today!</h3>
            <p className="text-sm md:text-base text-black/70 max-w-2xl">
              Embrace quality and craftsmanship by stepping into the Serene family today. Discover a world where excellence and
              customer care are at the heart of everything we do.
            </p>
          </div>

          <div className="shrink-0">
            <button className="bg-[#1ba6cf] text-white rounded-lg px-6 py-3 shadow-md hover:opacity-95">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
