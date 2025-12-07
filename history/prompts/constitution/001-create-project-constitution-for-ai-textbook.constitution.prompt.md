---
id: 001
title: Create Project Constitution for AI Textbook
stage: constitution
date: 2025-12-07
surface: agent
model: gemini
feature: none
branch: master
user: user
command: /sp.constitution
labels: [constitution,project-setup]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
  - .specify/templates/plan-template.md
tests:
  null
---

## Prompt

/sp.constitution Create a clear and professional project constitution for a student hackathon assignment in which the goal is to produce a simple AI-native textbook titled “Physical AI & Humanoid Robotics.” The assignment requires creating a basic digital textbook with units, chapters, lessons, diagrams, and short explanations written in clean, simple language, suitable for undergraduate students. The textbook should be well-structured, visually organized, and readable on web or PDF formats. The scope is intentionally limited to standard textbook features: table of contents, chapter pages, learning objectives, explanations, examples, and optional small quizzes. No advanced application features, no authentication, and no complex RAG system are required. The constitution should define the purpose of the project, the boundaries of the textbook, the quality standards for writing, the expected completeness for each chapter, the responsibilities of the author and reviewer, and the basic workflow for drafting, revising, and finalizing content. It should emphasize clarity, accuracy, academic professionalism, and consistent formatting across the entire book. Produce the constitution as a short, polished Markdown document written in paragraph form, without bullet points, and suitable for use as the o

## Response snapshot

I have successfully created the project constitution and updated the relevant template files.

- Created `.specify/memory/constitution.md` with the new project constitution.
- Updated `.specify/templates/plan-template.md` to reflect the new constitutional principles.
- No changes were needed for `.specify/templates/spec-template.md` and `.specify/templates/tasks-template.md`.

## Outcome

- ✅ Impact: Created a new project constitution and updated related templates.
- 🧪 Tests: No tests were run.
- 📁 Files: 2 files modified.
- 🔁 Next prompts: null
- 🧠 Reflection: The process of updating the constitution and propagating changes to templates was successful.

## Evaluation notes (flywheel)

- Failure modes observed: null
- Graders run and results (PASS/FAIL): null
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
