---
description: Ensure the agent builds a mental model of the project before generating code.
---

# Exploration First

**"Before writing code, first explore the project structure."**

## Context
Agents often jump straight to coding based on the prompt, missing critical project context. In evals, adding this explicit instruction improved pass rates significantly (from 53% to 79%).

## The Rule
1.  **Map the Territory**: Before attempting to solve a task, run `list_dir` or `view_file` on key configuration files (`AGENTS.md`, `package.json`, `tsconfig.json`).
2.  **Identify Patterns**: Notice the existing folder structure (e.g., "The Bento Standard"). Don't invent new patterns if one exists.
3.  **Check for Docs**: Look for "Skills" or "Workflows" that might already solve the problem.
4.  **Then Code**: Only generate implementation code after you have confirmed the environment state.
