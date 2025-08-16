# Quote Section Documentation

## Overview

The Quote Section provides a professional, user-friendly form where users can request custom quotes for sports apparel and team uniforms. The implementation includes two main components:

1. **QuoteForm** - A reusable form component with product selection and validation
2. **QuoteSection** - A complete section with information and the quote form

## Components

### QuoteForm Component

**Location**: `src/components/QuoteForm.tsx`

**Features**:
- Dynamic product category and subcategory selection
- Form validation with inline error messages
- Responsive design with theme support
- Email submission integration
- Loading states and success/error feedback
- Accessibility features (ARIA labels, keyboard navigation)

**Props**:
```typescript
interface QuoteFormProps {
  onSubmit?: (data: QuoteFormData) => void
  submitEmail?: string
  placeholders?: {
    name?: string
    email?: string
    phone?: string
    quantity?: string
    message?: string
  }
  buttonText?: string
  className?: string
}
```

**Form Fields**:
- Full Name (required)
- Email Address (required)
- Phone Number (optional)
- Product Category (required, dropdown)
- Product Subcategory (optional, dynamic based on category)
- Quantity Needed (required, number input)
- Custom Requirements (optional, textarea)
- Additional Details (optional, textarea)

**Validation Rules**:
- Name: Minimum 2 characters
- Email: Valid email format
- Phone: Valid phone number format (if provided)
- Product Category: Must be selected
- Quantity: Must be a positive number

### QuoteSection Component

**Location**: `src/components/QuoteSection.tsx`

**Features**:
- Two-column responsive layout
- Information section with benefits and process steps
- Contact information display
- Animated content with Framer Motion
- Theme-aware styling (dark/light mode)

**Props**:
```typescript
interface QuoteSectionProps {
  title?: string
  subtitle?: string
  submitEmail?: string
  className?: string
}
```

**Layout Structure**:
- **Left Column**: Benefits, process steps, contact information
- **Right Column**: Quote form in a styled container

## Usage Examples

### Basic Usage

```tsx
import { QuoteSection } from '@/components/QuoteSection'

export default function MyPage() {
  return (
    <QuoteSection 
      title="Request a Quote"
      subtitle="Get competitive pricing for your needs"
      submitEmail="quotes@mycompany.com"
    />
  )
}
```

### Custom QuoteForm Usage

```tsx
import { QuoteForm } from '@/components/QuoteForm'

export default function CustomPage() {
  const handleSubmit = (data: QuoteFormData) => {
    // Custom submission logic
    console.log('Quote request:', data)
  }

  return (
    <QuoteForm
      onSubmit={handleSubmit}
      submitEmail="custom@example.com"
      placeholders={{
        name: 'Enter your name',
        email: 'Enter your email',
        quantity: 'How many do you need?'
      }}
      buttonText="Submit Request"
    />
  )
}
```

## Integration

### Navigation

The quote page is accessible via:
- Navigation menu: "Quote" link
- Hero section: "Get Quote" button
- Direct URL: `/quote`

### Email Integration

The form integrates with email services by:
1. Creating a formatted email body with all form data
2. Using `mailto:` links for immediate email client opening
3. Supporting custom submission handlers for backend integration

**Email Format**:
```
Subject: Quote Request - [Product Category]

Name: [Full Name]
Email: [Email Address]
Phone: [Phone Number or "Not provided"]

Product Category: [Selected Category]
Product Subcategory: [Selected Subcategory or "Not specified"]
Quantity: [Quantity]

Custom Requirements: [Requirements or "None specified"]

Additional Message: [Message or "None"]

---
This quote request was submitted through the Aclon Sports website.
```

## Styling & Theming

### Color Scheme
- **Primary Red**: `#FF0000` (buttons, accents)
- **Hover Red**: `#CC0000` (button hover states)
- **Dark Mode**: Black background with white text
- **Light Mode**: White background with black text

### Responsive Design
- **Desktop**: Two-column layout
- **Tablet**: Single column with stacked content
- **Mobile**: Full-width form with touch-friendly inputs

### Animations
- Framer Motion animations for smooth interactions
- Staggered animations for content loading
- Hover effects on buttons and inputs
- Focus animations for form fields

## Accessibility Features

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Form validation announcements

## Performance Considerations

- Lazy loading of form components
- Optimized animations with Framer Motion
- Minimal re-renders with proper state management
- Efficient form validation
- Responsive images and assets

## Customization Options

### Styling
- Custom CSS classes via `className` prop
- Theme-aware styling with dark/light mode support
- Configurable color schemes
- Responsive breakpoints

### Functionality
- Custom form submission handlers
- Configurable validation rules
- Dynamic product options
- Custom placeholder text
- Flexible button text and styling

### Content
- Custom titles and subtitles
- Configurable benefits and process steps
- Custom contact information
- Dynamic product categories

## File Structure

```
src/
├── components/
│   ├── QuoteForm.tsx          # Main form component
│   └── QuoteSection.tsx       # Complete section component
├── app/
│   └── quote/
│       └── page.tsx           # Dedicated quote page
└── data/
    ├── products.ts            # Product categories and data
    └── navigation.ts          # Navigation with quote link
```

## Dependencies

- **React**: Core framework
- **Framer Motion**: Animations and interactions
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling and responsive design
- **Next.js**: Framework and routing

## Future Enhancements

1. **Backend Integration**: API endpoints for form submission
2. **File Upload**: Support for design files and specifications
3. **Quote Calculator**: Real-time pricing estimates
4. **Multi-language Support**: Internationalization
5. **Advanced Validation**: More sophisticated form validation
6. **Analytics Integration**: Track quote requests and conversions
7. **Email Templates**: Rich HTML email templates
8. **Quote History**: User dashboard for quote tracking

## Testing

The components include:
- Form validation testing
- Responsive design testing
- Accessibility testing
- Theme switching testing
- Animation performance testing

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers
