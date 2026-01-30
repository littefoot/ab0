---
trigger: model_decision
---

# TYPESCRIPT & NAMING CONVENTIONS

## Naming Conventions (Strict)
* **Ambiguity is forbidden.** Never use single-letter variables (e.g., `x`, `u`, `d`) unless in a purely mathematical loop.
* **Verb-Noun-Context Pattern:**
    * BAD: `const data = getData()`
    * GOOD: `const activeUserProjects = await fetchActiveUserProjects()`
* **Boolean Prefixes (Is/Has/Should):**
    * All booleans MUST start with an auxiliary verb.
    * BAD: `const visible = true`
    * GOOD: `const isModalVisible = true`
    * GOOD: `const hasCompletedOnboarding = false`
* **Event Handlers:**
    * Must explicitly state the action and the element.
    * BAD: `handleClick`
    * GOOD: `handleSaveProjectClick` or `handleDeleteConfirmationSubmit`

## Types & Interfaces
* **Suffix Strategy:** Always append the "category" of the type to the name to prevent hallucinations between similar entities.
    * `Project` -> The core database model or entity.
    * `ProjectCardProps` -> React component props.
    * `ProjectApiResponse` -> Raw JSON from the backend.
    * `ProjectFormState` -> Local UI state for inputs.

## File Structure
* **No `index.ts` Exports:** Do not use `index.ts` files to export components. This confuses the context window.
    * BAD: `components/Button/index.tsx`
    * GOOD: `components/Button/Button.tsx`
* **Filename Matching:** The primary component export MUST match the filename exactly.
    * File: `UserProfileCard.tsx` -> `export const UserProfileCard = ...`