"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import MainNavigation from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import InteractiveText from "@/components/interactive-text"
import MagneticElement from "@/components/magnetic-element"
import { usePathname } from "next/navigation"

export default function ProjectsPage() {
  const featuredRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname();

  useEffect(() => {
    // No animation
    return () => {}
  }, [pathname])

  const projects = [
    {
      title: "CareAlert – Wellness Monitoring App",
      description:
        "Migrated the CareAlert mobile app to Flutter, improving scalability, stability, and maintenance efficiency.",
      link: "#",
    },
    {
      title: "Product Engineering Bridge",
      description:
        "Built an MVP tool for better PM-engineering collaboration. Breaks down product ideas into features, clarifications, and tech stacks.",
      link: "#",
    },
    {
      title: "Stock Buddy – Indian Stock Advisor",
      description:
        "Developed a conversational AI for Indian stock investors to check stock valuation metrics and offer beginner-friendly advice.",
      link: "#",
    },
    {
      title: "The Eternal Journey - AI Comic",
      description:
        "Created an AI-generated mythological comic series, blending storytelling and visual design through Generative AI models.",
      link: "#",
    },
    {
      title: "IoT Smart Air Purifier App",
      description:
        "Built a Bluetooth-enabled Flutter app to control smart air purifiers, improving product usability and control experience.",
      link: "#",
      comingSoon: true,
    },
  ]

  return (
    <div className="min-h-screen">
      <MainNavigation />

      <main className="container mx-auto px-4 py-12">
        <section ref={featuredRef} className="max-w-5xl mx-auto py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="featured-title text-3xl font-bold mb-4">
                <InteractiveText highlight="gradient" animation="wave">
                  TiramAI – From Concept to Creation
                </InteractiveText>
              </h2>
              <div className="featured-content prose max-w-none">
                <p className="mb-4">
                  Built <InteractiveText highlight="blue">TiramAI</InteractiveText>, an AI-driven mobile code generation
                  and self-healing engine. It generates full Flutter apps from user text or voice prompts — and
                  continuously evolves them. Users can report issues or suggest improvements directly from the app.
                  TiramAI analyzes feedback, regenerates affected screens, and automatically updates the apps to Play
                  Store and App Store — accelerating traditional development cycles by 10x. 20+ production-ready apps
                  generated and shipped in beta using this system.
                </p>
              </div>
              <div className="featured-buttons flex flex-wrap gap-4 mt-6">
                <MagneticElement>
                  <Button asChild className="rounded-full">
                    <Link href="#">
                      <span className="flex items-center gap-2">View Beta Apps on Play Store</span>
                    </Link>
                  </Button>
                </MagneticElement>
                <MagneticElement>
                  <Button asChild variant="outline" className="rounded-full">
                    <Link href="#">
                      <span className="flex items-center gap-2">
                        View TiramAI
                        <ExternalLink size={16} />
                      </span>
                    </Link>
                  </Button>
                </MagneticElement>
              </div>
            </div>
            <MagneticElement strength={0.1} className="featured-image">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="TiramAI App"
                  width={400}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </MagneticElement>
          </div>
        </section>

        <section ref={projectsRef} className="max-w-5xl mx-auto py-12">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <InteractiveText highlight="gradient" animation="wave">
              Other Projects
            </InteractiveText>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="project-card bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">
                  <InteractiveText highlight="blue" animation="fade">
                    {project.title}
                  </InteractiveText>
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {project.comingSoon ? (
                  <span className="text-sm text-gray-400">Coming Soon</span>
                ) : (
                  <MagneticElement>
                    <Button asChild variant="outline" size="sm" className="rounded-full">
                      <Link href={project.link}>
                        <span className="flex items-center gap-2">
                          View Project
                          <ExternalLink size={14} />
                        </span>
                      </Link>
                    </Button>
                  </MagneticElement>
                )}
              </div>
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
