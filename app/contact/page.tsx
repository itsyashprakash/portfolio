"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import MainNavigation from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import InteractiveText from "@/components/interactive-text"
import MagneticElement from "@/components/magnetic-element"

export default function ContactPage() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname();

  useEffect(() => {
    // No animation
    return () => {}
  }, [pathname])

  return (
    <div className="min-h-screen">
      <MainNavigation />

      <main className="container mx-auto px-4 py-12">
        <section
          ref={sectionRef}
          className="max-w-4xl mx-auto py-24 flex flex-col items-center justify-center text-center"
        >
          <h1 className="contact-title text-5xl md:text-6xl font-bold mb-8">
            <InteractiveText highlight="gradient" animation="wave">
              Let&apos;s Work Together
            </InteractiveText>
          </h1>
          <p className="contact-description text-xl text-gray-600 mb-12 max-w-2xl">
            I&apos;m always excited to <InteractiveText highlight="blue">collaborate</InteractiveText>,{" "}
            <InteractiveText highlight="purple">innovate</InteractiveText>, and build{" "}
            <InteractiveText highlight="pink">meaningful solutions</InteractiveText>. Whether you have a project, a job
            opportunity, or just want to connect — let&apos;s talk!
          </p>
          <MagneticElement>
            <Button asChild size="lg" className="contact-button rounded-full px-8">
              <a href="mailto:yashguravofficial@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
            </Button>
          </MagneticElement>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
        © 2025 Yash Gurav. All rights reserved.
      </footer>
    </div>
  )
}
