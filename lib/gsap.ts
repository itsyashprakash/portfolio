// This file is needed to properly import GSAP plugins in Next.js
// It will be imported by components that need GSAP plugins

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText)
}

export { gsap, ScrollTrigger, SplitText }
