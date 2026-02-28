# FitClub App - Design Specifications

## Color Palette

### Background Colors
- **Primary Background**: `bg-gray-950` (#0a0a0a)
- **Secondary Background**: `bg-gray-900` (#111827)
- **Card Background**: `bg-gray-900/50` (50% opacity)
- **Border Color**: `border-gray-800` (#1f2937)

### Brand Colors
- **Primary Blue**: `bg-blue-600` (#2563eb)
- **Primary Blue Hover**: `bg-blue-700` (#1d4ed8)
- **Blue Gradient From**: `from-blue-600`
- **Blue Gradient To**: `to-blue-800`

### Text Colors
- **Primary Text**: `text-white` (#ffffff)
- **Secondary Text**: `text-gray-400` (#9ca3af)
- **Tertiary Text**: `text-gray-500` (#6b7280)
- **Muted Text**: `text-blue-100` (light blue for headers)

### Status Colors
- **Success**: `bg-green-900/50` with `text-green-400` border `border-green-800`
- **Warning**: `bg-orange-900/50` with `text-orange-400` border `border-orange-800`
- **Error/Cancel**: `bg-red-900/50` with `text-red-400` border `border-red-800`
- **Booked**: `bg-blue-600` with `text-white`

---

## Typography

### Font Family
- Default system font stack (inherited from Tailwind)

### Font Sizes
- **Heading 1 (Page Titles)**: `text-2xl` (24px / 1.5rem)
- **Heading 2 (Section Titles)**: `text-xl` (20px / 1.25rem)
- **Heading 3 (Card Titles)**: `text-lg` (18px / 1.125rem)
- **Body Text**: `text-base` (16px / 1rem) - default
- **Small Text**: `text-sm` (14px / 0.875rem)
- **Extra Small Text**: `text-xs` (12px / 0.75rem)

### Font Weights
- **Bold**: `font-bold` (700)
- **Semibold**: `font-semibold` (600)
- **Medium**: `font-medium` (500)
- **Regular**: `font-normal` (400) - default

---

## Spacing System

### Padding
- **Page Container**: `px-6` (24px horizontal)
- **Card Padding**: `p-4` (16px all sides)
- **Button Padding**: `py-2 px-4` (8px vertical, 16px horizontal) or `py-3 px-6` (12px vertical, 24px horizontal)
- **Section Spacing**: `py-6` (24px vertical) or `py-8` (32px vertical)

### Margin
- **Bottom Margin (elements)**: `mb-1` (4px), `mb-2` (8px), `mb-3` (12px), `mb-4` (16px), `mb-6` (24px)
- **Gap Between Elements**: `gap-2` (8px), `gap-3` (12px), `gap-4` (16px), `gap-6` (24px)

### Specific Component Spacing
- **Bottom Navigation Height**: `h-16` (64px)
- **Bottom Safe Area**: `pb-16` (64px) - to account for bottom nav
- **Header Top Padding**: `pt-12` (48px)
- **Header Bottom Padding**: `pb-8` (32px) or `pb-4` (16px)

---

## Border Radius

- **Small (Badges)**: `rounded-full` (9999px - fully rounded)
- **Medium (Cards)**: `rounded-lg` (8px) or `rounded-xl` (12px)
- **Large (Modal/Sections)**: `rounded-2xl` (16px)

---

## Component Specifications

### Bottom Navigation
```
Height: 64px (h-16)
Background: bg-gray-900
Border: border-t border-gray-800
Position: fixed bottom-0
Max Width: max-w-md mx-auto

Icon Size: w-6 h-6 (24x24px)
Text Size: text-xs (12px)
Gap: gap-1 (4px)
Active Color: text-blue-500
Inactive Color: text-gray-400
```

### Class Card
```
Background: bg-gray-900
Border: border border-gray-800
Border Radius: rounded-xl (12px)
Padding: p-4 (16px)
Shadow: shadow-lg

Image Height: h-40 (160px)
Title Font: text-lg font-semibold (18px, 600)
Instructor Font: text-sm text-gray-400 (14px)
Icon Size: w-4 h-4 (16x16px)

Badge:
  - Position: absolute top-3 right-3
  - Background: bg-black/70
  - Text: text-white text-xs
  - Padding: px-2 py-1
  - Border Radius: rounded-full

Progress Bar:
  - Height: h-1.5 (6px)
  - Background: bg-gray-800
  - Fill: bg-blue-500
```

### Schedule Item / Class Session Card
```
Background: bg-gray-900
Border: border border-gray-800
Border Radius: rounded-xl (12px) or rounded-lg (8px)
Padding: p-4 (16px) or p-3 (12px)

Time Display:
  - Font Size: text-2xl font-bold (24px, 700)
  - Color: text-white
  - Duration: text-xs text-gray-500 (12px)

Title: text-white font-semibold (16px, 600)
Subtitle: text-sm text-gray-400 (14px)

Spots Badge:
  - Font: text-xs (12px)
  - Padding: px-2 py-1 or px-3 py-1.5
  - Border Radius: rounded-full
  - Low Spots: bg-orange-900/50 text-orange-400 border-orange-800
  - Available: bg-green-900/50 text-green-400 border-green-800
```

### Buttons

#### Primary Button
```
Background: bg-blue-600
Hover: hover:bg-blue-700
Text: text-white
Font: text-sm font-medium (14px, 500)
Padding: py-2 px-4 (8px, 16px) or py-3 px-6 (12px, 24px)
Border Radius: rounded-lg (8px)
Transition: transition-colors
```

#### Cancel Button
```
Background: bg-red-900/50
Border: border-red-800
Text: text-red-400
Font: text-sm font-medium (14px, 500)
Padding: py-2 px-4 (8px, 16px)
Border Radius: rounded-lg (8px)
Hover: hover:bg-red-900/70
```

#### Date Filter Button
```
Default:
  - Background: bg-gray-800
  - Text: text-gray-400
  - Hover: hover:bg-gray-700

Active:
  - Background: bg-blue-600
  - Text: text-white

Padding: px-4 py-3 or px-4 py-2
Border Radius: rounded-xl (12px) or rounded-lg (8px)
Font: text-sm font-medium (14px, 500)
Min Width: min-w-[60px]
```

### Header (Gradient)
```
Background: bg-gradient-to-br from-blue-600 to-blue-800
Text: text-white
Padding: px-6 pt-12 pb-8

Title: text-2xl font-bold (24px, 700)
Subtitle: text-blue-100 text-sm (14px)

Stats Card:
  - Background: bg-white/10 backdrop-blur-sm
  - Border Radius: rounded-xl (12px)
  - Padding: p-4 (16px)
  - Large Number: text-2xl font-bold (24px, 700)
  - Label: text-blue-100 text-sm (14px)
```

### Icon Sizes
- **Small Icons**: `w-4 h-4` (16x16px)
- **Medium Icons**: `w-5 h-5` (20x20px)
- **Large Icons**: `w-6 h-6` (24x24px)
- **Extra Large Icons**: `w-12 h-12` (48x48px) or `w-16 h-16` (64x64px)

### Back Button
```
Position: absolute top-6 left-4
Size: w-10 h-10 (40x40px)
Background: bg-black/50 backdrop-blur-sm
Text: text-white
Border Radius: rounded-full
Icon: w-5 h-5 (20x20px)
Hover: hover:bg-black/70
```

---

## Layout

### Container
```
Max Width: max-w-md (448px)
Centering: mx-auto (margin auto horizontal)
Min Height: min-h-screen
```

### Grid (Stats)
```
Columns: grid-cols-2
Gap: gap-4 (16px)
```

### Flexbox Common Patterns
```
Horizontal Stack: flex items-center gap-2/3/4
Vertical Stack: flex flex-col gap-2/3/4
Space Between: flex justify-between items-center
Center: flex items-center justify-center
```

---

## Transitions & Interactions

### Hover States
```
Card Hover: hover:border-gray-700
Button Hover: hover:bg-blue-700
Text Hover: hover:text-blue-300
Transition: transition-colors
```

### Active States
```
Card Press: active:scale-[0.98] transition-transform
Navigation Active: text-blue-500 (from text-gray-400)
```

### Disabled States
```
Background: disabled:bg-gray-800
Text: disabled:text-gray-600
Cursor: disabled:cursor-not-allowed
```

---

## Image Specifications

### Class Card Image
```
Height: h-40 (160px)
Width: w-full (100%)
Object Fit: object-cover
```

### Class Detail Hero Image
```
Height: h-64 (256px)
Width: w-full (100%)
Object Fit: object-cover
Overlay: bg-gradient-to-t from-black/80 to-transparent
```

---

## Opacity Values

- **Full**: `opacity-100` (100%)
- **Semi-transparent**: `opacity-60` (60%) or `opacity-50` (50%)
- **Subtle**: `opacity-40` (40%)
- **Background Overlays**: `/50` (50%), `/70` (70%), `/80` (80%)

---

## Z-Index

- **Bottom Navigation**: `z-10`
- **Sticky Header**: `z-10`
- **Overlay**: Not explicitly set (relies on DOM order)

---

## Special Effects

### Backdrop Blur
```
Usage: backdrop-blur-sm
Applied to: Hero overlays, translucent cards, back button
```

### Scrollbar Hide
```
Class: scrollbar-hide
Applied to: Horizontal scroll containers (date filters)
```

### Gradient Overlays
```
Hero Image Bottom: bg-gradient-to-t from-black/80 to-transparent
Header Background: bg-gradient-to-br from-blue-600 to-blue-800
```

---

## Responsive Breakpoints

All designs are mobile-first with `max-w-md` (448px) container constraint.

---

## Component States

### Past/Completed Classes
```
Opacity: opacity-40 or opacity-60
Cursor: cursor-not-allowed
Badge: bg-gray-800 text-gray-600 "Ended" or "Completed"
```

### Booked Classes
```
Border: border-blue-700
Background: bg-blue-950/30
Badge: bg-blue-600 text-white "Booked"
```

### Full Classes
```
Button: disabled state
Text: "Class Full"
```

---

## Notes for Developers

1. All spacing uses Tailwind's spacing scale (4px increments)
2. Colors are from Tailwind's default palette with some opacity modifiers
3. Transitions are applied to interactive elements for smooth UX
4. Mobile-first design with max-width constraint for larger screens
5. Safe area padding applied for bottom navigation (pb-16)
6. Dark theme throughout with blue accent color for CTAs and active states
