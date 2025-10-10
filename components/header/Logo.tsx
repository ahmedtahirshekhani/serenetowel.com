import Link from "next/link"
import Image from "next/image"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 relative z-10">
      <Image src="/Horizontal Logo.png" alt="Serene Towel" width={220} height={40} className="object-contain" />
    </Link>
  )
}
