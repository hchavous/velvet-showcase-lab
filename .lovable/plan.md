# Remove the green overlay on the "Ultra Modern Luxe" (D) tab

## Root cause — verified

Your screenshot is the **D (Ultra Modern Luxe)** draft site, and the green comes from a page element, not the clip:

- The hero video sits under a full-size veil (`bg-background/70`, KativateReview.tsx line 254).
- The D theme's background color is literally deep emerald green (`--background: 168 82% 8%` in index.css), so the veil paints a 70% green layer over the whole skyline animation.
- The other tabs look fine because their backgrounds are ivory/white/cream.

## The fix

1. **Give each draft site its own hero-veil color** in index.css:
   - A → warm ivory, B → white, C → soft cream (same as today, no visible change).
   - D → neutral charcoal (no green hue), so the night skyline reads clean and dark.
2. **Point the hero veil at that new color** in KativateReview.tsx (one class change on the overlay).
3. **Undo my earlier clip edit.** While hunting this, I re-graded the Modern Luxe (B) skyline video — that was aimed at the wrong thing. I'll restore that clip to the untouched original so only the D-veil fix ships.
4. **Verify** the D tab shows a neutral dark veil, A/B/C are unchanged, tabs and mode switch still work, mobile is clean.
5. **Publish** to havenchavous.com so the fix is live.

## What stays untouched

- Password gate ("carebear"), both modes (Brand overview / Draft websites), all four skyline clips' footage, all copy, logos, and other downloads.

## Technical details

- New per-theme token `--hero-veil` + a small `.hero-veil` utility class in `src/index.css`; the overlay div switches from `bg-background/70` to `hero-veil`.
- B clip restored by re-running the original H.264 transcode from your uploaded file (same filename, same settings: libx264, yuv420p, CRF 21, faststart).
