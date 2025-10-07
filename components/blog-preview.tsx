"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function OurProcess() {
  const steps = [
    {
      id: 1,
      title: "Weaving",
      text: "Yarn is prepared and set on looms by experienced technicians. We use both modern and traditional weaving methods to achieve consistent pile, density, and softness while ensuring durable construction.",
      img: "/weaving.webp",
    },
    {
      id: 2,
      title: "Dyeing",
      text: "Color is applied using careful dyeing techniques that maintain fiber integrity and ensure long-lasting vibrancy. Our processes are selected to minimize environmental impact.",
      img: "/dyeing.jpg",
    },
    {
      id: 3,
      title: "Stitching",
      text: "Finishing and stitching are completed with precision to preserve product integrity. Seams are reinforced and edges are finished to provide both durability and a refined look.",
      img: "/stitch.png",
    },
    {
      id: 4,
      title: "Packaging",
      text: "Products are packaged using sustainable materials and careful packing methods to ensure they arrive in perfect condition while reducing waste.",
      img: "/packing.png",
    },
  ]

  return (
    <section
      className="relative py-16 md:py-24 bg-gradient-to-b from-[#f7f5ee] via-[#fffdf7] to-[#f7f5ee] overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Decorative flowing background lines */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <svg
          className="absolute top-0 left-1/2 -translate-x-1/2 opacity-10 w-[120%] h-auto"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,200 C300,400 800,0 1440,300 L1440,0 L0,0 Z"
            fill="#EAD7A4"
          />
          <path
            d="M0,400 C400,600 900,200 1440,500 L1440,0 L0,0 Z"
            fill="#F7EFD0"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center"
        >
          <h3
            id="process-heading"
            className="text-3xl md:text-4xl font-bold text-[#1C1C1C]"
          >
            Our Process
          </h3>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-20 md:space-y-32 relative">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: step.id * 0.06 }}
              className={`flex flex-col items-center gap-10 md:gap-16 ${
                step.id % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* Text Section */}
              <div className="w-full lg:w-1/2 text-center lg:text-left px-2">
                <h4 className="text-lg md:text-xl font-semibold text-[#1C1C1C] mb-3">
                  {step.id}. {step.title}
                </h4>
                <p className="text-base text-[#5A5A5A] leading-7">
                  {step.text}
                </p>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-[#f0eede] bg-white">
                  <Image
                    src={step.img}
                    alt={step.title}
                    fill
                    className="object-cover w-full h-full rounded-2xl transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Soft divider for mobile end fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f6f4ee] to-transparent pointer-events-none" />
    </section>
  )
}
