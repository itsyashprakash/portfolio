"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { gsap } from "gsap"
import SplitText from "gsap/SplitText"

interface InteractiveTextProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  highlight?: "blue" | "purple" | "pink" | "gradient"
  animation?: "wave" | "bounce" | "fade" | "none"
  staggerTime?: number
}

type SplitTextLike = { chars: Element[]; revert: () => void }

export default function InteractiveText({
  children,
  className,
  as: Component = "span",
  highlight = "blue",
  animation = "wave",
  staggerTime = 0.02,
}: InteractiveTextProps) {
  const textRef = useRef<HTMLSpanElement>(null)
  const splitRef = useRef<SplitTextLike | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    gsap.registerPlugin(SplitText)

    if (!textRef.current) return

    // Split text into characters
    splitRef.current = new SplitText(textRef.current, { type: "chars" })
    const chars = splitRef.current.chars

    // Set up hover animations
    const handleMouseEnter = () => {
      if (animation === "none") return

      if (animation === "wave") {
        gsap.to(chars, {
          y: -10,
          stagger: {
            each: staggerTime,
            repeat: 1,
            yoyo: true,
          },
          ease: "power2.inOut",
          duration: 0.2,
        })
      } else if (animation === "bounce") {
        gsap.to(chars, {
          y: -5,
          stagger: {
            each: staggerTime,
            from: "center",
            repeat: 1,
            yoyo: true,
          },
          ease: "bounce.out",
          duration: 0.3,
        })
      } else if (animation === "fade") {
        gsap.to(chars, {
          opacity: 0.5,
          stagger: {
            each: staggerTime,
            repeat: 1,
            yoyo: true,
          },
          ease: "power2.inOut",
          duration: 0.2,
        })
      }
    }

    textRef.current.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      const currentTextRef = textRef.current;
      if (currentTextRef) {
        currentTextRef.removeEventListener("mouseenter", handleMouseEnter)
      }
      if (splitRef.current) {
        splitRef.current.revert()
      }
    }
  }, [animation, staggerTime])

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
