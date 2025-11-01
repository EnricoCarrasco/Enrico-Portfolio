# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 portfolio website for Enrico Carrasco (name: "zelio", version 2.0.0), built with TypeScript, showcasing web development skills with focus on AI and modern tools. The site is a single-page application with multiple sections displaying experience, projects, skills, and contact information.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture

### Next.js App Router Structure

The project uses Next.js 14 with the App Router architecture:

- **`app/`** - Contains the root layout and main page
  - `layout.tsx` - Root layout with Google Fonts (Urbanist, Playfair Display, DM Mono) and global CSS imports
  - `page.tsx` - Main homepage that composes all section components
  - `global.css` - Global styles (currently empty)

- **`components/`** - Organized into three subdirectories:
  - `elements/` - Reusable UI elements and utilities
  - `layout/` - Layout components (Header, Footer, Menu, MobileMenu, OffCanvas, Breadcrumb)
  - `sections/` - Page section components (Home2, Static2, Coporation2, Service2, Experience2, Education2, Projects2, Skills2, Blog2, Contact2)

- **`public/assets/`** - Static assets including CSS, fonts, and images
  - Bootstrap, Swiper, and other vendor styles are imported from here
  - Custom fonts: Remixicon icons and Satoshi font family

- **`util/`** - Utility functions directory (currently empty)

### Client-Side Architecture

This is predominantly a client-side rendered application:

- The main `Layout` component (components/layout/Layout.tsx) is a client component that handles:
  - Scroll detection for sticky header
  - Mobile menu state
  - Search modal state
  - OffCanvas sidebar state
  - WOW.js initialization for scroll animations

- Most components use `'use client'` directive for interactivity
- No server components or API routes currently defined

### Key Component Patterns

**Layout Wrapper**: The `Layout` component wraps all pages and provides:
- Header with scroll-based styling
- Mobile menu functionality
- Footer
- Utility components (AddClassBody, DataBg, ImageHoverEffects, BackToTop)
- WOW.js animation initialization

**Section Components**: All named with "2" suffix (Home2, Skills2, etc.) indicating a version 2 design pattern. These are composed into the main page in app/page.tsx.

**Theme System**:
- Dark/light theme toggle via `ThemeSwitch` component
- Uses Bootstrap's `data-bs-theme` attribute
- Theme persisted in localStorage
- Default theme is "dark"

### CSS Architecture

CSS is loaded in a specific order in `app/layout.tsx`:
1. Bootstrap (vendors/bootstrap.min.css)
2. Swiper bundle
3. Carousel ticker
4. Magnific popup
5. Remixicon fonts
6. Main custom styles (main.css)

No Tailwind CSS or CSS-in-JS solution is used - pure CSS with Bootstrap framework.

### TypeScript Configuration

- Strict mode enabled
- Path alias: `@/*` maps to root directory
- Module resolution: "bundler" (Next.js optimized)
- JSX preserved for Next.js compilation

### Key Dependencies

**UI/Animation Libraries**:
- `gsap` (^3.12.5) - Animation library
- `isotope-layout` (^3.0.6) - Grid layout and filtering
- `swiper` (^11.1.14) - Carousel/slider
- `wowjs` (^1.1.3) - Scroll-triggered animations
- `react-countup` (^6.5.3) - Number animations
- `react-fast-marquee` (^1.6.5) - Scrolling text/images
- `react-odometerjs` (^3.1.3) - Number counter animation

**Utility Libraries**:
- `react-perfect-scrollbar` (^1.5.8) - Custom scrollbar

## Important Implementation Notes

### Client-Side Only Features

Several components require browser APIs and must be client components:
- `AddClassBody` - Uses pathname-based body class manipulation
- `ThemeSwitch` - Uses localStorage for theme persistence
- `DataBg` - Applies background images from data attributes
- `ImageHoverEffects` - Implements custom mouse hover animations
- `Layout` - Initializes WOW.js and handles scroll events

### Animation Initialization

WOW.js is initialized in the Layout component's useEffect with `live: false` option. Any new animated elements should use WOW.js classes.

### Styling Conventions

- Components use Bootstrap utility classes extensively
- Custom classes follow kebab-case convention
- Icon classes use Remixicon (ri-*) and Bootstrap Icons (bi*)
- Layout uses CSS custom properties (variables) defined in main.css

### Image Paths

All static images are referenced from `/assets/imgs/` in the public directory. Use relative paths starting with "assets/" (without leading slash in Next.js Image src).

### Font Loading

Three Google Fonts are loaded with CSS variables:
- `--urbanist` - Primary body font (weights: 300-700)
- `--playpair` - Display font (Playfair Display, weights: 400-700)
- `--dmMono` - Monospace font (DM Mono, weights: 300-500)

Applied to body via className in layout.tsx.
