# Next.js Migration Guide

## Overview
Converting from React + Vite + React Router to Next.js 14+ (App Router).

## Migration Status
- [x] Next.js config created
- [x] Package.json updated
- [x] API route migrated (/api/contact)
- [ ] Root layout created
- [ ] Pages migrated
- [ ] Components updated (Link, useRouter, etc.)
- [ ] SEO converted to metadata API
- [ ] Testing

## Key Changes Required

### 1. Routing
- **Before:** React Router (`<Route>`, `useNavigate`, `useLocation`)
- **After:** Next.js App Router (file-based routing in `app/` directory)
- **Changes:**
  - `/` → `app/page.jsx`
  - `/about` → `app/about/page.jsx`
  - `/blog/[slug]` → `app/blog/[slug]/page.jsx`
  - etc.

### 2. Navigation
- **Before:** `import { Link } from 'react-router-dom'`
- **After:** `import Link from 'next/link'`
- **Before:** `useNavigate()` → `useRouter()` from `next/navigation`
- **Before:** `useLocation()` → `usePathname()` from `next/navigation`

### 3. API Routes
- **Before:** Express routes in `server.js`
- **After:** Next.js API routes in `app/api/*/route.js`
- ✅ `/api/contact` already migrated

### 4. SEO/Metadata
- **Before:** `<SEO>` component with useEffect
- **After:** `export const metadata` or `generateMetadata()` function

### 5. Client Components
- Components using hooks (useState, useEffect) need `'use client'` directive
- Server components by default in App Router

### 6. Images
- **Before:** `<img src="/logo.png" />`
- **After:** `import Image from 'next/image'` or use Next.js Image component

## File Structure

```
app/
├── layout.jsx          # Root layout
├── page.jsx            # Homepage (/)
├── about/
│   └── page.jsx        # /about
├── contact/
│   └── page.jsx        # /contact
├── blog/
│   ├── page.jsx        # /blog
│   └── [slug]/
│       └── page.jsx    # /blog/[slug]
└── api/
    └── contact/
        └── route.js    # /api/contact ✅ DONE
```

## Next Steps
1. Create app/layout.jsx with global styles and metadata
2. Migrate homepage (app/page.jsx)
3. Migrate Layout component to use Next.js navigation
4. Migrate all pages systematically
5. Update all components to use Next.js imports
6. Convert SEO component to metadata API
7. Test all routes and functionality
