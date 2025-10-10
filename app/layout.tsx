
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ModernHeader from "@/components/header"
import ModernFooter from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Serene Towel - Innovations in Textile Art",
  description:
    "Serene Towel is a premium exporter of terry products, bath textiles, and made-ups. Comfort, elegance, and sustainable craftsmanship for global markets.",
  icons: "/fav icon1.png",
  openGraph: {
    title: "Serene Towel - Innovations in Textile Art",
    description:
      "Discover premium towels, bathrobes, bath mats, and terry made-ups crafted by Serene Towel for homes, hotels and healthcare worldwide.",
    images: ["/logo.png"],
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-black`}>
        {/* ✅ Proper ThemeProvider config */}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ModernHeader />
          <main>{children}</main>
          <ModernFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
