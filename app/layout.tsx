import type React from "react"
import "@/app/globals.css"
import { Inter, Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import BlobCursor from "@/components/blob-cursor"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Jay Jhaveri | Senior Software Engineer",
  description: "AI Integration Specialist and Senior Software Engineer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-gradient-to-br from-blue-50 to-pink-50 font-sans antialiased",
          inter.variable,
          poppins.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <BlobCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
