"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Plus_Jakarta_Sans } from "next/font/google"

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
})

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap, Users, Shield, BarChart3 } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

export default function ModernFeatures() {
  const [activeTab, setActiveTab] = useState("analytics")
  const isMobile = useIsMobile()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const features = [
    {
      id: "analytics",
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Advanced Analytics",
      description:
        "Gain deep insights with our powerful analytics tools. Track performance, identify trends, and make data-driven decisions.",
      benefits: [
        "Real-time data visualization",
        "Custom reporting dashboards",
        "Predictive analytics with AI",
        "Automated insights generation",
      ],
      image: "/images/hero1.webp",
    },
    {
      id: "automation",
      icon: <Zap className="h-5 w-5" />,
      title: "Intelligent Automation",
      description:
        "Streamline your workflows with smart automation. Reduce manual tasks and focus on what matters most.",
      benefits: [
        "Workflow automation builder",
        "Trigger-based actions",
        "Integration with 100+ tools",
        "AI-powered suggestions",
      ],
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "collaboration",
      icon: <Users className="h-5 w-5" />,
      title: "Team Collaboration",
      description:
        "Work seamlessly with your team in real-time. Share, edit, and collaborate on projects from anywhere.",
      benefits: [
        "Real-time document editing",
        "Project management tools",
        "Team chat and video calls",
        "Permission controls",
      ],
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "security",
      icon: <Shield className="h-5 w-5" />,
      title: "Enterprise Security",
      description:
        "Protect your data with enterprise-grade security. Ensure compliance and maintain privacy.",
      benefits: [
        "End-to-end encryption",
        "Role-based access control",
        "Compliance monitoring",
        "Audit logs and reporting",
      ],
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value)

    if (isMobile && mounted) {
      setTimeout(() => {
        const element = document.getElementById(`${value}-content`)
        if (element) {
          const yOffset = -80
          const y =
            element.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset
          window.scrollTo({ top: y, behavior: "smooth" })
        }
      }, 100)
    }
  }

  const contentStyle = {
    minHeight: mounted ? "400px" : "auto",
  }

  return (
    <section
      id="aboutus"
      className={`${plusJakarta.className} py-12 px-4 sm:py-16 md:py-24 bg-[#f6f4ee]`}
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
          {/* Left images */}
          <div className="lg:col-span-2 flex flex-col lg:flex-row gap-6">
            <div className="flex-1 h-[520px] bg-gray-200 rounded-md overflow-hidden">
              <img
                src="/images/aboutus1.png"
                alt="placeholder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 h-[520px] bg-gray-200 rounded-md overflow-hidden">
              <img
                src="/images/aboutus2.png"
                alt="placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right text */}
          <div className="lg:col-span-2">
            <div className="max-w-[560px] mx-auto lg:mx-0">
              <h3 className="font-bold text-[48px] text-[#1C1C1C] mb-4">
                About Us
              </h3>

              <h2 className="font-extrabold text-[32px] text-black leading-tight mb-2 tracking-[-0.02em]">
                Experience Luxury &amp; Comfort with Serene Towel
              </h2>
              <br />

              <h4 className="font-semibold text-[18px] text-[#2E2E2E] mb-4">
                Towels Designed For Tranquility
              </h4>

              <p className="font-normal text-[16px] text-[#5A5A5A] mb-6 leading-[1.6]">
                Serene Towel is at the forefront of disrupting the towel
                manufacturing industry. True to our name, our mission is to offer
                luxurious, comfortable, and tranquil terry products tailored to
                our customers’ preferences.
              </p>

              <div className="mt-6">
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
