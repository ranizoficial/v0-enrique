# Miller & Sons Roofing - Implementation Kickstart Plan

**Last Updated:** May 2026  
**Project Type:** Single-Page Landing Site (Next.js 16 + React 19)  
**Status:** Ready for Development

---

## 1. PROJECT SCOPE & TECHNICAL STACK

### Core Requirements
- **Single-page scrolling site** with integrated header navigation
- **Fully responsive** design (mobile-first): 320px → 768px → 1440px+
- **Static content with dynamic placeholders** for future CMS integration
- **Geist font family** as primary typeface (via Next.js Font Optimization)
- **Mobile features:** Burger menu, vertical timeline, swipeable testimonials
- **SEO-optimized** for roofing niche keywords

### Technology Stack
```
Framework: Next.js 16 (App Router)
React: 19.2+
Styling: Tailwind CSS (Geist font integrated)
Animations: Framer Motion (scroll triggers, section reveals)
UI Components: shadcn/ui (pre-installed)
Form Handling: React Hook Form + generic validation
Package Manager: pnpm
Deployment: Vercel
```

### Code Architecture Constraints
- **Max file size:** ~600 lines per component/route
- **Modularity:** Each section as separate reusable component
- **No state management** initially (prop drilling acceptable)
- **Placeholder system:** Ready for future image/testimonial uploads

---

## 2. DESIGN SYSTEM & TOKENS

### Color Palette (Locked - 4 Colors)
```
Primary Brand: Deep Slate Gray (#1a2332)
  - Used for: Headers, CTAs, body text
  - Hex: #1a2332 | RGB: 26, 35, 50
  
Accent/CTA: Warm Orange (#f97316)
  - Used for: Primary buttons, highlights, links
  - Hex: #f97316 | RGB: 249, 115, 22
  
Background/Light: Cream White (#faf7f2)
  - Used for: Page background, card backgrounds
  - Hex: #faf7f2 | RGB: 250, 247, 242
  
Neutral/Gray: Soft Gray (#6b7280)
  - Used for: Secondary text, borders, dividers
  - Hex: #6b7280 | RGB: 107, 114, 128
```

### Design Token Structure (Tailwind Config + CSS Variables)
```css
/* globals.css - CSS Custom Properties */
:root {
  /* Primary Colors */
  --primary: #1a2332;           /* Deep Slate */
  --primary-dark: #0f1419;      /* Darker variant */
  --primary-light: #2d3e5f;     /* Lighter variant */
  
  /* Accent */
  --accent: #f97316;            /* Warm Orange */
  --accent-hover: #ea580c;      /* Darker orange for hover */
  --accent-light: #fed7aa;      /* Light orange for backgrounds */
  
  /* Backgrounds */
  --background: #faf7f2;        /* Cream */
  --background-alt: #f3f0eb;    /* Slightly darker cream */
  
  /* Text & Borders */
  --foreground: #1a2332;        /* Dark text */
  --foreground-secondary: #6b7280;
  --border: #d1d5db;            /* Light gray border */
  
  /* Semantic Tokens */
  --success: #10b981;
  --error: #ef4444;
  --warning: #f59e0b;
  
  /* Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
}
```

### Typography Scale
```
Font Family: Geist (via Next.js fonts)
Fallback: system-ui, -apple-system, sans-serif

Heading 1 (Hero):     56px / 67px @ desktop | 36px / 44px @ mobile
Heading 2 (Section):  40px / 48px @ desktop | 28px / 36px @ mobile
Heading 3 (Card):     24px / 32px @ desktop | 20px / 28px @ mobile
Body Large:           18px / 28px (line-height 1.6)
Body Regular:         16px / 24px (line-height 1.6)
Body Small:           14px / 21px (line-height 1.6)
Label:                12px / 18px (font-weight: 600)
```

### Spacing Scale
```
Used values: 0.5rem (2px), 1rem (4px), 1.5rem (6px), 2rem (8px), 3rem (12px), 
            4rem (16px), 6rem (24px), 8rem (32px), 12rem (48px), 16rem (64px)
Gap System: gap-2, gap-3, gap-4, gap-6, gap-8 (responsive with sm:/md:/lg: prefixes)
```

### Shadow & Depth
```
Shadow-sm:    0 1px 2px 0 rgba(26, 35, 50, 0.05)
Shadow-md:    0 4px 6px -1px rgba(26, 35, 50, 0.1)
Shadow-lg:    0 10px 15px -3px rgba(26, 35, 50, 0.1)
Shadow-xl:    0 20px 25px -5px rgba(26, 35, 50, 0.1)
```

---

## 3. SECTION BREAKDOWN & IMPLEMENTATION ORDER

### Section 1: Header & Navigation (Responsive)
**File:** `components/Header.tsx` (~120 lines)
**Features:**
- Fixed/sticky header with Miller & Sons branding
- Desktop navigation: Services | About | Why Us | Contact
- Mobile burger menu (toggles on <768px)
- "Get Free Estimate" CTA button (primary orange)
- Smooth scroll anchors to sections
- Mobile: hamburger icon, collapsible nav overlay

**Placeholders:**
- Logo: `/public/logo.svg` (text-based for now)
- Company name: "Miller & Sons Roofing"

---

### Section 2: Hero Section
**File:** `components/Hero.tsx` (~140 lines)
**Features:**
- Full-height hero with background image placeholder
- Headline: "Trusted Roofing Excellence for 35 Years"
- Subheading + trust signals (35-year legacy, local, licensed)
- Primary CTA: "Get Free Estimate" (orange button)
- Secondary CTA: "Call Arthur Directly: [placeholder]"
- Scroll animation (fade in on load)

**Placeholders:**
- Background image: `hero-bg.jpg` (1920×1080)
- Trust badges: Licensed, Insured, Bonded (SVG icons)

---

### Section 3: Services Section
**File:** `components/Services.tsx` (~180 lines)
**Features:**
- 3-card grid (3 cols desktop → 1 col mobile)
- Cards: Residential Repairs | Commercial Replacements | Emergency Services
- Each card includes icon, title, description (AI-generated), CTA link
- Hover effect: scale + shadow on desktop
- Mobile stacking with full-width cards
- Section animation: fade in on scroll

**Services (AI-Generated Descriptions):**
1. **Residential Repairs**
   - Description: Expert roof repair services for all residential property types, addressing leaks, storm damage, and wear. Same-day emergency response available.
   - CTA: "Schedule Residential Repair"

2. **Commercial Replacements**
   - Description: Full-scale commercial roof replacement with minimal downtime. We handle flat roofs, metal systems, and complex installations with precision.
   - CTA: "Request Commercial Quote"

3. **Emergency Services**
   - Description: 24/7 emergency response for storm damage, sudden leaks, and urgent repairs. We stabilize and protect your property immediately.
   - CTA: "Report Emergency"

---

### Section 4: Before & After Gallery
**File:** `components/BeforeAfter.tsx` (~150 lines)
**Features:**
- 3-column grid desktop → 1 column mobile
- Static side-by-side comparison images (no interactive slider)
- Before image on left, after image on right
- Project title below each pair
- "See All Projects" CTA link

**Placeholders:**
- 3 project pairs (6 images): `before-1.jpg`, `after-1.jpg` etc.
- Project names: Kitchen Renovation, Bathroom Update, Full Replacement

---

### Section 5: Miller Guarantee Section
**File:** `components/Guarantee.tsx` (~110 lines)
**Features:**
- Section with prominent "35-Year Miller Guarantee" headline
- 3-column guarantee breakdown (desktop) → stacked (mobile)
- Guarantees: Workmanship | Materials | Customer Satisfaction
- Supporting text for each guarantee
- Badge/seal imagery
- Section CTA: "Learn More About Our Guarantee"

**Guarantee Details:**
1. **35-Year Workmanship Guarantee** - Complete coverage on all labor
2. **Material Warranty** - Premium materials backed by manufacturer warranty
3. **100% Satisfaction** - If you're not satisfied, we'll make it right

---

### Section 6: Timeline (Vertical Stack)
**File:** `components/Timeline.tsx` (~130 lines)
**Features:**
- Vertical timeline (always stacked, no horizontal variant)
- 5 key milestones showing Miller & Sons history/process
- Timeline dots connected by vertical line (SVG)
- Alternate left/right layout description (desktop-only visual; mobile: all left)
- Milestone titles + brief descriptions
- Scroll animation: dots animate in on scroll

**Timeline Milestones:**
1. **1990** - Founded by Arthur Miller Sr. | Started as small crew
2. **2000** - Expanded to 15 employees | Gained regional reputation
3. **2010** - Certified for commercial projects | Expanded service area
4. **2020** - 300+ homes annually | Launched 35-Year Guarantee
5. **2024** - Industry leader | Arthur Miller continues legacy

---

### Section 7: Testimonials Carousel (Swipeable)
**File:** `components/Testimonials.tsx` (~160 lines)
**Features:**
- Carousel with 5 testimonials (AI-generated)
- Desktop: Shows 1 testimonial centered + pagination dots
- Mobile: Swipe behavior (touch handlers) + pagination dots
- Navigation: Prev/Next buttons + auto-advance (optional, off by default)
- Testimonial content: Name, Role, Quote, Star rating
- Fade in/out transitions

**AI-Generated Testimonials:**
1. "Miller & Sons fixed our 20-year-old roof in one day. Professional, clean, and on-budget!" — *Sarah Thompson, Homeowner*
2. "As a property manager, I trust Miller & Sons for all our commercial accounts. Reliable and responsive." — *James Rodriguez, Property Manager*
3. "Emergency repair saved our business during a storm. They were there in 2 hours!" — *Michael Chen, Store Owner*
4. "Best investment we made in our home. The workmanship is exceptional!" — *Emily Patterson, Homeowner*
5. "Licensed, insured, and honest. They diagnosed our issue correctly and saved us money." — *David Lewis, Homeowner*

---

### Section 8: FAQ Section (Accordion)
**File:** `components/FAQ.tsx` (~140 lines)
**Features:**
- Accordion component (expandable/collapsible items)
- 6-8 roofing-related FAQs
- Click to expand, click again to collapse
- Single expansion (only one open at a time)
- Smooth open/close animation
- Mobile responsive (full width)

**FAQ Items (SEO-Optimized):**
1. How often should I have my roof inspected?
2. What's the average lifespan of a residential roof?
3. Do you handle insurance claims?
4. What roofing materials do you recommend?
5. Can you repair a roof in winter?
6. What's included in your free estimate?
7. How long does a typical replacement take?
8. Do you offer financing options?

---

### Section 9: Contact Form (Footer)
**File:** `components/ContactForm.tsx` (~170 lines)
**Features:**
- Lead capture form with validation
- Fields: Name, Email, Phone, Property Address, Message, Service Type (dropdown)
- Submit button (orange CTA)
- Success/error message display
- Generic success: "Thanks! We'll contact you shortly."
- Generic error: "Something went wrong. Please try again."
- Form submission placeholder for make.com integration (later)
- Mobile responsive (single column)

**Form Validation:**
- Name: required, min 2 chars
- Email: required, valid email format
- Phone: required, valid phone format
- Property Address: required
- Service Type: required (dropdown select)

---

### Section 10: Footer
**File:** `components/Footer.tsx` (~100 lines)
**Features:**
- 3-column layout desktop → stacked mobile
- **Left Column:** Company info, logo, tagline
- **Center Column:** Quick links (Services, About, Contact)
- **Right Column:** Contact info, social media links
- Copyright + legal links
- Dark background (primary color)

**Footer Content:**
- Address: [Placeholder]
- Phone: [Placeholder]
- Email: [Placeholder]
- Social: Facebook, Instagram, LinkedIn (icons)
- Links: Privacy Policy, Terms of Service, Sitemap

---

## 4. CTA PLACEMENT STRATEGY (Minimum 3 CTAs)

### Primary CTAs: "Get Free Estimate" (Orange #f97316)
1. **Hero Section** - Primary hero button (above the fold)
2. **Services Cards** - "Schedule Service" buttons (bottom of each card)
3. **Guarantee Section** - "Start Your Free Estimate" (center button)

### Secondary CTAs: "Call Arthur Directly" (or variant)
4. **Header** - Secondary header button
5. **Footer** - Contact section with phone number

### Tertiary CTAs: Page-level actions
6. **Before & After** - "See All Projects" link
7. **Timeline** - "Our Story" anchor link
8. **FAQ** - "Still have questions? Contact us" link

---

## 5. RESPONSIVE DESIGN BREAKPOINTS

```
Mobile:        320px - 639px (base styles, burger menu active)
Tablet:        640px - 1023px (grid adjustments, menu transitions)
Desktop:       1024px+ (full layouts, multi-column grids)

Tailwind Prefixes Used:
- sm: (640px)
- md: (768px) 
- lg: (1024px)
- xl: (1280px)
```

### Mobile-Specific Changes:
- **Header:** Burger menu replaces horizontal nav
- **Hero:** Reduced padding, smaller font sizes
- **Services:** 1-column grid instead of 3
- **Timeline:** Always vertical, no left/right alternation
- **Testimonials:** Swipe-enabled, larger touch targets
- **Form:** Single-column, larger inputs for touch

---

## 6. ANIMATION & INTERACTION DETAILS

### Scroll Animations (Framer Motion)
```
Hero Section:
- Fade in on page load (0-0.5s)
- Slight scale from 0.95 → 1

Service Cards:
- Fade + slide up when scrolled into view
- Stagger delay: 0.1s between cards
- Duration: 0.6s

Timeline:
- Dots appear sequentially with line animation
- Trigger: When section reaches viewport
- Duration per dot: 0.3s with 0.2s stagger

Testimonials:
- Fade transitions on carousel change
- Duration: 0.3s

FAQ Items:
- Accordion content slides down/up
- Duration: 0.3s
```

### Hover & Interactive States
```
Buttons:
- Background color transition (0.2s)
- Slight scale (1 → 1.05)
- Cursor: pointer

Links:
- Color fade to accent orange
- Underline animation on hover

Service Cards:
- Shadow increase on hover (desktop only)
- Scale up 1.02x
- Duration: 0.3s

Testimonial Carousel:
- Opacity fade between slides
- Auto-advance: disabled (manual only)
```

---

## 7. SEO OPTIMIZATION STRATEGY

### Meta Tags (in layout.tsx)
```
Title: "Miller & Sons Roofing - Professional Roof Repair & Replacement [City]"
Description: "Trusted roofing contractor for residential & commercial repairs, replacements, and emergency services. 35-year guarantee. Free estimates."
Keywords: roof repair, roof replacement, roofing contractor, emergency roofing, residential roofing, commercial roofing, roof restoration, roof renewal, leak repair
```

### Content Optimization
- **H1:** "Trusted Roofing Excellence for 35 Years"
- **H2s:** Service titles, guarantee headline, timeline title
- **Alt Text:** All images include descriptive alt text
- **Schema Markup:** LocalBusiness + Service schema (JSON-LD)

### Roofing Niche Keywords Targeted
- Roof repair, roof replacement, roof leak
- Residential roofing, commercial roofing
- Roof restoration, roof renewal
- Emergency roofing, storm damage repair
- Roof inspection, roof maintenance
- [City] roofing contractor, local roofing services

### Structured Data (JSON-LD)
- LocalBusiness (company info, address, phone)
- Service (each service offering)
- Review (testimonials)
- BreadcrumbList (navigation hierarchy)

---

## 8. IMPLEMENTATION PHASES

### Phase 1: Foundation (Days 1-2)
- [ ] Update `layout.tsx` with Geist font, meta tags, design tokens
- [ ] Update `globals.css` with CSS variables and Tailwind overrides
- [ ] Create `components/Header.tsx` with burger menu logic
- [ ] Create `components/Hero.tsx` with CTA buttons
- [ ] Create base responsive grid system

### Phase 2: Core Content (Days 3-4)
- [ ] Create `components/Services.tsx` (3-card grid + descriptions)
- [ ] Create `components/BeforeAfter.tsx` (static comparison gallery)
- [ ] Create `components/Guarantee.tsx` (with 35-year headline)
- [ ] Create `components/Timeline.tsx` (vertical stack, milestone structure)

### Phase 3: Interactive Elements (Days 5-6)
- [ ] Create `components/Testimonials.tsx` (carousel with swipe)
- [ ] Create `components/FAQ.tsx` (accordion, roofing-themed)
- [ ] Create `components/ContactForm.tsx` (validation, generic success/error)

### Phase 4: Integration & Polish (Days 7-8)
- [ ] Integrate all sections into `app/page.tsx`
- [ ] Add Framer Motion scroll animations
- [ ] Test all CTAs for smooth scroll navigation
- [ ] Responsive testing across breakpoints
- [ ] Performance optimization (image lazy loading, code splitting)
- [ ] SEO review: meta tags, schema markup, lighthouse audit

---

## 9. FILE STRUCTURE

```
/vercel/share/v0-project/
├── app/
│   ├── layout.tsx              (Root layout + fonts + metadata)
│   ├── page.tsx                (Main page - sections imported here)
│   └── globals.css             (Design tokens + theme overrides)
│
├── components/
│   ├── Header.tsx              (~120 lines)
│   ├── Hero.tsx                (~140 lines)
│   ├── Services.tsx            (~180 lines)
│   ├── BeforeAfter.tsx         (~150 lines)
│   ├── Guarantee.tsx           (~110 lines)
│   ├── Timeline.tsx            (~130 lines)
│   ├── Testimonials.tsx        (~160 lines)
│   ├── FAQ.tsx                 (~140 lines)
│   ├── ContactForm.tsx         (~170 lines)
│   ├── Footer.tsx              (~100 lines)
│   │
│   └── ui/                     (Pre-installed shadcn components)
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── etc.
│
├── public/
│   ├── logo.svg                (Text-based placeholder)
│   ├── hero-bg.jpg             (Placeholder image)
│   ├── before-1.jpg, after-1.jpg
│   ├── before-2.jpg, after-2.jpg
│   ├── before-3.jpg, after-3.jpg
│   └── icons/                  (SVG icons: shield, check, star)
│
├── lib/
│   ├── utils.ts                (cn() utility - pre-installed)
│   └── constants.ts            (Form validation rules, SEO keywords)
│
├── next.config.mjs             (Pre-configured)
├── tailwind.config.ts          (Extended with design tokens)
├── tsconfig.json               (Pre-configured)
└── package.json                (Pre-configured with dependencies)
```

---

## 10. DEPENDENCIES & INSTALLATION

### Required Packages (Already Pre-installed or to Add)
```bash
# Core (pre-installed)
next@16
react@19
tailwindcss
typescript

# Additional installs needed:
pnpm add framer-motion             # Scroll animations
pnpm add react-hook-form           # Form handling
pnpm add clsx                      # Conditional classNames (if not via cn())
```

---

## 11. CRITICAL SUCCESS FACTORS

✅ **Before Implementation:**
- [ ] Confirm color palette locked (#1a2332, #f97316, #faf7f2, #6b7280)
- [ ] Geist font configured in layout.tsx
- [ ] Design tokens exported to Tailwind config
- [ ] All CTAs routing to correct anchors/sections
- [ ] Mobile burger menu logic tested
- [ ] Placeholder system prepared for image uploads

✅ **During Development:**
- [ ] Keep component files under 600 lines
- [ ] Test responsive behavior at 320px, 768px, 1440px
- [ ] Verify scroll animations fire at correct viewport triggers
- [ ] Ensure form validation catches all edge cases
- [ ] Check accessibility: keyboard navigation, ARIA labels, contrast ratios

✅ **Post-Implementation:**
- [ ] Lighthouse audit: Mobile >90, Desktop >95
- [ ] SEO checks: H1 tags, meta descriptions, schema markup
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Load test with images (current: 5+ placeholder images)
- [ ] Verify all CTAs scroll smoothly to target sections

---

## 12. MAKE.COM INTEGRATION (PHASE 2 - Later)

**Current:** Generic success/error messages  
**Future:** Connect ContactForm.tsx to make.com workflow
- Form submission → make.com webhook
- Lead notification email
- CRM sync (when configured)

**Placeholder:** `const formSubmissionUrl = process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL`

---

## 13. NOTES & ASSUMPTIONS

- **No Database Required:** Static site with placeholder system for future CMS
- **No State Management:** Props-based data flow sufficient
- **Placeholder Content:** AI-generated testimonials, service descriptions; images to be uploaded
- **Mobile-First:** Tailwind breakpoints prioritize mobile experience
- **Form Validation:** React Hook Form handles client-side; server-side to be added with make.com
- **Animations:** Framer Motion for entrance animations; basic CSS transitions for hover states
- **Accessibility:** WCAG 2.1 AA compliance with semantic HTML, ARIA labels, color contrast

---

## 14. APPROVAL CHECKLIST

Before proceeding to code generation, confirm:

- [ ] Design tokens and color palette approved
- [ ] Section breakdown and content (testimonials, services, FAQs) reviewed
- [ ] CTA placement strategy finalized
- [ ] Responsive breakpoints and mobile behavior confirmed
- [ ] Animation timing and effects acceptable
- [ ] SEO keywords and meta strategy aligned
- [ ] make.com integration timeline understood (phase 2)
- [ ] File structure and component breakdown approved
- [ ] No additional integrations/features required

---

**Ready to begin implementation?** All sections are structured, placeholders are defined, and responsive behavior is mapped. Each component is scoped to stay under 600 lines with reusability in mind.

