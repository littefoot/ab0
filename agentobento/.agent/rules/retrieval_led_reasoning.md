---
description: Prioritize reading local documentation over internal training data to avoid hallucinations.
---

# Retrieval-Led Reasoning

**IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning for any Framework tasks.**

## Context
AI models rely on training data that becomes outdated. New frameworks (like Next.js 16) introduce APIs (e.g., `use cache`, `connection()`, `forbidden()`) that may not exist in your training set.

## The Rule
1.  **Stop & Search**: When faced with a framework-specific coding task (especially for Next.js), do NOT rely solely on your internal knowledge.
2.  **Locate the Index**: Look for an `AGENTS.md` or similar documentation index in the project root.
3.  **Read Authoritative Sources**: Use the index to find the definitive Markdown file for the specific feature you are implementing (e.g., `.next-docs/caching.md`).
4.  **Trust the File**: The local file is the source of truth, even if it contradicts your training data.
