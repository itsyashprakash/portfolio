"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Github, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"
import MagneticElement from "@/components/magnetic-element"

export default function MainNavigation() {
  const navRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    // No animation
    return () => {}
  }, [])

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <div ref={navRef} className="container mx-auto px-4 py-6">
      <nav className="flex items-center justify-between">
        <MagneticElement strength={0.2}>
          <Link href="/" className="text-2xl font-bold">
            Jay Jhaveri
          </Link>
        </MagneticElement>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center bg-gray-100 rounded-full p-1">
            {navItems.map((item) => (
              <MagneticElement key={item.name} strength={0.1}>
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full transition-colors",
                    pathname === item.href ? "bg-white shadow-sm" : "text-gray-600 hover:text-gray-900",
                  )}
                >
                  {item.name}
                </Link>
              </MagneticElement>
            ))}
          </div>

          <div className="flex items-center gap-2 ml-4">
            <MagneticElement strength={0.2}>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github size={20} />
              </Link>
            </MagneticElement>
            <MagneticElement strength={0.2}>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Linkedin size={20} />
              </Link>
            </MagneticElement>
          </div>
        </div>
      </nav>
    </div>
  )
}
