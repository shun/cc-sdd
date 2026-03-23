---
name: kiro-validate-impl
description: Validate implemented work against Kiro requirements, design, and
  tasks. Use this after implementation to check traceability, tests, and
  regressions.
---

# Kiro validate impl

Use this skill when the user wants to review completed implementation work
against the approved spec.

## Workflow

1. Read the target spec files and all steering files.
2. Determine the feature and task scope from the user request. If the request is
   broad, inspect `tasks.md` for completed tasks.
3. Verify:
   - completed tasks are marked correctly,
   - relevant tests exist and pass,
   - requirements are traceable to the implementation,
   - major design commitments are reflected in the code.
4. Produce a concise validation report with severity and a go/no-go outcome.

## Output

- State which feature and tasks were validated.
- Report failures, warnings, and coverage gaps.
- Give the next action for either fixing issues or closing the work.

## Guardrails

- Do not claim success if tests fail or traceability is missing.
- If no implementation scope can be identified, say so explicitly.
