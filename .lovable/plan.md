

## Replace Favicon and Add Icon Files

This plan will update your site's favicon and add all the necessary icon files for complete browser and device support.

---

### What Will Be Done

**1. Copy Icon Files to Public Directory**

The following 6 uploaded icon files will be copied to the `public/` folder:

| File | Purpose |
|------|---------|
| `favicon.ico` | Main browser favicon (replaces existing) |
| `favicon-16x16.png` | Small favicon for browser tabs |
| `favicon-32x32.png` | Standard favicon for browser tabs |
| `apple-touch-icon.png` | iOS home screen icon |
| `android-chrome-192x192.png` | Android home screen icon (small) |
| `android-chrome-512x512.png` | Android home screen icon (large) |

**2. Update index.html**

Add proper link tags in the `<head>` section to reference all icons:

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
```

**3. Create Web App Manifest (site.webmanifest)**

Add a manifest file for Android/PWA support that references the Chrome icons:

```json
{
  "name": "Haven Chavous",
  "short_name": "HC",
  "icons": [
    { "src": "/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png" }
  ],
  "theme_color": "#000000",
  "background_color": "#000000",
  "display": "standalone"
}
```

---

### Files to Create/Modify

- **Copy**: 6 icon files to `public/`
- **Create**: `public/site.webmanifest`
- **Modify**: `index.html` (add icon link tags and manifest reference)

