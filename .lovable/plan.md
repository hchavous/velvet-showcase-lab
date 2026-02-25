

## Update Projects Page: Quanthaven.ai Card

### Overview

Transform the first project card to link to quanthaven.ai with a site thumbnail/preview, updated description, tags, and highlights based on the actual live site content.

### What Will Change

**1. Update the Project interface** to support external links and optional thumbnail images:

```ts
interface Project {
  title: string;
  description: string;
  icon: React.ElementType;
  tags: string[];
  highlights: string[];
  url?: string;          // external link
  thumbnail?: string;    // preview image URL or screenshot path
}
```

**2. Replace the first project entry** ("Hearthfire Analytics Portal") with Quanthaven Labs:

| Field | Value |
|-------|-------|
| Title | Quanthaven Labs |
| Description | Professional financial modeling platform with free and premium calculators for investment analysis, valuation, and capital structuring. |
| Icon | `LineChart` (keep) |
| URL | `https://quanthaven.ai` |
| Tags | `React`, `TypeScript`, `Financial Modeling`, `SaaS` |
| Highlights | 8+ professional financial calculators (IRR, WACC, Cap Rate, DSCR, etc.) |
| | Capital stack and PE waterfall distribution modeling |
| | Formula-based Excel exports with no account required |
| | Real estate unit mix optimizer with interactive visualizations |

**3. Add a site thumbnail/preview** to the card using an Open Graph screenshot. We'll store a screenshot of quanthaven.ai in `public/projects/` and reference it in the card. The image will appear at the top of the card inside an `AspectRatio` container.

**4. Update the card rendering** to include:
- A clickable thumbnail preview at the top of each card (when a thumbnail exists)
- An external link icon + "Visit Site" button in the card footer (when a URL exists)
- The entire card will be clickable, opening the external URL in a new tab

### Files to Modify
- `src/pages/Projects.tsx` — update interface, first project data, and card rendering

### Files to Create
- `public/projects/quanthaven.png` — screenshot of quanthaven.ai homepage (copied from fetched screenshot)

### Technical Details

The card layout will change from:

```
┌──────────────────────┐
│ [icon]               │
│ Title                │
│ Description          │
│ [tags]               │
│ • highlight 1        │
│ • highlight 2        │
└──────────────────────┘
```

To:

```
┌──────────────────────┐
│ ┌──────────────────┐ │
│ │   thumbnail      │ │
│ │   preview        │ │
│ └──────────────────┘ │
│ [icon]               │
│ Title                │
│ Description          │
│ [tags]               │
│ • highlight 1        │
│ • highlight 2        │
│ Visit Site →         │
└──────────────────────┘
```

Cards without a URL will render exactly as they do today.

