# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website and blog for James H Wade (jameshwade.com), built with Quarto and deployed to Netlify via GitHub Actions.

## Build & Preview

```bash
quarto preview              # Start live dev server with hot reload
quarto preview --port 4567  # Specify a port
quarto render               # Full site build (outputs to _site/)
```

Deployment is automated: push to `main` triggers GitHub Actions → Quarto render → Netlify publish.

## Architecture

- **`_quarto.yml`** — Main config: site metadata, navbar, theme, fonts, footer, freeze settings
- **`custom.scss`** — Full theme: color palette (cream/teal/amber), typography (Bricolage Grotesque headings, Newsreader body, JetBrains Mono code), hero section, card styles, responsive breakpoints. Uses Quarto SCSS partitions (`/*-- scss:defaults --*/` and `/*-- scss:rules --*/`)
- **`index.qmd`** — Homepage with custom hero section (`.hero-section` divs) and grid listing of posts
- **`about.qmd`** — Uses Quarto's `trestles` about template with profile image and social links
- **`talks.qmd`** — Talks page with embedded YouTube iframes
- **`posts/`** — Blog posts, each a `.qmd` file
- **`posts/_metadata.yml`** — Default frontmatter applied to all posts (`freeze: true`)
- **`_freeze/`** — Cached execution outputs (committed to git so CI doesn't need R)
- **`_extensions/`** — Quarto extensions: `shinylive` (interactive Shiny embeds) and `webr` (R-in-browser)

## Writing Posts

**Naming convention:** `posts/YYYY-MM-DD_slug.qmd`

**Standard frontmatter:**
```yaml
---
title: "Post Title"
author: James H Wade
date: YYYY-MM-DD
description: "Short description for the listing card"
image: https://url-or-local-path
execute:
  freeze: auto
  eval: false
format:
  html:
    toc: true
    code-copy: true
    code-link: true
categories:
  - Category1
---
```

Most posts set `eval: false` since code blocks are illustrative. The `freeze: auto` setting caches execution output so builds don't re-run code unless the source changes.

## Theming

The site uses a custom SCSS theme (`custom.scss`), not a Bootswatch preset. Colors, typography, spacing, and component styles are all defined there. Google Fonts are loaded via `include-in-header` in `_quarto.yml`. When modifying styles, edit `custom.scss` — the `styles.css` file exists but is not actively used.

## Quarto Extensions

Two extensions are installed in `_extensions/`:
- **shinylive** — Embeds interactive Shiny apps that run entirely in the browser
- **webr** — Runs R code in-browser via WebAssembly (requires COOP/COEP headers, configured in `netlify.toml`)

## Content Guidelines

- Keep employer references vague ("a large chemicals R&D organization") — do not name the company directly
- Internal projects (Hyperdrive, Citizen Data Science program details) should stay private
- Open source projects (shinymcp, deputy, gptstudio, dsprrr, tempest, measure) can be discussed freely
- Title is "Research Scientist" (not associate)

## Writing Style

Write like a working programmer explaining something to a peer — direct, concrete, opinionated where warranted. Match the voice in existing posts: first person, conversational but not chatty, technically precise.

**Avoid these AI writing tropes:**
- Filler phrases: "dive into", "it's worth noting", "let's explore", "in today's landscape", "the power of"
- Hollow intensifiers: "incredibly", "extremely", "truly", "revolutionary", "game-changing"
- Sycophantic hedging: "Great question!", "That's a really interesting point"
- Bullet-point-itis: not everything needs a list. Prefer prose when the content flows naturally
- Fake enthusiasm or forced excitement about mundane things
- Summary paragraphs that just restate what was already said ("In this post, we explored...")
- Em dashes — avoid them. Use periods, commas, or colons instead. Only use an em dash when it genuinely clarifies structure
- Starting sentences with "So," or "Now," as transitions
- The word "leverage" when "use" works fine
- "Straightforward", "robust", "seamless", "comprehensive" — vague adjectives that say nothing

**Do:**
- Be specific. Say what the thing does, not that it's powerful
- Use short sentences when making a point. Save longer ones for explanation
- Let code speak for itself — don't narrate what the reader can see
- Cut the first paragraph if the second one is where it gets interesting
- End cleanly. No "happy coding!" or "I hope this helps!"
