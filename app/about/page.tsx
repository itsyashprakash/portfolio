"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { usePathname } from "next/navigation"
import MainNavigation from "@/components/main-navigation"
import InteractiveText from "@/components/interactive-text"
import MagneticElement from "@/components/magnetic-element"
import { Cpu, Flame, BrainCircuit, FileCode, Bot } from "lucide-react"

export default function AboutPage() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const techRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Section animation
    const sectionTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    })

    sectionTl
      .from(".about-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .from(
        ".about-content",
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5",
      )

    // Tech icons animation
    const techTl = gsap.timeline({
      scrollTrigger: {
        trigger: techRef.current,
        start: "top 80%",
      },
    })

    techTl.from(".tech-icon", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
    })

    // Add hover effect to tech icons
    const techIcons = document.querySelectorAll(".tech-icon")
    techIcons.forEach((icon) => {
      const enter = () => {
        gsap.to(icon, {
          y: -10,
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
        })
      }
      const leave = () => {
        gsap.to(icon, {
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)",
        })
      }
      icon.addEventListener("mouseenter", enter)
      icon.addEventListener("mouseleave", leave)
      // Store handlers for cleanup
      ;(icon as any).__enter = enter
      ;(icon as any).__leave = leave
    })

    return () => {
      sectionTl.kill()
      techTl.kill()
      techIcons.forEach((icon) => {
        if ((icon as any).__enter) {
          icon.removeEventListener("mouseenter", (icon as any).__enter)
        }
        if ((icon as any).__leave) {
          icon.removeEventListener("mouseleave", (icon as any).__leave)
        }
      })
    }
  }, [pathname])

  const techStack = [
    { name: "Flutter", icon: Cpu, color: "text-blue-500" },
    { name: "Firebase", icon: Flame, color: "text-orange-500" },
    { name: "OpenAI", icon: BrainCircuit, color: "text-green-500" },
    { name: "TypeScript", icon: FileCode, color: "text-blue-600" },
    { name: "Anthropic", icon: Bot, color: "text-purple-500" },
  ]

  return (
    <div className="min-h-screen">
      <MainNavigation />

      <main className="container mx-auto px-4 py-12">
        <section ref={sectionRef} className="max-w-4xl mx-auto py-12">
          <h1 className="about-title text-3xl md:text-4xl font-bold mb-8 text-center">
            <InteractiveText highlight="gradient" animation="wave">
              What I do
            </InteractiveText>
          </h1>
          <div className="about-content prose prose-lg max-w-none">
            <p className="text-center mb-8">
              A <InteractiveText highlight="blue">Senior Software Engineer</InteractiveText> with 8+ years of experience
              blending mobile development expertise with cutting-edge{" "}
              <InteractiveText highlight="purple">AI technologies</InteractiveText>. I specialize in building
              intelligent, production-ready applications using{" "}
              <InteractiveText highlight="blue">Flutter</InteractiveText>,{" "}
              <InteractiveText highlight="blue">Firebase Cloud Functions</InteractiveText>, and Generative AI models
              like <InteractiveText highlight="blue">OpenAI</InteractiveText> and{" "}
              <InteractiveText highlight="purple">Anthropic</InteractiveText>. Focused on turning ideas into scalable
              products, automating workflows, and delivering seamless user experiences.
            </p>
          </div>
        </section>

        <section ref={techRef} className="max-w-4xl mx-auto py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <InteractiveText highlight="gradient" animation="wave">
              Tech I Work With
            </InteractiveText>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {techStack.map((tech) => (
              <MagneticElement
                key={tech.name}
                className="tech-icon flex flex-col items-center justify-center bg-white rounded-xl p-6 shadow-sm"
              >
                <tech.icon className={`w-12 h-12 mb-3 ${tech.color}`} />
                <span className="text-sm font-medium">{tech.name}</span>
              </MagneticElement>
            ))}
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
        © 2025 Jay Jhaveri. All rights reserved.
      </footer>
    </div>
  )
}
