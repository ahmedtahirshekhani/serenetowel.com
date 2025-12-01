"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
import { Plus_Jakarta_Sans } from "next/font/google"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function ModernFooter() {
  useEffect(() => {
    // Enable smooth scrolling and trigger product opening
    const links = document.querySelectorAll('a[href^="/#"], a[href^="#"]')

    const handleClick = (e: any) => {
      const href = e.currentTarget.getAttribute("href")
      const targetId = href.replace("/#", "").replace("#", "")
      const el = document.getElementById(targetId)

      if (el) {
        e.preventDefault()

        // ✅ Update the hash so ProductsSection detects it
        history.pushState(null, "", `#${targetId}`)

        // ✅ Smooth scroll to section
        el.scrollIntoView({ behavior: "smooth", block: "start" })

        // ✅ Immediately trigger hashchange for React listener in ProductsSection
        window.dispatchEvent(new HashChangeEvent("hashchange"))
      }
    }

    links.forEach((link) => link.addEventListener("click", handleClick))
    return () => links.forEach((link) => link.removeEventListener("click", handleClick))
  }, [])

  return (
    <footer
      className={`${plusJakarta.className} bg-[hsl(0,0%,10%)] border-t border-[hsl(210,9%,46%)] py-8 sm:py-16 px-3 sm:px-6 lg:px-8 text-white`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Column 1: Logo + Slogan */}
          <div className="flex flex-col items-center md:items-start">
            <Link
              href="/"
              className="flex items-center justify-center md:justify-start gap-2 mb-6"
            >
              <Image
                src="/logo.png"
                alt="Serene Towels Logo"
                width={200}
                height={100}
                className="rounded-lg"
                priority
              />
            </Link>
            <p className="text-[hsla(0, 0%, 95%, 1.00)] mb-6">
              Where Luxury Demands Attention.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-2 underline underline-offset-4">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2 mt-4">
              {[
                { href: "/#towels", label: "Towels" },
                { href: "/#bathrobes", label: "Bathrobes" },
                { href: "/#bath-mats", label: "Bath Mats" },
                { href: "/#made-ups", label: "Made-ups" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-1 rounded transition-colors w-fit font-semibold text-white hover:bg-white hover:text-[hsl(0,0%,10%)] hover:border-y hover:border-[hsl(195,100%,39%)] hover:border-x-0"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-2 underline underline-offset-4">
              Reach Us Out
            </h3>
            <div className="mt-4 mb-6 flex flex-col gap-2">
              <Link
                href="mailto:sales@selenetowel.com"
                className="text-[hsla(0, 0%, 100%, 1.00)] hover:text-[hsl(195,100%,49%)] font-medium underline underline-offset-2"
              >
                sales@serenetowel.com
              </Link>
              <Link
                href="tel:+923552787275"
                className="text-[hsla(0, 0%, 100%, 1.00)] hover:text-[hsl(195,100%,49%)] font-medium underline underline-offset-2"
              >
                +92 335-2787-275
              </Link>
            </div>

            <h3 className="text-lg font-bold mb-2 underline underline-offset-4">
              Address
            </h3>
            <p className="mt-4 text-[hsla(213, 26%, 93%, 1.00)]">
              Plot R-890, Sector 20-A, Gulzar-e-Hijri, Karachi, Pakistan.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-[hsla(212, 7%, 62%, 1.00)] flex flex-col md:flex-row justify-center md:justify-between items-center text-center">
          <p className="text-[hsla(225, 5%, 55%, 1.00)] text-sm">
            © {new Date().getFullYear()} serenetowel.com Powered By{" "}
            <Link
              href="https://www.trilents.com"
              target="_blank"
              className="text-[hsl(195,100%,49%)] hover:underline font-semibold"
            >
              Trilents
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
