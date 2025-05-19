"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { cn } from "@/lib/utils"

interface MagneticElementProps {
  children: React.ReactNode
  className?: string
  strength?: number
  as?: React.ElementType
}

export default function MagneticElement({
  children,
  className,
  strength = 0.3,
  as: Component = "div",
}: MagneticElementProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Check if device has mouse
    const hasPointerFine = window.matchMedia("(pointer: fine)").matches
    if (!hasPointerFine) return

    let bounds: DOMRect

    const handleMouseMove = (e: MouseEvent) => {
      bounds = element.getBoundingClientRect()

      const mouseX = e.clientX
      const mouseY = e.clientY

      const centerX = bounds.left + bounds.width / 2
      const centerY = bounds.top + bounds.height / 2

      const distanceX = mouseX - centerX
      const distanceY = mouseY - centerY

      gsap.to(element, {
        x: distanceX * strength,
        y: distanceY * strength,
        duration: 0.6,
        ease: "power3.out",
      })
    }

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
      })
    }

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [strength])

  return (
    <Component ref={elementRef} className={cn("magnetic-element", className)}>
      {children}
    </Component>
  )
}
