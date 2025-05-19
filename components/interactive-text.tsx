"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface InteractiveTextProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  highlight?: "blue" | "purple" | "pink" | "gradient"
  animation?: "wave" | "bounce" | "fade" | "none"
  staggerTime?: number
}

export default function InteractiveText({
  children,
  className,
  as: Component = "span",
  highlight = "blue",
  animation = "wave",
  staggerTime = 0.02,
}: InteractiveTextProps) {
  const textRef = useRef<HTMLSpanElement>(null)

  const highlightClass = {
    blue: "hover:text-blue-500",
    purple: "hover:text-purple-500",
    pink: "hover:text-pink-500",
    gradient:
      "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500",
  }

  return (
    <Component
      ref={textRef}
      className={cn("interactive cursor-pointer transition-colors duration-300", highlightClass[highlight], className)}
    >
      {children}
    </Component>
  )
}
