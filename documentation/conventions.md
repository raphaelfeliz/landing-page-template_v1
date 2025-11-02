path: CONVENTIONS.md



# SECTIONS
## FORMAT
- Each section (header, hero, etc.) is stored in `/src/sections/` as a single `.htm` file.
- Every section file includes:
  - Inline HTML (semantic and self-contained)
  - Inline `<style>` scoped to that section
  - Inline `<script>` for minor animation or interactivity

## NAMING
- Use lowercase filenames: `header.htm`, `hero.htm`, etc.
- Section IDs and classes should be namespaced:
  - Header → `#header-section`, `.hdr-*`
  - Hero → `#hero-section`, `.hero-*`

# ALL FILES
## COMMENTS HEADER (REQUIRED)
Every section starts with:
PATH:
PURPOSE:
IMPORTS:
EXPORTS:
NOTES:


# INDEX.HTML
## INCLUDE MARKER CONVENTION
The orchestrator (`src/pages/index.html`) references sections using:
<!-- INCLUDE-SECTION: src/sections/section-name.htm -->


# LIFECYCLE
- During development: sections load via local server.
- During build: Vite plugin replaces include comments with actual file contents.
- Runtime JS inside sections must be self-contained and not depend on other sections.
