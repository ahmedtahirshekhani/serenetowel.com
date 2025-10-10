"use client"

import { useState } from "react"
import Link from "next/link"
import NavDropdown from "./NavDropdown"
import { cn } from "@/lib/utils"

type MobileNavProps = {
  isOpen: boolean
  onClose?: () => void
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const productItems = ["Towels", "Bathrobes", "Bath Mats", "Made-ups"]

  const handleClose = () => {
    setActiveDropdown(null)
    if (onClose) onClose()
  }

  return (
    <div
      className={cn(
        "md:hidden absolute left-0 right-0 top-[60px] border-t border-black/10 transition-all duration-300 z-40 bg-white/95 backdrop-blur-lg shadow-md",
        isOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-4"
      )}
      style={{
        pointerEvents: isOpen ? "auto" : "none",
      }}
    >
      <div
        className={cn(
          "container mx-auto px-3 py-4 flex flex-col gap-2 transition-all duration-300"
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
          onItemClick={handleClose}
        />

        {/* About Us */}
        <Link
          href="#aboutus"
          className="py-2 px-2 border-b border-black/10 hover:bg-black/5 rounded-md text-black transition-colors"
          onClick={handleClose}
        >
          About Us
        </Link>

        {/* Our Catalogue */}
        <a
          href="https://drive.google.com/file/d/1QHf4oQegt5GRyZ5_uLbnnUMkZ91oqeWW/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-2 border-b border-black/10 hover:bg-black/5 rounded-md text-black transition-colors"
          onClick={handleClose}
        >
          Our Catalogue
        </a>

        {/* Contact Us */}
        <button
          id="contactus"
          onClick={handleClose}
          className="block w-full text-left py-2 px-2 border-b border-black/10 hover:bg-black/5 rounded-md text-black transition-colors"
        >
          Contact Us
        </button>
      </div>
    </div>
  )
}
