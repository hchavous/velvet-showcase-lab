

## Replace Downloadable Resume

Copy the uploaded PDF to `public/Haven_Chavous_Resume.docx` — wait, the new file is a PDF, not a DOCX. We need to:

1. Copy the uploaded PDF to `public/Haven_Chavous_Resume.pdf`
2. Update `src/components/layout/Header.tsx` to reference the new `.pdf` filename in all three places (href, download attribute, and fetch URL in `handleResumeDownload`)

### Files changed
| File | Change |
|------|--------|
| `public/Haven_Chavous_Resume.pdf` | New file (copy from upload) |
| `src/components/layout/Header.tsx` | Change all references from `Haven_Chavous_Resume.docx` to `Haven_Chavous_Resume.pdf` |

The old `.docx` file can be removed.

