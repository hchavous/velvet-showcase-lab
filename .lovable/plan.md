

## Improve Quanthaven Client Hierarchy Visibility

### Problem
Client sub-cards look too similar to standalone entries. A skimming reader may not realize they are consulting engagements under the Quanthaven umbrella.

### Changes to `src/pages/Experience.tsx`

1. **Add a "Client Engagements" label** between the Quanthaven parent card and the client sub-cards — a small heading like "Client Engagements via Quanthaven Labs" with a `Users` icon, styled as a muted label with left-aligned positioning matching the client card indent.

2. **Wrap client cards in a container** with a continuous left border connecting them visually to the parent — replace the per-card `border-l-2` with a single wrapper `div` that has `ml-4 md:ml-8 border-l-2 border-primary/30` and contains all client cards inside with `pl-4 md:pl-6 space-y-4`.

3. **Add a subtle "Consulting Client" badge** on each client card (top-right area, next to the date) to reinforce these are client relationships, not employers.

4. **Make the Quanthaven parent card slightly more prominent** — bump padding, add a subtle gradient or stronger border to differentiate it as the umbrella entity.

These are all styling/layout tweaks within the single file — no data or structural changes needed.

