# Header & Footer Documentation

## Overview

The Header and Footer components provide a professional, high-end navigation system that ties the entire Aclon Sports website together. Both components are fully responsive, theme-aware, and accessible.

## Components

### Header Component

**Location**: `src/components/Header.tsx`

**Features**:
- Fixed header with scroll-based styling changes
- Responsive navigation with hamburger menu for mobile
- Dropdown menus for product categories
- Theme toggle integration
- Optional "Request Quote" CTA button
- Smooth animations and transitions
- Full accessibility support

**Props**:
```typescript
interface HeaderProps {
  showQuoteCTA?: boolean
  className?: string
}
```

**Key Features**:
- **Scroll Effect**: Header background becomes more opaque when scrolling
- **Responsive Design**: Desktop horizontal menu, mobile hamburger menu
- **Dropdown Menus**: Products menu with subcategories
- **Theme Integration**: Seamless dark/light mode switching
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Smooth Animations**: Framer Motion animations for all interactions

### Footer Component

**Location**: `src/components/Footer.tsx`

**Features**:
- Four-column responsive layout
- Social media links with hover effects
- Newsletter subscription section
- Theme-aware styling
- Animated content loading
- Professional branding

**Props**:
```typescript
interface FooterProps {
  showNewsletter?: boolean
  className?: string
}
```

**Layout Structure**:
- **Brand Section**: Logo, description, social media links
- **Company Links**: About, Story, Careers, Press
- **Products Links**: Activewear, Sports Uniforms, Gym Wear, Custom Orders
- **Support Links**: Contact, Quote Request, Help Center, Size Guide

## Usage Examples

### Basic Header Usage

```tsx
import { Header } from '@/components/Header'

export default function MyPage() {
  return (
    <main className="min-h-screen pt-16">
      <Header />
      {/* Your page content */}
    </main>
  )
}
```

### Header with Custom Options

```tsx
import { Header } from '@/components/Header'

export default function CustomPage() {
  return (
    <main className="min-h-screen pt-16">
      <Header 
        showQuoteCTA={false}
        className="custom-header-class"
      />
      {/* Your page content */}
    </main>
  )
}
```

### Basic Footer Usage

```tsx
import { Footer } from '@/components/Footer'

export default function MyPage() {
  return (
    <>
      {/* Your page content */}
      <Footer />
    </>
  )
}
```

### Footer with Custom Options

```tsx
import { Footer } from '@/components/Footer'

export default function CustomPage() {
  return (
    <>
      {/* Your page content */}
      <Footer 
        showNewsletter={false}
        className="custom-footer-class"
      />
    </>
  )
}
```

## Navigation Structure

### Header Navigation
The header uses the navigation data from `src/data/navigation.ts`:

```typescript
export const navigation: NavigationItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'Our Story', href: '#story' },
  { 
    name: 'Products', 
    href: '#products',
    children: [
      { name: 'Activewear', href: '#activewear' },
      { name: 'Sports Uniforms', href: '#uniforms' },
      { name: 'Gym Wear', href: '#gym-wear' }
    ]
  },
  { name: 'Manufacturing', href: '#manufacturing' },
  { name: 'Contact', href: '#contact' },
  { name: 'Quote', href: '/quote' }
]
```

### Footer Navigation
The footer uses the footerNavigation data:

```typescript
export const footerNavigation = {
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Story', href: '#story' },
    { name: 'Careers', href: '#careers' },
    { name: 'Press', href: '#press' }
  ],
  products: [
    { name: 'Activewear', href: '/products/activewear' },
    { name: 'Sports Uniforms', href: '/products/sports-uniforms' },
    { name: 'Gym Wear', href: '/products/gym-wear' },
    { name: 'Custom Orders', href: '/quote' }
  ],
  support: [
    { name: 'Contact Us', href: '#contact' },
    { name: 'Request Quote', href: '/quote' },
    { name: 'Help Center', href: '#help' },
    { name: 'Size Guide', href: '#size-guide' }
  ]
}
```

## Styling & Theming

### Color Scheme
- **Primary Red**: `#FF0000` (buttons, accents, hover states)
- **Hover Red**: `#CC0000` (button hover states)
- **Dark Mode**: Black backgrounds with white text
- **Light Mode**: White backgrounds with black text
- **Gray Accents**: Various gray shades for secondary text and borders

### Responsive Design

#### Header
- **Desktop**: Horizontal menu with dropdowns
- **Tablet**: Adjusted spacing and layout
- **Mobile**: Hamburger menu with slide-down navigation

#### Footer
- **Desktop**: Four-column grid layout
- **Tablet**: Two-column layout
- **Mobile**: Single-column stacked layout

### Animations
- Framer Motion animations for smooth interactions
- Staggered animations for content loading
- Hover effects on buttons and links
- Smooth transitions for theme switching

## Accessibility Features

### Header
- Semantic HTML with `<header>` and `<nav>` elements
- ARIA labels for dropdown menus and mobile menu
- Keyboard navigation support (Tab, Enter, Escape)
- Screen reader compatibility
- Focus management for dropdowns
- High color contrast compliance

### Footer
- Semantic HTML with `<footer>` element
- Proper heading hierarchy
- Accessible social media links
- Newsletter form with proper labels
- Keyboard navigation support

## Performance Considerations

### Header
- Optimized scroll event handling with throttling
- Efficient dropdown state management
- Minimal re-renders with proper state management
- Optimized animations with Framer Motion

### Footer
- Lazy loading of social media icons
- Efficient grid layout with CSS Grid
- Optimized animations for viewport-based loading

## Customization Options

### Header Customization
- **showQuoteCTA**: Toggle the "Request Quote" button
- **className**: Add custom CSS classes
- **Navigation**: Modify navigation data in `src/data/navigation.ts`
- **Theme**: Integrates with global theme system
- **Logo**: Uses the Logo component for consistent branding

### Footer Customization
- **showNewsletter**: Toggle the newsletter subscription section
- **className**: Add custom CSS classes
- **Social Links**: Modify social media links in the component
- **Navigation**: Modify footer navigation in `src/data/navigation.ts`
- **Branding**: Uses the Logo component for consistent branding

## Integration

### Theme System
Both components integrate with the global theme system:
- Automatic color scheme switching
- Consistent styling across light/dark modes
- Theme toggle button in header

### Navigation System
- Uses centralized navigation data
- Consistent link structure
- Easy to maintain and update

### Routing
- Supports both hash links (#section) and page routes (/page)
- Smooth scrolling for hash links
- Proper Next.js routing integration

## File Structure

```
src/
├── components/
│   ├── Header.tsx              # Main header component
│   ├── Footer.tsx              # Main footer component
│   ├── Logo.tsx                # Logo component
│   ├── ThemeToggle.tsx         # Theme toggle component
│   └── Navbar.tsx              # Legacy navbar (can be removed)
├── data/
│   └── navigation.ts           # Navigation configuration
└── app/
    ├── page.tsx                # Homepage with header/footer
    └── quote/
        └── page.tsx            # Quote page with header/footer
```

## Dependencies

- **React**: Core framework
- **Framer Motion**: Animations and interactions
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling and responsive design
- **Next.js**: Framework and routing

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers
- Touch-friendly interactions on mobile devices

## Future Enhancements

1. **Sticky Header**: Option for sticky header behavior
2. **Mega Menu**: Enhanced dropdown menus with images
3. **Search Integration**: Add search functionality to header
4. **User Account**: Add user account dropdown
5. **Shopping Cart**: Add shopping cart icon and functionality
6. **Language Switcher**: Multi-language support
7. **Analytics Integration**: Track navigation interactions
8. **Performance Monitoring**: Monitor header/footer performance

## Testing

The components include:
- Responsive design testing
- Accessibility testing
- Theme switching testing
- Animation performance testing
- Cross-browser compatibility testing
- Mobile interaction testing

## Best Practices

### Header
- Keep navigation items concise and clear
- Ensure dropdown menus are easily accessible
- Maintain consistent spacing and typography
- Test mobile menu thoroughly
- Ensure theme toggle is always visible

### Footer
- Organize links logically by category
- Keep social media links prominent
- Make newsletter signup easy to find
- Ensure all links are working and accessible
- Maintain consistent branding throughout

## Troubleshooting

### Common Issues
1. **Header not fixed**: Ensure proper z-index and positioning
2. **Mobile menu not working**: Check JavaScript console for errors
3. **Theme not switching**: Verify ThemeProvider is wrapping the app
4. **Navigation links broken**: Check navigation data structure
5. **Footer layout issues**: Verify CSS Grid support in target browsers

### Performance Issues
1. **Slow animations**: Reduce animation complexity or duration
2. **Scroll lag**: Optimize scroll event handlers
3. **Large bundle size**: Consider code splitting for animations
4. **Memory leaks**: Ensure proper cleanup of event listeners
