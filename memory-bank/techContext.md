# Technical Context: Markazul Bayaan

## Development Environment

### Prerequisites
- **Node.js**: Version 18+ required for Next.js 14 compatibility
- **Package Manager**: npm (lockfile present), yarn, pnpm, or bun supported
- **Git**: For version control and CMS integration

### Setup Commands
```bash
# Development server
npm run dev         # Starts on http://localhost:3000

# Production build
npm run build       # Creates optimized production build
npm run start       # Starts production server

# Code quality
npm run lint        # ESLint checking
```

## Core Technologies

### Framework & Runtime
- **Next.js 14.2.13**: React framework with App Router architecture
- **React 18**: Latest stable version with concurrent features
- **TypeScript 5**: Full type safety across the application
- **Node.js**: Server-side runtime for build and development

### Styling & UI
- **Tailwind CSS 3.3.0**: Utility-first CSS framework
- **@tailwindcss/typography**: Rich text styling for blog content
- **PostCSS & Autoprefixer**: CSS processing and vendor prefixing
- **tailwindcss-animate**: Animation utilities
- **tailwind-merge**: Conditional class merging utility

### UI Component Libraries
- **Radix UI Primitives**: Headless, accessible UI components
  - `@radix-ui/react-accordion`
  - `@radix-ui/react-dialog` 
  - `@radix-ui/react-dropdown-menu`
  - `@radix-ui/react-navigation-menu`
  - `@radix-ui/react-scroll-area`
  - `@radix-ui/react-slot`
  - `@radix-ui/react-toast`
- **shadcn/ui**: Pre-built components using Radix primitives
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility

### Icons & Graphics
- **@radix-ui/react-icons**: Radix icon set
- **lucide-react 0.424.0**: Feather-inspired icon library
- **react-icons 5.2.1**: Popular icon library collection
- **Sharp 0.33.5**: High-performance image processing

### Animation Libraries
- **Framer Motion 11.11.9**: Production-ready motion library for React
- **React Spring 9.7.4**: Spring-physics based animations
- **Embla Carousel**: Touch-friendly carousel component
  - `embla-carousel-react 8.3.0`
  - `embla-carousel-autoplay 8.3.0`

### Content Management
- **@mdx-js/loader 3.0.1**: MDX support for Next.js
- **@mdx-js/react 3.0.1**: MDX React integration
- **@next/mdx 14.2.13**: Official Next.js MDX plugin
- **@types/mdx 2.0.13**: TypeScript definitions for MDX
- **next-mdx-remote 5.0.0**: Remote MDX content processing
- **react-markdown 9.0.1**: Markdown component renderer
- **remark 15.0.1**: Markdown processor
- **remark-gfm 4.0.0**: GitHub Flavored Markdown support
- **remark-html 16.0.1**: HTML compilation for Markdown

### CMS Integration
- **Decap CMS 3.3.3**: Git-based content management system
- **netlify-identity-widget 1.9.2**: Authentication for CMS
- **js-yaml 4.1.0**: YAML parser for frontmatter

### Communication & Forms
- **@emailjs/browser 4.4.1**: Client-side email service integration
- **Environment Variables Required**:
  - `NEXT_PUBLIC_SERVICE_ID`: EmailJS service identifier
  - `NEXT_PUBLIC_TEMPLATE_ID`: EmailJS template identifier  
  - `NEXT_PUBLIC_EMAIL_KEY`: EmailJS public key

### Development Tools
- **ESLint 8**: Code linting with Next.js configuration
- **@types/node**: Node.js TypeScript definitions
- **@types/react**: React TypeScript definitions
- **@types/react-dom**: React DOM TypeScript definitions
- **@types/js-yaml**: YAML parser type definitions

### Font Management
- **@next/font 14.2.15**: Next.js font optimization
- **Fonts Used**:
  - Inter: Primary sans-serif font
  - Instrument Serif: Display serif font

### Styling Enhancement
- **styled-components 6.1.14**: CSS-in-JS (minimal usage)

## Project Configuration

### TypeScript Configuration
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{"name": "next"}],
    "baseUrl": ".",
    "paths": {"@/*": ["./src/*"]}
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Tailwind Configuration
- Custom color scheme with yellow/gold primary colors
- Typography plugin for rich content
- Animation utilities enabled
- Custom font family integration

### ESLint Configuration
- Extends Next.js recommended configuration
- TypeScript support enabled
- React hooks rules enforced

## Build & Deployment

### Build Process
1. **Type Checking**: TypeScript compilation validation
2. **Code Linting**: ESLint rules enforcement
3. **Static Generation**: Page pre-rendering for performance
4. **Asset Optimization**: Image and font optimization
5. **Bundle Creation**: Optimized JavaScript bundles

### Environment Variables
```bash
# EmailJS Configuration (Required for contact forms)
NEXT_PUBLIC_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAIL_KEY=your_emailjs_public_key

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### Performance Considerations
- **Image Optimization**: Automatic WebP conversion and sizing
- **Font Loading**: Optimized font loading with fallbacks
- **Code Splitting**: Automatic route-based splitting
- **Static Generation**: Pre-built pages for faster delivery
- **Bundle Analysis**: Built-in Next.js bundle analyzer

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Accessibility**: WCAG 2.1 AA compliance target
- **Progressive Enhancement**: Core functionality without JavaScript

### Monitoring & Analytics
- **Google Analytics**: User behavior tracking
- **Google Tag Manager**: Enhanced event tracking
- **Core Web Vitals**: Performance monitoring
- **Error Boundaries**: Runtime error handling 