# Miller & Sons Roofing - Master v0 Prompt

## EXECUTIVE BRIEF

Build a professional, conversion-optimized single-page landing website for **Miller & Sons Roofing**, a 35-year family-owned residential and commercial roofing contractor. The site must convey premium quality, local expertise, and trustworthiness while maximizing lead capture through strategic CTA placement.

**Core Requirements:**
- Single-page scrolling experience with sticky header and burger menu
- Fully responsive (mobile-first): 320px mobile, 768px tablet, 1024px+ desktop
- 9 conversion touchpoints (CTAs that scroll to footer contact form)
- Dynamic animated gradient mesh hero background
- Testimonial carousel with swipe/mobile support
- Static before/after gallery
- Accessible, SEO-optimized, production-ready code
- Keep components under 600 lines; modular and reusable
- No state management; use placeholder data for future make.com integration

---

## BRAND & PERSONA

### Miller & Sons Roofing Company Profile

**Business Overview:**
- 35-year heritage family business (founded 1989)
- Local residential and commercial roofing specialist
- Service area: [Multi-neighborhood coverage]
- Team: Fully licensed, insured, bonded
- Specialization: Replacements, repairs, emergency response, roof restoration
- Unique value: Personalized service, warranty-backed work, emergency availability

**Founding Story & Legacy:**
- Started by Arthur Miller Sr. as a single-person operation
- Expanded to full team across three decades
- Built reputation on reliability and craftsmanship
- Family-run ethos: "We treat your home like our own"

**Primary Target Persona: Homeowner - Robert Chen**

**Demographics:**
- Age: 45-65 years old
- Household Income: $120k-$250k annually
- Home Value: $450k-$750k
- Location: Suburban neighborhoods, multi-family dwellings
- Education: College-educated, professional career
- Family Status: Married, 2-3 adult children, active in community

**Psychographics:**
- Values: Quality, reliability, local support, transparency
- Concerns: Finding trustworthy contractors, avoiding costly mistakes
- Priorities: Home protection, family safety, long-term value
- Media Consumption: Local news, community forums, Google reviews, social proof
- Decision Drivers: Reputation, testimonials, licensing/insurance, warranty, emergency availability

**Goals:**
- Protect home investment with quality roofing
- Get fast, fair quotes without pressure
- Work with licensed, locally-known professionals
- Understand warranty and long-term protection
- Access emergency service when needed

**Pain Points:**
- Difficulty vetting trustworthy contractors
- Fear of overpricing or unnecessary work
- Concerns about project timeline and disruption
- Uncertainty about warranty and post-service support
- Limited availability during emergencies

**Competitive Advantages (Miller & Sons):**
- 35 years proven track record
- Family business transparency
- Emergency 24/7 availability
- Comprehensive warranty ("Miller Guarantee")
- Local expertise and community presence
- Licensed, insured, bonded with public documentation

**Timeline & Company Milestones:**
- 1989: Arthur Miller Sr. founds single-person operation
- 1995: Expansion to 3-person team, first commercial client
- 2004: Achieve 1000+ residential projects milestone
- 2009: Introduce "Miller Guarantee" warranty program
- 2015: Launch emergency 24/7 service line
- 2019: Expand to 12-person team, commercial division grows
- 2024: 35-year anniversary, 5000+ customer milestone
- 2025: Launch digital lead capture and online estimates

**Company Values:**
1. **Integrity** - Transparent pricing, honest assessments
2. **Quality** - Premium materials, expert craftsmanship
3. **Reliability** - On-time delivery, emergency response
4. **Community** - Local hiring, neighborhood investment
5. **Accountability** - Comprehensive warranties, customer support

---

## DESIGN SYSTEM

### Color Palette (Exact 4 Colors)

| Color Name | Hex Code | RGB | Usage Context |
|------------|----------|-----|---|
| **Slate Deep** | #1a2332 | 26, 35, 50 | Primary background, text headings, roofline silhouettes |
| **Orange Warm** | #f97316 | 249, 115, 22 | Primary CTA buttons, accent highlights, hover states |
| **Cream White** | #faf7f2 | 250, 247, 242 | Body text, card backgrounds, contrast backgrounds |
| **Gray Neutral** | #6b7280 | 107, 114, 128 | Secondary text, borders, muted elements |

**CSS Variables (in globals.css):**
```css
--color-slate-deep: #1a2332;
--color-orange-warm: #f97316;
--color-cream-white: #faf7f2;
--color-gray-neutral: #6b7280;
--color-slate-dark: #0f1520;
--color-orange-hover: #ea5e0b;
--color-gray-light: #f3f4f6;
--color-error: #ef4444;
--color-success: #10b981;
```

**Tailwind Aliases:**
- `bg-slate-deep` = #1a2332
- `bg-orange-warm` = #f97316
- `text-cream-white` = #faf7f2
- `text-gray-neutral` = #6b7280

### Typography

**Fonts:**
- **Heading Font:** Merriweather (serif) - Google Fonts, weights 400, 700
- **Body Font:** Geist (sans-serif) - Vercel, default weights
- **Monospace:** Geist Mono (fallback)

**Type Scale:**
| Level | Size (Mobile) | Size (Desktop) | Weight | Line Height | Usage |
|-------|---|---|---|---|---|
| **H1** | 32px | 56px | 700 | 1.2 | Hero headline, main page title |
| **H2** | 28px | 42px | 700 | 1.3 | Section titles, module headers |
| **H3** | 24px | 32px | 700 | 1.4 | Card titles, subsection headers |
| **Body Large** | 16px | 18px | 400 | 1.6 | Primary body text, testimonials |
| **Body** | 14px | 16px | 400 | 1.6 | Default text, descriptions |
| **Small** | 12px | 14px | 400 | 1.5 | Labels, metadata, captions |
| **Micro** | 11px | 12px | 500 | 1.4 | Badges, tags |

**Implementation:**
- Use `font-serif` class for Merriweather (headings, hero, highlights)
- Use `font-sans` class for Geist (body, UI)
- Use `font-mono` class for code/technical content

### Spacing Scale

Use Tailwind's default spacing (4px base unit):
- `p-4` = 16px padding
- `gap-6` = 24px gap
- `mt-8` = 32px margin-top
- `space-y-4` = 16px vertical spacing between children

**Section Spacing:**
- Desktop: `py-20` (80px) for major sections
- Tablet: `py-12` (48px)
- Mobile: `py-8` (32px)

### Border Radius

- `rounded-lg` (8px) = Cards, buttons, inputs
- `rounded-md` (6px) = Small elements, badges
- `rounded-sm` (4px) = Minimal rounding
- `rounded-none` = No rounding for full-bleed

### Shadows

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
```

Use sparingly; maintain clean, minimal aesthetic. Apply `shadow-md` to cards on hover, avoid shadow on text.

---

## COMPONENT ARCHITECTURE

### File Structure

```
/app
  layout.tsx (with Merriweather + Geist font imports, metadata, SEO)
  globals.css (design tokens, Tailwind config, animations)
  page.tsx (page composition)

/components
  /ui
    animated-gradient-mesh.tsx (canvas-based animated background)
    button.tsx (shadcn button component)
    card.tsx (shadcn card component)
  /sections
    header.tsx (sticky navigation, burger menu)
    hero.tsx (headline, trust badges, CTA)
    services.tsx (3 service cards)
    timeline.tsx (company/project timeline)
    testimonials.tsx (carousel with swipe)
    gallery.tsx (before/after grid)
    guarantee.tsx (4 promises + badges)
    faq.tsx (accordion)
    footer.tsx (contact form, info, bottom bar)

/public
  /images (placeholder structure for future uploads)
```

### Shadcn Components Used

1. **Button** (`shadcn/ui/button`)
   - Variant: `default` (orange-warm bg, cream-white text)
   - Variant: `outline` (transparent bg, orange-warm border)
   - Sizes: `lg` (primary CTAs), `sm` (secondary actions)
   - Props: `onClick`, `className`, `disabled`

2. **Card** (`shadcn/ui/card`)
   - Used in services, testimonials, guarantee sections
   - Props: `className` for custom padding/styling

3. **Input** (`shadcn/ui/input`)
   - Used in footer contact form
   - Props: `placeholder`, `name`, `required`, `type`

4. **Textarea** (`shadcn/ui/textarea`)
   - Message field in footer form
   - Props: `placeholder`, `name`, `rows`

5. **Accordion** (Radix UI via shadcn)
   - Used in FAQ section
   - Items expand/collapse on click
   - Props: `defaultValue`, `type="single"`, `collapsible`

### Custom Components

**AnimatedGradientMesh** (Canvas-based)
- Renders animated gradient background using canvas
- 5 floating gradient points in brand colors
- Smooth drift animation using `requestAnimationFrame`
- Responsive to window resize with device pixel ratio scaling
- No dependencies beyond vanilla JS + Canvas API

---

## PAGE STRUCTURE & CONTENT

### 1. HEADER (Sticky Navigation)

**Layout:**
- Height: 72px (h-18) on desktop, 64px on mobile
- Fixed positioning, z-index: 50
- Sticky on scroll

**Content:**
- Logo/Brand: "Miller & Sons" (left-aligned, `font-serif`, 24px)
- Navigation Menu (desktop): Home | Services | About | Contact (hidden on mobile)
- CTA Button: "Get Free Estimate" (orange-warm, lg size)
- Burger Menu (mobile): 3-line hamburger icon, toggles mobile nav
- Mobile Menu: Full-screen overlay with nav links + CTA

**Props & Structure:**
```tsx
<header className="sticky top-0 z-50 bg-slate-deep border-b border-gray-neutral/20">
  <nav className="max-w-6xl mx-auto px-4 h-18 flex items-center justify-between">
    {/* Logo */}
    <h1 className="font-serif text-2xl font-bold text-cream-white">Miller & Sons</h1>
    
    {/* Desktop Nav */}
    <ul className="hidden md:flex gap-8 text-cream-white">...</ul>
    
    {/* Desktop CTA */}
    <Button variant="default" size="lg" className="hidden md:inline-flex" onClick={scrollToContact}>
      Get Free Estimate
    </Button>
    
    {/* Mobile Burger */}
    <button className="md:hidden" onClick={toggleMobileMenu}>...</button>
  </nav>
  
  {/* Mobile Menu */}
  {mobileMenuOpen && <MobileMenu />}
</header>
```

**Responsive:**
- Desktop (md+): Horizontal layout, all nav visible
- Tablet (sm-md): Nav in burger menu, CTA visible
- Mobile: Burger menu only, CTA in mobile menu

---

### 2. HERO (Dynamic Background)

**Layout:**
- Full viewport height (`min-h-screen`)
- Relative positioning for background layering
- Centered content with max-width container

**Background Layers:**
1. **AnimatedGradientMesh** - Canvas background with shifting gradients
2. **RooflineSilhouettes** - SVG overlays (two layers: rooflines 1 & 2)
   - Parallax effect on scroll (y-transform based on scrollY)
   - Fade out as user scrolls down

**Content Structure:**
```tsx
<section className="relative min-h-screen overflow-hidden bg-slate-deep">
  <AnimatedGradientMesh />
  <RooflineSilhouettes />
  
  <div className="relative mx-auto max-w-6xl px-4 h-full flex flex-col justify-center items-center">
    <div className="max-w-2xl">
      {/* Trust Badges (top) */}
      <motion.div className="flex gap-4 justify-center md:justify-start mb-4">
        {trustBadges.map(badge => (
          <div key={badge.label} className="flex items-center gap-2">
            <badge.icon size={20} className="text-orange-warm" />
            <span className="text-sm text-cream-white">{badge.label}</span>
          </div>
        ))}
      </motion.div>
      
      {/* Main Headline */}
      <motion.h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-cream-white">
        Your Roof Protects Your Family.{' '}
        <span className="text-orange-warm">We Protect Your Roof.</span>
      </motion.h1>
      
      {/* Subheadline */}
      <motion.p className="mt-4 text-lg text-gray-neutral max-w-lg">
        35 years of trusted roofing solutions. Licensed, insured, and dedicated to your home.
      </motion.p>
      
      {/* CTA Buttons */}
      <motion.div className="flex gap-4 mt-8">
        <Button size="lg" onClick={scrollToContact}>Get Free Estimate</Button>
        <Button variant="outline" size="lg">Call: (555) 123-4567</Button>
      </motion.div>
    </div>
  </div>
</section>
```

**Trust Badges:**
- Shield icon + "Licensed & Insured"
- Clock icon + "35 Years Experience"
- Award icon + "5-Star Rated"

**Animations:**
- Hero content: Fade-in + slide-up on mount (delay: 0s, 0.1s, 0.2s)
- Roofline silhouettes: Parallax on scroll, fade out at scroll depth 400px
- Gradient mesh: Continuous soft animation

---

### 3. SERVICES (3-Card Grid)

**Layout:**
- Grid: 1 column (mobile), 3 columns (desktop)
- Gap: 24px (gap-6)
- Centered section with max-width

**Services Content:**

**Service 1: Roof Replacement**
- Headline: "Full Roof Replacement"
- Description: "Professional complete roof replacement using premium materials. Our licensed team handles everything from inspection to final cleanup. Includes 10-year workmanship warranty."
- Features: Premium materials, Full warranty, Expert installation
- CTA: "Learn More" (outline button)

**Service 2: Repair & Restoration**
- Headline: "Repair & Restoration"
- Description: "Fast, reliable repairs for leaks, storm damage, and wear. We assess your roof thoroughly and provide honest recommendations. Same-day emergency response available."
- Features: Emergency availability, Honest assessment, Quality repairs
- CTA: "Request Service" (outline button)

**Service 3: Preventative Maintenance**
- Headline: "Preventative Maintenance"
- Description: "Regular inspections and maintenance extend your roof's life. Catch small issues before they become expensive problems. Seasonal cleaning and debris removal included."
- Features: Inspection programs, Seasonal cleaning, Cost savings
- CTA: "Schedule Inspection" (outline button)

**Component Structure:**
```tsx
<section className="py-20 bg-cream-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="font-serif text-4xl font-bold text-slate-deep text-center mb-12">
      Our Services
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map(service => (
        <Card key={service.id} className="bg-white border-2 border-orange-warm/10">
          <div className="p-6">
            <h3 className="font-serif text-2xl font-bold text-slate-deep mb-4">
              {service.title}
            </h3>
            <p className="text-gray-neutral mb-4">{service.description}</p>
            <ul className="space-y-2 mb-6">
              {service.features.map(feature => (
                <li key={feature} className="text-sm text-slate-deep flex gap-2">
                  <span className="text-orange-warm">✓</span> {feature}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full">
              {service.cta}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  </div>
</section>
```

**Animations:**
- Cards: Staggered fade-in on scroll (delay: 0ms, 100ms, 200ms)
- On hover: Scale up 102%, shadow-md added

---

### 4. TIMELINE (Company Journey)

**Layout:**
- Desktop: Horizontal timeline with alternating content (left-right-left)
- Tablet/Mobile: Vertical stacked timeline
- Centered max-width container

**Timeline Events:**

| Year | Event | Details |
|------|-------|---------|
| 1989 | Founded | Arthur Miller Sr. starts with single vehicle and passion for quality |
| 1995 | Team Expansion | Grow to 3-person team, land first commercial client |
| 2004 | 1000+ Projects | Reach major milestone: 1,000 satisfied residential customers |
| 2009 | Miller Guarantee | Introduce industry-leading 10-year warranty program |
| 2015 | 24/7 Emergency | Launch emergency response line for storm damage |
| 2024 | 35th Anniversary | Celebrate 35 years, 5,000+ happy customers, family legacy |

**Component Structure:**
```tsx
<section className="py-20 bg-slate-deep">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="font-serif text-4xl font-bold text-cream-white text-center mb-12">
      Our Journey
    </h2>
    
    {/* Desktop Timeline */}
    <div className="hidden md:flex flex-col space-y-8">
      {timelineEvents.map((event, idx) => (
        <div key={event.year} className={`flex gap-8 ${idx % 2 === 0 ? '' : 'flex-row-reverse'}`}>
          <div className="flex-1">
            <div className="bg-orange-warm/10 p-6 rounded-lg">
              <h3 className="font-serif text-2xl font-bold text-orange-warm mb-2">
                {event.year}
              </h3>
              <h4 className="font-bold text-cream-white mb-2">{event.title}</h4>
              <p className="text-gray-neutral">{event.details}</p>
            </div>
          </div>
          <div className="w-1 bg-orange-warm" />
          <div className="flex-1" />
        </div>
      ))}
    </div>
    
    {/* Mobile Timeline */}
    <div className="md:hidden flex flex-col space-y-4">
      {timelineEvents.map(event => (
        <div key={event.year} className="flex gap-4">
          <div className="w-1 bg-orange-warm" />
          <div className="flex-1">
            <h3 className="font-serif text-xl font-bold text-orange-warm">{event.year}</h3>
            <h4 className="font-bold text-cream-white">{event.title}</h4>
            <p className="text-sm text-gray-neutral">{event.details}</p>
          </div>
        </div>
      ))}
    </div>
    
    {/* Arthur Miller Quote */}
    <div className="mt-16 bg-orange-warm/10 p-8 rounded-lg border-l-4 border-orange-warm">
      <p className="text-lg italic text-cream-white mb-4">
        "For 35 years, we've treated every roof like it was protecting our own family. That's not just our business model—it's who we are. Your home deserves that commitment."
      </p>
      <p className="font-bold text-orange-warm">— Arthur Miller, Founder</p>
    </div>
  </div>
</section>
```

**Animations:**
- Timeline events: Fade-in + slide-in from left/right on scroll
- Quote: Fade-in + subtle scale (1 → 1.02) on scroll

---

### 5. TESTIMONIALS (Swipeable Carousel)

**Layout:**
- Desktop: Show 1 testimonial + stats grid below
- Mobile: Swipeable carousel (drag to navigate)
- Stats: 4-column grid desktop, 2-column mobile

**Testimonials Data (5 total):**

**Testimonial 1:**
- Name: Sarah Mitchell
- Location: Springfield, IL
- Rating: 5 stars
- Quote: "Miller & Sons replaced our roof in 2 days with zero disruption. Professional, clean, and they even cleared gutters afterward. Highly recommend!"
- Image: placeholder 80x80

**Testimonial 2:**
- Name: James Rodriguez
- Location: Oak Park, IL
- Rating: 5 stars
- Quote: "Had an emergency leak during a storm. They came out within an hour, did temporary repairs, and scheduled permanent fix immediately. Saved my home!"
- Image: placeholder 80x80

**Testimonial 3:**
- Name: Patricia Chen
- Location: Naperville, IL
- Rating: 5 stars
- Quote: "The inspection was thorough and honest. They found issues but recommended a phased approach rather than expensive replacement. Real integrity!"
- Image: placeholder 80x80

**Testimonial 4:**
- Name: Michael O'Brien
- Location: Riverside, IL
- Rating: 5 stars
- Quote: "Commercial roof for our office building. Professional project management, quality materials, and they finished on schedule. Worth every penny."
- Image: placeholder 80x80

**Testimonial 5:**
- Name: Linda Thompson
- Location: Forest Park, IL
- Rating: 5 stars
- Quote: "10-year warranty gives us peace of mind. Checked on us after 6 months to ensure everything was perfect. That's customer service!"
- Image: placeholder 80x80

**Stats:**
- 5,000+ Happy Customers
- 10-Year Warranty
- 24/7 Emergency Service
- 35 Years Experience

**Component Structure:**
```tsx
<section className="py-20 bg-cream-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="font-serif text-4xl font-bold text-slate-deep text-center mb-12">
      What Our Customers Say
    </h2>
    
    {/* Desktop: Single Testimonial */}
    <div className="hidden md:flex gap-8 mb-12">
      <Card className="flex-1 bg-white border border-gray-neutral/20 p-6">
        <div className="flex gap-4 mb-4">
          {/* Avatar placeholder */}
          <div className="w-16 h-16 rounded-full bg-orange-warm/20" />
          <div>
            <h3 className="font-bold text-slate-deep">{currentTestimonial.name}</h3>
            <p className="text-sm text-gray-neutral">{currentTestimonial.location}</p>
            <div className="flex gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-orange-warm">★</span>
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-neutral italic">{currentTestimonial.quote}</p>
      </Card>
      
      {/* Navigation dots */}
      <div className="flex flex-col gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentIndex ? 'bg-orange-warm w-8' : 'bg-gray-neutral'
            }`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
    
    {/* Mobile: Swipeable Carousel */}
    <div className="md:hidden mb-12">
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4">
        {testimonials.map(testimonial => (
          <Card
            key={testimonial.id}
            className="flex-shrink-0 w-full bg-white border border-gray-neutral/20 p-6 snap-center"
          >
            <div className="flex gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-orange-warm/20" />
              <div>
                <h3 className="font-bold text-slate-deep">{testimonial.name}</h3>
                <p className="text-sm text-gray-neutral">{testimonial.location}</p>
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-orange-warm">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-neutral italic">{testimonial.quote}</p>
          </Card>
        ))}
      </div>
    </div>
    
    {/* Stats Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="text-center">
        <p className="font-serif text-3xl md:text-4xl font-bold text-orange-warm">5000+</p>
        <p className="text-gray-neutral mt-2">Happy Customers</p>
      </div>
      <div className="text-center">
        <p className="font-serif text-3xl md:text-4xl font-bold text-orange-warm">10</p>
        <p className="text-gray-neutral mt-2">Year Warranty</p>
      </div>
      <div className="text-center">
        <p className="font-serif text-3xl md:text-4xl font-bold text-orange-warm">24/7</p>
        <p className="text-gray-neutral mt-2">Emergency Service</p>
      </div>
      <div className="text-center">
        <p className="font-serif text-3xl md:text-4xl font-bold text-orange-warm">35</p>
        <p className="text-gray-neutral mt-2">Years Experience</p>
      </div>
    </div>
  </div>
</section>
```

**Animations:**
- Testimonial fade-in on change (300ms duration)
- Stats counter: Count up animation on scroll
- Mobile carousel: Hardware-accelerated scroll (no JS animation)

---

### 6. GALLERY (Before & After)

**Layout:**
- Grid: 2 columns (image + image pairs)
- Desktop: 3 rows × 2 columns (6 projects)
- Tablet: 2 columns
- Mobile: 1 column

**Project Data (6 examples):**

**Project 1:**
- Title: "Complete Replacement - Victorian Home"
- Location: Springfield Heights
- Description: "Replaced 2,400 sq ft roof with architectural shingles"
- Before: Placeholder 400x300
- After: Placeholder 400x300

**Project 2:**
- Title: "Storm Damage Restoration"
- Location: Oak Park District
- Description: "Emergency repair following hail damage to commercial building"
- Before: Placeholder
- After: Placeholder

**Project 3:**
- Title: "Flat Roof System Install"
- Location: Downtown Office Complex
- Description: "New TPO membrane system with improved drainage"
- Before: Placeholder
- After: Placeholder

**Project 4:**
- Title: "Metal Roof Installation"
- Location: Country Estate
- Description: "Premium standing seam metal roof for lasting protection"
- Before: Placeholder
- After: Placeholder

**Project 5:**
- Title: "Residential Repair & Gutter Work"
- Location: Riverside Neighborhood
- Description: "Patched damage and installed new seamless gutters"
- Before: Placeholder
- After: Placeholder

**Project 6:**
- Title: "Commercial Maintenance Program"
- Location: Shopping Center
- Description: "Annual inspection and maintenance for 40,000+ sq ft facility"
- Before: Placeholder
- After: Placeholder

**Component Structure:**
```tsx
<section className="py-20 bg-slate-deep">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="font-serif text-4xl font-bold text-cream-white text-center mb-12">
      Our Work
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map(project => (
        <div key={project.id} className="space-y-4">
          <h3 className="font-serif text-xl font-bold text-cream-white">
            {project.title}
          </h3>
          <p className="text-gray-neutral text-sm">{project.location}</p>
          <p className="text-cream-white">{project.description}</p>
          
          {/* Before & After Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="bg-gray-neutral/20 h-48 rounded-lg mb-2 flex items-center justify-center">
                {/* Placeholder image - Before */}
                <span className="text-gray-neutral">Before</span>
              </div>
              <p className="text-sm text-gray-neutral text-center">Before</p>
            </div>
            <div>
              <div className="bg-gray-neutral/20 h-48 rounded-lg mb-2 flex items-center justify-center">
                {/* Placeholder image - After */}
                <span className="text-gray-neutral">After</span>
              </div>
              <p className="text-sm text-gray-neutral text-center">After</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

**Animations:**
- Project cards: Fade-in + slide-up on scroll with stagger (delay: 0ms → 600ms)

---

### 7. GUARANTEE (Trust & Promises)

**Layout:**
- 4-column grid (2 columns on mobile)
- Centered section with accent background

**Miller Guarantee Promises:**

**Promise 1: Quality Materials**
- Icon: Award
- Title: "Premium Materials"
- Description: "We use only top-tier roofing materials rated for 25+ years"

**Promise 2: Expert Workmanship**
- Icon: Wrench
- Title: "Expert Installation"
- Description: "Licensed professionals with 35 years combined experience"

**Promise 3: Warranty Coverage**
- Icon: Shield
- Title: "10-Year Warranty"
- Description: "Full coverage on materials and labor, no hidden clauses"

**Promise 4: Customer Service**
- Icon: PhoneCall
- Title: "24/7 Support"
- Description: "Emergency hotline and dedicated follow-up for all projects"

**Trust Badges:**
- ✓ Licensed & Insured
- ✓ Bonded Contractor
- ✓ EPA Certified
- ✓ Local & Family-Owned

**Component Structure:**
```tsx
<section className="py-20 bg-orange-warm/5 border-t-2 border-orange-warm">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="font-serif text-4xl font-bold text-slate-deep text-center mb-4">
      The Miller Guarantee
    </h2>
    <p className="text-gray-neutral text-center mb-12 max-w-2xl mx-auto">
      Every roof we install is backed by our ironclad promise. Your satisfaction and safety are our top priorities.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {guaranteePromises.map(promise => (
        <Card key={promise.id} className="bg-white p-6 text-center border border-orange-warm/20">
          <promise.icon className="w-12 h-12 text-orange-warm mx-auto mb-4" />
          <h3 className="font-bold text-slate-deep text-lg mb-2">{promise.title}</h3>
          <p className="text-gray-neutral text-sm">{promise.description}</p>
        </Card>
      ))}
    </div>
    
    {/* Trust Badges */}
    <div className="flex flex-wrap justify-center gap-4">
      {trustBadges.map(badge => (
        <div key={badge} className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-orange-warm/20">
          <span className="text-orange-warm">✓</span>
          <span className="font-bold text-slate-deep text-sm">{badge}</span>
        </div>
      ))}
    </div>
  </div>
</section>
```

**Animations:**
- Promises: Staggered fade-in + scale on scroll
- Badges: Fade-in animation on scroll

---

### 8. FAQ (Accordion)

**Layout:**
- Full-width section with centered max-width container
- Accordion: Single expansion (only one item open at a time)

**FAQ Items (8 total):**

**Item 1:**
- Q: "How long does a full roof replacement take?"
- A: "Most residential replacements take 1-2 days depending on size and weather. We work efficiently while maintaining quality. Our team will keep your property clean throughout the process."

**Item 2:**
- Q: "What warranty do you provide?"
- A: "We offer a 10-year workmanship warranty on all labor and a manufacturer's warranty on materials. Details are included in your contract. We're confident in our work and stand behind every project."

**Item 3:**
- Q: "Are you available for emergency repairs?"
- A: "Yes! Our 24/7 emergency line is available for storm damage, leaks, and urgent repairs. We respond quickly and provide temporary solutions if needed while scheduling permanent repairs."

**Item 4:**
- Q: "Do you offer payment plans?"
- A: "We work with several financing partners to make projects affordable. Ask about our financing options during your estimate. We believe quality roofing should be accessible."

**Item 5:**
- Q: "How often should I have my roof inspected?"
- A: "We recommend annual inspections, especially after severe weather. Our maintenance program includes seasonal checks and cleaning. Early detection prevents costly damage."

**Item 6:**
- Q: "What areas do you service?"
- A: "We service [multi-neighborhood coverage]. Contact us to confirm your address, but we pride ourselves on being your LOCAL roofing contractor."

**Item 7:**
- Q: "Can you work with my insurance claim?"
- A: "Absolutely. We have experience with insurance claims and can communicate directly with adjusters. We'll help maximize your coverage and minimize out-of-pocket costs."

**Item 8:**
- Q: "What makes Miller & Sons different?"
- A: "35 years of family-owned trust. We treat every roof like it's protecting our own family. Premium materials, expert installation, and unmatched customer service set us apart."

**Component Structure:**
```tsx
<section className="py-20 bg-cream-white">
  <div className="max-w-3xl mx-auto px-4">
    <h2 className="font-serif text-4xl font-bold text-slate-deep text-center mb-12">
      Frequently Asked Questions
    </h2>
    
    <Accordion type="single" collapsible className="space-y-4">
      {faqItems.map((item, idx) => (
        <AccordionItem key={idx} value={`item-${idx}`} className="border border-gray-neutral/20 rounded-lg px-6">
          <AccordionTrigger className="py-4 hover:no-underline hover:text-orange-warm">
            <h3 className="font-bold text-slate-deep text-left">{item.question}</h3>
          </AccordionTrigger>
          <AccordionContent className="pb-4 text-gray-neutral">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
    
    {/* CTA: Ask Arthur */}
    <div className="mt-12 text-center">
      <p className="text-gray-neutral mb-4">Still have questions?</p>
      <Button size="lg" onClick={scrollToContact}>
        Ask Arthur During Your Estimate
      </Button>
    </div>
  </div>
</section>
```

**Animations:**
- Accordion items: Smooth expand/collapse (default Radix UI animation)
- CTA button: Fade-in on scroll

---

### 9. FOOTER (Contact Form + Info)

**Layout:**
- 3-section footer: Left (Company Info) | Center (Contact Form) | Right (Links)
- Desktop: 3-column grid
- Tablet/Mobile: Stacked (form centered)
- Bottom bar: Copyright + social links

**Contact Form Fields:**
- **Name** (text input, required, placeholder: "Your Name")
- **Phone** (tel input, required, placeholder: "(555) 123-4567")
- **Email** (email input, required, placeholder: "you@example.com")
- **Message** (textarea, optional, placeholder: "Describe your roofing needs...")
- **Submit Button** (orange-warm, lg size, text: "Request Free Estimate")

**Form Behavior:**
- All fields required except Message
- On submit: Show success message (placeholder for make.com integration)
- Error handling: Show validation errors inline
- Success: "Thank you! We'll contact you within 24 hours."

**Company Info Section:**
- Address: "123 Main Street, Springfield, IL 62701"
- Phone: "(555) 123-4567"
- Emergency: "(555) 123-4568"
- Email: "info@millerandsons.com"
- Hours: "Mon-Fri: 8am-6pm | Sat: 9am-3pm | Sun: Closed"

**Quick Links:**
- Services
- Our Work
- About Us
- Contact Us
- Privacy Policy
- Terms of Service

**Bottom Bar:**
- Copyright: "© 2025 Miller & Sons Roofing. All rights reserved."
- Social: Facebook, Google Reviews, LinkedIn icons (non-functional placeholders)

**Component Structure:**
```tsx
<footer id="contact" className="bg-slate-deep pt-20 pb-8">
  <div className="max-w-6xl mx-auto px-4">
    {/* 3-Column Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
      {/* Left: Company Info */}
      <div>
        <h3 className="font-serif text-xl font-bold text-cream-white mb-6">
          Miller & Sons
        </h3>
        <div className="space-y-3 text-gray-neutral text-sm">
          <p>📍 123 Main Street</p>
          <p>Springfield, IL 62701</p>
          <p className="mt-4">📞 (555) 123-4567</p>
          <p>🚨 Emergency: (555) 123-4568</p>
          <p>📧 info@millerandsons.com</p>
          <p className="mt-4 text-xs">Mon-Fri: 8am-6pm</p>
          <p className="text-xs">Sat: 9am-3pm</p>
        </div>
      </div>
      
      {/* Center: Contact Form */}
      <div>
        <h3 className="font-serif text-xl font-bold text-cream-white mb-6">
          Get Your Free Estimate
        </h3>
        <form className="space-y-4">
          <Input
            placeholder="Your Name"
            required
            className="bg-slate-dark border-gray-neutral/30 text-cream-white"
          />
          <Input
            type="tel"
            placeholder="(555) 123-4567"
            required
            className="bg-slate-dark border-gray-neutral/30 text-cream-white"
          />
          <Input
            type="email"
            placeholder="you@example.com"
            required
            className="bg-slate-dark border-gray-neutral/30 text-cream-white"
          />
          <Textarea
            placeholder="Describe your roofing needs..."
            rows={4}
            className="bg-slate-dark border-gray-neutral/30 text-cream-white"
          />
          <Button className="w-full" size="lg">
            Request Free Estimate
          </Button>
        </form>
      </div>
      
      {/* Right: Quick Links */}
      <div>
        <h3 className="font-serif text-xl font-bold text-cream-white mb-6">
          Quick Links
        </h3>
        <ul className="space-y-2 text-gray-neutral text-sm">
          <li><a href="#services" className="hover:text-orange-warm transition-colors">Services</a></li>
          <li><a href="#gallery" className="hover:text-orange-warm transition-colors">Our Work</a></li>
          <li><a href="#timeline" className="hover:text-orange-warm transition-colors">About Us</a></li>
          <li><a href="#contact" className="hover:text-orange-warm transition-colors">Contact</a></li>
          <li><a href="#" className="hover:text-orange-warm transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-orange-warm transition-colors">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    
    {/* Bottom Bar */}
    <div className="border-t border-gray-neutral/20 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-neutral text-sm">
        © 2025 Miller & Sons Roofing. All rights reserved.
      </p>
      <div className="flex gap-4 mt-4 md:mt-0">
        <a href="#" className="text-gray-neutral hover:text-orange-warm transition-colors">
          <Facebook size={20} />
        </a>
        <a href="#" className="text-gray-neutral hover:text-orange-warm transition-colors">
          <MessageSquare size={20} />
        </a>
        <a href="#" className="text-gray-neutral hover:text-orange-warm transition-colors">
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  </div>
</footer>
```

**Form Handling (Placeholder):**
```tsx
const handleFormSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  // TODO: Integrate with make.com webhook
  const formData = {
    name: formState.name,
    phone: formState.phone,
    email: formState.email,
    message: formState.message,
    timestamp: new Date().toISOString(),
    source: 'website'
  }
  
  // Placeholder: Show success
  setFormSuccess(true)
  setTimeout(() => setFormSuccess(false), 5000)
}
```

**Animations:**
- Form: Fade-in on scroll
- Success message: Slide-in + auto-dismiss after 5s

---

## ANIMATION SPECIFICATIONS

All animations use Framer Motion. Implement these exact patterns:

### Global Animation Patterns

**Scroll-Based Fade-In & Slide-Up:**
```tsx
const fadeInUpVariants = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, amount: 0.2 }
}

<motion.div variants={fadeInUpVariants}>Content</motion.div>
```

**Staggered Children (Delay increases per child):**
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // 100ms delay between children
      delayChildren: 0.2 // 200ms before first child
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

<motion.div variants={containerVariants} initial="hidden" whileInView="show">
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants}>{item}</motion.div>
  ))}
</motion.div>
```

**Scale on Hover:**
```tsx
<motion.div
  whileHover={{ scale: 1.02 }}
  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
>
  Card Content
</motion.div>
```

**Parallax Scroll (Multiple Layers):**
```tsx
const { scrollY } = useScroll()
const y1 = useTransform(scrollY, [0, 500], [0, 150])
const y2 = useTransform(scrollY, [0, 500], [0, 100])

<motion.div style={{ y: y1 }}>Layer 1</motion.div>
<motion.div style={{ y: y2 }}>Layer 2</motion.div>
```

### Section-Specific Animations

**Hero Section:**
- Trust badges: Fade-in + slide-up (delay: 0ms)
- Headline: Fade-in + slide-up (delay: 100ms)
- Subheadline: Fade-in + slide-up (delay: 200ms)
- CTA buttons: Fade-in + scale (delay: 300ms)
- Roofline silhouettes: Parallax on scroll (y: [0, 80] over 500px scroll)

**Services Cards:**
- Container: Stagger children (100ms delay)
- Each card: Fade-in + slide-up (500ms duration)
- On hover: Scale 1.02 + shadow-md added

**Timeline:**
- Events: Stagger with 150ms delay
- Desktop alternating: Slide from left/right
- Mobile: Slide from left only

**Testimonials:**
- Current testimonial: Fade-in (300ms)
- Stats: Counter animation (1000ms) on scroll

**Gallery Projects:**
- Projects: Stagger fade-in + slide-up (600ms total stagger)

**Guarantee Promises:**
- Promises: Stagger with 100ms delay
- Each promise: Fade-in + scale from 0.9 to 1

**FAQ:**
- Accordion: Radix UI default (smooth expand/collapse)
- CTA at bottom: Fade-in on scroll

**Footer:**
- Form fields: Stagger fade-in
- Form submit: Button scale on click

### Canvas Animation (Gradient Mesh)

**Animated Gradient Mesh:**
- 5 floating gradient points (corners + center)
- Colors: Slate deep, orange warm, cream white, gray neutral, slate dark
- Movement: Sinusoidal drift using Math.sin(time * speed)
- Speed: 0.001 rad/ms (completes cycle in ~6283ms)
- Gradient: Radial gradient at each point, blended via canvas globalCompositeOperation
- Update: requestAnimationFrame loop
- Performance: Hardware-accelerated, optimized for 60fps

---

## RESPONSIVE DESIGN

### Breakpoints

- **Mobile:** 320px - 640px (default)
- **Tablet:** 641px - 1024px (md: 768px in Tailwind)
- **Desktop:** 1025px+ (lg: 1024px in Tailwind)

### Mobile-First Approach

**Header:**
- Mobile: Burger menu only, logo centered, CTA in mobile menu
- Tablet: Logo left, burger menu right
- Desktop: Logo left, nav center, CTA right

**Hero:**
- Mobile: Single column, centered, smaller headline (32px)
- Tablet: Single column, larger headline (42px)
- Desktop: Centered max-width content, largest headline (56px)

**Services:**
- Mobile: 1 column stacked
- Tablet: 2 columns
- Desktop: 3 columns

**Timeline:**
- Mobile: Vertical stacked with left-aligned timeline
- Tablet: Vertical stacked
- Desktop: Horizontal alternating layout

**Gallery:**
- Mobile: 1 column before/after pairs
- Tablet: 2 columns
- Desktop: 2 columns with larger cards

**Testimonials:**
- Mobile: Swipeable carousel, pagination dots below
- Desktop: Single testimonial with navigation dots

**Footer:**
- Mobile: Stacked vertically, form centered
- Tablet: Stacked, form left-aligned
- Desktop: 3-column grid layout

### Responsive Utilities

Use Tailwind responsive prefixes throughout:
- `md:` for tablet changes (768px+)
- `lg:` for desktop changes (1024px+)
- `sm:` for minor mobile changes (640px+)

Example:
```tsx
<div className="text-2xl md:text-3xl lg:text-4xl">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
```

---

## CONTENT STRUCTURE & DATA

### Images (Placeholders Ready for Upload)

**Format:** Organize under `/public/images/`

```
/public/images/
  /services/ (3 service icons - optional)
  /testimonials/ (5 avatar placeholders - 80x80)
  /gallery/
    /before-after/ (6 before/after project pairs)
```

**Placeholder Specifications:**
- Services avatars: 80x80px, solid orange-warm with initials
- Testimonials: 80x80px, gradient backgrounds
- Gallery before/after: 400x300px, placeholder image or solid gray

### SEO & Meta Tags

**Meta Tags (in layout.tsx metadata export):**
```tsx
export const metadata: Metadata = {
  title: 'Miller & Sons Roofing | Expert Roof Replacement & Repair - Springfield, IL',
  description: 'Professional roof replacement, repair, and maintenance. 35 years of trusted roofing services. Licensed, insured, 24/7 emergency response. Get your free estimate today.',
  keywords: 'roofing contractor, roof replacement, roof repair, emergency roofing, Springfield IL',
  
  openGraph: {
    title: 'Miller & Sons Roofing - 35 Years of Excellence',
    description: 'Your roof protects your family. We protect your roof. Free estimates available.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }]
  }
}
```

**Schema Markup (Structured Data):**
```tsx
// In Hero or Layout
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org/',
      '@type': 'LocalBusiness',
      'name': 'Miller & Sons Roofing',
      'image': '/logo.png',
      'description': 'Professional roofing contractor',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '123 Main Street',
        'addressLocality': 'Springfield',
        'addressRegion': 'IL',
        'postalCode': '62701',
        'addressCountry': 'US'
      },
      'telephone': '(555) 123-4567',
      'url': 'https://millerandsonsroofing.com',
      'priceRange': '$$$',
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '5',
        'reviewCount': '127'
      }
    })
  }}
/>
```

### Roofing Niche Keywords

Primary keywords integrated throughout:
- Roof replacement (Hero, Services, FAQ)
- Roof repair (Services, FAQ)
- Emergency roofing (Header, Hero, Services, FAQ)
- Roof restoration (Services, Gallery)
- Roof renewal (Timeline)
- Local roofing contractor (Hero, FAQ)
- Licensed roofer (Guarantee)
- Roof warranty (Guarantee, FAQ)
- Storm damage repair (Services, Gallery, FAQ)

---

## INTEGRATION & BACKEND

### make.com Webhook Integration

**Form Submission Flow:**
1. User fills footer contact form
2. On submit, form data collected with metadata
3. POST request to make.com webhook URL (placeholder)
4. Success response triggers success message

**Form Data Structure:**
```json
{
  "name": "string",
  "phone": "string",
  "email": "string",
  "message": "string (optional)",
  "timestamp": "ISO 8601",
  "source": "website",
  "userAgent": "string",
  "referrer": "string"
}
```

**Placeholder Implementation:**
```tsx
// Footer form submit handler
const handleSubmit = async (formData: FormData) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL || '#',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }
    )
    
    if (response.ok) {
      // Show success message
      setFormSuccess(true)
    }
  } catch (error) {
    console.error('Form submission error:', error)
    // Show error message
  }
}
```

**Environment Variable:**
```
NEXT_PUBLIC_MAKE_WEBHOOK_URL=https://hook.make.com/your-webhook-url
```

### Analytics (Placeholder)

```tsx
// Track conversions
import { useEffect } from 'react'

export function useConversionTracking() {
  useEffect(() => {
    // Track CTA clicks
    document.addEventListener('click', (e) => {
      if ((e.target as HTMLElement)?.getAttribute('data-cta')) {
        // Send to analytics
      }
    })
  }, [])
}
```

---

## PERFORMANCE TARGETS

- **Lighthouse Scores:** 90+ (Performance), 95+ (Accessibility, SEO)
- **Core Web Vitals:** LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Bundle Size:** < 200KB (optimized)
- **Time to Interactive:** < 3.5s
- **Image Optimization:** WebP format with fallbacks, lazy loading

---

## ACCESSIBILITY

### WCAG 2.1 AA Compliance

- Semantic HTML: `<main>`, `<header>`, `<footer>`, `<nav>`, `<section>`
- ARIA Attributes: `role`, `aria-label`, `aria-expanded` on accordions
- Color Contrast: All text meets 4.5:1 ratio minimum
- Keyboard Navigation: All interactive elements focusable
- Screen Reader Text: Hidden labels for icons using `sr-only` class
- Focus States: Visible focus ring on all buttons and links

**Example:**
```tsx
<button
  aria-label="Toggle mobile menu"
  aria-expanded={mobileMenuOpen}
  onClick={toggleMobileMenu}
  className="focus:ring-2 focus:ring-orange-warm focus:ring-offset-2 rounded-lg"
>
  <Menu className="sr-only">Menu</Menu>
  {/* Visual hamburger icon */}
</button>
```

---

## BUILD & DEPLOYMENT

### Dependencies

```json
{
  "next": "^16.0.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "framer-motion": "^11.0.0",
  "react-hook-form": "^7.0.0",
  "lucide-react": "^0.263.0",
  "tailwindcss": "^4.0.0",
  "@radix-ui/react-accordion": "^1.0.0"
}
```

### Build Command

```bash
pnpm build
```

### Dev Command

```bash
pnpm dev
```

### Deployment

Target: Vercel (one-click deploy from GitHub)

---

## VERIFICATION CHECKLIST

Before launch, confirm:

- ✅ All 9 sections render correctly on mobile (320px), tablet (768px), desktop (1024px+)
- ✅ Hero background shows animated gradient mesh
- ✅ All 6+ CTAs scroll smoothly to footer contact form
- ✅ Header burger menu toggles on mobile
- ✅ Testimonial carousel swipes on mobile
- ✅ Timeline displays horizontally (desktop) and vertically (mobile)
- ✅ Gallery before/after pairs display side-by-side
- ✅ FAQ accordion expands/collapses smoothly
- ✅ Form validation shows errors inline
- ✅ All animations run at 60fps (no jank)
- ✅ Images load with proper placeholders
- ✅ Lighthouse scores: 90+ Performance, 95+ Accessibility, 95+ SEO
- ✅ All links navigate correctly
- ✅ Footer form submission works (make.com integration ready)
- ✅ No console errors or warnings
- ✅ Keyboard navigation works throughout
- ✅ Color contrast meets WCAG AA standards

---

## SUMMARY

This is a complete, production-ready roofing contractor landing page with:

- **Professional Design:** Premium 4-color palette with serif/sans typography
- **Conversion-Focused:** 6+ CTA touchpoints across all sections
- **Fully Responsive:** Mobile-first, tested on all breakpoints
- **Dynamic & Animated:** Canvas gradient mesh, scroll animations, smooth interactions
- **Content-Rich:** 9 sections with specific messaging for each audience touchpoint
- **SEO-Optimized:** Keyword-rich content, schema markup, meta tags
- **Accessible:** WCAG 2.1 AA compliant with semantic HTML
- **Integration-Ready:** Placeholder for make.com webhook, analytics setup
- **Developer-Friendly:** Modular components, under 600 lines each, clear documentation

A fresh v0 instance can build this exact project in one execution using this specification.
