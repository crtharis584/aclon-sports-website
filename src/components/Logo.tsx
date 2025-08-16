'use client'

import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const { theme } = useTheme()
  
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  }

  return (
    <motion.div
      className={`flex items-center space-x-3 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo Icon */}
      <div 
        className={`${sizeClasses[size]} bg-red-600 rounded-lg flex items-center justify-center shadow-lg`}
        style={{ backgroundColor: '#FF0000' }}
      >
        <svg
          className={`${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6'}`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
            fill="white"
          />
          <path
            d="M6 14L7.5 18L12 16.5L16.5 18L18 14L16.5 10L12 11.5L7.5 10L6 14Z"
            fill="white"
            fillOpacity="0.8"
          />
        </svg>
      </div>
      
      {/* Logo Text */}
      <div className="flex flex-col">
        <span 
          className={`font-bold tracking-tight ${
            size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-2xl'
          }`}
          style={{ color: theme === 'dark' ? '#FFFFFF' : '#000000' }}
        >
          Aclon
        </span>
        <span 
          className={`font-medium tracking-wide ${
            size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'
          }`}
          style={{ color: theme === 'dark' ? '#CCCCCC' : '#666666' }}
        >
          Sports
        </span>
      </div>
    </motion.div>
  )
}
