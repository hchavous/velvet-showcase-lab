

## Style Consulting Client Names as Badges

### Approach
Separate the first highlight (intro text) from the remaining highlights (client names). Render the intro as a paragraph and the client names as a wrapped grid of styled badges.

### Changes in `src/pages/Experience.tsx`

1. Add a `isConsulting` flag to the `ExperienceItem` interface (or detect based on whether the first highlight ends with `:`)
2. Update `ExperienceCard` to check if the first highlight ends with `:` — if so:
   - Render it as a `<p>` paragraph
   - Render remaining highlights as Badge components in a flex-wrap layout
3. Otherwise, keep the existing checkmark bullet rendering

### Rendering logic
```text
// If first highlight ends with ":"
<p className="text-sm text-muted-foreground mb-3">
  {highlights[0]}
</p>
<div className="flex flex-wrap gap-2">
  {highlights.slice(1).map(name => (
    <Badge variant="secondary">{name}</Badge>
  ))}
</div>

// Otherwise: existing checkmark grid
```

Import `Badge` from `@/components/ui/badge`.

