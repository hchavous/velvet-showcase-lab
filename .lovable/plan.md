

## Update Projects Page: XL Shortcuts Card

### Overview

Replace the "Investment Returns Modeling Platform" card (3rd project) with a new card linking to xlshortcuts.com, including a screenshot thumbnail and updated content.

### What Will Change

**1. Save a screenshot** of xlshortcuts.com to `public/projects/xlshortcuts.png`.

**2. Replace the 3rd project entry** (lines 46-57 in `Projects.tsx`) with:

| Field | Value |
|-------|-------|
| Title | XL Shortcuts |
| Description | Interactive Excel keyboard shortcuts cheat sheet with a visual keyboard layout, category filtering, and downloadable PDF for Windows and Mac. |
| Icon | `FileSpreadsheet` (already imported) |
| URL | `https://xlshortcuts.com` |
| Thumbnail | `/projects/xlshortcuts.png` |
| Tags | `React`, `Excel`, `Developer Tools`, `UI/UX` |
| Highlights | Interactive keyboard visualization highlighting shortcut keys |
| | 51+ shortcuts across Navigation, Editing, Formatting, Selection, Formulas, and Data categories |
| | Windows and Mac toggle support |
| | Downloadable PDF cheat sheet |

### Files to Create
- `public/projects/xlshortcuts.png` — screenshot of the homepage

### Files to Modify
- `src/pages/Projects.tsx` — replace 3rd project entry (lines 46-57)

### Technical Details

No structural changes needed. The card rendering logic already supports `url` and `thumbnail`. This is a data swap only.

