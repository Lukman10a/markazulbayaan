# System Patterns: Markazul Bayaan

## Architecture Overview

### Next.js App Structure
```
src/
├── pages/           # Next.js pages with file-based routing
├── components/      # Reusable UI components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions and configurations
├── cms/            # Content management system utilities
└── styles/         # Global styles and CSS modules
```

### Key Design Patterns

#### 1. Component-Based Architecture
- **Atomic Design**: Components organized from atoms (buttons) to organisms (navigation)
- **Compound Components**: Complex UI patterns like testimonial carousels
- **Prop-based Customization**: Flexible components accepting various configurations

#### 2. Page-Level Data Structure
- **Static Generation**: Pre-built pages for performance
- **Dynamic Routes**: `[slug].tsx` pattern for blog posts and course pages
- **Shared Layouts**: Consistent navigation and footer across pages

#### 3. Content Management Pattern
- **File-based CMS**: Markdown files in `/public/_posts/` for blog content
- **Decap CMS Integration**: Admin interface for non-technical content updates
- **Frontmatter Metadata**: YAML headers for post metadata (title, date, author, thumbnail)

## Component Relationships

### Navigation Hierarchy
```
MainNav (newer implementation)
├── Logo/Brand
├── Desktop Navigation Links
├── Mobile Hamburger Menu
└── Contact CTA Button
```

### Page Layout Pattern
```
_app.tsx
├── Head (SEO metadata)
├── Analytics Scripts
├── Conditional Navigation (not on admin pages)
├── Page Component
└── Conditional Footer (not on admin pages)
```

### Course System Architecture
```
courses (exported array)
├── Course Object Schema
│   ├── id, slug, title, description
│   ├── metadata (duration, students, price, instructor, level)
│   ├── syllabus (array of learning objectives)
│   └── objectives (array of outcomes)
└── Course Display Components
    ├── CourseCard (grid display)
    ├── CourseDetails (full page)
    └── CourseHero (banner section)
```

## Data Flow Patterns

### Contact Form Flow
```
Contact Component
├── Form Validation (real-time)
├── EmailJS Integration
├── Toast Notifications
└── Form Reset on Success
```

### Blog Content Flow
```
Markdown Files (/_posts/)
├── CMS Utils (parsing, metadata extraction)
├── Blog Index (listing with pagination)
└── Blog Post (individual article display)
```

### Animation Patterns
```
Framer Motion Implementation
├── Page Transitions
├── Scroll-triggered Animations
├── Hover Effects
└── Staggered List Animations
```

## Technical Decisions

### Styling Strategy
- **Tailwind CSS**: Utility-first approach for rapid development
- **Custom Components**: shadcn/ui for consistent design system
- **Responsive Design**: Mobile-first approach with breakpoint considerations
- **Theme Variables**: CSS custom properties for consistent color schemes

### State Management
- **Local State**: React useState for form handling and UI state
- **No Global State**: Simple application doesn't require Redux/Zustand
- **URL State**: Router-based state for navigation and active page tracking

### Performance Optimizations
- **Image Optimization**: Next.js Image component with proper sizing
- **Font Loading**: Google Fonts with display swap for better UX
- **Code Splitting**: Automatic with Next.js dynamic imports
- **Static Generation**: Pre-built pages for faster loading

### SEO Implementation
- **Meta Tags**: Comprehensive SEO metadata in `_app.tsx`
- **Structured Data**: Educational content markup for search engines
- **Sitemap**: Automatic generation for course and blog pages
- **Robots.txt**: Proper indexing directives

## Integration Patterns

### Third-Party Services
- **EmailJS**: Contact form email delivery without backend
- **Google Analytics**: User behavior tracking and conversion metrics
- **Google Tag Manager**: Enhanced tracking and marketing integration
- **Decap CMS**: Git-based content management for non-developers

### Asset Management
- **Static Assets**: Images stored in `/public/assets/`
- **SVG Icons**: Mixed approach with Lucide React and React Icons
- **Image Processing**: Sharp for optimization during build

## Error Handling Patterns

### Form Validation
- **Real-time Validation**: Immediate feedback on field blur
- **Error State Management**: Comprehensive error object tracking
- **User Feedback**: Toast notifications for success/error states

### Graceful Degradation
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Fallback UI**: Loading states and error boundaries
- **Accessibility**: Proper ARIA labels and keyboard navigation

## Security Considerations

### Environment Variables
- **EmailJS Configuration**: API keys stored in environment variables
- **Google Analytics**: Tracking IDs in environment configuration
- **Build-time Secrets**: No sensitive data exposed to client-side

### Content Security
- **Markdown Sanitization**: Safe rendering of user-generated content
- **XSS Prevention**: Proper HTML escaping in dynamic content
- **HTTPS**: SSL/TLS encryption for all data transmission 