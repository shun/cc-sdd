---
name: kiro-validate-design
description: Review a Kiro design for readiness before task generation or
  implementation. Use this for design quality review only.
---

# Kiro validate design

Use this skill when the user wants a focused review of `design.md` against the
requirements, steering, and existing system constraints.

## Workflow

1. Read `spec.json`, `requirements.md`, `design.md`, all steering files, and
   `{{KIRO_DIR}}/settings/rules/design-review.md`.
2. Evaluate the design for completeness, integration fit, risk, and readiness.
3. Report the most important issues, a few concrete strengths, and a clear
   go/no-go recommendation.

## Output

- Provide a short readiness summary.
- List up to three critical issues with actionable fixes.
- End with the next recommended skill, usually `$kiro-spec-tasks` or
  `$kiro-spec-design`.

## Guardrails

- Focus on material risks, not perfectionism.
- If `design.md` is missing, stop and tell the user to run `$kiro-spec-design`.
