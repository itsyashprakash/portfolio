"use client"

import { useEffect, useRef } from "react"
import MainNavigation from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"
import InteractiveText from "@/components/interactive-text"
import MagneticElement from "@/components/magnetic-element"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // No animation
    return () => {}
  }, [])

  return (
    <div className="min-h-screen">
      <MainNavigation />

      <main className="container mx-auto px-4 py-12 md:py-24">
        <section
          ref={heroRef}
          className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-16 md:py-24"
        >
          <h1 className="hero-title text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Hi, I&apos;m{" "}
            <InteractiveText highlight="gradient" animation="wave">
              Yash Gurav
            </InteractiveText>
          </h1>
          <h2 className="hero-subtitle text-xl md:text-2xl font-medium text-gray-700 mb-8">
            <InteractiveText highlight="blue" animation="fade">
              Software Engineer
            </InteractiveText>{" "}
            |{" "}
            <InteractiveText highlight="purple" animation="fade">
              Player Support Specialist
            </InteractiveText>
          </h2>
          <p className="hero-description text-lg text-gray-600 mb-10 max-w-2xl">
            I engineer <InteractiveText highlight="blue">Apps</InteractiveText> that solve problems,
            power <InteractiveText highlight="purple">user experiences</InteractiveText>, and leverage{" "}
            <InteractiveText highlight="pink">modern technologies</InteractiveText>.
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4">
            <MagneticElement>
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/projects">
                  <span className="flex items-center gap-2">View Projects</span>
                </Link>
              </Button>
            </MagneticElement>
            <MagneticElement>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link href="public\YashGurav_Resume.pdf" download>
                  <span className="flex items-center gap-2">
                    <Download size={18} />
                    Download Resume
                  </span>
                </Link>
              </Button>
            </MagneticElement>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
        © 2025 Yash Gurav. All rights reserved.
      </footer>
    </div>
  )
}
