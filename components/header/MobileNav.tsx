"use client"

import { useState } from "react"
import Link from "next/link"
import NavDropdown from "./NavDropdown"
import { cn } from "@/lib/utils"

type MobileNavProps = {
  isOpen: boolean
  onClose?: () => void // optional to prevent runtime errors
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const productItems = ["Towels", "Bathrobes", "Bath Mats", "Made-ups"]

  const handleClose = () => {
    setActiveDropdown(null)
    if (onClose) onClose() // safe call
  }

  return (
   <div
  className={cn(
    "md:hidden absolute left-0 right-0 top-[60px] bg-white/95 backdrop-blur-lg border-t border-black/10 transition-all duration-300 z-40",
    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
  )}
  style={{ pointerEvents: isOpen ? "auto" : "none" }}
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
          onItemClick={handleClose} // close mobile menu when dropdown item clicked
        />

        {/* About Us */}
        <Link
          href="#aboutus"
          className="py-2 px-2 border-b border-black/10 hover:bg-black/5 rounded-md transition-colors active:bg-black/10 text-black"
          onClick={handleClose}
        >
          About Us
        </Link>

        {/* Our Catalogue */}
        <a
          href="https://drive.google.com/file/d/1QHf4oQegt5GRyZ5_uLbnnUMkZ91oqeWW/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-2 border-b border-black/10 hover:bg-black/5 rounded-md transition-colors active:bg-black/10 text-black"
          onClick={handleClose}
        >
          Our Catalogue
        </a>

       {/* Contact Us */}
        <button
          id="contactus"
          onClick={handleClose}
          className="block w-full text-left py-2 px-2 border-b border-black/10 hover:bg-black/5 rounded-md transition-colors active:bg-black/10 text-black  lg:text-base"
        >
          Contact Us
        </button>

      </div>
    </div>
  )
}
