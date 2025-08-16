# Aclon Sports Web 🏃‍♂️

A modern, responsive sports apparel website built with Next.js, TypeScript, and Tailwind CSS. Features a complete product catalog, manufacturing showcase, and contact forms.

## 🚀 Live Demo

**Deploy your own version:**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/aclon-sports-web)

## ✨ Features

- **Modern Design**: Clean, professional sports apparel website
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized with Next.js 14 and TypeScript
- **SEO Ready**: Complete meta tags and structured data
- **PWA Support**: Service worker for offline functionality
- **Product Catalog**: Comprehensive product categories and subcategories
- **Contact Forms**: Quote requests and contact information
- **Manufacturing Showcase**: Company capabilities and processes

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Headless UI
- **Animations**: Framer Motion
- **SEO**: Next SEO
- **PWA**: Service Worker with manifest

## 📦 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/aclon-sports-web.git
   cd aclon-sports-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Option 1: Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   # Windows users can run deploy.bat
   # Linux/Mac users can run ./deploy.sh
   
   # Or manually:
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/aclon-sports-web.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

### Option 2: Deploy with Vercel CLI

```bash
npm i -g vercel
vercel
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── manufacturing/     # Manufacturing page
│   ├── products/          # Product catalog pages
│   ├── quote/             # Quote request page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Hero section
│   └── ...               # Other components
├── data/                 # Static data files
│   ├── products.ts       # Product data
│   ├── navigation.ts     # Navigation structure
│   └── ...               # Other data
└── lib/                  # Utility functions
    └── utils.ts          # Helper functions
```

## 🎨 Customization

### Colors and Branding
Edit `tailwind.config.ts` to customize:
- Primary colors
- Typography
- Spacing
- Breakpoints

### Content
Update data files in `src/data/`:
- `products.ts` - Product catalog
- `navigation.ts` - Menu structure
- `hero.ts` - Hero section content

### Styling
- Global styles: `src/app/globals.css`
- Component styles: Inline Tailwind classes
- Custom components: `src/components/ui/`

## 📱 PWA Features

The site includes Progressive Web App features:
- Service Worker for offline functionality
- Web App Manifest for app-like experience
- Responsive design for all devices
- Fast loading with Next.js optimizations

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for performance
- **SEO**: Complete meta tags and structured data
- **Accessibility**: WCAG compliant components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

- **Documentation**: Check the code comments
- **Issues**: Create an issue on GitHub
- **Questions**: Open a discussion

---

**Ready for your live showcase! 🎉**

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
