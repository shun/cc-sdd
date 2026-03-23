---
name: kiro-spec-impl
description: Implement approved tasks from a Kiro spec using TDD. Use this only
  when the user is ready to execute tasks, not for planning or validation.
---

# Kiro spec impl

Use this skill when the user wants to execute one or more approved tasks from a
Kiro spec.

## Workflow

1. Read `spec.json`, `requirements.md`, `design.md`, `tasks.md`, and all
   steering files for the target spec.
2. Determine the task numbers from the user request. If none are provided,
   execute the pending tasks only when the request clearly asks for that.
3. Follow Kent Beck style TDD for each task:
   - write a failing test,
   - implement the minimum code,
   - refactor safely,
   - run the relevant tests,
   - mark the task complete in `tasks.md`.
4. Keep the implementation aligned with the design and avoid unrelated edits.

## Output

- List the tasks you completed.
- Report the test commands you ran and whether they passed.
- Note the remaining pending tasks.

## Guardrails

- Stop if tasks are not ready or the spec files are incomplete.
- Do not silently skip failing tests.
- Keep work scoped to the selected tasks.
