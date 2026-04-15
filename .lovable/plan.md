

## Add Manufacturing Estimator to Excel Models

### Changes

**1. Copy assets**
- Copy `user-uploads://mfgestimator.png` to `src/assets/thumbnail-mfgestimator.png`
- Copy `user-uploads://manufacturing_estimator_locked.xlsx` to `public/models/Manufacturing_Job_Cost_Estimator.xlsx`

**2. Update `src/pages/ExcelModels.tsx`**
- Import the new thumbnail
- Add a 4th entry to the `models` array:
  - Title: "Manufacturing Job Cost Estimator"
  - Category: "Manufacturing"
  - Description: "Fully-loaded job cost estimator with material, labor, and machine time inputs, automatic cost rollup, markup/margin summary, and standard rate table."
  - File/filename pointing to the new xlsx

### Files touched
| File | Action |
|------|--------|
| `src/assets/thumbnail-mfgestimator.png` | Create (copy) |
| `public/models/Manufacturing_Job_Cost_Estimator.xlsx` | Create (copy) |
| `src/pages/ExcelModels.tsx` | Add import + model entry |

