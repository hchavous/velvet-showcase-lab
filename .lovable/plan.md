

## Add SaaS Financial Plan to Excel Models

### Changes

**1. Copy assets**
- Copy `user-uploads://saasthumbnail.png` to `src/assets/thumbnail-saas.png`
- Copy `user-uploads://SaaS_Financial_Plan_Enterprise_Quanthaven.xlsx` to `public/models/SaaS_Financial_Plan.xlsx`

**2. Update `src/pages/ExcelModels.tsx`**
- Import the new thumbnail
- Add a 5th entry to the `models` array:
  - Title: "SaaS Financial Plan"
  - Category: "SaaS"
  - Thumbnail: the uploaded screenshot
  - Description: "36-month SaaS financial plan with MRR/ARR forecasting by tier, headcount planning, OpEx breakdown, P&L, cash flow, balance sheet, and key metrics dashboard."
  - File/filename pointing to the new xlsx

### Files touched
| File | Action |
|------|--------|
| `src/assets/thumbnail-saas.png` | Create (copy) |
| `public/models/SaaS_Financial_Plan.xlsx` | Create (copy) |
| `src/pages/ExcelModels.tsx` | Add import + model entry |

