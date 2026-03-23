---
name: kiro-steering
description: Create or refresh the core steering files that act as project
  memory for Kiro workflows. Use this for project-wide context, not feature
  specs.
---

# Kiro steering

Use this skill when the user wants to bootstrap or sync project-wide steering
documents under `{{KIRO_DIR}}/steering/`.

## Workflow

1. Inspect `{{KIRO_DIR}}/steering/` to determine whether this is bootstrap mode
   or sync mode.
2. Read the steering templates and steering rules under
   `{{KIRO_DIR}}/settings/`.
3. Analyze the repository just enough to extract durable patterns for product,
   tech, and structure guidance.
4. Create or update `product.md`, `tech.md`, and `structure.md` without
   replacing user-authored context unnecessarily.

## Output

- Summarize which steering files were created or updated.
- Call out notable drift or missing project context.
- Recommend `$kiro-steering-custom` when a domain-specific steering file would
  help.

## Guardrails

- Document patterns, not exhaustive file lists.
- Avoid agent-specific tooling directories in steering content.
- Preserve user customizations whenever possible.
