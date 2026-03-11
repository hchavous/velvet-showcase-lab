

Yes — a project carousel on the homepage would immediately showcase your work to visitors and encourage them to explore further. It's a common portfolio pattern that adds visual impact.

## Plan

**Add a Featured Projects carousel to the Home page** between the "What Drives Me" section and the "Available for Opportunities" blurb.

### What it will include
- A horizontal carousel using the existing Embla-based `Carousel` component (already in the project)
- Each slide shows a project card with thumbnail image, title, tags, and a link to the live site
- Navigation arrows and dot indicators for easy browsing
- Reuses the same project data already defined on the Projects page (Quanthaven Labs, Self Storage Rental Rates, XL Shortcuts)
- Matches the existing card styling (`bg-card/50`, `border-border/50`, `rounded-2xl`)
- Fade-in animation consistent with the rest of the homepage

### Technical approach
- **File modified**: `src/pages/Index.tsx`
- Extract the project data (or import/duplicate the array) with thumbnail, title, description, tags, and URL
- Import `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext` from the existing carousel component
- Add a new section with heading "Featured Projects" and the carousel
- Each carousel item renders a clickable card with the project thumbnail (16:9 aspect ratio), title, tags as badges, and an external link icon
- Add dot indicators below the carousel using the carousel API's `selectedScrollSnap`

### Layout
```text
┌─────────────────────────────────┐
│  "What Drives Me" section       │
├─────────────────────────────────┤
│  Featured Projects              │
│  ◀ [ Project Card with Image ] ▶│
│         ● ○ ○                   │
├─────────────────────────────────┤
│  Available for Opportunities    │
└─────────────────────────────────┘
```

Single file change — straightforward addition using existing components and patterns.

