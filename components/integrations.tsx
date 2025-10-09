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
        "Serene Towel tailors products to customer needs, ensuring high quality and personalized service that exceeds expectations, fostering long-term relationships.",
      icon: HeartHandshake,
    },
    {
      title: "Serenity",
      description:
        "Our towels offer premium softness and durability, designed to bring a luxurious and comfortable experience to high-end settings with competitive pricing.",
      icon: Gem,
    },
    {
      title: "Efficiency",
      description:
        "We streamline processes to ensure quick, efficient service, delivering orders promptly without compromising on quality.",
      icon: Clock,
    },
    {
      title: "Consistency",
      description:
        "We prioritize punctuality and reliability, ensuring on-time deliveries through well-managed logistics, building trust with our clients.",
      icon: Lightbulb,
    },
  ]

  return (
    <section
      className={`py-20 bg-white relative overflow-hidden ${plusJakartaSans.className}`}
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 id="ourvalues" className="text-3xl md:text-4xl font-bold">
            Our Values
          </h2>
        </motion.div>

        {/* Grid — show 2 per row on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 sm:p-8 bg-white rounded-xl shadow-lg h-full"
            >
              {/* Icon */}
              <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-[#E0F4FA] shadow-md">
                <value.icon className="w-10 h-10 text-[#1997B7]" />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold mb-3 min-h-[56px] flex items-center">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-1">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
