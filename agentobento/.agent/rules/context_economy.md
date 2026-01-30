---
description: Maintain a lean context window by using indices instead of full text dumps.
---

# Context Economy

**"Compress aggressively. You don't need full docs in context."**

## Context
Dumping 40KB of documentation into the context window distracts the model and wastes tokens. A "compressed index" approach achieved higher pass rates (100%) than full context or skills.

## The Rule
1.  **Index, Don't Dump**: When providing context to the agent (or when the agent analyzes the project), rely on **Indices** (like `AGENTS.md`).
2.  **Just-In-Time Loading**: Only read the full content of a documentation file if it is *specifically relevant* to the current task.
3.  **Pipe-Delimited Compression**: If creating a map for the agent, use dense formats (e.g., `path/to/dir:{file1,file2}`) rather than verbose descriptions.
