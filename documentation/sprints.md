# Sprints — Naming & CSS Refactor

## Purpose
This document defines a small set of sprints to standardize HTML/CSS naming, reduce very long inline Tailwind utility strings, and make the codebase easier to communicate about and maintain.

Goals
- Establish concise naming conventions (component-scoped, kebab-case) and testing hooks.
- Extract common long Tailwind utility sets to named component classes using Tailwind `@apply` in `src/index.css` (or a dedicated `@layer components` section).
- Perform an incremental, low-risk refactor of a small set of high-value components.

Scope (initial)
- Components targeted in first run:
  1. `PoliticianCard` (high-visibility card used in lists)
  2. `PoliticianDetailModal` (modal with many long utility lists)
  3. `SideNav` (site navigation panel)

Deliverables
- `TECH_STACK.md` updated (done)
- `src/index.css` updated with new `@layer components` classes
- Components updated to use short, semantic class names (e.g. `.politician-card`, `.politician-card__avatar`, `.side-nav`)
- `data-testid` attributes added where helpful for testing
- PR(s) with diffs, smoke tests and checklist

Sprint 1 — Conventions & Doc (0.5 day)
- Tasks:
  - Finalize naming conventions (kebab-case, component-scoped prefix, minimal IDs)
  - Create `documentation/sprints.md` and update `TECH_STACK.md` (already done)
- Success criteria:
  - Team agrees on conventions or provides feedback
  - Doc contains examples and a short refactor plan

Sprint 2 — PoliticianCard refactor (1 day)
- Tasks:
  - Add `.politician-card` to `src/index.css` under `@layer components` and use `@apply` for the long utility set
  - Replace the long className in `components/PoliticianCard.tsx` with `className="politician-card"` + keep dynamic party color classes inline
  - Add `data-testid="politician-card"`
  - Run dev server and verify visuals
- Acceptance:
  - Visual parity with original (no layout regressions)
  - Dev server shows no errors, component accessible via `data-testid`

Sprint 3 — PoliticianDetailModal & SideNav (1.5 days)
- Tasks:
  - Extract `.politician-detail-modal` and `.side-nav` component classes, update JSX
  - Keep any computed classes (e.g., `partyColors.*`) inline
  - Add small unit/smoke checks (visual inspection list in PR description)
- Acceptance:
  - Visual parity and no console errors
  - Improved clarity in component JSX (short classnames)

Sprint 4 — Sweep & Tests (1 day)
- Tasks:
  - Identify other repeated long utility lists (via grep) and extract as needed
  - Add `data-testid` for a few key elements
  - Update docs with examples of how to add a component class
- Acceptance:
  - PRs merged, no regressions in dev or build

Refactor approach (safe, step-by-step)
1. Create new component class in `src/index.css` (under `@layer components`) using `@apply` to reuse Tailwind utilities.
2. Replace long className in the component with the single class.
3. Keep dynamic classes (computed colors) inline.
4. Run `npm.cmd run dev` and visually inspect the component.
5. Commit small changes per component (one component per PR ideally).

Naming conventions (short summary)
- Component root: `.component-name` (kebab-case, e.g., `.politician-card`)
- Element inside component: `.component-name__element` (e.g., `.politician-card__avatar`)
- Modifiers (rare): `.component-name--modifier`
- Testing hook: `data-testid="politician-card"`
- IDs: short and unique only when necessary (`id="root"`, `id="modal"`)

PR checklist
- Visual QA screenshots or notes
- `npm.cmd run dev` runs without errors
- `npm run build` completes (optional for small PRs)
- Tests/data attributes validated

Rollback plan
- Revert the small commit if visual regression occurs; we keep changes per-component to make reverts cheap.

Commands / Local test
```powershell
npm.cmd run dev     # start dev server (Windows)
# After edits, verify in browser and run:
# optional: npm.cmd run build && npm.cmd run preview
```

Ownership & Communication
- Suggested owner for the first pass: you (or designate me to implement). I can open PRs with each component refactor and link screenshots.

Next steps (if you approve)
- I will implement Sprint 2: extract `.politician-card` in `src/index.css`, update `components/PoliticianCard.tsx`, run dev server, and push a small commit/PR.

---
*Document created automatically by the dev assistant.*
