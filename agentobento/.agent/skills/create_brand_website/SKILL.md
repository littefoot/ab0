---
name: Create Brand Website
description: Create a modern, high-aesthetic website using Vite, TypeScript, and Tailwind CSS based on a Brand DNA and visual references.
---

# Create Brand Website Skill

This skill guides you through the process of building a premium, modern website from scratch. It is designed to take raw brand assets (a `branddna.md` file, screenshots, or existing site URLs) and convert them into a fully functional, high-performance frontend application.

**Stack**: Vite, TypeScript, Vanilla CSS (for resets), Tailwind CSS (for styling).

## Prerequisites
- **Brand DNA**: A detailed `branddna.md` file acting as the single source of truth for the brand's identity, voice, and visual language.
- **Visuals**: Screenshots of websites to emulate, existing site URLs, or image assets.

## 1. Context Gathering & Analysis
Before writing code, you must deeply understand the brand and the desired outcome.

1.  **Analyze `branddna.md`**:
    - Identify the **Color Palette**: Primary, secondary, accent, and background colors.
    - Identify **Typography**: Headings, body text, and font weights.
    - Understand the **Vibe**: Is it corporate, playful, minimalist, brutalist, or luxury?
    - **CRITICAL**: Treat `branddna.md` as the authoritative source. If something is missing, ask the user to clarify or update the file before proceeding.

2.  **Analyze Visual References**:
    - If screenshots are provided, identify the layout patterns, component structures, and micro-interactions.
    - Break down the visual references into potential reusable components (e.g., "HeritageHero", "FeatureGrid", "PricingCard").

## 2. Project Initialization
Initialize a new project using Vite. **Do not use Next.js unless explicitly requested.**

```bash
npm create vite@latest . -- --template vanilla-ts
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

*Note: The user instructions might specify a project name. If so, create the folder first.*

## 3. Design System Implementation
Translate the Brand DNA into a programmable design system.

1.  **Tailwind Configuration (`tailwind.config.js`)**:
    - Extend the `theme` object to include the brand's specific colors and fonts.
    - **Do not** rely on default Tailwind colors if the brand has specific hex codes. Map them to semantic names (e.g., `primary`, `surface`, `accent`).
    - Configure font families.

2.  **Base Styles (`style.css` / `index.css`)**:
    - Import the chosen fonts (e.g., from Google Fonts).
    - Apply base styles to `body`, `h1-h6`, and `p` tags to establish the visual hierarchy immediately.
    - Use CSS variables for values that might change dynamically (like theme toggles).

## 4. Component Development
Build components that "wow" the user. Avoid generic Bootstrap-like looks.

- **Philosophy**: Every component should feel bespoke.
- **Micro-interactions**: Add hover states, delicate transitions (`transition-all duration-300`), and active states to interactive elements.
- **Responsive Design**: Mobile-first is mandatory. Ensure grids collapse gracefully.

## 5. Page Assembly
Assemble the components into the requested pages (e.g., Landing Page, About, Contact).

- Ensure a logical flow of information (Hero -> Social Proof -> Features -> CTA).
- Use spacing (margins/padding) generously to create a premium feel. Crowded designs look cheap.

## 6. Verification
- **Visual Check**: Does the built site match the `branddna.md` vibe?
- **Responsiveness**: Does it work on mobile?
- **Performance**: Are images optimized? (Suggest converting to WebP if not already done).

## Common Commands
- `npm run dev`: Start the development server.
- `npm run build`: Build for production.
