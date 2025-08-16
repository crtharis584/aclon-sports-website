# Aclon Sports - Premium Sportswear Website

A modern, responsive website for Aclon Sports, featuring premium sportswear collections, manufacturing capabilities, and seamless user experience.

## 🚀 Live Demo

[View Live Website](https://aclon-sports.vercel.app)

## ✨ Features

### 🎨 Design & User Experience
- **Modern Design System**: Consistent, professional design with red/white and black/red themes
- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Theme Toggle**: Light and dark mode support with system preference detection
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Accessibility**: WCAG 2.1 AA compliance with full keyboard navigation

### 🛍️ Product Showcase
- **Product Categories**: Activewear, Sports Uniforms, Gym Wear
- **Detailed Product Pages**: Comprehensive product information and images
- **Manufacturing Showcase**: Highlighting production capabilities and quality
- **Quote System**: Custom quote requests for bulk orders

### 🔧 Technical Features
- **Next.js 14**: Latest React framework with App Router
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Performance Optimized**: Lazy loading, code splitting, and Core Web Vitals optimization
- **SEO Optimized**: Comprehensive meta tags, structured data, and search engine optimization

### 📱 Mobile Optimization
- **Mobile-First Design**: Optimized for mobile devices
- **Touch-Friendly**: Large touch targets and gesture support
- **Progressive Web App**: App-like experience with offline capabilities
- **Fast Loading**: Optimized for mobile networks

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel
- **Version Control**: Git

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/aclon-sports.git
   cd aclon-sports
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel
   ```

3. **Follow the prompts** to connect your GitHub repository

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
aclon-sports/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── manufacturing/     # Manufacturing page
│   │   ├── products/          # Product pages
│   │   ├── quote/             # Quote page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── ui/               # Reusable UI components
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Footer.tsx        # Site footer
│   │   ├── Hero.tsx          # Hero section
│   │   ├── SEO.tsx           # SEO components
│   │   └── ...               # Other components
│   ├── data/                 # Static data
│   │   ├── navigation.ts     # Navigation structure
│   │   ├── products.ts       # Product data
│   │   └── ...               # Other data files
│   └── lib/                  # Utility functions
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Design System

### Color Palette
- **Primary Red**: #FF0000
- **Light Mode**: White background (#FFFFFF) with dark text (#111111)
- **Dark Mode**: Black background (#000000) with light text (#F5F5F5)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Responsive Scale**: Clamp-based responsive typography
- **Hierarchy**: H1-H6 with consistent spacing

### Components
- **Buttons**: Primary, secondary, ghost, outline variants
- **Cards**: Product cards, feature cards, testimonial cards
- **Forms**: Contact forms, quote forms with validation
- **Navigation**: Header, footer, breadcrumbs

## 📊 Performance

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Optimization Features
- **Code Splitting**: Automatic Next.js optimization
- **Image Optimization**: Next.js Image component
- **Lazy Loading**: Component and image lazy loading
- **Bundle Optimization**: Minimal CSS and JS footprint

## 🔍 SEO Features

### Meta Tags
- Comprehensive meta descriptions and keywords
- Open Graph tags for social media sharing
- Twitter Card optimization
- Canonical URLs

### Structured Data
- JSON-LD schema markup
- Organization and website structured data
- Product and article structured data

### Technical SEO
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- Clean URL structure

## 📱 Mobile Features

### Responsive Design
- Mobile-first approach
- Breakpoints: Mobile (≤768px), Tablet (768px-1024px), Desktop (≥1024px)
- Touch-friendly interface

### Performance
- Optimized for mobile networks
- Progressive image loading
- Minimal data usage

## 🔒 Security

### Best Practices
- Content Security Policy
- HTTPS enforcement
- Input validation and sanitization
- Secure error handling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Website**: [https://aclon-sports.vercel.app](https://aclon-sports.vercel.app)
- **Email**: contact@aclonsports.com
- **Phone**: +1 (555) 123-4567

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for seamless deployment
- Tailwind CSS for the utility-first approach
- Framer Motion for smooth animations
- All contributors and supporters

---

**Built with ❤️ for athletes worldwide**
