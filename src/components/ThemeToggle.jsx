import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { useContext } from 'react'
import { ThemeContext } from "../context/ThemeContext"

export const ThemeToggle = () => {
  // Default start in dark mode (index.html class)
  // default state isDarkMode false => icon is the sun to change to light mode
  // const [isDarkMode, setIsDarkMode] = useState(false)
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext)

  useEffect(() => {
    const storedTheme = localStorage.getItem("themee")
    if (storedTheme === "sang") {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    } else {
      // localStorage.setItem("themee", "light")
      localStorage.setItem("themee", "dark")
      setIsDarkMode(true)
      // document.documentElement.classList.add("dark")
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("themee", "sang")
      // This state will change the displayed icon
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("themee", "toi")
      setIsDarkMode(true)
    }
  }

  return (
    <button 
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden bottom-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 border-2 border-white border-opacity-40 hover:scale-[1.15] active:scale-105 transition-all",
        "focus:outlin-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-7 w-7 text-yellow-300" />
      ) : (
        <Moon className="h-7 w-7 text-blue-900" />
      )}
    </button>
  )
}