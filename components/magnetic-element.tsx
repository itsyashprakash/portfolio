"use client"

import type React from "react"

import { useRef, useEffect } from "react"
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
    // No animation
    return () => {}
  }, [strength])

  return (
    <Component ref={elementRef} className={cn("magnetic-element", className)}>
      {children}
    </Component>
  )
}
