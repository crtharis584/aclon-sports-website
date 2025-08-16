# Contact Section System Documentation

## Overview

The Contact Section System provides a comprehensive, user-friendly contact solution that allows users to easily reach out to the company. It features a clean, professional design with form validation, accessibility features, and theme integration that matches the black/red and white/red theme.

## System Structure

### Components
1. **ContactForm** - Reusable form component with validation and submission handling
2. **ContactSection** - Container component with contact information and form layout
3. **Contact Page** - Dedicated contact page with hero section

### Features
- **Form Validation** - Real-time validation with error messages
- **Accessibility** - ARIA labels, keyboard navigation, screen reader support
- **Theme Integration** - Dark/light mode support
- **Responsive Design** - Mobile-first approach with touch-friendly interactions
- **Email Integration** - Direct email submission via mailto links

## Components

### 1. ContactForm Component

A reusable form component with comprehensive validation, accessibility features, and smooth animations.

#### Features:
- **Real-time validation** with inline error messages
- **Form submission handling** with loading states
- **Success/error feedback** with animated messages
- **Accessibility compliance** with ARIA labels and roles
- **Theme integration** for dark/light modes
- **Smooth animations** with Framer Motion

#### Props:
```tsx
interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void
  submitEmail?: string
  placeholders?: {
    name?: string
    email?: string
    subject?: string
    message?: string
  }
  buttonText?: string
  className?: string
}
```

#### Usage:
```tsx
import { ContactForm } from '@/components/ContactForm'

<ContactForm
  submitEmail="contact@aclonsports.com"
  placeholders={{
    name: 'Your Name',
    email: 'Your Email',
    subject: 'Subject (Optional)',
    message: 'Your Message'
  }}
  buttonText="Send Message"
/>
```

### 2. ContactSection Component

A container component that displays contact information alongside the contact form in a responsive layout.

#### Features:
- **Two-column layout** on desktop (contact info + form)
- **Single-column layout** on mobile (stacked for accessibility)
- **Contact information** with clickable email, phone, and address
- **Social media links** with hover animations
- **Responsive design** with proper spacing and alignment
- **Theme integration** for consistent styling

#### Props:
```tsx
interface ContactSectionProps {
  title?: string
  subtitle?: string
  contactInfo?: {
    email?: string
    phone?: string
    address?: string
    socialMedia?: {
      facebook?: string
      twitter?: string
      instagram?: string
      linkedin?: string
    }
  }
  className?: string
}
```

#### Usage:
```tsx
import { ContactSection } from '@/components/ContactSection'

<ContactSection
  title="Contact Us"
  subtitle="We're here to help. Reach out with questions, requests, or feedback."
  contactInfo={{
    email: "contact@aclonsports.com",
    phone: "+1 (555) 123-4567",
    address: "123 Sports Avenue, Athletic District, NY 10001",
    socialMedia: {
      facebook: "https://facebook.com/aclonsports",
      twitter: "https://twitter.com/aclonsports",
      instagram: "https://instagram.com/aclonsports",
      linkedin: "https://linkedin.com/company/aclonsports"
    }
  }}
/>
```

## Form Validation

### Validation Rules
- **Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Subject**: Optional
- **Message**: Required, minimum 10 characters

### Error Handling
- **Inline error messages** with smooth animations
- **Real-time validation** as user types
- **Clear error styling** with red borders and text
- **Accessible error messages** with ARIA roles

### Success/Error States
- **Loading spinner** during submission
- **Success message** with green styling and checkmark icon
- **Error message** with red styling and error icon
- **Auto-dismiss** after 5 seconds

## Usage Examples

### 1. Full Contact Page
```tsx
// src/app/contact/page.tsx
import { ContactSection } from '@/components/ContactSection'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { heroConfigs } from '@/data/hero'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero {...heroConfigs.contact} />
      <ContactSection 
        title="Contact Us"
        subtitle="We're here to help. Reach out with questions, requests, or feedback."
        contactInfo={{
          email: "contact@aclonsports.com",
          phone: "+1 (555) 123-4567",
          address: "123 Sports Avenue, Athletic District, NY 10001",
          socialMedia: {
            facebook: "https://facebook.com/aclonsports",
            twitter: "https://twitter.com/aclonsports",
            instagram: "https://instagram.com/aclonsports",
            linkedin: "https://linkedin.com/company/aclonsports"
          }
        }}
      />
      <Footer />
    </main>
  )
}
```

### 2. Home Page Contact Section
```tsx
// Home page with contact section
<ContactSection 
  title="Contact Us"
  subtitle="We're here to help. Reach out with questions, requests, or feedback about our premium sportswear solutions."
  contactInfo={{
    email: "contact@aclonsports.com",
    phone: "+1 (555) 123-4567",
    address: "123 Sports Avenue, Athletic District, NY 10001"
  }}
/>
```

### 3. Custom Contact Form
```tsx
// Standalone contact form
<ContactForm
  onSubmit={(data) => {
    // Custom submission logic
    console.log('Form data:', data)
  }}
  submitEmail="custom@example.com"
  placeholders={{
    name: 'Full Name',
    email: 'Email Address',
    subject: 'What can we help you with?',
    message: 'Please describe your inquiry...'
  }}
  buttonText="Submit Inquiry"
/>
```

## Design Features

### Visual Design
- **Clean, professional layout** with ample white space
- **Consistent typography** with proper hierarchy
- **Red accent color** (#FF0000) for CTAs and interactive elements
- **Subtle shadows and borders** for depth and separation
- **Smooth transitions** and hover effects

### Layout Structure
- **Desktop**: Two-column layout with contact info on left, form on right
- **Tablet**: Single column with contact info above form
- **Mobile**: Stacked layout with touch-friendly button sizes

### Interactive Elements
- **Hover animations** for contact links and social media icons
- **Focus indicators** for keyboard navigation
- **Loading states** with spinner animation
- **Success/error feedback** with smooth transitions

## Responsive Design

### Breakpoints
- **Mobile (sm)**: Single column, full-width form fields
- **Tablet (md)**: Single column with improved spacing
- **Desktop (lg)**: Two-column layout with balanced proportions

### Touch-Friendly Design
- **Minimum 44px** touch targets for buttons and links
- **Proper spacing** between interactive elements
- **Large form fields** for easy input on mobile devices
- **Optimized button sizes** for thumb navigation

## Accessibility Features

### Navigation
- **Keyboard navigation** support for all form fields and buttons
- **Focus indicators** with proper contrast and visibility
- **Tab order** following logical form flow
- **Skip links** for screen reader users

### Content
- **Semantic HTML** with proper form structure
- **ARIA labels** for all form fields and error messages
- **Screen reader friendly** error and success messages
- **Color contrast** meeting WCAG guidelines

### Form Accessibility
- **Label associations** with proper `for` attributes
- **Error announcements** with ARIA roles
- **Required field indicators** with asterisks
- **Input validation** with clear error messages

## Performance Optimizations

### Form Handling
- **Client-side validation** for immediate feedback
- **Debounced input handling** for better performance
- **Efficient state management** with React hooks
- **Minimal re-renders** with optimized validation

### Animation Performance
- **Framer Motion** for smooth, hardware-accelerated animations
- **Reduced motion** support for accessibility
- **Optimized transitions** with proper easing functions
- **Efficient animation triggers** with viewport detection

### Code Efficiency
- **Component-based** architecture for reusability
- **Tree shaking** friendly imports
- **Minimal bundle size** with efficient code structure
- **TypeScript** for better development experience

## SEO Features

### Semantic Structure
- **Proper heading hierarchy** (H2 for section, H3 for subsections)
- **Structured data** for contact information
- **Meta descriptions** for contact pages
- **URL-friendly** contact page structure

### Content Optimization
- **Contact keywords** in titles and descriptions
- **Local business information** for local SEO
- **Social media integration** for brand visibility
- **Internal linking** from other pages

## Theme Integration

### Color Scheme
- **Primary Red**: #FF0000 for CTAs and accents
- **Dark Theme**: Black backgrounds with white text
- **Light Theme**: White backgrounds with black text
- **Error Colors**: Red for validation errors
- **Success Colors**: Green for success messages

### CSS Custom Properties
```css
:root {
  --bg-primary: #FFFFFF;
  --text-primary: #000000;
  --accent-primary: #FF0000;
  --error-color: #DC2626;
  --success-color: #059669;
}

.dark {
  --bg-primary: #000000;
  --text-primary: #FFFFFF;
  --accent-primary: #FF0000;
  --error-color: #EF4444;
  --success-color: #10B981;
}
```

## Best Practices

### 1. Performance
- Use client-side validation for immediate feedback
- Implement proper form state management
- Optimize animations for smooth performance
- Minimize JavaScript bundle size

### 2. SEO
- Create unique contact page titles and descriptions
- Include structured data for contact information
- Optimize for local search with address information
- Ensure proper heading hierarchy

### 3. User Experience
- Provide clear form validation feedback
- Use consistent styling across all form elements
- Implement smooth transitions and animations
- Ensure fast loading and responsive design

### 4. Accessibility
- Test with screen readers and keyboard navigation
- Maintain proper color contrast ratios
- Use semantic HTML elements
- Provide clear error and success messages

## Future Enhancements

### Planned Features
- **File upload** for attachments
- **Multi-step forms** for complex inquiries
- **Chat integration** for real-time support
- **Contact form analytics** and tracking
- **Auto-complete** for address fields
- **Form templates** for different inquiry types

### Technical Improvements
- **Server-side validation** for enhanced security
- **Email service integration** (SendGrid, Mailgun)
- **Form data persistence** with local storage
- **Advanced spam protection** (reCAPTCHA, honeypot)
- **Real-time form validation** with backend API
- **Contact form analytics** and conversion tracking

## File Structure

```
src/
├── app/
│   ├── page.tsx                        ✅ Updated Home Page
│   └── contact/
│       └── page.tsx                    ✅ Contact Page
├── components/
│   ├── ContactForm.tsx                 ✅ Form Component
│   └── ContactSection.tsx              ✅ Section Component
└── data/
    └── hero.ts                         ✅ Updated Hero Configs
```

## Ready for Production

The Contact Section System is fully implemented and ready for production use. It provides:

- ✅ **Complete contact form functionality**
- ✅ **Responsive design for all devices**
- ✅ **SEO optimization**
- ✅ **Accessibility compliance**
- ✅ **Performance optimization**
- ✅ **Theme integration**
- ✅ **Professional high-end design**

The system provides a professional, user-friendly contact experience that matches the high-end aesthetic expected from premium sportswear brands. 📧
