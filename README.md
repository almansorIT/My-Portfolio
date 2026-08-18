### Description:
This is personal website of Almansoor Mukhawi (Portfolio) who is working as: software engineer, full-stack developer, web developer ​and cloud-based application design.

**Summary of Almansoor:
Full-stack developer specializing in .NET applications, delivering secure, scalable solutions with a strong focus on clean architecture and cloud-native development. Experienced in building production-grade APIs, authentication systems, and cloud‑based architectures using MongoDB Atlas, MySQL, Docker, and Kubernetes. Comfortable across the stack with Blazor and Next.js and continuously improving through real freelance projects and hands‑on simulations. 

Job titles:
.NET developer
dotnet developer 
Blazor developer
web developer
DevOps engineer

**his stack:
Backend: ASP.NET Core, C#, REST APIs, Authentication 
(JWT), MongoDB, MySQL 

Frontend: Blazor, React/Next.js, Tailwind 

DevOps: Docker, Kubernetes, CI/CD, Azure 

Other: Redis, Agile, Debugging & Profiling

**CERTIFICATES
Full-Stack Developer 
Microsoft 

Project Management Professional Certificate 
Google 


## Architecture Overview

### Technology Stack
- **Framework**: Next.js 16.2.4 (App Router)
- **UI Library**: React 19.2.4
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.2.4 with PostCSS
- **Deployment**: Standalone output configuration

### Project Structure

```
My-Portfolio/
├── app/                           # Next.js App Router directory
│   ├── layout.tsx                 # Root layout with metadata & global styles
│   ├── page.tsx                   # Home page - main entry point
│   ├── not-found.tsx              # 404 error page
│   └── globals.css                # Global Tailwind styles
│
├── components/                    # Reusable React components
│   ├── Landing/                   # Landing page sections
│   │   ├── hero.tsx              # Hero section with intro
│   │   ├── about.tsx             # About section
│   │   ├── experience.tsx        # Experience/timeline section
│   │   ├── work.tsx              # Portfolio/projects showcase
│   │   ├── passion.tsx           # Skills/passion section
│   │   └── contact.tsx           # Contact section
│   │
│   └── Nav/                       # Navigation components
│       └── navbar.tsx             # Top navigation bar
│
├── hooks/                         # Custom React hooks
│   └── useInView.ts              # Intersection Observer hook for scroll animations
│
├── public/                        # Static assets
│   └── assets/
│       ├── MyC.v.pdf             # Resume/CV document
│       └── photo_2026.webp       # Profile photo
│
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── postcss.config.mjs            # PostCSS configuration
├── eslint.config.mjs             # ESLint configuration
└── package.json                  # Dependencies & scripts
```

### Component Architecture

**Landing Page Structure** (`app/page.tsx`):
- Single-page application with multiple sections
- Each section is a separate component for modularity
- Sequential rendering: Navbar → Hero → About → Passion → Experience → Work → Contact

**Key Components**:
1. **Navbar** - Fixed/sticky navigation with logo and links
2. **Hero** - Introduction section with call-to-action
3. **About** - Professional summary and background
4. **Passion** - Core skills and technical interests
5. **Experience** - Career timeline and roles
6. **Work** - Project portfolio showcase
7. **Contact** - Contact information and inquiry form

### Custom Hooks

**useInView Hook** (`hooks/useInView.ts`):
- Implements Intersection Observer API
- Triggers animations when elements enter viewport
- Configurable threshold (default: 0.15)
- One-time firing per element
- Returns `ref` for DOM attachment and `inView` boolean state

### Styling Strategy
- **Utility-First**: Tailwind CSS for component styling
- **Color Scheme**: Dark theme with `bg-[#080C14]` base color
- **Typography**: Google Fonts (Geist Sans & Geist Mono)
- **Responsive**: Mobile-first responsive design with Tailwind breakpoints
- **CSS Custom Properties**: Font variables defined globally

### Data Flow
- No external API calls in current structure
- Static content from React components
- Client-side scroll detection via IntersectionObserver
- No state management library needed (React hooks only)

### Performance Optimizations
- **Standalone Output**: Optimized production build configuration
- **Next.js Font Optimization**: Google Fonts with preload disabled for performance
- **Component Splitting**: Sections loaded within page for efficient rendering

### UI/UX Features
- Scroll-triggered animations via `useInView` hook
- Dark theme design for modern aesthetic
- Smooth transitions and interactions with Tailwind CSS
- Fully responsive layout for all screen sizes
- Professional typography hierarchy

### UI UX Doc
(.....)

### 