# PLAN.md

## Goal

Build a vanilla HTML/CSS/JS responsive one-page prototype for OpenLib, based on the Figma desktop mockup and optimized for the Pi.Ca.Ci.U brief evaluation criteria.

## Source Of Truth

- `brief.md`: evaluation criteria, deliverables, Education challenge.
- Figma node `1687:820`: desktop mockup for the one-page website.
- `CONTEXT.md`: project glossary, service decisions, tone of voice.
- `AGENTS.md`: collaboration and auto-commit rules.

## Figma Analysis Summary

- Main desktop frame: `DESKTOP`, 1441px wide, about 11946px tall.
- Main sections: navbar, hero, story, mission, belief/values, map, courses/calendar, news/community, forms, FAQ, footer.
- Brand/service: `OpenLib`.
- Core promise: libraries become a free distributed campus for peer-to-peer learning.
- Key palette variables: `Choco #69493B`, `Cloud #90C5ED`, `Senape #FFDB89`, `Lips #FFD0AE`, `Veil #F7FBFF`, `Panna #FFFBF0`, `Black #151515`, `White #FFFFFF`.
- Typography from Figma references `Roc Grotesk` and `Elza`; implementation should approximate or use local/web-safe fallbacks unless actual font files are provided.
- The `COURSES` section includes a calendar-style course view with sample skills such as Wordpress, Inglese, Storia di Milano, Pittura, Comunicazione.
- The `FORMS` section includes tabs for `Studenti`, `Insegnanti`, and `Info`; `Studenti` is visible in the Figma details and the other tabs must be implemented with differentiated fields.
- The `FAQ` component is an accordion-style row.

## Resolved Decisions

- The service name is `OpenLib`.
- The landing page must balance `Learner` and `Peer-teacher` narratives equally.
- Trust/quality mechanism: library partner plus light verification, community rules, limited places, and post-meeting feedback.
- Prototype interactions: anchor navigation, selectable course calendar, map/search simulation, community carousel, form tabs, fake validation/submission, FAQ accordion, full language switch.
- CSS priority: desktop pixel fidelity at 1441px is the primary target.
- Mobile strategy: reinterpret sections into clean readable stacks rather than forcing exact desktop proportions.
- Asset strategy: export required Figma assets into local project files; do not depend on `localhost:3845` for the final deliverable.
- Language strategy: Italian copy follows Figma; clicking English changes all visible website text. English copy can be generated during implementation.
- Copy policy: fix clear typos only, unless broader copy changes are explicitly approved.
- Workflow: proceed through implementation units automatically, and each completed unit gets a focused git commit after verification.

## Technical Approach

- Use plain `index.html`, `styles.css`, and `script.js` unless a different file split becomes clearly useful.
- Use semantic HTML landmarks and accessible controls for navigation, tabs, accordions, forms, and carousel buttons.
- Use CSS custom properties for design tokens.
- Use CSS Grid for major desktop layouts where it improves fidelity, Flexbox for local alignment, and media queries for responsive reflow.
- Use plain JavaScript data objects for bilingual text, course data, library data, FAQ data, and interaction state.
- Keep all assets under a local `assets/` directory.
- Do not introduce build tooling, frameworks, package managers, Tailwind, or external dependencies unless explicitly approved.

## Implementation Units

1. Foundation and assets
Acceptance criteria: local project skeleton exists; design tokens, reset, base typography, layout container, asset folder, and first asset exports are in place; no section is coded beyond agreed scaffolding.

2. Navbar and hero
Acceptance criteria: desktop matches Figma structure closely; mobile nav is usable; language switch works for navbar/hero; primary two-sided message is immediately clear.

3. Story, mission, belief, and stats
Acceptance criteria: narrative explains the problem, mission, and values; stats are visually polished; clear typos are fixed; bilingual copy is available.

4. Map section
Acceptance criteria: library partner concept is visible; search simulation updates or highlights a library card; map remains responsive without breaking layout.

5. Courses/calendar section
Acceptance criteria: calendar/course view communicates available course activities; selecting a course updates details or state; sample courses map to local libraries; mobile uses a readable list or scrollable calendar treatment.

6. News/community carousel
Acceptance criteria: community stories are browsable with controls; cards remain visually coherent with Figma; bilingual text works.

7. Forms section
Acceptance criteria: `Studenti`, `Insegnanti`, and `Info` tabs show differentiated fields; fake validation handles required fields and privacy consent; submission shows a clear success state; bilingual text works.

8. FAQ and footer
Acceptance criteria: FAQ accordion is keyboard-accessible; footer preserves brand/tagline/social links; bilingual text works.

9. Final responsive and presentation polish
Acceptance criteria: desktop 1441px fidelity pass, tablet/mobile pass, interaction pass, link/asset pass, accessibility basics, final typo check, and final commit if approved.

## Progression And Commit Workflow

- Proceed automatically through implementation units unless the user asks to pause or review first.
- After each unit, verify the relevant responsive/interactions manually and report what was checked.
- Commit only the relevant files for that completed unit.
- Do not mix unrelated changes into a commit.
- If verification fails, fix the issue before committing or document the failure clearly.

## Open Items

- Actual font files are not present yet; decide whether to provide them or use fallbacks.
- Exact English copy will be generated during implementation and should be reviewed by the team.
- Figma image/icon assets must be exported locally before the final deliverable.
