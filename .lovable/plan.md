# Add Blog tab with first post

## Scope
Add a Blog section to the site with an index page at `/blog` and the first post at `/blog/ai-agents-and-automation`. Wire up routing and the header nav. Inline three theme-aware SVG diagrams in the post.

## Files to create

### `src/pages/Blog.tsx`
- Blog index, wrapped in `<Layout>`.
- `usePageMeta("Blog | Haven Chavous", "Field notes on building real systems, real tools, and where AI actually earns its place.")`
- Centered header: `<h1>Blog</h1>` + subtitle paragraph.
- Posts data array (one entry today: `ai-agents-and-automation`, "May 2026", excerpt as specified).
- Responsive grid of `Card`s matching ExcelModels styling (`bg-card/50 border-border/50 rounded-2xl`).
- Each card wrapped in a `react-router-dom` `<Link>` to the post URL, with title, muted date line, excerpt, and "Read post →" footer.
- Stagger entries with `animate-fade-in-up` and `animationDelay`, matching ExcelModels pattern.

### `src/pages/blog/AIAgentsAndAutomation.tsx`
- Wrapped in `<Layout>`.
- `usePageMeta` with the specified post title and description.
- Centered narrow container for article (max-w-3xl), inherits Source Serif 4 body font (no font override).
- Title `<h1>` + small muted date/reading-time line ("May 2026 · 12 min read").
- Section `<h2>` headings use `text-2xl font-semibold mt-12 mb-4`.
- Body `<p>` use `text-foreground leading-relaxed mb-4` (text-foreground per spec).
- All article copy rendered verbatim from the spec, with section headings:
  1. (Opening, no heading)
  2. The product
  3. The marketing version  *(Graphic 2 at end of section)*
  4. What the system actually does  *(Graphic 1 after the "...React front end at selfstoragerentalrates.com." paragraph)*
  5. The underlying pattern  *(Graphic 3 after the opening paragraph)*
  6. How to evaluate the next pitch
  7. Why the calibration matters
- Three inlined SVG figures wrapped in `<figure className="my-10">` with `<figcaption>` captions; SVGs use `role="img"` and `<title>`/`<desc>` for a11y.
- SVGs use `hsl(var(--card))`, `hsl(var(--border))`, `hsl(var(--primary))`, `hsl(var(--foreground))`, `hsl(var(--muted-foreground))` so they adapt to dark/light theme.
- JSX-camelCased attributes (`viewBox`, `strokeWidth`, `textAnchor`, `fontFamily`, etc.).
- Unique marker ids per SVG (`arrow-pipeline`, `arrow-pitch`, `arrow-spectrum`) to avoid collisions.

## Files to modify

### `src/App.tsx`
Add imports and routes (before catch-all `*`):
```tsx
import Blog from "./pages/Blog";
import AIAgentsAndAutomation from "./pages/blog/AIAgentsAndAutomation";
// ...
<Route path="/blog" element={<Blog />} />
<Route path="/blog/ai-agents-and-automation" element={<AIAgentsAndAutomation />} />
```

### `src/components/layout/Header.tsx`
Insert `{ href: "/blog", label: "Blog" }` into `navLinks` between Web Apps and Contact. No other changes.

## Constraints respected
- No edits to `src/index.css`, `useTheme.ts`, `Layout.tsx`, or any other existing page.
- Existing routes remain intact; new routes placed before catch-all.
- Typography inherits from globals; no `font-family` overrides on the article.
- SVGs are inline (not `<img>`) so CSS variables resolve and theme toggling works automatically.
