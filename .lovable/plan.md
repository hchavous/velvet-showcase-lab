

## Improve SEO for havenchavous.com

### What we'll do
Add missing SEO signals so Google can properly index and rank your site for "haven chavous" searches.

### Changes

**1. Sitemap** — `public/sitemap.xml`
New file listing all 4 routes with `https://www.havenchavous.com` as the base URL.

**2. Robots.txt** — `public/robots.txt`
Add `Sitemap: https://www.havenchavous.com/sitemap.xml` directive.

**3. Head meta updates** — `index.html`
- Add `<link rel="canonical" href="https://www.havenchavous.com/">`.
- Add `<meta property="og:url">`.
- Add JSON-LD `Person` structured data (name, job title, url, sameAs links).
- Fix `twitter:site` from `@Lovable` to remove it (or your handle if you have one).

**4. Per-page meta** — new `src/hooks/usePageMeta.ts`
Lightweight hook that sets `document.title` and meta description per route. Called in each page component:
- **Index**: "Haven Chavous | Financial Modeling & AI Innovation"
- **Experience**: "Experience | Haven Chavous"
- **Contact**: "Contact | Haven Chavous"
- **Excel Models**: "Excel Models | Haven Chavous"

### Files touched
| File | Action |
|------|--------|
| `public/sitemap.xml` | Create |
| `public/robots.txt` | Update |
| `index.html` | Update |
| `src/hooks/usePageMeta.ts` | Create |
| `src/pages/Index.tsx` | Add hook call |
| `src/pages/Experience.tsx` | Add hook call |
| `src/pages/Contact.tsx` | Add hook call |
| `src/pages/ExcelModels.tsx` | Add hook call |

### Manual steps (for you after deployment)
- **Submit sitemap** to Google Search Console at `https://www.havenchavous.com/sitemap.xml`
- **Add backlinks** from your LinkedIn, GitHub, quanthaven.ai, xlshortcuts.com profiles pointing to havenchavous.com

