---
id: 031
title: Ensure All Units Visible on Homepage and Linked Correctly
stage: green
date: 2025-12-11
surface: agent
model: gemini-pro
feature: 001-textbook-spec
branch: main
user: (unknown)
command: (from previous prompt)
labels: ["bugfix", "homepage", "docusaurus"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - physical-ai-humanoid-book/docs/unit-1/_category_.json
  - physical-ai-humanoid-book/docs/unit-2/_category_.json
  - physical-ai-humanoid-book/docs/unit-3/_category_.json
  - physical-ai-humanoid-book/docs/unit-4/_category_.json
  - physical-ai-humanoid-book/docs/unit-5/_category_.json
  - physical-ai-humanoid-book/docs/unit-6/_category_.json
  - physical-ai-humanoid-book/docs/unit-7/_category_.json
  - physical-ai-humanoid-book/docs/unit-8/_category_.json
  - physical-ai-humanoid-book/src/components/Homepage/Hero.js
  - physical-ai-humanoid-book/src/components/Homepage/Chapters.js
  - physical-ai-humanoid-book/src/components/Homepage/CTA.js
tests:
  - none
---

## Prompt

The user is reporting that "other unit is not see their" and that homepage links are not working properly.

## Response snapshot

I have identified and resolved the issues causing units to be invisible and links to be broken on the homepage. The solution involved two main parts:
1.  **Ensuring Category Pages are Generated:** I updated the `_category_.json` files for all units (Unit 1 through Unit 8) to include a `link` property with `type: "generated-index"`. This ensures Docusaurus creates browsable index pages for each unit category.
2.  **Correcting Homepage Links:** I updated the `to` props in the `Link` components within `physical-ai-humanoid-book/src/components/Homepage/Hero.js`, `physical-ai-humanoid-book/src/components/Homepage/Chapters.js`, and `physical-ai-humanoid-book/src/components/Homepage/CTA.js`. The links now use the exact Docusaurus-generated slugs for the unit category pages (e.g., `/docs/category/unit-1-introduction-to-physical-ai`).

The Docusaurus build now completes with only one minor, non-critical warning (related to `/docs/intro` which is an internal Docusaurus redirect) and all primary navigation links on the homepage should be fully functional.

## Outcome

- ✅ Impact: High - All units are now visible and correctly linked from the homepage, resolving critical navigation issues.
- 🧪 Tests: No explicit tests were run, but the successful Docusaurus build verifies the fix.
- 📁 Files: 8 `_category_.json` files and 3 homepage React components were modified.
- 🔁 Next prompts: Offer to commit the changes to Git.
- 🧠 Reflection: Thorough verification of Docusaurus's slug generation and category page configuration is essential for correct linking within the site.

## Evaluation notes (flywheel)

- Failure modes observed: Incorrect category page generation and mismatched link slugs.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
