# Quickstart Guide for Textbook Contributors

This guide provides a quick overview of how to contribute to the "Physical AI & Humanoid Robotics" textbook.

## Getting Started

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```
2.  **Install dependencies**:
    - Make sure you have [Pandoc](https://pandoc.org/installing.html) installed.

## Workflow for Authors

1.  **Create a new branch**: For each chapter you work on, create a new branch from `master`:
    ```bash
    git checkout -b feature/chapter-<chapter-name>
    ```
2.  **Create a new chapter file**: Create a new Markdown file in the appropriate `src/unitX/` directory. Follow the structure defined in the `data-model.md` file.
3.  **Write the content**: Write the content for the chapter, following the style and formatting guidelines in the specification.
4.  **Commit and push**: Commit your changes and push the branch to the remote repository:
    ```bash
    git add .
    git commit -m "feat(content): add chapter on <chapter-name>"
    git push -u origin feature/chapter-<chapter-name>
    ```
5.  **Create a pull request**: Open a pull request on GitHub from your feature branch to the `master` branch. Assign a reviewer to the pull request.

## Workflow for Reviewers

1.  **Review the pull request**: Review the changes in the pull request. Check for clarity, accuracy, and adherence to the specification.
2.  **Provide feedback**: Leave comments and suggestions on the pull request.
3.  **Approve the pull request**: Once you are satisfied with the changes, approve the pull request.

## Building the Textbook

The textbook can be built in two formats: web and PDF.

### Building the Web Version

```bash
./scripts/build-web.sh
```
This will generate the HTML files in a `dist/web` directory.

### Building the PDF Version

```bash
./scripts/build-pdf.sh
```
This will generate a `textbook.pdf` file in a `dist/pdf` directory.
