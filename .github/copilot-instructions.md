# GitHub Copilot Workspace Instructions

These guidelines reduce common LLM coding mistakes in this repository. Apply them with project-specific instructions as needed.

Tradeoff: these guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

Don't assume. Don't hide confusion. Surface tradeoffs.

- State assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them; don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop, name what's confusing, and ask.

## 2. Simplicity First

Minimum code that solves the problem. Nothing speculative.

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.
- Ask: would a senior engineer say this is overcomplicated? If yes, simplify.

## 3. Surgical Changes

Touch only what you must. Clean up only your own mess.

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it; don't delete it.
- Remove imports/variables/functions your changes made unused.
- Don't remove pre-existing dead code unless asked.
- Test: every changed line should trace directly to the request.

## 4. Goal-Driven Execution

Define success criteria. Loop until verified.

- "Add validation" → "Write tests for invalid inputs, then make them pass."
- "Fix the bug" → "Write a test that reproduces it, then make it pass."
- "Refactor X" → "Ensure tests pass before and after."
- For multi-step tasks, state a brief plan with a verification check per step.

## 5. Project Context

This is **Sonny Champagne and the BillionAIres** — a static music site built with 11ty, deployed on Netlify.

- One markdown file per song in `src/songs/`
- Songs are keyed to executive orders (EOs) — do not rename or restructure without asking
- Images live in `src/assets/images/`
- No server-side logic, no database, no authentication
- Build output goes to `_site/` — never edit files there directly
- Adding a new song = copy a song template, fill in frontmatter, add image, push
