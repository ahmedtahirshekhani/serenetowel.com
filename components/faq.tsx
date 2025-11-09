"use client"

import { Plus_Jakarta_Sans } from "next/font/google"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// Load Plus Jakarta Sans
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export default function FaqSection() {
  return (
    <section className={`py-12 bg-[#f6f4ee] ${jakarta.className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <a
            href="/Serene_Towel_Catalogue_EU.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1ba6cf] text-white rounded-lg px-8 py-3 shadow-sm hover:opacity-95 transition-colors font-semibold"
          >
            Our Catalogue
          </a>
        </div>
      </div>
    </section>
  )
}
