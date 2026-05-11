# AGENTS.md

This repository contains a vanilla HTML/CSS/JS responsive one-page prototype for an Education-area civic service, built for the Pi.Ca.Ci.U final presentation.

## Project Context

- Treat `brief.md` as the source of truth for evaluation criteria and deliverables.
- Use `PLAN.md` for the current implementation plan once it exists.
- Use `CONTEXT.md` and any ADRs for project knowledge, terminology, research decisions, and rationale once they exist.
- Preserve coherence between touchpoint, pitch, process book, naming, visual identity, and tone of voice.

## Implementation Guidelines

- Build with vanilla HTML, CSS, and JavaScript unless the user explicitly approves another stack.
- Prefer small, section-by-section changes that the user can review and approve.
- Keep the prototype responsive and presentable on desktop and mobile.
- Optimize for the brief's judging criteria: clarity of service, perceived quality, coherent identity, and autonomous navigability.

## Collaboration Workflow

- Proceed through implementation units automatically unless the user asks to pause or review first.
- After each completed section, summarize what changed, what was verified, and what still needs review.
- Do not overwrite or revert user changes unless the user explicitly asks.

## Git And Auto-Commit Rules

- Use focused commits after each completed unit of work, unless the user asks not to commit.
- Before committing, inspect `git status` and `git diff` and include only relevant files.
- Never commit secrets, credentials, `.env` files, generated dependency folders, or unrelated local changes.
- Use concise commit messages that describe the project value, for example `Build responsive hero section` or `Document project plan`.
- If verification fails, do not commit until the failure is fixed or explicitly documented and approved.
