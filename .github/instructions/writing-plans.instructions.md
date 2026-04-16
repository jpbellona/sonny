---
applyTo: "**"
---

# Writing Plans

Write comprehensive implementation plans assuming the engineer has zero context for the codebase and questionable taste. Document everything they need: which files to touch for each task, exact code, how to test it. Bite-sized tasks. DRY. YAGNI. TDD. Frequent commits.

**Announce at start:** "I'm using the writing-plans skill to create the implementation plan."

**Save plans to:** `docs/superpowers/plans/YYYY-MM-DD-<feature-name>.md`

## Plan Document Header

Every plan MUST start with this header:

```markdown
# [Feature Name] Implementation Plan

**Goal:** [One sentence describing what this builds]

**Architecture:** [2-3 sentences about approach]

**Tech Stack:** [Key technologies/libraries]

---
```

## Task Structure

```markdown
### Task N: [Component Name]

**Files:**
- Create: `exact/path/to/file`
- Modify: `exact/path/to/existing.js`

- [ ] **Step 1: [Action]** — [what exactly to do, with code if needed]
- [ ] **Step 2: Verify** — Run: `command` / Expected: [output]
- [ ] **Step 3: Commit** — `git commit -m "feat: description"`
```

## Rules

- **No placeholders** — never write "TBD", "TODO", "add appropriate error handling", or "similar to Task N"
- **Exact file paths always**
- **Complete code in every step** — if a step changes code, show the code
- **Exact commands with expected output**

## Self-Review (run before presenting plan)

1. **Spec coverage:** Can you point to a task that implements each requirement?
2. **Placeholder scan:** Any "TBD", "TODO", vague steps? Fix them.
3. **Type consistency:** Do method/variable names used in later tasks match earlier tasks?

## Execution Handoff

After saving the plan, ask:
> "Plan complete and saved to `docs/superpowers/plans/<filename>.md`. Ready to execute?"

Source: https://github.com/obra/superpowers
