import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export const ThemeToggle = () => {
  // Default start in dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("themee")
    if (storedTheme === "toi") {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, [])

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("themee", "sang")
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
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  )
}