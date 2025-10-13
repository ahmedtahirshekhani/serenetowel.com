"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import NavDropdown from "./NavDropdown"

export default function DesktopNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const productItems = ["Towels", "Bathrobes", "Bath Mats", "Made-ups"]

  // Handle escape key to close dropdowns
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null)
      }
    }
    
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  // Enhanced dropdown management function
  const handleActiveDropdown = (id: string | null) => {
    setActiveDropdown(id)
  }

  return (
    <>
      <nav className="hidden md:flex items-center gap-4 lg:gap-8">
        <NavDropdown 
          id="products"
          label="Products" 
          items={productItems}
          activeDropdown={activeDropdown}
          setActiveDropdown={handleActiveDropdown}
        />
        

        <Link 
          href="#aboutus" 
          className="text-black/75 hover:text-white transition-colors py-2 px-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70 text-sm lg:text-base"
          onMouseEnter={() => setActiveDropdown(null)}
        >
          About Us
        </Link>

          <a
            href="https://drive.google.com/file/d/1QHf4oQegt5GRyZ5_uLbnnUMkZ91oqeWW/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
             className="text-black/75 hover:text-white transition-colors py-2 px-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70 text-sm lg:text-base"
          >
            Our Catalogue
          </a>

          <Link 
          href="#ourvalues" 
          className="text-black/75 hover:text-white transition-colors py-2 px-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70 text-sm lg:text-base"
          onMouseEnter={() => setActiveDropdown(null)}
        >
          Our Values
        </Link>
          <button 
              id="contactus" 
              className="text-black/75 hover:text-white transition-colors py-2 px-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70 text-sm lg:text-base"
            >
              Contact Us
            </button>
      </nav>

      {/* right-side controls intentionally removed — navigation links live in the main nav */}
    </>
  )
}
