---
name: kiro-spec-tasks
description: Generate tasks.md for a Kiro spec after requirements and design are
  ready. Use this for implementation planning and task decomposition, not for
  coding the feature.
---

# Kiro spec tasks

Use this skill when the user wants an implementation task plan for an approved
design.

## Workflow

1. Read `spec.json`, `requirements.md`, `design.md`, existing `tasks.md`, and
   all steering files.
2. Read `{{KIRO_DIR}}/settings/templates/specs/tasks.md` and task generation
   rules in `{{KIRO_DIR}}/settings/rules/`.
3. Produce a task list that maps requirements to concrete implementation work,
   including dependency order and parallelizable work when appropriate.
4. Mark tasks with checkboxes, keep requirement references numeric, and update
   `spec.json` metadata for `tasks-generated`.

## Output

- Summarize task groups and total task count.
- Call out dependencies or parallel work that matter for execution.
- Tell the user to continue with `$kiro-spec-impl <feature> [tasks]`.

## Guardrails

- Stop if requirements or design are missing.
- Do not implement the tasks in this skill.
- Keep tasks concrete enough for TDD execution.
