"use client"

import { useState } from "react"
import Link from "next/link"
import NavDropdown from "./NavDropdown"
import { cn } from "@/lib/utils"

type MobileNavProps = {
  isOpen: boolean
}

export default function MobileNav({ isOpen }: MobileNavProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const productItems = ["Towels", "Bathrobes", "Bath Mats", "Made-ups"]

  return (
    <div
      className={cn(
        "md:hidden fixed inset-x-0 top-[60px] bg-white/95 backdrop-blur-lg border-t border-black/10 transition-all duration-300 overflow-hidden z-40",
        isOpen ? "max-h-[calc(100vh-60px)] opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <div
        className={cn(
          "container mx-auto px-3 py-4 flex flex-col gap-2 transition-all duration-300 overflow-y-auto",
          isOpen ? "translate-y-0" : "-translate-y-4"
        )}
      >
        {/* Products Dropdown */}
        <NavDropdown
          id="mobileProducts"
          label="Products"
          items={productItems}
          isMobile={true}
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
        />

        {/* About Us */}
        <Link
          href="#aboutus"
          className="py-2 px-2 border-b border-black/10 hover:bg-black/5 rounded-md transition-colors active:bg-black/10 text-black"
          onClick={() => setActiveDropdown(null)}
        >
          About Us
        </Link>

        {/* Our Catalogue */}
        <a
          href="https://drive.google.com/file/d/1G9F58alUGoYh2_81rW_pyy1sj6EGdHeI/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-2 border-b border-black/10 hover:bg-black/5 rounded-md transition-colors active:bg-black/10 text-black"
          onClick={() => setActiveDropdown(null)}
        >
          Our Catalogue
        </a>
      </div>
    </div>
  )
}
