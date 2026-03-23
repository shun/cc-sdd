---
name: kiro-steering-custom
description: Create a custom steering file for a focused domain such as API
  standards, testing, security, or deployment. Use this for specialized project
  memory, not for core steering or feature specs.
---

# Kiro steering custom

Use this skill when the user wants an additional steering document for one
specialized topic.

## Workflow

1. Determine the domain to document from the user request.
2. Read the matching template from
   `{{KIRO_DIR}}/settings/templates/steering-custom/` when available.
3. Read `{{KIRO_DIR}}/settings/rules/steering-principles.md`.
4. Inspect the relevant code or config files to extract durable patterns.
5. Write `{{KIRO_DIR}}/steering/<topic>.md` with concise, reusable guidance.

## Output

- Confirm the created or updated steering file path.
- Summarize the patterns captured in that document.
- Mention the template or code areas used as sources.

## Guardrails

- Keep the file focused on one domain.
- Avoid duplicating the core steering files.
- Never include secrets or sensitive values.
