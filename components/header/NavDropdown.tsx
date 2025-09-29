"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

type NavDropdownProps = {
  label: string
  items: string[]
  id: string
  isMobile?: boolean
  className?: string
  activeDropdown: string | null
  setActiveDropdown: (id: string | null) => void
}

export default function NavDropdown({ 
  label, 
  items, 
  id, 
  isMobile = false, 
  className,
  activeDropdown,
  setActiveDropdown
}: NavDropdownProps) {
  const isOpen = activeDropdown === id
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  // Clear timeout when component unmounts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [activeDropdown])

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen, setActiveDropdown])

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      toggleDropdown()
    } else if (e.key === "Escape" && isOpen) {
      setActiveDropdown(null)
    }
  }

  // Desktop hover handling
  const handleMouseEnter = () => {
    if (isMobile) return
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(id)
  }

  const handleMouseLeave = () => {
    if (isMobile) return
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      if (activeDropdown === id) setActiveDropdown(null)
    }, 150)
  }

  const toggleDropdown = () => {
    setActiveDropdown(isOpen ? null : id)
  }

  const mobileStyles = isMobile ? {
    wrapper: "border-b border-white/10 pb-2",
    button: "flex items-center justify-between w-full py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70 rounded-md px-2",
    content: "pl-2 mt-1 space-y-0.5 animate-fadeIn",
    item: "block py-1.5 px-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors active:bg-white/15"
  } : {
    wrapper: "relative",
    button: "flex items-center gap-1 text-black/75 hover:text-white transition-colors py-2 px-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70 text-sm lg:text-base",
    content: "absolute top-full left-0 mt-1 w-64 bg-black/90 border border-white/10 rounded-xl overflow-hidden backdrop-blur-xl shadow-xl p-3 animate-fadeIn",
    item: "flex items-center px-4 py-2.5 hover:bg-white/10 rounded-lg transition-colors"
  }

  // helper to normalize an item label -> section id (matches your ProductsSection)
  const toSectionId = (label: string) => {
    return label.toLowerCase().replace(/\s+/g, "-")
  }

  return (
    <div 
      className={cn(mobileStyles.wrapper, className)} 
      onMouseEnter={isMobile ? undefined : handleMouseEnter}
      onMouseLeave={isMobile ? undefined : handleMouseLeave}
    >
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        className={mobileStyles.button}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className={isMobile ? "font-medium" : ""}>{label}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen ? "rotate-180" : "",
            isMobile ? "" : "ml-1",
          )}
        />
      </button>
      
      {isOpen && (
        <div ref={dropdownRef} className={mobileStyles.content}>
          {items.map((item) => {
            // Create a section id like "bath-mats" from "Bath Mats"
            const sectionId = toSectionId(item)

            const isProduct = label.toLowerCase().includes("product")

            // Classes
            let itemClass = mobileStyles.item
            if (isMobile) {
              itemClass = isProduct
                ? mobileStyles.item
                : "block py-1.5 px-3 text-black hover:text-white hover:bg-white/5 rounded-lg transition-colors active:bg-white/15"
            } else {
              itemClass = isProduct
                ? `${mobileStyles.item} text-white`
                : `${mobileStyles.item} text-black hover:text-white`
            }

            // click handler: close dropdown, set hash (triggers ProductsSection), smooth scroll
            const handleClick = (e: React.MouseEvent) => {
              e.preventDefault()
              // close dropdown immediately
              setActiveDropdown(null)

              const targetHash = `#${sectionId}`
              try {
                if (window.location.hash === targetHash) {
                  // same hash — force scroll + dispatch a hashchange so the product listener reacts
                  const el = document.getElementById(sectionId)
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" })
                  // dispatch hashchange manually (some browsers don't fire if hash hasn't changed)
                  try {
                    const oldURL = window.location.href
                    const newURL = oldURL
                    window.dispatchEvent(new HashChangeEvent("hashchange", { oldURL, newURL }))
                  } catch {
                    // fallback: small location change to trigger native hashchange
                    window.location.hash = ""
                    setTimeout(() => { window.location.hash = sectionId }, 50)
                  }
                } else {
                  // setting location.hash will trigger 'hashchange' and browser will jump/scroll — we still do a smooth scroll after
                  window.location.hash = sectionId
                  setTimeout(() => {
                    const el = document.getElementById(sectionId)
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" })
                  }, 50)
                }
              } catch (err) {
                // last-resort: just navigate to anchor
                window.location.href = `${window.location.pathname}#${sectionId}`
              }
            }

            return (
              // keep Link for styling but prevent default navigation and use handleClick
              <Link
                key={item}
                href={`#${sectionId}`}
                onClick={handleClick}
                className={itemClass}
              >
                <span className={cn("font-medium", "text-sm")}>{item}</span>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
