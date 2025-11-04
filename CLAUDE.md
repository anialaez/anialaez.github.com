# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Ana Díaz Aláez, a data-driven marketing professional. The site is a static HTML/CSS/JavaScript website showcasing marketing projects, skills, and contact information with bilingual support (English and Spanish).

## Architecture

### Multi-language Structure
- Root directory (`/`): Contains the English version
  - `index.html`: Main portfolio page (English)
  - `index.js`: Shared JavaScript for language switching and navigation
  - `index.css`: Custom styles
  - `tailwind.css`: Tailwind CSS framework
- Spanish version (`/es/`): Contains translated content
  - `index.html`: Spanish version of the portfolio
  - Links to parent directory assets (`../index.js`, `../index.css`, `../tailwind.css`)
- Case studies (`/cases/`): Individual project case study pages
  - Each case study has its own subdirectory (e.g., `/cases/sparkle/`)
  - Case study pages link back to root assets (`../../index.js`, etc.)
  - Case studies may include an `/images/` subdirectory for visual assets

### JavaScript Functionality
The `index.js` module provides two main features:
1. **Language Switcher** (index.js:1-15): Dropdown toggle for switching between English and Spanish versions
2. **Navigation Active State** (index.js:17-38): Scroll-based navigation highlighting that adds `.active-nav` class to current section's nav link

### Styling System
- Tailwind CSS for utility classes
- Custom CSS in `index.css` for:
  - Pastel color palette (`.pastel-bg`, `.pastel-pink`, `.pastel-blue`, `.pastel-yellow`)
  - Project card hover effects
  - Navigation link underline animations
  - Active navigation state styling

## Working with This Codebase

### Adding a New Case Study
1. Create a new directory under `/cases/[case-name]/`
2. Create an `index.html` file
3. Link to parent assets: `<script src="../../index.js">`, `<link rel="stylesheet" href="../../index.css">`, etc.
4. Add case study images to `/cases/[case-name]/images/` if needed
5. Update navigation links to point to root sections: `href="/#home"`, `href="/#about"`, `href="/#contact"`

### Adding Content to Portfolio
- Projects are in the `#home` section with `.project-card` divs
- Skills are displayed as progress bars in the `#about` section
- Contact information is in the `#contact` section

### Bilingual Content Management
When updating content, remember to update both:
1. Root `index.html` (English version)
2. `es/index.html` (Spanish version)

The language switcher relies on directory structure (root = English, `/es/` = Spanish), not dynamic translation.

## Development Notes

This is a static site with no build process, package manager, or dependencies. All assets are directly linked in HTML files. To preview the site, open `index.html` in a browser or use a local web server.
