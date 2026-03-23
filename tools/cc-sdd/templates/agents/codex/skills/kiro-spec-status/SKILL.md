---
name: kiro-spec-status
description: Report the current status of a Kiro spec, including phase progress,
  approvals, and task completion. Use this for status checks only.
---

# Kiro spec status

Use this skill when the user wants a progress report for an existing spec.

## Workflow

1. Read `spec.json` and any existing `requirements.md`, `design.md`, and
   `tasks.md`.
2. Inspect the spec directory to see which artifacts exist.
3. Summarize the current phase, approvals, and task progress. When `tasks.md`
   exists, count checked and unchecked items accurately.
4. Recommend the next workflow step based on the current phase.

## Output

- Show the current phase and last update time.
- Summarize requirements, design, and tasks completion.
- Give the exact next skill to invoke.

## Guardrails

- If the spec does not exist, say so and list available specs when possible.
- Keep the report concise and factual.
