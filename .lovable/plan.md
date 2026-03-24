

## Restructure Experience Page into Two Tabs

### Overview
Split the Experience page into two tabs: **Full-Time Experience** and **Consulting**, using the existing `Tabs` component. The full-time tab mirrors the resume; the consulting tab keeps the Quanthaven umbrella with the remaining non-resume clients.

### Tab 1: Full-Time Experience
Four standalone `ExperienceCard` entries matching the resume:

| Company | Role | Period |
|---------|------|--------|
| Hearthfire Holdings | Senior Business Intelligence Architect | 03/2025 – Present |
| Top Hat CRE | Director, Investment Analytics | 01/2022 – 12/2024 |
| OneMain Financial | Quantitative Analytics Lead | 01/2017 – 12/2021 |
| Pro Capital, LLC | Senior Quantitative/Modeling Analyst | 01/2015 – 01/2017 |

Highlights updated to match the new resume wording (e.g., Hearthfire and Top Hat bullets differ slightly from the consulting versions).

### Tab 2: Consulting
Quanthaven Labs umbrella with nested client sub-cards for engagements **not on the resume**:
- Evalla Advisors
- Voltage Venture Capital
- GlassPoint
- Harvard Business School
- VisualDx
- CDW
- Source Renewables

Same visual pattern: umbrella card, left-border nesting, "Consulting Client" badges.

### Featured Projects
Remains at the bottom, outside/below the tabs, visible regardless of active tab.

### Technical Changes
**Single file modified**: `src/pages/Experience.tsx`
- Import `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` from `@/components/ui/tabs`
- Move Hearthfire and Top Hat CRE out of `quanthaven.clients` into the `fullTimeExperiences` array with updated highlights from the resume
- Update Pro Capital highlights to match the new resume
- Wrap the experience sections in `<Tabs defaultValue="full-time">` with two tab triggers
- Featured Projects section sits outside the `Tabs` wrapper

