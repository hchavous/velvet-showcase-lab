

## Anthropic-Inspired Aesthetic Restyle

A purely visual transformation: warm neutrals with terra cotta accents, serif+sans-serif font pairing, and a dark/light mode toggle. No content, structure, or functionality changes.

### Files to Create

| File | Purpose |
|------|---------|
| `src/hooks/useTheme.ts` | Theme state hook (dark/light toggle, localStorage persistence, toggles `.light` class on `<html>`) |
| `src/components/ThemeToggle.tsx` | Sun/Moon toggle button using lucide-react icons |

### Files to Modify

| File | Change |
|------|--------|
| `index.html` | Replace Outfit font link with DM Sans + Source Serif 4 Google Fonts links |
| `src/index.css` | Replace all CSS custom properties with warm palette (dark default + `.light` class), update `.gradient-text`/`.glow`/`.glow-sm` utilities to terra cotta, update scrollbar colors, add `body` serif default + heading sans-serif base rule |
| `tailwind.config.ts` | Change `fontFamily` to DM Sans (sans) + Source Serif 4 (serif), remove Outfit references, add `accent-blue` and `accent-green` custom colors, remove old gradient custom properties |
| `src/components/layout/Layout.tsx` | Remove the animated gradient background orbs div entirely |
| `src/components/layout/Header.tsx` | Import and render `<ThemeToggle />` in desktop nav (after LinkedIn icon) and mobile nav |

### Technical Details

**Color system**: All existing components use `hsl(var(--variable))` via shadcn/ui conventions, so swapping the CSS custom properties cascades everywhere automatically — no per-component color changes needed.

**Theme toggle**: The hook defaults to `"dark"`, persists to `localStorage`, and toggles the `.light` class on `document.documentElement`. The `.light` CSS block overrides all variables for the light palette.

**Typography**: Body text defaults to Source Serif 4 (serif) via CSS base rule. All headings (h1–h6) override to DM Sans via CSS base rule. Buttons, nav links, badges inherit sans from their heading/UI context. No need to add `font-serif`/`font-sans` classes to individual components — the CSS base rules handle it.

**What stays the same**: All page content, routes, component structure, downloads, carousels, lightbox functionality — everything except colors, fonts, and the background effect.

