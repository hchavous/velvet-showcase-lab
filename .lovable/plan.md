

## Combine Experience & Projects into a Single Experience Page

### Resume Structure (New)
The updated resume consolidates everything under **Quanthaven Labs, LLC** (01/2022 – Present) as the umbrella entity, with individual clients as sub-entries beneath it. Pre-2022 roles (OneMain Financial, Pro Capital) remain standalone. There is no separate consulting section anymore.

### Changes

**1. Restructure `src/pages/Experience.tsx`**
- Remove the Tabs component entirely — single unified list
- Quanthaven Labs becomes a parent entry (Founder & Principal Consultant, 01/2022 – Present) with nested client sub-cards underneath:
  - Evalla Advisors (01/2026 – Present)
  - Voltage Venture Capital (10/2025 – Present)
  - Hearthfire Holdings (03/2025 – 12/2025)
  - GlassPoint (10/2023 – Present)
  - Harvard Business School (01/2023 – 12/2023)
  - Top Hat CRE (01/2022 – 12/2024)
  - VisualDx (01/2022 – 12/2023)
  - CDW (07/2022 – 12/2022)
  - Source Renewables (01/2022 – 12/2022)
- Below Quanthaven, standalone entries for:
  - OneMain Financial (01/2017 – 12/2021)
  - Pro Capital, LLC (01/2015 – 01/2017)
- Remove DuPont and Ashland entries (not on updated resume)
- Integrate project cards (Quanthaven.ai, Self Storage Rental Rates, XL Shortcuts) as a "Featured Projects" section at the bottom of this page, using the existing card layout from Projects.tsx
- Update highlights to match the new resume content

**2. Remove `src/pages/Projects.tsx`** and its route

**3. Update `src/App.tsx`**
- Remove the `/projects` route

**4. Update `src/components/layout/Header.tsx`**
- Remove "Projects" from `navLinks`

**5. Update `src/pages/Index.tsx`**
- Keep the Featured Projects carousel as-is (it links to live sites, separate from the Experience page)

### Visual Layout
```text
Experience Page
├── Quanthaven Labs, LLC — Founder & Principal Consultant
│   ├── Evalla Advisors (sub-card, indented)
│   ├── Voltage Venture Capital (sub-card)
│   ├── Hearthfire Holdings (sub-card)
│   ├── GlassPoint (sub-card)
│   ├── Harvard Business School (sub-card)
│   ├── Top Hat CRE (sub-card)
│   ├── VisualDx (sub-card)
│   ├── CDW (sub-card)
│   └── Source Renewables (sub-card)
├── OneMain Financial (standalone card)
├── Pro Capital, LLC (standalone card)
└── Featured Projects (grid of 3 project cards with thumbnails)
```

The Quanthaven sub-clients will render as slightly indented cards with a left border accent to show the parent-child relationship. No tabs needed.

