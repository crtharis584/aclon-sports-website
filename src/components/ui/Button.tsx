'use client'

import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'size'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  disabled?: boolean
  fullWidth?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  children: ReactNode
  className?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      disabled = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      // Base styles
      'inline-flex items-center justify-center font-semibold rounded-lg',
      'transition-all duration-200 ease-in-out',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'select-none whitespace-nowrap',
      'will-change-transform',
      
      // Size variants
      {
        'px-2 py-1 text-xs min-h-[28px]': size === 'xs',
        'px-3 py-1.5 text-sm min-h-[32px]': size === 'sm',
        'px-4 py-2 text-sm min-h-[40px]': size === 'md',
        'px-6 py-3 text-base min-h-[48px]': size === 'lg',
        'px-8 py-4 text-lg min-h-[56px]': size === 'xl',
      },
      
      // Width
      {
        'w-full': fullWidth,
      },
      
      // Variant styles
      {
        // Primary variant
        'bg-primary-500 text-white shadow-sm hover:bg-primary-600 focus:ring-primary-500 active:bg-primary-700': 
          variant === 'primary',
        
        // Secondary variant
        'bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500 active:bg-primary-600': 
          variant === 'secondary',
        
        // Ghost variant
        'bg-transparent text-text-primary hover:bg-bg-secondary focus:ring-primary-500 active:bg-bg-tertiary': 
          variant === 'ghost',
        
        // Outline variant
        'bg-transparent border border-border-color text-text-primary hover:border-primary-500 hover:text-primary-500 focus:ring-primary-500': 
          variant === 'outline',
        
        // Link variant
        'bg-transparent text-primary-500 underline-offset-4 hover:underline focus:ring-primary-500 p-0 min-h-auto': 
          variant === 'link',
      },
      
      className
    )

    const iconClasses = cn(
      'flex-shrink-0',
      {
        'w-3 h-3': size === 'xs',
        'w-4 h-4': size === 'sm' || size === 'md',
        'w-5 h-5': size === 'lg',
        'w-6 h-6': size === 'xl',
      }
    )

    const contentClasses = cn(
      'flex items-center justify-center gap-2',
      {
        'gap-1': size === 'xs' || size === 'sm',
        'gap-2': size === 'md',
        'gap-3': size === 'lg' || size === 'xl',
      }
    )

    return (
      <motion.button
        ref={ref}
        className={baseClasses}
        disabled={disabled || loading}
        whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
        whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
        {...props}
      >
        <div className={contentClasses}>
          {loading && (
            <div className={cn(iconClasses, 'animate-spin')}>
              <svg
                className="w-full h-full"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </div>
          )}
          
          {!loading && leftIcon && (
            <span className={iconClasses} aria-hidden="true">
              {leftIcon}
            </span>
          )}
          
          <span className={loading ? 'opacity-0' : 'opacity-100'}>
            {children}
          </span>
          
          {!loading && rightIcon && (
            <span className={iconClasses} aria-hidden="true">
              {rightIcon}
            </span>
          )}
        </div>
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button }

// Button Group Component
interface ButtonGroupProps {
  children: ReactNode
  className?: string
  vertical?: boolean
}

export function ButtonGroup({ children, className, vertical = false }: ButtonGroupProps) {
  return (
    <div
      className={cn(
        'inline-flex',
        {
          'flex-col': vertical,
          'flex-row': !vertical,
        },
        className
      )}
    >
      {children}
    </div>
  )
}

// Button Group Item Component
interface ButtonGroupItemProps extends ButtonProps {
  isFirst?: boolean
  isLast?: boolean
  vertical?: boolean
}

export const ButtonGroupItem = forwardRef<HTMLButtonElement, ButtonGroupItemProps>(
  (
    {
      isFirst = false,
      isLast = false,
      vertical = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        className={cn(
          'rounded-none',
          {
            // Horizontal button group
            'rounded-l-lg': !vertical && isFirst,
            'rounded-r-lg': !vertical && isLast,
            '-ml-px': !vertical && !isFirst,
            
            // Vertical button group
            'rounded-t-lg': vertical && isFirst,
            'rounded-b-lg': vertical && isLast,
            '-mt-px': vertical && !isFirst,
          },
          className
        )}
        {...props}
      />
    )
  }
)

ButtonGroupItem.displayName = 'ButtonGroupItem'
