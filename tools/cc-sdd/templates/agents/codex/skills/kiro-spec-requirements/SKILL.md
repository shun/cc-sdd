---
name: kiro-spec-requirements
description: Generate or refresh requirements.md for an existing Kiro spec. Use
  this after spec initialization and before design work. Do not use it for
  architecture design, task planning, or implementation.
---

# Kiro spec requirements

Use this skill when the user wants to turn a spec description into approved,
testable requirements.

## Workflow

1. Read `{{KIRO_DIR}}/specs/<feature>/spec.json` and the existing
   `requirements.md`.
2. Read all files in `{{KIRO_DIR}}/steering/`.
3. Read `{{KIRO_DIR}}/settings/rules/ears-format.md` and
   `{{KIRO_DIR}}/settings/templates/specs/requirements.md`.
4. Rewrite `requirements.md` into complete, testable requirements in EARS
   format, using the language declared in `spec.json`.
5. Update `spec.json` metadata for `requirements-generated`.

## Output

- Summarize the requirement areas you generated.
- Confirm that `requirements.md` and `spec.json` were updated.
- Point the user to `$kiro-validate-gap <feature>` for brownfield work or
  `$kiro-spec-design <feature>` for the next phase.

## Guardrails

- Focus on what the system must do, not how it will be built.
- Keep requirement headings numeric and consistent.
- If the spec is missing, stop and tell the user to run `$kiro-spec-init`.
