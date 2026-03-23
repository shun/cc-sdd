---
name: kiro-spec-design
description: Generate or refresh design.md for a Kiro spec after requirements
  are approved. Use this for technical design and discovery, not for writing
  implementation code.
---

# Kiro spec design

Use this skill when the user wants a technical design for an approved spec.

## Workflow

1. Read `spec.json`, `requirements.md`, existing `design.md`, and all files in
   `{{KIRO_DIR}}/steering/`.
2. Read `{{KIRO_DIR}}/settings/templates/specs/design.md`,
   `research.md`, and the relevant design rules under
   `{{KIRO_DIR}}/settings/rules/`.
3. Decide whether the feature needs full discovery, light discovery, or a
   quick pattern check. Research external dependencies when the design depends
   on current APIs, libraries, or platform behavior.
4. Write or update `research.md` with the findings that shaped the design.
5. Write or update `design.md` in the spec language and update `spec.json`
   metadata for `design-generated`.

## Output

- State where `design.md` and `research.md` were written.
- Summarize the main architectural decisions.
- Tell the user to continue with `$kiro-validate-design <feature>` or
  `$kiro-spec-tasks <feature>`.

## Guardrails

- Stop if `requirements.md` is missing.
- Keep the design at the architecture and interface level.
- Use numeric requirement IDs exactly as written in `requirements.md`.
