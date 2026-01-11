# UI Components - shadcn/ui

## Overview

This project exclusively uses [shadcn/ui](https://ui.shadcn.com/) for all UI components. Custom component creation is strictly prohibited.

## Core Rules

1. **Use shadcn/ui Only**: All UI elements must be shadcn/ui components
2. **No Custom Components**: Do not create custom UI components from scratch
3. **Install Before Use**: Always install required shadcn/ui components before using them

## Installation

To add a new shadcn/ui component:

```bash
npx shadcn@latest add [component-name]
```

## Component Structure

- Components are installed to `/components/ui/`
- Each component is a single file (e.g., `button.tsx`, `card.tsx`)
- Components are built on Radix UI primitives and Tailwind CSS

## Usage Guidelines

### Correct Approach
```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function MyFeature() {
  return (
    <Card>
      <CardHeader>Title</CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}
```

### Incorrect Approach
```tsx
// ❌ NEVER create custom UI components
export function CustomButton({ children }) {
  return <button className="custom-styles">{children}</button>
}
```

## Customization

- **Variants**: Use built-in variants provided by shadcn/ui components
- **Styling**: Extend with Tailwind classes via `className` prop
- **Composition**: Compose existing shadcn/ui components together

## Available Components

Check the [shadcn/ui documentation](https://ui.shadcn.com/docs/components) for the full list of available components including:
- Buttons, Forms, Inputs
- Cards, Dialogs, Modals
- Tables, Tabs, Navigation
- And many more...

## Key Reminder

**Always use shadcn/ui components. Never create custom UI components.**
