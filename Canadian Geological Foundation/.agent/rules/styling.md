---
trigger: model_decision
---

# STYLING RULES (TAILWIND CSS)

## Class Ordering (Mental Model)
Write classes in this logical order to maintain consistency:
1.  **Layout/Position:** `absolute top-0 flex grid`
2.  **Box Model:** `w-full h-12 p-4 m-2`
3.  **Typography:** `text-lg font-bold text-gray-800`
4.  **Visuals:** `bg-white border rounded shadow-md opacity-90`
5.  **Interaction:** `hover:bg-gray-100 focus:ring-2`

## Constraints
* **No Arbitrary Values:** Avoid bracket syntax (e.g., `w-[350px]`) unless absolutely necessary. Use standard Tailwind spacing/sizing scales to ensure design system consistency.
* **Component-First:** If a set of classes is reused more than 3 times, extract it into a React component, NOT a `@apply` CSS class.