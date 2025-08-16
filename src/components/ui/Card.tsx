'use client'

import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface CardProps extends Omit<HTMLMotionProps<'div'>, 'size'> {
  variant?: 'default' | 'elevated' | 'outlined' | 'filled'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  hover?: boolean
  interactive?: boolean
  children: ReactNode
  className?: string
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      size = 'md',
      hover = false,
      interactive = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      // Base styles
      'relative overflow-hidden rounded-xl',
      'transition-all duration-200 ease-in-out',
      'will-change-transform',
      
      // Size variants
      {
        'p-3': size === 'sm',
        'p-4': size === 'md',
        'p-6': size === 'lg',
        'p-8': size === 'xl',
      },
      
      // Variant styles
      {
        // Default variant
        'bg-bg-secondary border border-border-color shadow-sm': 
          variant === 'default',
        
        // Elevated variant
        'bg-bg-primary border border-border-color shadow-md': 
          variant === 'elevated',
        
        // Outlined variant
        'bg-transparent border-2 border-border-color': 
          variant === 'outlined',
        
        // Filled variant
        'bg-bg-tertiary border border-border-light': 
          variant === 'filled',
      },
      
      // Interactive styles
      {
        'cursor-pointer': interactive,
        'hover:shadow-lg hover:-translate-y-1': hover || interactive,
        'focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2': interactive,
      },
      
      className
    )

    const MotionComponent = interactive ? motion.div : motion.div

    return (
      <MotionComponent
        ref={ref}
        className={baseClasses}
        whileHover={hover || interactive ? { scale: 1.02 } : {}}
        whileTap={interactive ? { scale: 0.98 } : {}}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
        {...props}
      >
        {children}
      </MotionComponent>
    )
  }
)

Card.displayName = 'Card'

// Card Header Component
interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export function CardHeader({ children, className, ...props }: CardHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col space-y-1.5 pb-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// Card Title Component
interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function CardTitle({ 
  children, 
  className, 
  as: Component = 'h3',
  ...props 
}: CardTitleProps) {
  return (
    <Component
      className={cn(
        'text-lg font-semibold leading-none tracking-tight text-text-primary',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

// Card Description Component
interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  className?: string
}

export function CardDescription({ children, className, ...props }: CardDescriptionProps) {
  return (
    <p
      className={cn(
        'text-sm text-text-secondary',
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}

// Card Content Component
interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className, ...props }: CardContentProps) {
  return (
    <div
      className={cn(
        'pt-0',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// Card Footer Component
interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export function CardFooter({ children, className, ...props }: CardFooterProps) {
  return (
    <div
      className={cn(
        'flex items-center pt-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// Card Image Component
interface CardImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
  className?: string
  aspectRatio?: 'square' | 'video' | 'photo' | 'wide'
}

export function CardImage({ 
  src, 
  alt, 
  className, 
  aspectRatio = 'square',
  ...props 
}: CardImageProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg',
        {
          'aspect-square': aspectRatio === 'square',
          'aspect-video': aspectRatio === 'video',
          'aspect-[4/3]': aspectRatio === 'photo',
          'aspect-[21/9]': aspectRatio === 'wide',
        },
        className
      )}
      {...props}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-200 hover:scale-105"
        loading="lazy"
      />
    </div>
  )
}

// Card Badge Component
interface CardBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function CardBadge({ 
  children, 
  variant = 'default',
  size = 'md',
  className,
  ...props 
}: CardBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        {
          // Size variants
          'px-2 py-0.5 text-xs': size === 'sm',
          'px-2.5 py-0.5 text-sm': size === 'md',
          'px-3 py-1 text-sm': size === 'lg',
        },
        {
          // Variant styles
          'bg-bg-tertiary text-text-secondary': variant === 'default',
          'bg-primary-500 text-white': variant === 'primary',
          'bg-bg-secondary text-text-primary border border-border-color': variant === 'secondary',
          'bg-success-50 text-success-600 dark:bg-success-900/20 dark:text-success-400': variant === 'success',
          'bg-warning-50 text-warning-600 dark:bg-warning-900/20 dark:text-warning-400': variant === 'warning',
          'bg-error-50 text-error-600 dark:bg-error-900/20 dark:text-error-400': variant === 'error',
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

// Card Stats Component
interface CardStatsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export function CardStats({ children, className, ...props }: CardStatsProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-2 gap-4 pt-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// Card Stat Item Component
interface CardStatItemProps extends HTMLAttributes<HTMLDivElement> {
  label: string
  value: string | number
  className?: string
}

export function CardStatItem({ label, value, className, ...props }: CardStatItemProps) {
  return (
    <div
      className={cn(
        'flex flex-col space-y-1',
        className
      )}
      {...props}
    >
      <span className="text-sm text-text-secondary">{label}</span>
      <span className="text-lg font-semibold text-text-primary">{value}</span>
    </div>
  )
}

export { Card }
