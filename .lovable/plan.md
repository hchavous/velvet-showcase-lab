# Kativate brand review page

## Scope
Add a discreet, session-unlocked review page at `/kativate-review` inside the existing site. Keep every existing page and the main navigation unchanged, except for a subtle footer link.

## Page structure
- Add a password screen using the exact password `Kabearie`, with a friendly error and `sessionStorage` persistence.
- After unlock, show the supplied intro copy, a PDF download action, and a sticky direction navigator with all four options always one click away:
  - A Classic Hospitality
  - B Modern Luxe
  - C Soft Garden
  - D Ultra Modern Luxe
- Build four clearly separated direction sections. Each will include the exact mood copy, named colors and hex values, palette board, large wordmark area, large monogram area, and the matching dramatic MP4 with muted autoplay, loop, inline playback, and controls.
- Direction D will have separate light-ground and dark-ground presentation areas for both its wordmark and monogram.
- Add polished placeholders for every logo that has not arrived yet. The attached A wordmark will be shown now; placeholders will state which remaining asset belongs there without implying final artwork.
- Match the current warm dark/light theme, typography, cards, borders, and restrained accents. Make the sticky navigation and media layouts work on phones and desktops.

## Media
- Add a dedicated `public/kativate/` folder containing the four palette images, four intro MP4s, attached A wordmark, and review PDF, as explicitly requested.
- Use only the supplied MP4s for motion. No HTML logo animation will be added.
- Give images and videos stable aspect ratios, meaningful alternative text, lazy loading where appropriate, and playback fallbacks.

## Integration
- Add the `/kativate-review` route before the catch-all route.
- Add only a subtle `Kativate` footer link, not a header or main-navigation item.
- Add page-specific title and description metadata and keep the review route out of the sitemap.

## Technical notes
- The password gate is intentionally lightweight client-side access control. It discourages casual viewing but does not provide server-grade protection.
- The review page will be split into focused local components and data definitions so the follow-up logo upload can be wired in without restructuring the page.
- After implementation, verify the password flow, session refresh behavior, all four navigation targets, PDF download, video loading, theme switching, and mobile/desktop layouts in the live preview.
