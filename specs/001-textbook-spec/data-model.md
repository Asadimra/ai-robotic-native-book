# Data Model: AI-Native Textbook

This document describes the structure of the content for the AI-native textbook "Physical AI & Humanoid Robotics."

## Core Entities

The textbook content is organized into a hierarchy of three main entities: **Unit**, **Chapter**, and **Lesson**.

### Unit

- **Description**: A Unit is the highest level of organization in the textbook. It represents a major section or theme and contains a collection of related Chapters.
- **Fields**:
    - `title` (string, required): The title of the Unit.
    - `purpose_statement` (string, required): A short paragraph describing the purpose and content of the Unit.
- **Relationships**:
    - Has many Chapters.

### Chapter

- **Description**: A Chapter is a component of a Unit that focuses on a specific topic. It contains a collection of related Lessons.
- **Fields**:
    - `title` (string, required): The title of the Chapter.
    - `learning_objectives` (list of strings, required): A list of a few key learning objectives for the chapter.
    - `summary` (string, required): A short paragraph summarizing the content of the Chapter.
- **Relationships**:
    - Belongs to a Unit.
    - Has many Lessons.

### Lesson

- **Description**: A Lesson is the most granular piece of content, belonging to a Chapter. It covers a specific sub-topic.
- **Fields**:
    - `title` (string, required): The title of the Lesson.
    - `explanations` (string, required): The main body of the lesson, containing explanations, text, and images.
    - `examples` (string, optional): Code snippets, case studies, or other examples to illustrate the concepts.
- **Relationships**:
    - Belongs to a Chapter.
    - May have one Quiz.

### Quiz

- **Description**: A Quiz is an optional component of a Lesson used for self-assessment.
- **Fields**:
    - `questions` (list of objects, required): A list of questions, where each question has a `prompt` (string) and a list of `answers` (strings), and an `correct_answer_index` (integer).
- **Relationships**:
    - Belongs to a Lesson.

## Content Structure Example (in Markdown)

Each chapter will be a separate Markdown file. The structure within the file will be as follows:

```markdown
# Chapter Title

**Learning Objectives:**
- Objective 1
- Objective 2
- Objective 3

## Lesson 1: Title of the First Lesson

### Explanations

... content ...

### Examples

... examples ...

---

## Lesson 2: Title of the Second Lesson

...

---

## Summary

... chapter summary ...
```
