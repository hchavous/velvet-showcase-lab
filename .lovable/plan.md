

## Add "Excel Models" Page

### Overview
Create a new page showcasing three downloadable Excel models as cards with thumbnails, descriptions, and download buttons. The models are password-protected.

### Model Details

| Model | Description |
|---|---|
| **Auto Loan Underwriting Model** | Consumer credit risk assessment tool with borrower inputs, calculated risk metrics, approval scorecard, and full amortization schedule. |
| **Multifamily Returns Analyzer** | 14-unit multifamily investment returns tracker with NOI, cash flow, IRR, equity multiple, and annual performance summary. |
| **Personal Budget Dashboard** | Fiscal year budget dashboard with income/expense tracking, savings goals, and budget vs. actual variance analysis. |

### Changes

**1. Create `src/pages/ExcelModels.tsx`**
- Page with heading "Excel Models" and subtitle about password-protected downloadable templates
- Grid of 3 cards, each with:
  - Screenshot/thumbnail placeholder (we'll generate simple preview images from the parsed content or use a styled placeholder with an Excel icon)
  - Model title
  - Short description
  - Category badge (e.g., "Consumer Lending", "Real Estate", "Personal Finance")
  - Download button using the same blob-fetch pattern from the resume download
  - Small note that models are password-protected
- Matches existing page styling (Layout wrapper, fade-in animations, card styles)

**2. Copy the 3 .xlsx files to `public/models/`**
- `AutoLoan_Underwriting_Model.xlsx`
- `Multifamily_Returns_Analyzer.xlsx`
- `Personal_Budget_Dashboard.xlsx`

**3. Update `src/App.tsx`**
- Add `/excel-models` route

**4. Update `src/components/layout/Header.tsx`**
- Add `{ href: "/excel-models", label: "Excel Models" }` to `navLinks`

### Card Layout
```text
┌──────────────────────────────────┐
│  [Excel icon / styled preview]   │
│                                  │
│  Auto Loan Underwriting Model    │
│  [Consumer Lending]              │
│                                  │
│  Consumer credit risk assessment │
│  with approval scorecard and     │
│  amortization schedule.          │
│                                  │
│  🔒 Password-protected           │
│  [⬇ Download Model]             │
└──────────────────────────────────┘
```

Four files modified/created total.

