"use client"

import { motion } from "framer-motion"
import { Lightbulb, HeartHandshake, Clock, Gem } from "lucide-react"
import { Plus_Jakarta_Sans } from "next/font/google"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export default function OurValues() {
  const values = [
    {
      title: "Customer-Centric Excellence",
      description:
        "Serene Towel tailors products to customer needs, ensuring high quality and personalized service that exceeds expectations.",
      icon: HeartHandshake,
    },
    {
      title: "Serenity",
      description:
        "Our towels offer premium softness and durability, designed for a luxurious and comfortable experience.",
      icon: Gem,
    },
    {
      title: "Efficiency",
      description:
        "Quick, efficient service — delivering orders promptly without compromising on quality.",
      icon: Clock,
    },
    {
      title: "Consistency",
      description:
        "We ensure on-time deliveries through well-managed logistics, building lasting trust.",
      icon: Lightbulb,
    },
  ]

  return (
    <section
      className={`py-16 bg-white relative overflow-hidden ${plusJakartaSans.className}`}
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 id="ourvalues" className="text-3xl md:text-4xl font-bold">
            Our Values
          </h2>
        </motion.div>

        {/* Grid — 2 per row on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-4 sm:p-6 bg-white rounded-xl shadow-md h-full"
            >
              {/* Icon */}
              <div className="mb-3 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#E0F4FA] shadow">
                <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#1997B7]" />
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-semibold mb-2 leading-tight">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-xs sm:text-sm leading-snug">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
