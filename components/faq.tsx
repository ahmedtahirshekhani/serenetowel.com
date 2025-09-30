"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FaqSection() {
  return (
    <section className="py-12 bg-[#f6f4ee]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <a
            href="https://drive.google.com/file/d/1G9F58alUGoYh2_81rW_pyy1sj6EGdHeI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1ba6cf] text-white rounded-lg px-8 py-3 shadow-sm hover:opacity-95 transition-colors"
          >
            Our Catalogue
          </a>
        </div>
      </div>
    </section>
  )
}
