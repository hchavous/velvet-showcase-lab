

## Update Projects Page: Self Storage Rental Rates Card

### Overview

Replace the "AI Document Management Platform" card (2nd project) with a new card linking to selfstoragerentalrates.com, including a screenshot thumbnail and updated content based on the live site.

### What Will Change

**1. Save a screenshot** of selfstoragerentalrates.com to `public/projects/selfstoragerentalrates.png`.

**2. Replace the 2nd project entry** with:

| Field | Value |
|-------|-------|
| Title | Self Storage Rental Rates |
| Description | Comprehensive self storage data platform tracking 1,500+ CubeSmart facilities and 23K+ rate records across 48 states, updated daily. |
| Icon | `Database` (already imported) |
| URL | `https://selfstoragerentalrates.com` |
| Thumbnail | `/projects/selfstoragerentalrates.png` |
| Tags | `React`, `Data Platform`, `Web Scraping`, `Real Estate` |
| Highlights | 1,500+ facilities tracked with daily rate updates |
| | 23K+ rental rate records across 48 states + DC |
| | Interactive regional map with facility filtering |
| | Facility-level and market-level rate analytics |

**3. Add `MapPin` icon import** from lucide-react (optional, or keep `Database` which fits well for a data platform).

### Files to Create
- `public/projects/selfstoragerentalrates.png` — screenshot of the homepage

### Files to Modify
- `src/pages/Projects.tsx` — replace 2nd project entry (lines 32-43)

### Technical Details

No structural changes needed — the card rendering logic already supports `url` and `thumbnail` from the Quanthaven implementation. This is purely a data swap for the 2nd entry in the `projects` array.

