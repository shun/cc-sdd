---
name: kiro-validate-gap
description: Analyze the gap between approved requirements and the current
  codebase for a Kiro spec. Use this for brownfield discovery, not for final
  design approval or implementation validation.
---

# Kiro validate gap

Use this skill when the user wants to understand how an existing codebase maps
to a spec before design or implementation.

## Workflow

1. Read `spec.json`, `requirements.md`, and all steering files.
2. Read `{{KIRO_DIR}}/settings/rules/gap-analysis.md`.
3. Inspect the codebase for existing components, integration points, and
   constraints related to the requirements.
4. Produce a gap analysis that highlights what already exists, what is missing,
   and which implementation approaches look viable.

## Output

- Summarize the current-state coverage and the main gaps.
- Call out high-risk integration points.
- Recommend the next design step, usually `$kiro-spec-design <feature>`.

## Guardrails

- Provide options and evidence, not a final implementation choice.
- If requirements are missing, stop and tell the user to run
  `$kiro-spec-requirements`.
