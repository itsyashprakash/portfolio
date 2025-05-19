"use client"

import { useEffect, useRef } from "react"
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
    // No animation
    return () => {}
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
