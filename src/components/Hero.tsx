'use client'

import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'

interface HeroProps {
  headline: string
  subheadline: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  background?: {
    type: 'image' | 'video'
    src: string
    alt?: string
  }
  alignment?: 'left' | 'center'
  className?: string
}

export function Hero({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  background,
  alignment = 'center',
  className = ''
}: HeroProps) {
  const { theme } = useTheme()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4
      }
    }
  }

  return (
    <section 
      id="home" 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
      style={{
        backgroundColor: theme === 'dark' ? '#000000' : '#FFFFFF'
      }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        {background?.type === 'video' ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster={background.src}
            aria-label={background.alt || 'Background video'}
          >
            <source src={background.src} type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <img 
              src={background.src} 
              alt={background.alt || 'Background image'} 
              className="w-full h-full object-cover"
            />
          </video>
        ) : background?.type === 'image' ? (
          <img
            src={background.src}
            alt={background.alt || 'Background image'}
            className="w-full h-full object-cover"
            loading="eager"
          />
        ) : (
          // Default gradient background
          <div 
            className="w-full h-full"
            style={{
              background: theme === 'dark' 
                ? 'linear-gradient(135deg, #000000 0%, #111111 50%, #000000 100%)'
                : 'linear-gradient(135deg, #FFFFFF 0%, #F8F8F8 50%, #FFFFFF 100%)'
            }}
          >
            {/* Subtle pattern overlay */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff0000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}
            />
          </div>
        )}
        
        {/* Overlay for better text readability */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundColor: theme === 'dark' 
              ? 'rgba(0, 0, 0, 0.4)' 
              : 'rgba(255, 255, 255, 0.3)'
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="container-custom relative z-10 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div 
          className={`max-w-4xl mx-auto ${
            alignment === 'left' ? 'text-left' : 'text-center'
          }`}
        >
          {/* Main Headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            variants={itemVariants}
            style={{
              color: theme === 'dark' ? '#FFFFFF' : '#000000',
              textShadow: theme === 'dark' 
                ? '0 2px 4px rgba(0, 0, 0, 0.3)' 
                : '0 2px 4px rgba(255, 255, 255, 0.8)'
            }}
          >
            {headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto"
            variants={itemVariants}
            style={{
              color: theme === 'dark' ? '#CCCCCC' : '#666666',
              textShadow: theme === 'dark' 
                ? '0 1px 2px rgba(0, 0, 0, 0.3)' 
                : '0 1px 2px rgba(255, 255, 255, 0.8)'
            }}
          >
            {subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className={`flex flex-col sm:flex-row gap-4 ${
              alignment === 'left' ? 'justify-start' : 'justify-center'
            } items-center sm:items-stretch`}
            variants={buttonVariants}
          >
            {/* Primary CTA */}
            <motion.a
              href={primaryCTA.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 min-h-[44px] w-full sm:w-auto"
              style={{
                backgroundColor: '#FF0000',
                color: '#FFFFFF'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#CC0000'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FF0000'
              }}
            >
              {primaryCTA.text}
            </motion.a>

            {/* Secondary CTA */}
            {secondaryCTA && (
              <motion.a
                href={secondaryCTA.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 min-h-[44px] w-full sm:w-auto"
                style={{
                  borderColor: '#FF0000',
                  color: '#FF0000',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FF0000'
                  e.currentTarget.style.color = '#FFFFFF'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = '#FF0000'
                }}
              >
                {secondaryCTA.text}
              </motion.a>
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 rounded-full flex justify-center cursor-pointer"
          style={{
            borderColor: theme === 'dark' ? '#666666' : '#CCCCCC'
          }}
          onClick={() => {
            const nextSection = document.querySelector('#products') || document.querySelector('#story')
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' })
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Scroll to next section"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              const nextSection = document.querySelector('#products') || document.querySelector('#story')
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' })
              }
            }
          }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 rounded-full mt-2"
            style={{
              backgroundColor: theme === 'dark' ? '#666666' : '#CCCCCC'
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
