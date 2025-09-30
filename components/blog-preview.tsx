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
      className="py-16 md:py-24 bg-[#f6f4ee] relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Background blurred accents */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <h3
            id="process-heading"
            className="text-2xl md:text-3xl font-semibold text-[#1C1C1C]"
          >
            Our Process
          </h3>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          {/* Guidelines (curves) */}
          <svg
            className="pointer-events-none absolute inset-0 hidden lg:block z-0"
            viewBox="0 0 1000 1250"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M700 120 C 850 50, 900 200, 500 350 S 100 600, 500 700 S 900 950, 450 1220"
              stroke="#D9DAA8"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* Steps */}
          <div className="space-y-32 relative z-10">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: step.id * 0.06 }}
                className="w-full"
              >
                <div
                  className={`flex flex-col lg:flex-row items-center gap-10 ${
                    step.id === 2 || step.id === 4
                      ? "lg:flex-row-reverse"
                      : ""
                  }`}
                >
                  {/* Text */}
                  <div className="lg:w-1/2">
                    <h4 className="text-lg font-semibold text-[#1C1C1C] mb-3">
                      0{step.id} {step.title}
                    </h4>
                    <p className="text-base text-[#5A5A5A] leading-7">
                      {step.text}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="lg:w-1/2 flex justify-center lg:justify-end relative z-20">
                    <div className="w-full max-w-[600px] aspect-[16/9] rounded-lg overflow-hidden shadow-md relative">
                      <Image
                        src={step.img}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
