'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
  isSystemTheme: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)
  const [isSystemTheme, setIsSystemTheme] = useState(false)

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true)
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') as Theme
    const savedSystemPreference = localStorage.getItem('system-theme')
    
    if (savedTheme && savedSystemPreference === 'false') {
      // User has explicitly set a theme
      setThemeState(savedTheme)
      setIsSystemTheme(false)
    } else {
      // Use system preference
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      setThemeState(savedTheme || systemTheme)
      setIsSystemTheme(!savedTheme)
    }
  }, [])

  // Apply theme changes
  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark')
    
    // Add current theme class
    root.classList.add(theme)
    
    // Set CSS custom properties for theme colors
    const themeColors = getThemeColors(theme)
    Object.entries(themeColors).forEach(([property, value]) => {
      root.style.setProperty(property, value)
    })
    
    // Save theme preference
    localStorage.setItem('theme', theme)
    localStorage.setItem('system-theme', isSystemTheme.toString())
    
    // Update meta theme-color for mobile browsers
    updateMetaThemeColor(theme)
    
    // Dispatch custom event for other components
    window.dispatchEvent(new CustomEvent('themeChange', { detail: { theme } }))
  }, [theme, mounted, isSystemTheme])

  // Listen for system theme changes
  useEffect(() => {
    if (!mounted || !isSystemTheme) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const newTheme: Theme = e.matches ? 'dark' : 'light'
      setThemeState(newTheme)
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [mounted, isSystemTheme])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    setIsSystemTheme(false)
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div 
        className="min-h-screen bg-white dark:bg-black transition-colors duration-300"
        style={{ visibility: 'hidden' }}
      >
        {children}
      </div>
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, isSystemTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Theme color definitions
function getThemeColors(theme: Theme) {
  if (theme === 'dark') {
    return {
      '--bg-primary': '#000000',
      '--bg-secondary': '#111111',
      '--bg-tertiary': '#1A1A1A',
      '--text-primary': '#F5F5F5',
      '--text-secondary': '#CCCCCC',
      '--text-muted': '#999999',
      '--accent-primary': '#FF0000',
      '--accent-secondary': '#CC0000',
      '--accent-hover': '#E60000',
      '--border-color': '#333333',
      '--border-light': '#222222',
      '--shadow-light': '0 1px 3px rgba(0, 0, 0, 0.3)',
      '--shadow-medium': '0 4px 6px rgba(0, 0, 0, 0.3)',
      '--shadow-heavy': '0 10px 25px rgba(0, 0, 0, 0.5)',
    }
  } else {
    return {
      '--bg-primary': '#FFFFFF',
      '--bg-secondary': '#F8F8F8',
      '--bg-tertiary': '#F5F5F5',
      '--text-primary': '#111111',
      '--text-secondary': '#666666',
      '--text-muted': '#999999',
      '--accent-primary': '#FF0000',
      '--accent-secondary': '#CC0000',
      '--accent-hover': '#E60000',
      '--border-color': '#E5E5E5',
      '--border-light': '#F0F0F0',
      '--shadow-light': '0 1px 3px rgba(0, 0, 0, 0.1)',
      '--shadow-medium': '0 4px 6px rgba(0, 0, 0, 0.1)',
      '--shadow-heavy': '0 10px 25px rgba(0, 0, 0, 0.15)',
    }
  }
}

// Update meta theme-color for mobile browsers
function updateMetaThemeColor(theme: Theme) {
  let metaThemeColor = document.querySelector('meta[name="theme-color"]')
  
  if (!metaThemeColor) {
    metaThemeColor = document.createElement('meta')
    metaThemeColor.setAttribute('name', 'theme-color')
    document.head.appendChild(metaThemeColor)
  }
  
  metaThemeColor.setAttribute('content', theme === 'dark' ? '#000000' : '#FFFFFF')
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    // Return a default theme during SSR
    return {
      theme: 'light' as const,
      toggleTheme: () => {},
      setTheme: () => {},
      isSystemTheme: false,
    }
  }
  return context
}

// Hook for components that need to react to theme changes
export function useThemeChange(callback: (theme: Theme) => void) {
  useEffect(() => {
    const handleThemeChange = (event: CustomEvent) => {
      callback(event.detail.theme)
    }

    window.addEventListener('themeChange', handleThemeChange as EventListener)
    
    return () => {
      window.removeEventListener('themeChange', handleThemeChange as EventListener)
    }
  }, [callback])
}
