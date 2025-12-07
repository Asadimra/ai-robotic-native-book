#!/bin/bash

# Navigate to the Docusaurus project root
cd "$(dirname "$0")/.."

# Output directory for PDF
OUTPUT_DIR="dist/pdf"
mkdir -p "$OUTPUT_DIR"

# Concatenate all MDX files in docs into a single temporary Markdown file
TEMP_MD_FILE="temp_textbook.md"
find docs -name "*.mdx" | sort | xargs cat > "$TEMP_MD_FILE"

# Use Pandoc to convert the temporary Markdown file to PDF
# You might need to install a LaTeX distribution (e.g., MiKTeX on Windows, MacTeX on macOS, TeX Live on Linux)
# for Pandoc to generate PDF.
pandoc "$TEMP_MD_FILE" -o "$OUTPUT_DIR/textbook.pdf" --from markdown+hard_line_breaks --template eisvogel --highlight-style github

# Clean up the temporary Markdown file
rm "$TEMP_MD_FILE"

echo "PDF generated successfully at $OUTPUT_DIR/textbook.pdf"
