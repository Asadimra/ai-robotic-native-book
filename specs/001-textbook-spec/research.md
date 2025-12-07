# Research: Tooling for AI-Native Textbook

## Decision: Use Pandoc for PDF Generation

**Rationale**: Pandoc is a powerful and versatile command-line tool for converting documents between various formats. It has excellent support for Markdown and can produce high-quality PDFs using LaTeX. It is also highly customizable, allowing for the use of templates to ensure a consistent look and feel for the textbook.

**Alternatives considered**:
- **Directly writing in LaTeX**: This would provide the most control over the PDF output, but it has a much steeper learning curve than Markdown and would make the content less accessible for authors who are not familiar with LaTeX.
- **Using a web-to-PDF service**: This would be easy to use, but it would offer less control over the final output and might not produce as high-quality a result as Pandoc.

## Decision: Use a simple static site generator for the web version

**Rationale**: A simple static site generator, such as MkDocs or even a custom script, is sufficient for this project. The focus is on the content, and a complex web framework would be overkill. A static site is also easy to host and maintain.

**Alternatives considered**:
- **Using a full-featured web framework (e.g., React, Vue)**: This would provide a lot of flexibility, but it would also add unnecessary complexity to the project.
- **Using a CMS (e.g., WordPress)**: This would make it easy to manage the content, but it would also require a database and more complex hosting, which is not necessary for this project.

## Decision: Use GitHub for version control and collaboration

**Rationale**: GitHub is the industry standard for version control and collaboration. It provides a platform for authors and reviewers to work together, track changes, and manage the content of the textbook. Pull requests can be used for the review process.

**Alternatives considered**:
- **Other Git hosting services (e.g., GitLab, Bitbucket)**: These are all viable alternatives, but GitHub is the most widely used and has a large community.
- **Using a shared drive (e.g., Google Drive, Dropbox)**: This would be simple to set up, but it would not provide the same level of version control and collaboration features as a Git-based workflow.
