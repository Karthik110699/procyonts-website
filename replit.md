# Procyon Technostructure Website

## Overview

This is a modern full-stack web application for Procyon Technostructure, built using React with TypeScript on the frontend and Express.js on the backend. The application showcases Procyon's AI and cloud transformation services through an elegant, multi-page application with dynamic hover effects and optimized SEO structure.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation (via @hookform/resolvers)

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for production bundling

### Database & Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`
- **Development Storage**: In-memory storage implementation for user data
- **Migrations**: Drizzle Kit for database migrations in `/migrations` directory

## Key Components

### Frontend Components
- **Loading Screen**: Animated company logo with letter-by-letter reveal using colorful letters
- **Navigation**: Fixed navbar with clean navigation links to separate pages (no dropdowns)
- **Hero Section**: Split-screen layout (Globant-style) with static content on left featuring animated "AI-Powered Solutions? Procyon's Your Partner!" headline with animated color gradient text effect, and dynamic motion graphics on right displaying rotating Procyon services
- **Clickable Service Cards**: Replit-style traveling bright spot effect on ALL cards using conic gradient animation - bright cyan light travels around card perimeter on hover only (applied to 53+ cards across all pages)
- **Multi-Page Structure**: Separate dedicated pages for better SEO and user experience
  - **Enterprise Page**: Detailed SalesForce, ServiceNow, and SAP solutions
  - **Services Page**: Comprehensive service offerings (Cloud, AI/ML, Data Analytics, Staff Augmentation, Government, Digital Engineering)
  - **About Page**: Company mission, vision, values, and statistics
  - **Careers Page**: Job listings, company culture, application process
  - **Contact Page**: Contact form, company information, and response guarantees

### Backend Routes
- **POST /api/contact**: Contact form submission endpoint with validation
  - Validates required fields (firstName, lastName, email, message)
  - Performs email format validation
  - Returns JSON responses with success/error states

### UI Component Library
Comprehensive set of Shadcn/ui components including:
- Form controls (Input, Textarea, Checkbox, Select)
- Layout components (Card, Dialog, Sheet, Accordion)
- Navigation (Menubar, Breadcrumb, Pagination)
- Feedback (Toast, Alert, Progress)
- Data display (Table, Calendar, Chart, Avatar)

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **API Processing**: Express server handles requests with middleware for logging and error handling
3. **Data Validation**: Zod schemas validate input data on both client and server
4. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
5. **Response Handling**: Structured JSON responses with consistent error handling

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight React router

### Development Tools
- **vite**: Fast build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler
- **drizzle-kit**: Database migration toolkit

### Styling & Animation
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility
- **embla-carousel-react**: Carousel/slider components
- **date-fns**: Date manipulation utilities

## Deployment Strategy

### Development
- **Dev Server**: Vite development server with HMR
- **Backend**: tsx runs TypeScript directly with auto-reload
- **Database**: Development connection via DATABASE_URL environment variable

### Production Build
- **Frontend**: Vite builds optimized static assets to `/dist/public`
- **Backend**: esbuild bundles server code to `/dist/index.js`
- **Static Serving**: Express serves built frontend assets in production

### Environment Configuration
- **NODE_ENV**: Distinguishes development from production
- **DATABASE_URL**: PostgreSQL connection string
- **Replit Integration**: Custom plugins for Replit environment

### Database Management
- **Schema**: Shared TypeScript definitions between client and server
- **Migrations**: Drizzle Kit manages schema changes
- **Deployment**: `npm run db:push` applies schema changes to database

The application follows a modern full-stack architecture with clear separation of concerns, type safety throughout, and optimized build processes for both development and production environments.