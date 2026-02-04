

# Add Professional Headshot to About Page

Adding your headshot photo to create a more personal and professional About page.

---

## Implementation

### 1. Copy Image to Project
- Copy `user-uploads://HAC_Headshot2.JPG` to `src/assets/headshot.jpg`
- Using src/assets allows proper bundling and optimization

### 2. Update About Page Layout
- Redesign the header section to include your photo alongside the title
- Create a two-column layout on larger screens: photo on one side, intro text on the other
- On mobile, stack vertically with photo centered above the text

### 3. Photo Styling
- Circular crop with a subtle electric blue glow/border to match the site theme
- Professional sizing (around 200-250px diameter)
- Smooth fade-in animation consistent with the rest of the page

---

## Visual Layout

```text
+------------------------------------------+
|              About Me                     |
|  Bridging traditional finance with AI    |
+------------------------------------------+
|                                          |
|    +----------+    Professional Summary  |
|    |          |    -------------------- |
|    |  [PHOTO] |    With over 15 years   |
|    |          |    of experience...     |
|    +----------+                          |
|                                          |
+------------------------------------------+
```

---

## Technical Details

- Import the image using ES6 module syntax: `import headshot from "@/assets/headshot.jpg"`
- Use the existing Avatar component or a styled `<img>` tag with rounded-full class
- Add a gradient border effect using ring utilities and the primary color

