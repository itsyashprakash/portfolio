"use client"

import { useTrail, animated } from "@react-spring/web"
import { useRef, useEffect, useCallback, useState } from "react"
import { cn } from "@/lib/utils"

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x: number, y: number) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

interface BlobCursorProps {
  blobType?: "circle" | "square"
  fillColor?: string
  size?: number
  trailCount?: number
  className?: string
}

export default function BlobCursor({
  blobType = "circle",
  fillColor = "rgba(59, 130, 246, 0.3)", // blue-500 with opacity
  size = 40,
  trailCount = 3,
  className,
}: BlobCursorProps) {
  const [trail, api] = useTrail(trailCount, (i) => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }))

  const ref = useRef<HTMLDivElement>(null)
  const [showCursor, setShowCursor] = useState(false)

  const updatePosition = useCallback(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      return { left: rect.left, top: rect.top }
    }
    return { left: 0, top: 0 }
  }, [])

  const handleMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      const { left, top } = updatePosition()
      const x = "clientX" in e ? e.clientX : e.touches[0].clientX
      const y = "clientY" in e ? e.clientY : e.touches[0].clientY
      api.start({ xy: [x - left, y - top] })
    },
    [api, updatePosition],
  )

  useEffect(() => {
    // Only run on client
    const pointerFine = window.matchMedia("(pointer: fine)").matches
    setShowCursor(pointerFine)
    if (!pointerFine) return

    const handleResize = () => {
      updatePosition()
    }

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("touchmove", handleMove)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("touchmove", handleMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [handleMove, updatePosition])

  if (!showCursor) return null

  return (
    <div className={cn("fixed inset-0 z-50 pointer-events-none overflow-hidden", className)}>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="blob">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10" />
        </filter>
      </svg>
      <div ref={ref} className="w-full h-full">
        {trail.map((props, index) => (
          <animated.div
            key={index}
            style={{
              position: "absolute",
              transform: props.xy.to(trans),
              width: size - index * 5,
              height: size - index * 5,
              borderRadius: blobType === "circle" ? "50%" : "0%",
              backgroundColor: fillColor,
              opacity: 1 - index * 0.2,
              filter: index === 0 ? "url(#blob)" : "none",
              zIndex: 50 - index,
              mixBlendMode: "difference",
            }}
          />
        ))}
      </div>
    </div>
  )
}
