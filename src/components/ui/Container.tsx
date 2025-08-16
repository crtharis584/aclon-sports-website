'use client'

import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'screen'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'main' | 'article' | 'header' | 'footer' | 'aside'
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      size = 'lg',
      padding = 'md',
      children,
      className,
      as: Component = 'div',
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      // Base styles
      'mx-auto w-full',
      
      // Size variants
      {
        'max-w-xs': size === 'xs',      // 320px
        'max-w-sm': size === 'sm',      // 640px
        'max-w-md': size === 'md',      // 768px
        'max-w-lg': size === 'lg',      // 1024px
        'max-w-xl': size === 'xl',      // 1280px
        'max-w-7xl': size === 'full',   // 1536px
        'max-w-screen': size === 'screen', // 100vw
      },
      
      // Padding variants
      {
        'px-0': padding === 'none',
        'px-4 sm:px-6': padding === 'sm',
        'px-4 sm:px-6 lg:px-8': padding === 'md',
        'px-6 sm:px-8 lg:px-12': padding === 'lg',
        'px-8 sm:px-12 lg:px-16': padding === 'xl',
      },
      
      className
    )

    return (
      <Component
        ref={ref}
        className={baseClasses}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Container.displayName = 'Container'

// Section Container Component
interface SectionContainerProps extends ContainerProps {
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  background?: 'default' | 'secondary' | 'tertiary' | 'primary' | 'gradient'
}

export function SectionContainer({ 
  spacing = 'lg',
  background = 'default',
  className,
  children,
  ...props 
}: SectionContainerProps) {
  return (
    <section
      className={cn(
        // Background variants
        {
          'bg-bg-primary': background === 'default',
          'bg-bg-secondary': background === 'secondary',
          'bg-bg-tertiary': background === 'tertiary',
          'bg-primary-500 text-white': background === 'primary',
          'bg-gradient-primary text-white': background === 'gradient',
        },
        // Spacing variants
        {
          'py-0': spacing === 'none',
          'py-8 sm:py-12': spacing === 'sm',
          'py-12 sm:py-16': spacing === 'md',
          'py-16 sm:py-20': spacing === 'lg',
          'py-20 sm:py-24': spacing === 'xl',
          'py-24 sm:py-32': spacing === '2xl',
        },
        className
      )}
      {...props}
    >
      <Container {...props}>
        {children}
      </Container>
    </section>
  )
}

// Grid Container Component
interface GridContainerProps extends ContainerProps {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  responsive?: boolean
}

export function GridContainer({ 
  cols = 1,
  gap = 'md',
  responsive = true,
  className,
  children,
  ...props 
}: GridContainerProps) {
  return (
    <Container
      className={cn(
        'grid',
        // Column variants
        {
          'grid-cols-1': cols === 1,
          'grid-cols-1 sm:grid-cols-2': responsive && cols === 2,
          'grid-cols-2': !responsive && cols === 2,
          'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3': responsive && cols === 3,
          'grid-cols-3': !responsive && cols === 3,
          'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4': responsive && cols === 4,
          'grid-cols-4': !responsive && cols === 4,
          'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5': responsive && cols === 5,
          'grid-cols-5': !responsive && cols === 5,
          'grid-cols-1 sm:grid-cols-2 lg:grid-cols-6': responsive && cols === 6,
          'grid-cols-6': !responsive && cols === 6,
          'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6': responsive && cols === 12,
          'grid-cols-12': !responsive && cols === 12,
        },
        // Gap variants
        {
          'gap-0': gap === 'none',
          'gap-4': gap === 'sm',
          'gap-6': gap === 'md',
          'gap-8': gap === 'lg',
          'gap-12': gap === 'xl',
        },
        className
      )}
      {...props}
    >
      {children}
    </Container>
  )
}

// Flex Container Component
interface FlexContainerProps extends ContainerProps {
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse'
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

export function FlexContainer({ 
  direction = 'row',
  justify = 'start',
  align = 'start',
  wrap = 'nowrap',
  gap = 'none',
  className,
  children,
  ...props 
}: FlexContainerProps) {
  return (
    <Container
      className={cn(
        'flex',
        // Direction variants
        {
          'flex-row': direction === 'row',
          'flex-col': direction === 'col',
          'flex-row-reverse': direction === 'row-reverse',
          'flex-col-reverse': direction === 'col-reverse',
        },
        // Justify variants
        {
          'justify-start': justify === 'start',
          'justify-end': justify === 'end',
          'justify-center': justify === 'center',
          'justify-between': justify === 'between',
          'justify-around': justify === 'around',
          'justify-evenly': justify === 'evenly',
        },
        // Align variants
        {
          'items-start': align === 'start',
          'items-end': align === 'end',
          'items-center': align === 'center',
          'items-baseline': align === 'baseline',
          'items-stretch': align === 'stretch',
        },
        // Wrap variants
        {
          'flex-wrap': wrap === 'wrap',
          'flex-nowrap': wrap === 'nowrap',
          'flex-wrap-reverse': wrap === 'wrap-reverse',
        },
        // Gap variants
        {
          'gap-0': gap === 'none',
          'gap-4': gap === 'sm',
          'gap-6': gap === 'md',
          'gap-8': gap === 'lg',
          'gap-12': gap === 'xl',
        },
        className
      )}
      {...props}
    >
      {children}
    </Container>
  )
}

// Stack Container Component
interface StackContainerProps extends ContainerProps {
  direction?: 'vertical' | 'horizontal'
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  align?: 'start' | 'center' | 'end' | 'stretch'
}

export function StackContainer({ 
  direction = 'vertical',
  spacing = 'md',
  align = 'stretch',
  className,
  children,
  ...props 
}: StackContainerProps) {
  return (
    <Container
      className={cn(
        'flex',
        {
          'flex-col': direction === 'vertical',
          'flex-row': direction === 'horizontal',
        },
        {
          'items-start': align === 'start',
          'items-center': align === 'center',
          'items-end': align === 'end',
          'items-stretch': align === 'stretch',
        },
        {
          'space-y-0': direction === 'vertical' && spacing === 'none',
          'space-y-2': direction === 'vertical' && spacing === 'sm',
          'space-y-4': direction === 'vertical' && spacing === 'md',
          'space-y-6': direction === 'vertical' && spacing === 'lg',
          'space-y-8': direction === 'vertical' && spacing === 'xl',
          'space-x-0': direction === 'horizontal' && spacing === 'none',
          'space-x-2': direction === 'horizontal' && spacing === 'sm',
          'space-x-4': direction === 'horizontal' && spacing === 'md',
          'space-x-6': direction === 'horizontal' && spacing === 'lg',
          'space-x-8': direction === 'horizontal' && spacing === 'xl',
        },
        className
      )}
      {...props}
    >
      {children}
    </Container>
  )
}

// Responsive Container Component
interface ResponsiveContainerProps extends ContainerProps {
  breakpoints?: {
    sm?: number
    md?: number
    lg?: number
    xl?: number
    '2xl'?: number
  }
}

export function ResponsiveContainer({ 
  breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },
  className,
  children,
  ...props 
}: ResponsiveContainerProps) {
  const maxWidths = Object.entries(breakpoints).map(([key, value]) => {
    return `max-w-[${value}px]`
  }).join(' ')

  return (
    <Container
      className={cn(
        'mx-auto w-full',
        maxWidths,
        className
      )}
      {...props}
    >
      {children}
    </Container>
  )
}

export { Container }
