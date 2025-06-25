"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import MainNavigation from "@/components/main-navigation"
import InteractiveText from "@/components/interactive-text"
import MagneticElement from "@/components/magnetic-element"

export default function AboutPage() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const techRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname();

  useEffect(() => {
    // No animation
    return () => {}
  }, [pathname])

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const techStack: { name: string; icon: string }[] = [
    { name: "", icon: "devicon-react-original-wordmark colored" },
    { name: "", icon: "devicon-express-original-wordmark" },
    { name: "", icon: "devicon-nodejs-plain-wordmark colored" },
    { name: "", icon: "devicon-mongodb-plain-wordmark colored" },
    { name: "", icon: "devicon-amazonwebservices-plain-wordmark colored" },
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
                key={tech.icon}
                className="tech-icon flex flex-col items-center justify-center bg-white rounded-xl p-8 shadow-sm h-40 w-full"
              >
                {/* @ts-expect-error: devicon <i> tag is not typed in JSX */}
                <i className={`${tech.icon} text-6xl mb-0 flex items-center justify-center w-full`}></i>
                {tech.name && <span className="text-sm font-medium mt-2">{tech.name}</span>}
              </MagneticElement>
            ))}
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
        © 2025 Yash Gurav. All rights reserved.
      </footer>
    </div>
  )
}
