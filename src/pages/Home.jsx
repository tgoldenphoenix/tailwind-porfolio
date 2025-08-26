import { AboutSection } from "../components/AboutSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { ProjectsSection } from "../components/ProjectsSection"
import { SkillsSection } from "../components/SkillsSection"
import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"
import { useState } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <ThemeContext.Provider value={{isDarkMode, setIsDarkMode}}>
      <ThemeToggle />

      {/* Background Effects */}
      {isDarkMode && <StarBackground />}

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </ThemeContext.Provider>
  </div>
}
