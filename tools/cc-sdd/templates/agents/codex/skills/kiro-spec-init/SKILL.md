---
name: kiro-spec-init
description: Initialize a new Kiro spec from a feature description. Use this only
  to create the spec folder, spec.json, and starter requirements.md. Do not use
  it for requirements, design, tasks, or implementation work.
---

# Kiro spec init

Use this skill when the user wants to start a new specification from an idea or
feature request.

## Workflow

1. Read `{{KIRO_DIR}}/settings/templates/specs/init.json` and
   `{{KIRO_DIR}}/settings/templates/specs/requirements-init.md`.
2. Inspect `{{KIRO_DIR}}/specs/` and derive a unique kebab-case feature name.
   Add a numeric suffix when needed.
3. Create `{{KIRO_DIR}}/specs/<feature-name>/spec.json` and
   `{{KIRO_DIR}}/specs/<feature-name>/requirements.md` by replacing:
   - `{{FEATURE_NAME}}`
   - `{{TIMESTAMP}}`
   - `{{PROJECT_DESCRIPTION}}`
4. Stop after initialization. Do not generate requirements, design, tasks, or
   implementation in this skill.

## Output

- Summarize the generated feature name and why it fits the request.
- List the created files.
- Tell the user to continue with `$kiro-spec-requirements <feature-name>`.

## Guardrails

- If the description is too ambiguous to name the feature safely, ask one short
  clarifying question.
- If templates are missing, report the exact missing path and stop.
