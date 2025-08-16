import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Color System
      colors: {
        primary: {
          50: '#FFF5F5',
          100: '#FFE3E3',
          200: '#FFC9C9',
          300: '#FFA8A8',
          400: '#FF8787',
          500: '#FF0000', // Primary Red
          600: '#E60000',
          700: '#CC0000',
          800: '#B30000',
          900: '#990000',
        },
        background: {
          light: '#FFFFFF',
          dark: '#000000',
          'light-secondary': '#F8F8F8',
          'dark-secondary': '#111111',
          'light-tertiary': '#F5F5F5',
          'dark-tertiary': '#1A1A1A',
        },
        text: {
          'light-primary': '#111111',
          'dark-primary': '#F5F5F5',
          'light-secondary': '#666666',
          'dark-secondary': '#CCCCCC',
          'light-muted': '#999999',
          'dark-muted': '#999999',
        },
        border: {
          light: '#E5E5E5',
          dark: '#333333',
          'light-light': '#F0F0F0',
          'dark-light': '#222222',
        },
        success: {
          50: '#F0FDF4',
          500: '#059669',
          600: '#047857',
        },
        error: {
          50: '#FEF2F2',
          500: '#DC2626',
          600: '#B91C1C',
        },
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          600: '#D97706',
        },
      },
      
      // Typography System
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.4' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.5' }],     // 14px
        'base': ['1rem', { lineHeight: '1.6' }],       // 16px
        'lg': ['1.125rem', { lineHeight: '1.6' }],     // 18px
        'xl': ['1.25rem', { lineHeight: '1.5' }],      // 20px
        '2xl': ['1.5rem', { lineHeight: '1.4' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '1.3' }],    // 30px
        '4xl': ['2.25rem', { lineHeight: '1.2' }],     // 36px
        '5xl': ['3rem', { lineHeight: '1.1' }],        // 48px
        '6xl': ['3.75rem', { lineHeight: '1.1' }],     // 60px
        '7xl': ['4.5rem', { lineHeight: '1' }],        // 72px
        '8xl': ['6rem', { lineHeight: '1' }],          // 96px
        '9xl': ['8rem', { lineHeight: '1' }],          // 128px
      },
      
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      
      // Spacing System
      spacing: {
        'xs': '0.25rem',    // 4px
        'sm': '0.5rem',     // 8px
        'md': '1rem',       // 16px
        'lg': '1.5rem',     // 24px
        'xl': '2rem',       // 32px
        '2xl': '3rem',      // 48px
        '3xl': '4rem',      // 64px
        '4xl': '6rem',      // 96px
        '5xl': '8rem',      // 128px
        '6xl': '12rem',     // 192px
      },
      
      // Border Radius System
      borderRadius: {
        'xs': '0.125rem',   // 2px
        'sm': '0.25rem',    // 4px
        'md': '0.375rem',   // 6px
        'lg': '0.5rem',     // 8px
        'xl': '0.75rem',    // 12px
        '2xl': '1rem',      // 16px
        '3xl': '1.5rem',    // 24px
        'full': '9999px',
      },
      
      // Box Shadow System
      boxShadow: {
        'xs': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.15)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
        'none': 'none',
        // Custom shadows for dark mode
        'dark-xs': '0 1px 2px rgba(0, 0, 0, 0.3)',
        'dark-sm': '0 1px 3px rgba(0, 0, 0, 0.3)',
        'dark-md': '0 4px 6px rgba(0, 0, 0, 0.3)',
        'dark-lg': '0 10px 15px rgba(0, 0, 0, 0.3)',
        'dark-xl': '0 20px 25px rgba(0, 0, 0, 0.5)',
        'dark-2xl': '0 25px 50px rgba(0, 0, 0, 0.5)',
      },
      
      // Animation System
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'scale-out': 'scaleOut 0.3s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        slideDown: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        slideLeft: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        slideRight: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        scaleIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        scaleOut: {
          '0%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
          '100%': { 
            opacity: '0',
            transform: 'scale(0.95)'
          },
        },
        bounceIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.3)'
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.05)'
          },
          '70%': { 
            transform: 'scale(0.9)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
        },
      },
      
      // Transition System
      transitionProperty: {
        'all': 'all',
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
        'opacity': 'opacity',
        'shadow': 'box-shadow',
        'transform': 'transform',
        'spacing': 'margin, padding',
      },
      
      transitionDuration: {
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },
      
      transitionTimingFunction: {
        'linear': 'linear',
        'in': 'cubic-bezier(0.4, 0, 1, 1)',
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      
      // Z-Index System
      zIndex: {
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        'auto': 'auto',
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal-backdrop': '1040',
        'modal': '1050',
        'popover': '1060',
        'tooltip': '1070',
      },
      
      // Container System
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      
      // Aspect Ratio System
      aspectRatio: {
        'auto': 'auto',
        'square': '1 / 1',
        'video': '16 / 9',
        'photo': '4 / 3',
        'wide': '21 / 9',
        'ultrawide': '32 / 9',
      },
      
      // Backdrop Blur System
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      
      // Gradient System
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)',
        'gradient-hero-light': 'linear-gradient(135deg, #FFFFFF 0%, #F8F8F8 50%, #FFFFFF 100%)',
        'gradient-hero-dark': 'linear-gradient(135deg, #000000 0%, #111111 50%, #000000 100%)',
        'gradient-card': 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
      },
      
      // Screens (Breakpoints)
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        // Custom breakpoints
        'mobile': '320px',
        'tablet': '768px',
        'desktop': '1024px',
        'wide': '1440px',
      },
    },
  },
  plugins: [
    // Custom plugin for theme-aware utilities
    function({ addUtilities, theme }: any) {
      const newUtilities = {
        '.text-theme-primary': {
          color: 'var(--text-primary)',
        },
        '.text-theme-secondary': {
          color: 'var(--text-secondary)',
        },
        '.text-theme-muted': {
          color: 'var(--text-muted)',
        },
        '.bg-theme-primary': {
          backgroundColor: 'var(--bg-primary)',
        },
        '.bg-theme-secondary': {
          backgroundColor: 'var(--bg-secondary)',
        },
        '.bg-theme-tertiary': {
          backgroundColor: 'var(--bg-tertiary)',
        },
        '.border-theme': {
          borderColor: 'var(--border-color)',
        },
        '.border-theme-light': {
          borderColor: 'var(--border-light)',
        },
        '.shadow-theme': {
          boxShadow: 'var(--shadow-medium)',
        },
        '.shadow-theme-hover': {
          boxShadow: 'var(--shadow-heavy)',
        },
        '.transition-theme': {
          transition: 'background-color var(--transition-normal), color var(--transition-normal), border-color var(--transition-normal)',
        },
      }
      addUtilities(newUtilities)
    },
    
    // Custom plugin for responsive typography
    function({ addUtilities, theme }: any) {
      const responsiveText = {
        '.text-responsive-xs': {
          fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
        },
        '.text-responsive-sm': {
          fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
        },
        '.text-responsive-base': {
          fontSize: 'clamp(1rem, 3vw, 1.125rem)',
        },
        '.text-responsive-lg': {
          fontSize: 'clamp(1.125rem, 3.5vw, 1.25rem)',
        },
        '.text-responsive-xl': {
          fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
        },
        '.text-responsive-2xl': {
          fontSize: 'clamp(1.5rem, 5vw, 2rem)',
        },
        '.text-responsive-3xl': {
          fontSize: 'clamp(1.875rem, 6vw, 2.5rem)',
        },
        '.text-responsive-4xl': {
          fontSize: 'clamp(2.25rem, 7vw, 3rem)',
        },
        '.text-responsive-5xl': {
          fontSize: 'clamp(3rem, 8vw, 4rem)',
        },
        '.text-responsive-6xl': {
          fontSize: 'clamp(3.75rem, 10vw, 5rem)',
        },
      }
      addUtilities(responsiveText)
    },
  ],
}

export default config
