---
description: Workflow for the "New Project" creation in the app.
---

# 03.1 Project Initialization (The Build)

**Goal:** Validating the "Digital HQ" creation.

## 🛠️ Execution (Hybrid)
1.  **Initialize Project:**
    -   Human: Click **"New Project"** in Agento Bento UI.
    -   Input: `[Client Name]`.
2.  **Architect Interview (First Run):**
    -   Human enters the Chat: "Initialize HQ for [Client Name]. They are a [Industry] focusing on [Goal]."
    -   **🤖 AI Action:**
        -   Orchestrator spawns the directory structure.
        -   Orchestrator creates the initial `roadmap.json` from the Strategy phase.

## 📄 System Output
-   New Directory: `C:\Projects\Agento Bento\Projects\[Client_Name]`
