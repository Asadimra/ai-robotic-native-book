# Tasks: Docusaurus Homepage

**Input**: Design context from user prompt.
**Prerequisites**: Existing Docusaurus project structure.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- All paths are relative to the repository root.

---

## Phase 1: Foundational Setup

**Purpose**: Prepare the homepage and create a directory for its components.

- [x] T001 Create a new directory for homepage components at `physical-ai-humanoid-book/src/components/Homepage`.
- [x] T002 Refactor `physical-ai-humanoid-book/src/pages/index.js` to be a clean container for homepage section components.

---

## Phase 2: User Story 1 - Hero Section (Priority: P1) 🎯 MVP

**Goal**: A compelling hero section that grabs the visitor's attention.

**Independent Test**: The hero section renders correctly on the homepage with a title, subtitle, and a primary call-to-action button.

### Implementation for User Story 1

- [x] T003 [US1] Create the Hero component file at `physical-ai-humanoid-book/src/components/Homepage/Hero.js`.
- [x] T004 [US1] Implement the Hero section UI in `Hero.js` with a title, subtitle, and a primary CTA button.
- [x] T005 [P] [US1] Create a CSS module for the Hero component at `physical-ai-humanoid-book/src/components/Homepage/Hero.module.css` and add initial styling.
- [x] T006 [US1] Integrate the `Hero` component into `physical-ai-humanoid-book/src/pages/index.js`.

---

## Phase 3: User Story 2 - Features Section (Priority: P2)

**Goal**: A section highlighting the key features of the textbook.

**Independent Test**: The features section renders on the homepage, displaying 3-4 key features with associated icons and descriptions.

### Implementation for User Story 2

- [x] T007 [US2] Create the Features component file at `physical-ai-humanoid-book/src/components/Homepage/Features.js`.
- [x] T008 [US2] Implement the Features section UI in `Features.js`, displaying 3-4 feature items.
- [x] T009 [P] [US2] Create a CSS module for the Features component at `physical-ai-humanoid-book/src/components/Homepage/Features.module.css` and add styling.
- [x] T010 [US2] Integrate the `Features` component into `physical-ai-humanoid-book/src/pages/index.js`.

---

## Phase 4: User Story 3 - About Section (Priority: P3)

**Goal**: A brief, engaging section about the book's purpose and audience.

**Independent Test**: The About section renders on the homepage with a heading and a short descriptive paragraph.

### Implementation for User Story 3

- [x] T011 [US3] Create the About component file at `physical-ai-humanoid-book/src/components/Homepage/About.js`.
- [x] T012 [US3] Implement the About section UI in `About.js`.
- [x] T013 [P] [US3] Create a CSS module for the About component at `physical-ai-humanoid-book/src/components/Homepage/About.module.css` and add styling.
- [x] T014 [US3] Integrate the `About` component into `physical-ai-humanoid-book/src/pages/index.js`.

---

## Phase 5: User Story 4 - Chapters Section (Priority: P2)

**Goal**: A section that provides a glimpse into the book's contents and structure.

**Independent Test**: The Chapters section renders on the homepage, showing a list of the main units or chapters.

### Implementation for User Story 4

- [x] T015 [US4] Create the Chapters component file at `physical-ai-humanoid-book/src/components/Homepage/Chapters.js`.
- [x] T016 [US4] Implement the Chapters section UI in `Chapters.js`, possibly linking to the documentation sidebar.
- [x] T017 [P] [US4] Create a CSS module for the Chapters component at `physical-ai-humanoid-book/src/components/Homepage/Chapters.module.css` and add styling.
- [x] T018 [US4] Integrate the `Chapters` component into `physical-ai-humanoid-book/src/pages/index.js`.

---

## Phase 6: User Story 5 - Call to Action (CTA) Section (Priority: P1)

**Goal**: A clear and prominent call to action for the user.

**Independent Test**: The CTA section renders on the homepage with a compelling message and a button.

### Implementation for User Story 5

- [x] T019 [US5] Create the CTA component file at `physical-ai-humanoid-book/src/components/Homepage/CTA.js`.
- [x] T020 [US5] Implement the CTA section UI in `CTA.js`.
- [x] T021 [P] [US5] Create a CSS module for the CTA component at `physical-ai-humanoid-book/src/components/Homepage/CTA.module.css` and add styling.
- [x] T022 [US5] Integrate the `CTA` component into `physical-ai-humanoid-book/src/pages/index.js`.

---

## Phase 7: User Story 6 - Footer Section (Priority: P3)

**Goal**: A standard footer with useful links and information.

**Independent Test**: The footer renders on all pages, containing copyright information and links.

### Implementation for User Story 6
- [x] T023 [US6] The Docusaurus theme footer in `docusaurus.config.js` will be used. This task is to configure it.
- [x] T024 [US6] Update the `themeConfig.footer` object in `physical-ai-humanoid-book/docusaurus.config.js` with relevant links (e.g., GitHub, contact) and copyright information.

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Final improvements and consistency checks.

- [x] T025 Review and adjust styling for all homepage components for a cohesive look and feel.
- [x] T026 Ensure the homepage is responsive on both mobile and desktop viewports.

---

## Dependencies & Execution Order

- **Foundational Setup (Phase 1)** must be completed first.
- **User Stories (Phases 2-7)** can be implemented. For a cohesive homepage, it is recommended to implement them in order, but US6 (Footer) can be done in parallel.
- **Polish (Phase 8)** should be done last.