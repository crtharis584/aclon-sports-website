# Aclon Sports Design System

## Overview

The Aclon Sports Design System provides a comprehensive, consistent, and accessible foundation for building high-quality user interfaces. It includes a complete color palette, typography system, spacing scale, component library, and responsive design patterns.

## 🎨 Color Palette

### Primary Colors
- **Primary Red**: `#FF0000` - Main brand color for CTAs and accents
- **Primary Red Hover**: `#E60000` - Hover state for primary elements
- **Primary Red Secondary**: `#CC0000` - Secondary brand color

### Light Mode (White/Red)
```css
--bg-primary: #FFFFFF        /* Main background */
--bg-secondary: #F8F8F8      /* Secondary background */
--bg-tertiary: #F5F5F5       /* Tertiary background */
--text-primary: #111111       /* Primary text */
--text-secondary: #666666     /* Secondary text */
--text-muted: #999999         /* Muted text */
--border-color: #E5E5E5       /* Border color */
--border-light: #F0F0F0       /* Light border */
```

### Dark Mode (Black/Red)
```css
--bg-primary: #000000        /* Main background */
--bg-secondary: #111111      /* Secondary background */
--bg-tertiary: #1A1A1A       /* Tertiary background */
--text-primary: #F5F5F5       /* Primary text */
--text-secondary: #CCCCCC     /* Secondary text */
--text-muted: #999999         /* Muted text */
--border-color: #333333       /* Border color */
--border-light: #222222       /* Light border */
```

### Semantic Colors
- **Success**: `#059669` - Success states and confirmations
- **Error**: `#DC2626` - Error states and warnings
- **Warning**: `#F59E0B` - Warning states and alerts

## 📝 Typography

### Font Family
- **Primary**: Inter (Google Fonts)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif

### Font Scale
```css
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */
--text-6xl: 3.75rem;    /* 60px */
```

### Font Weights
- **Thin**: 100
- **Extra Light**: 200
- **Light**: 300
- **Normal**: 400
- **Medium**: 500
- **Semi Bold**: 600
- **Bold**: 700
- **Extra Bold**: 800
- **Black**: 900

### Line Heights
- **Tight**: 1.1 (Headings)
- **Normal**: 1.4 (Subheadings)
- **Relaxed**: 1.5 (Body text)
- **Loose**: 1.6 (Large text)

## 📏 Spacing System

### Base Spacing Scale
```css
--space-xs: 0.25rem;    /* 4px */
--space-sm: 0.5rem;     /* 8px */
--space-md: 1rem;       /* 16px */
--space-lg: 1.5rem;     /* 24px */
--space-xl: 2rem;       /* 32px */
--space-2xl: 3rem;      /* 48px */
--space-3xl: 4rem;      /* 64px */
--space-4xl: 6rem;      /* 96px */
```

### Section Spacing
- **Small**: 48px (desktop) / 32px (tablet) / 16px (mobile)
- **Medium**: 64px (desktop) / 48px (tablet) / 24px (mobile)
- **Large**: 96px (desktop) / 64px (tablet) / 32px (mobile)
- **Extra Large**: 128px (desktop) / 96px (tablet) / 48px (mobile)

## 🎯 Border Radius

```css
--radius-sm: 0.25rem;   /* 4px */
--radius-md: 0.375rem;  /* 6px */
--radius-lg: 0.5rem;    /* 8px */
--radius-xl: 0.75rem;   /* 12px */
--radius-2xl: 1rem;     /* 16px */
```

## 🌟 Shadows

### Light Mode Shadows
```css
--shadow-light: 0 1px 3px rgba(0, 0, 0, 0.1);
--shadow-medium: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-heavy: 0 10px 25px rgba(0, 0, 0, 0.15);
```

### Dark Mode Shadows
```css
--shadow-light: 0 1px 3px rgba(0, 0, 0, 0.3);
--shadow-medium: 0 4px 6px rgba(0, 0, 0, 0.3);
--shadow-heavy: 0 10px 25px rgba(0, 0, 0, 0.5);
```

## ⚡ Transitions

```css
--transition-fast: 0.15s ease;
--transition-normal: 0.3s ease;
--transition-slow: 0.5s ease;
```

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
xs: 475px    /* Extra small devices */
sm: 640px    /* Small devices */
md: 768px    /* Medium devices */
lg: 1024px   /* Large devices */
xl: 1280px   /* Extra large devices */
2xl: 1536px  /* 2X large devices */
3xl: 1920px  /* 3X large devices */
```

## 🧩 Component Library

### Button Component

#### Variants
- **Primary**: Red background with white text
- **Secondary**: Transparent with red border and text
- **Ghost**: Transparent with hover background
- **Outline**: Transparent with border
- **Link**: Text-only with underline

#### Sizes
- **xs**: 28px height, 12px font
- **sm**: 32px height, 14px font
- **md**: 40px height, 14px font
- **lg**: 48px height, 16px font
- **xl**: 56px height, 18px font

#### Usage
```tsx
import { Button } from '@/components/ui'

<Button variant="primary" size="md">
  Click Me
</Button>

<Button variant="secondary" size="lg" loading>
  Loading...
</Button>
```

### Card Component

#### Variants
- **Default**: Secondary background with border
- **Elevated**: Primary background with shadow
- **Outlined**: Transparent with border
- **Filled**: Tertiary background

#### Sizes
- **sm**: 12px padding
- **md**: 16px padding
- **lg**: 24px padding
- **xl**: 32px padding

#### Usage
```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui'

<Card variant="elevated" size="lg">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
</Card>
```

### Container Component

#### Sizes
- **xs**: 320px max-width
- **sm**: 640px max-width
- **md**: 768px max-width
- **lg**: 1024px max-width
- **xl**: 1280px max-width
- **full**: 1536px max-width
- **screen**: 100vw

#### Usage
```tsx
import { Container, SectionContainer, GridContainer } from '@/components/ui'

<SectionContainer spacing="lg" background="secondary">
  <Container size="lg">
    <GridContainer cols={3} gap="lg">
      {/* Grid items */}
    </GridContainer>
  </Container>
</SectionContainer>
```

## 🎨 Theme System

### Theme Provider
The theme system provides automatic dark/light mode switching with system preference detection.

#### Usage
```tsx
import { ThemeProvider, useTheme } from '@/components/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  )
}

function Component() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  )
}
```

### CSS Custom Properties
All theme colors are available as CSS custom properties for use in custom components:

```css
.my-component {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}
```

## ♿ Accessibility

### Color Contrast
- All text meets WCAG AA standards (4.5:1 ratio)
- Interactive elements meet WCAG AAA standards (7:1 ratio)

### Focus States
- All interactive elements have visible focus indicators
- Focus rings use the primary red color for consistency

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Tab order follows logical document flow
- Escape key closes modals and dropdowns

### Screen Readers
- Semantic HTML structure
- ARIA labels and descriptions
- Proper heading hierarchy
- Alt text for images

## 📱 Responsive Design

### Mobile First Approach
All components are designed mobile-first with progressive enhancement.

### Touch Targets
- Minimum 44px touch targets for mobile
- Adequate spacing between interactive elements
- Touch-friendly button sizes

### Responsive Typography
```css
/* Responsive text classes */
.text-responsive-xs { font-size: clamp(0.75rem, 2vw, 0.875rem); }
.text-responsive-sm { font-size: clamp(0.875rem, 2.5vw, 1rem); }
.text-responsive-base { font-size: clamp(1rem, 3vw, 1.125rem); }
.text-responsive-lg { font-size: clamp(1.125rem, 3.5vw, 1.25rem); }
.text-responsive-xl { font-size: clamp(1.25rem, 4vw, 1.5rem); }
.text-responsive-2xl { font-size: clamp(1.5rem, 5vw, 2rem); }
.text-responsive-3xl { font-size: clamp(1.875rem, 6vw, 2.5rem); }
.text-responsive-4xl { font-size: clamp(2.25rem, 7vw, 3rem); }
.text-responsive-5xl { font-size: clamp(3rem, 8vw, 4rem); }
.text-responsive-6xl { font-size: clamp(3.75rem, 10vw, 5rem); }
```

## 🚀 Performance

### CSS Optimization
- Utility-first approach with Tailwind CSS
- Purged unused styles in production
- Optimized CSS custom properties
- Minimal CSS bundle size

### Animation Performance
- Hardware-accelerated transforms
- Reduced motion support
- Optimized animation timing
- Efficient re-renders

### Image Optimization
- Lazy loading for images
- Responsive image sizes
- WebP format support
- Optimized image compression

## 🛠️ Development Guidelines

### Component Structure
1. Use TypeScript for type safety
2. Implement proper prop interfaces
3. Include accessibility attributes
4. Add comprehensive JSDoc comments
5. Follow consistent naming conventions

### Styling Best Practices
1. Use CSS custom properties for theming
2. Implement responsive design patterns
3. Follow BEM-like naming for custom CSS
4. Use utility classes when possible
5. Maintain consistent spacing

### Code Quality
1. Use ESLint and Prettier
2. Implement proper error boundaries
3. Add comprehensive testing
4. Follow semantic HTML structure
5. Optimize for performance

## 📚 Usage Examples

### Basic Layout
```tsx
import { SectionContainer, Container, GridContainer, Card } from '@/components/ui'

export default function Page() {
  return (
    <SectionContainer spacing="lg">
      <Container size="lg">
        <GridContainer cols={3} gap="lg">
          <Card variant="elevated">
            <CardContent>Card 1</CardContent>
          </Card>
          <Card variant="elevated">
            <CardContent>Card 2</CardContent>
          </Card>
          <Card variant="elevated">
            <CardContent>Card 3</CardContent>
          </Card>
        </GridContainer>
      </Container>
    </SectionContainer>
  )
}
```

### Form Layout
```tsx
import { Container, StackContainer, Button, Card } from '@/components/ui'

export default function Form() {
  return (
    <Container size="md">
      <Card variant="elevated" size="lg">
        <StackContainer spacing="lg">
          <input type="text" placeholder="Name" className="form-input" />
          <input type="email" placeholder="Email" className="form-input" />
          <Button variant="primary" fullWidth>
            Submit
          </Button>
        </StackContainer>
      </Card>
    </Container>
  )
}
```

### Responsive Hero Section
```tsx
import { SectionContainer, Container, Button } from '@/components/ui'

export default function Hero() {
  return (
    <SectionContainer spacing="xl" background="gradient">
      <Container size="lg">
        <div className="text-center">
          <h1 className="text-responsive-5xl font-bold mb-6">
            Premium Sportswear
          </h1>
          <p className="text-responsive-lg mb-8 max-w-2xl mx-auto">
            Discover our collection of high-performance athletic wear
          </p>
          <Button variant="primary" size="lg">
            Shop Now
          </Button>
        </div>
      </Container>
    </SectionContainer>
  )
}
```

## 🔧 Customization

### Extending the Design System
1. Add new color variables to CSS custom properties
2. Extend Tailwind config for new utilities
3. Create new component variants
4. Update theme provider for new themes
5. Document new patterns and components

### Brand Customization
1. Update primary color in CSS variables
2. Modify color palette in Tailwind config
3. Adjust typography scale if needed
4. Update component variants for brand colors
5. Test accessibility with new colors

## 📖 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Inter Font](https://rsms.me/inter/)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

---

This design system provides a solid foundation for building consistent, accessible, and performant user interfaces. Follow these guidelines to maintain design consistency across the Aclon Sports website.
