"use client"

import { useState, useEffect, useRef } from "react"
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
  // ref to the visible menu panel (the part user interacts with)
  const panelRef = useRef<HTMLDivElement | null>(null)

  const handleClose = () => {
    setActiveDropdown(null)
    if (onClose) onClose()
  }

  useEffect(() => {
    if (!isOpen) return

    // detect taps/clicks (capture phase so we get it before other handlers)
    const onPointerDown = (e: PointerEvent) => {
      // if click/tap happened outside the panel, close
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        handleClose()
      }
    }

    // wheel for mouse/trackpad + touchstart/touchmove for mobile swipes
    const onWheel = (e: WheelEvent) => {
      handleClose()
      // do NOT preventDefault — we only close so the page can scroll
    }
    const onTouchStart = (e: TouchEvent) => {
      // If touch starts outside the panel, close right away.
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        handleClose()
      } else {
        // If touch starts inside the panel, still listen for touchmove to close
        // when the user swipes (we don't close on every small move; close on first move).
      }
    }
    const onTouchMove = (e: TouchEvent) => {
      // User is attempting to scroll/drag — close the menu so page can scroll
      handleClose()
    }

    document.addEventListener("pointerdown", onPointerDown, true)
    document.addEventListener("wheel", onWheel, { passive: true, capture: true })
    document.addEventListener("touchstart", onTouchStart, { passive: true, capture: true })
    document.addEventListener("touchmove", onTouchMove, { passive: true, capture: true })

    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true)
      document.removeEventListener("wheel", onWheel, { capture: true } as any)
      document.removeEventListener("touchstart", onTouchStart, { capture: true } as any)
      document.removeEventListener("touchmove", onTouchMove, { capture: true } as any)
    }
  }, [isOpen])

  return (
    // wrapper stays fixed so menu visually sits over content
    <div
      className={cn(
        "md:hidden fixed left-0 right-0 top-[60px] border-t border-black/10 transition-all duration-300 z-40 bg-white/95 backdrop-blur-lg shadow-md",
        isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
      )}
      // allow pointer events only when open
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
      {/* panelRef should reference the actual interactive panel container */}
      <div ref={panelRef} className="container mx-auto px-3 py-4 flex flex-col gap-2 transition-all duration-300 max-h-[70vh] overflow-auto">
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
        <Link
          href="#ourvalues"
          className="py-2 px-2 border-b border-black/10 hover:bg-black/5 rounded-md text-black transition-colors"
          onClick={handleClose}
        >
          Our Values 
        </Link>

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
