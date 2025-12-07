# Tasks: AI-Native Textbook

**Input**: Design documents from `specs/001-textbook-spec/`
**Prerequisites**: plan.md, spec.md, data-model.md

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- All paths are relative to the repository root.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create the project directory structure as defined in `plan.md` (`src/`, `scripts/`, `assets/`, `templates/`).
- [ ] T002 [P] Create a template for chapters in `templates/chapter-template.md` based on `data-model.md`.
- [ ] T003 [P] Create build script `scripts/build-pdf.sh` for generating the PDF version of the textbook using Pandoc.
- [ ] T004 [P] Create build script `scripts/build-web.sh` for generating the web version of the textbook.

---

## Phase 2: User Story 1 - Author Creates a New Chapter (Priority: P1) 🎯 MVP

**Goal**: An author can create a new chapter with all required content and formatting.

**Independent Test**: A new chapter can be created and it validates against the structure defined in `data-model.md`.

### Implementation for User Story 1

- [ ] T005 [US1] Draft the content for Chapter 1 of Unit 1 in `src/unit1/chapter1.md`.
- [ ] T006 [P] [US1] Create or source diagrams and images for Chapter 1 and add them to `assets/images/`.
- [ ] T007 [US1] Format the content of `src/unit1/chapter1.md` using the `templates/chapter-template.md`.

---

## Phase 3: User Story 2 - Reviewer Provides Feedback (Priority: P2)

**Goal**: A reviewer can provide feedback on a chapter, and the author can incorporate it.

**Independent Test**: A pull request for a new chapter can be created, reviewed, and approved.

### Implementation for User Story 2

- [ ] T008 [US2] A reviewer reviews the pull request for the new chapter.
- [ ] T009 [US2] The author incorporates the feedback from the reviewer into the chapter.

---

## Phase 4: User Story 3 - Student Reads the Textbook (Priority: P3)

**Goal**: A student can read the textbook in both web and PDF formats.

**Independent Test**: The textbook can be successfully built in both formats and is readable.

### Implementation for User Story 3

- [ ] T010 [US3] Build the web version of the textbook by running `scripts/build-web.sh`.
- [ ] T011 [US3] Build the PDF version of the textbook by running `scripts/build-pdf.sh`.
- [ ] T012 [US3] Publish the generated `dist/` directory to a web server or hosting platform.

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T013 [P] Final proofreading and editing of all chapters.
- [ ] T014 [P] Run automated checks for broken links and formatting errors.
- [ ] T015 Validate the generated web and PDF outputs for readability and consistency.

---

## Dependencies & Execution Order

- **Setup (Phase 1)**: Must be completed before any other phase.
- **User Story 1 (Phase 2)**: Can start after Setup is complete.
- **User Story 2 (Phase 3)**: Depends on User Story 1. A chapter must be created before it can be reviewed.
- **User Story 3 (Phase 4)**: Depends on User Story 1 and 2. The textbook should be reviewed before it is published.
- **Polish (Phase N)**: Should be done after all content is created and reviewed.
