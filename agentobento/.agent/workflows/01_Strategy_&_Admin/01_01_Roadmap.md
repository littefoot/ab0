---
description: Workflow for converting strategy into the JSON Roadmap.
---

# 01.1 Roadmap Architecture

**Goal:** Turn abstract promises into concrete nodes.

## 🤖 AI Agent Steps
1.  **Ingest Proposal:** Read `01_Strategy/proposal_v1.md`.
2.  **Generate Nodes:** Create a JSON structure for `roadmap.json` with:
    -   `id`: Unique identifier.
    -   `label`: Actionable step name (e.g., "Launch V1 Loop").
    -   `status`: "pending", "active", or "completed".
    -   `linkedFiles`: Paths to relevant assets.

## 👤 Human Steps
1.  **Review Logic:** Ensure dependencies make sense (e.g., don't "Launch Ads" before "Landing Page" is done).
2.  **Commit:** Save to `01_Strategy/roadmap.json`.

## 📄 File Output
-   `01_Strategy/roadmap.json`
