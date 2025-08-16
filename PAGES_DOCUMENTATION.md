# Pages Documentation

## Overview

The Aclon Sports website consists of multiple pages that provide a comprehensive experience for users looking for premium sportswear, team uniforms, and manufacturing services. Each page is designed with SEO optimization, responsive design, and consistent branding.

## Page Structure

### 1. Homepage (`/`)
**File**: `src/app/page.tsx`

**Purpose**: Main landing page showcasing the company's products and services

**Features**:
- Hero section with call-to-action
- Featured products showcase
- Manufacturing capabilities
- Quote request section
- Contact information
- About section

**SEO Elements**:
- Title: "Aclon Sports - Premium Sportswear & Team Uniforms"
- Meta description for sportswear and team uniforms
- Open Graph tags for social sharing

### 2. Products Page (`/products`)
**File**: `src/app/products/page.tsx`

**Purpose**: Comprehensive showcase of all product categories

**Features**:
- Hero section with product overview
- Featured products display
- Manufacturing showcase
- Product categories overview (Activewear, Sports Uniforms, Gym Wear)
- Call-to-action for quote requests

**Content Sections**:
- **Hero**: Premium Sportswear Collection
- **Featured Products**: Showcase of best products
- **Manufacturing**: Quality and process highlights
- **Categories**: Detailed breakdown of product types
- **CTA**: Quote request and contact options

**SEO Elements**:
- Title: "Products - Aclon Sports"
- Keywords: sports apparel, activewear, sports uniforms, gym wear
- Meta description for product exploration

### 3. About Page (`/about`)
**File**: `src/app/about/page.tsx`

**Purpose**: Company story, mission, values, and team information

**Features**:
- Company story and history
- Mission and values
- Timeline of company milestones
- Team member profiles
- Contact section

**Content Sections**:
- **Hero**: Our Story
- **About Section**: Company overview
- **Mission & Values**: Quality, Innovation, Customer Focus
- **Timeline**: Company journey from 2015-2023
- **Team**: Key team members and roles
- **Contact**: Get in touch section

**SEO Elements**:
- Title: "About Us - Aclon Sports"
- Keywords: about Aclon Sports, company history, sportswear manufacturer
- Meta description for company story

### 4. Contact Page (`/contact`)
**File**: `src/app/contact/page.tsx`

**Purpose**: Comprehensive contact information and customer support

**Features**:
- Contact form
- Multiple contact methods
- FAQ section
- Department-specific contact information

**Content Sections**:
- **Hero**: Get in Touch
- **Contact Section**: Main contact form and information
- **Additional Contact Info**: Sales, Support, Custom Orders
- **FAQ**: Frequently asked questions
- **CTA**: Quote request and direct calling

**Contact Departments**:
- **Sales Inquiries**: sales@aclonsports.com
- **Customer Support**: support@aclonsports.com
- **Custom Orders**: custom@aclonsports.com

**SEO Elements**:
- Title: "Contact Us - Aclon Sports"
- Keywords: contact Aclon Sports, sportswear contact, custom orders
- Meta description for contact information

### 5. Manufacturing Page (`/manufacturing`)
**File**: `src/app/manufacturing/page.tsx`

**Purpose**: Showcase manufacturing capabilities and quality standards

**Features**:
- Manufacturing process overview
- Quality standards and certifications
- Technology and innovation
- Contact for manufacturing inquiries

**Content Sections**:
- **Hero**: Manufacturing Excellence
- **Manufacturing Showcase**: Process and capabilities
- **Manufacturing Process**: 4-step process overview
- **Quality Standards**: Materials, Craftsmanship, Testing
- **Technology & Innovation**: Automation, Monitoring, Sustainability
- **Certifications**: ISO, OEKO-TEX, Fair Trade, GOTS
- **Contact**: Manufacturing-specific contact

**SEO Elements**:
- Title: "Manufacturing - Aclon Sports"
- Keywords: sportswear manufacturing, quality control, production facilities
- Meta description for manufacturing capabilities

### 6. Quote Page (`/quote`)
**File**: `src/app/quote/page.tsx`

**Purpose**: Dedicated page for quote requests and custom orders

**Features**:
- Comprehensive quote request form
- Product selection options
- Custom requirements input
- Email integration

**Content Sections**:
- **Quote Section**: Complete form with all necessary fields
- **Form Features**: Product categories, quantities, custom requirements
- **Email Integration**: Direct email submission

**SEO Elements**:
- Title: "Request a Quote - Aclon Sports"
- Keywords: quote request, custom pricing, bulk orders
- Meta description for quote requests

## Page Features

### Consistent Design Elements
- **Header**: Fixed navigation with theme toggle
- **Footer**: Contact information and social links
- **Theme Support**: Dark/light mode compatibility
- **Responsive Design**: Mobile-first approach
- **Animations**: Framer Motion animations throughout

### SEO Optimization
- **Meta Tags**: Title, description, keywords for each page
- **Open Graph**: Social media sharing optimization
- **Semantic HTML**: Proper heading hierarchy
- **Structured Data**: Ready for schema markup implementation

### Performance Features
- **Next.js App Router**: Modern React framework
- **TypeScript**: Type safety throughout
- **Optimized Images**: Ready for Next.js Image optimization
- **Code Splitting**: Automatic page-based code splitting

## Navigation Structure

### Main Navigation
```typescript
[
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Products', 
    href: '/products',
    children: [
      { name: 'Activewear', href: '/products/activewear' },
      { name: 'Sports Uniforms', href: '/products/sports-uniforms' },
      { name: 'Gym Wear', href: '/products/gym-wear' }
    ]
  },
  { name: 'Manufacturing', href: '/manufacturing' },
  { name: 'Contact', href: '/contact' },
  { name: 'Quote', href: '/quote' }
]
```

### Footer Navigation
- **Company**: About, Story, Careers, Press
- **Products**: Activewear, Sports Uniforms, Gym Wear, Custom Orders
- **Support**: Contact, Quote Request, Help Center, Size Guide
- **Legal**: Privacy Policy, Terms of Service, Cookie Policy, Shipping Info

## Content Strategy

### Brand Voice
- **Professional**: High-quality, premium positioning
- **Athletic**: Performance-focused messaging
- **Accessible**: Clear, easy-to-understand language
- **Confident**: Industry expertise and reliability

### Content Themes
- **Quality**: Premium materials and craftsmanship
- **Performance**: Athletic performance and comfort
- **Innovation**: Technology and modern manufacturing
- **Service**: Customer support and customization

## Technical Implementation

### File Structure
```
src/app/
├── page.tsx                    # Homepage
├── products/
│   └── page.tsx               # Products page
├── about/
│   └── page.tsx               # About page
├── contact/
│   └── page.tsx               # Contact page
├── manufacturing/
│   └── page.tsx               # Manufacturing page
└── quote/
    └── page.tsx               # Quote page
```

### Component Usage
Each page uses shared components:
- `Header`: Navigation and branding
- `Footer`: Contact and legal information
- `ContactSection`: Contact forms and information
- `ManufacturingShowcase`: Manufacturing capabilities
- `FeaturedProducts`: Product displays
- `AboutSection`: Company information

### Styling Approach
- **Tailwind CSS**: Utility-first styling
- **Theme Integration**: Dark/light mode support
- **Responsive Design**: Mobile-first approach
- **Consistent Spacing**: Standardized padding and margins
- **Color Scheme**: Red (#FF0000) primary with black/white themes

## Future Enhancements

### Planned Features
1. **Product Detail Pages**: Individual product pages with specifications
2. **Blog/News Section**: Company updates and industry insights
3. **Customer Portal**: Order tracking and account management
4. **Multi-language Support**: International market expansion
5. **E-commerce Integration**: Online ordering system
6. **Live Chat**: Real-time customer support
7. **Virtual Try-On**: AR/VR product visualization
8. **Sustainability Page**: Environmental initiatives and practices

### Performance Optimizations
1. **Image Optimization**: Next.js Image component implementation
2. **Caching Strategy**: Static generation and ISR
3. **Bundle Analysis**: Code splitting optimization
4. **CDN Integration**: Global content delivery
5. **Analytics Integration**: User behavior tracking
6. **A/B Testing**: Conversion optimization

## Maintenance Guidelines

### Content Updates
- **Regular Reviews**: Monthly content audits
- **SEO Monitoring**: Keyword performance tracking
- **User Feedback**: Customer input integration
- **Analytics Review**: Page performance analysis

### Technical Maintenance
- **Dependency Updates**: Regular package updates
- **Security Audits**: Vulnerability scanning
- **Performance Monitoring**: Core Web Vitals tracking
- **Backup Strategy**: Regular data backups

## Accessibility Features

### WCAG Compliance
- **Semantic HTML**: Proper heading structure
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: High contrast ratios
- **Focus Management**: Clear focus indicators

### Mobile Accessibility
- **Touch Targets**: Minimum 44px touch areas
- **Responsive Design**: All screen sizes supported
- **Gesture Support**: Touch-friendly interactions
- **Loading States**: Clear feedback for actions

## Testing Strategy

### Quality Assurance
- **Cross-browser Testing**: Chrome, Firefox, Safari, Edge
- **Mobile Testing**: iOS and Android devices
- **Performance Testing**: Lighthouse audits
- **Accessibility Testing**: Screen reader compatibility
- **User Testing**: Real user feedback collection

### Automated Testing
- **Unit Tests**: Component functionality
- **Integration Tests**: Page interactions
- **E2E Tests**: Complete user journeys
- **Visual Regression**: Design consistency checks
