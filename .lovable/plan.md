

## Organize Consulting Clients by Industry Category

### Concept
Group the 10 clients into industry categories, each with a label and its associated client badges beneath. This creates a clean, scannable layout.

### Proposed Categories

| Category | Clients |
|---|---|
| **Energy & Sustainability** | Source Renewables, Glasspoint Inc |
| **Financial Services & Investment** | Evalla Advisors, Voltage Venture Capital, Cinnaire |
| **Technology & Healthcare** | VisualDx, CDW |
| **Real Estate & Construction** | National Apartment Flooring |
| **Education** | Harvard Business School |
| **Consumer & Industrial** | IPM Foods |

### Layout
```text
┌─────────────────────────────────────────────┐
│ Self-Employed / Financial Consultant        │
│ 01/2018 – Present · Wilmington, DE         │
│                                             │
│ Provided financial modeling and analytics   │
│ consulting for clients including:           │
│                                             │
│ Energy & Sustainability                     │
│ [Source Renewables]  [Glasspoint Inc]       │
│                                             │
│ Financial Services & Investment             │
│ [Evalla Advisors] [Voltage VC] [Cinnaire]  │
│                                             │
│ Technology & Healthcare                     │
│ [VisualDx]  [CDW]                          │
│                                             │
│ Real Estate & Construction                  │
│ [National Apartment Flooring]              │
│                                             │
│ Education                                   │
│ [Harvard Business School]                  │
│                                             │
│ Consumer & Industrial                       │
│ [IPM Foods]                                │
└─────────────────────────────────────────────┘
```

### Changes in `src/pages/Experience.tsx`

1. Replace the flat `highlights` array with a new structured data approach — define a `consultingCategories` array of `{ category: string, clients: string[] }` objects
2. Update the `ExperienceCard` rendering logic: when the experience has categories (or a new flag), render each category as a labeled group with its client badges underneath
3. Each category label rendered as a small semibold text, followed by a `flex flex-wrap gap-2` row of `Badge` components
4. Keep the intro paragraph ("Provided financial modeling...") above all categories

