---
name: kyleisun.cool
description: A field report system for embedded practice work — paper, ink, and one blueprint-blue stamp of authority.
colors:
  paper: "oklch(97.5% 0.006 75)"
  ink: "oklch(19% 0.008 75)"
  body: "oklch(32% 0.01 75)"
  body-strong: "oklch(22% 0.01 75)"
  muted: "oklch(48% 0.01 75)"
  muted-soft: "oklch(60% 0.008 75)"
  hairline: "oklch(88% 0.006 75)"
  hairline-soft: "oklch(92% 0.005 75)"
  surface-soft: "oklch(95% 0.007 75)"
  surface-card: "oklch(93% 0.008 75)"
  surface-cream-strong: "oklch(90% 0.01 75)"
  surface-dark: "oklch(16% 0.02 250)"
  surface-dark-elevated: "oklch(21% 0.025 250)"
  blueprint: "oklch(46% 0.13 250)"
  blueprint-active: "oklch(38% 0.14 250)"
  blueprint-disabled: "oklch(88% 0.02 250)"
  on-primary: "oklch(98% 0.005 250)"
  on-dark: "oklch(96% 0.006 75)"
  on-dark-soft: "oklch(72% 0.02 250)"
  redline: "oklch(52% 0.16 35)"
  redline-soft: "oklch(90% 0.03 35)"
typography:
  display:
    fontFamily: "Bitter, Georgia, serif"
    fontSize: "clamp(2.75rem, 6vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Bitter, Georgia, serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Public Sans, -apple-system, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Public Sans, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.06em"
rounded:
  none: "0px"
  sm: "3px"
  md: "6px"
spacing:
  section: "96px"
  gap-sm: "8px"
  gap-md: "16px"
  gap-lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.blueprint}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.blueprint-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  badge-draft:
    backgroundColor: "{colors.redline}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    padding: "2px 10px"
---

# Design System: kyleisun.cool

## 1. Overview

**Creative North Star: "The Field Log"**

This is a site for embedded work: land surveys, developer decks, booking systems, a vault that runs an organization's memory. The reference object is not a magazine or a SaaS pitch deck — it's a field report. Aged drafting paper, a title block with role/timeframe/status, a blueprint-blue stamp of authority, and a redline-red mark reserved strictly for what's still in draft. Bitter, a sturdy slab serif, carries headlines with the weight of a report cover page, not the italic flourish of an editorial magazine. Public Sans (built for the U.S. Web Design System) carries body copy — plainspoken, civic, built for reading, not for looking designed. JetBrains Mono appears only where a field log actually stamps metadata: dates, section numbers, draft badges.

This system explicitly rejects: the hero + three-icon-card + dark-CTA-band template common to AI/SaaS marketing; McKinsey-deck corporate seriousness; Substack-style informality that reads as low-authority; gradient text; glassmorphism; and the italic-serif-plus-mono-label "editorial-typographic" look that saturated brand and dev-tool sites by 2026 — Bitter is upright and load-bearing, never italic, and mono is reserved for genuine metadata, never used as a "technical" costume.

**Key Characteristics:**
- Paper-and-ink neutrals carry 90%+ of every surface; blueprint blue is the only color that signals authority (links, active states, the primary stamp)
- Redline red is reserved exclusively for draft/in-progress states — it never decorates
- No cards for repeatable content. Ruled, numbered lists instead
- Every long-form article auto-numbers its own sections like a field report's numbered clauses
- Flat by default. Depth comes from rule lines and paper/ink tonal contrast, never shadows

## 2. Colors

Paper-and-ink restraint with one committed accent. Blueprint blue carries authority; redline red carries only "this is still in progress."

### Primary
- **Blueprint** (`oklch(46% 0.13 250)`, primary): links, primary buttons, active nav state, the numbered section marks in long-form articles, hover underlines. The single saturated color in the system — used deliberately, not everywhere.
- **Blueprint Active** (`oklch(38% 0.14 250)`, primary-active): hover/pressed state for blueprint elements.

### Secondary
- **Redline** (`oklch(52% 0.16 35)`, redline): draft badges, and only draft badges. A warm brick-red, like a revision mark on a drawing. If it appears anywhere content is finished, that's a bug.

### Neutral
- **Paper** (`oklch(97.5% 0.006 75)`, canvas/paper): the base surface everywhere. Warm, matte, slightly toward tan — aged drafting paper, not bright white.
- **Ink** (`oklch(19% 0.008 75)`, ink): primary text and headline color. Warm near-black, never pure `#000`.
- **Body** (`oklch(32% 0.01 75)`, body) / **Body Strong** (`oklch(22% 0.01 75)`, body-strong): running text and its emphasized variant.
- **Muted** (`oklch(48% 0.01 75)`) / **Muted Soft** (`oklch(60% 0.008 75)`): secondary text, captions, dates outside of mono contexts.
- **Hairline** (`oklch(88% 0.006 75)`) / **Hairline Soft** (`oklch(92% 0.005 75)`): every rule, divider, and border in the system. No shadows; hairlines do the separating.
- **Surface Soft / Card / Cream Strong**: three steps of paper tint (`oklch(95% 0.007 75)` → `oklch(93% 0.008 75)` → `oklch(90% 0.01 75)`) for banded sections, never for boxed cards.
- **Surface Dark / Dark Elevated** (`oklch(16% 0.02 250)` / `oklch(21% 0.025 250)`): the one place the system goes dark — footer, and any full-bleed moment that wants weight. Tinted toward blueprint blue-black (a drafting table at night), not warm brown-black.

### Named Rules
**The One Stamp Rule.** Blueprint is the only saturated color permitted for anything that isn't a draft marker. If a second accent color seems needed, the answer is more contrast in type weight or layout, not a second hue.

**The Redline Exception.** Redline breaks the One Stamp Rule on purpose, and only for draft state. Its rarity outside that one job is what makes it legible as a signal.

## 3. Typography

**Display Font:** Bitter (slab serif, with Georgia fallback)
**Body Font:** Public Sans (with system sans fallback)
**Label/Mono Font:** JetBrains Mono

**Character:** Bitter is upright, heavy, and structural — a report cover page, not a magazine spread; it is never set in italic. Public Sans is plain and built for long reading, chosen because it's literally the U.S. government's civic type system: unglamorous on purpose. JetBrains Mono appears only as a stamp: dates, section numbers, draft badges — metadata, never décor.

### Hierarchy
- **Display** (Bitter 700, `clamp(2.75rem, 6vw, 5.5rem)`, line-height 1.02): hero headlines only, one per page.
- **Headline** (Bitter 700, `clamp(1.75rem, 3.5vw, 2.75rem)`, line-height 1.1): section headers, article H2s.
- **Title** (Public Sans 600, 1.125rem, line-height 1.3): card-less list-row titles, component headings.
- **Body** (Public Sans 400, 1rem, line-height 1.65): running text, capped at 68ch.
- **Label** (JetBrains Mono 500, 0.75rem, letter-spacing 0.06em, uppercase where used): dates, section numbers, draft badges, tags. Used sparingly — a handful of instances per page, not a repeating section-eyebrow on every block.

### Named Rules
**The Upright Rule.** Bitter is never italicized. Emphasis comes from size and weight, not slant — this is what keeps the system out of editorial-magazine territory.

**The Earned Mono Rule.** Monospace only labels real metadata (a date, a section number, a status). It never substitutes for "looks technical."

## 4. Elevation

Flat by default. No shadows anywhere in the system; depth is conveyed through paper-tint layering (three steps of surface color) and hairline rules, consistent with a field report's flat, printed nature.

### Named Rules
**The Flat Ledger Rule.** If a component seems to need a shadow to separate from its surroundings, give it a hairline border or a paper-tint background band instead.

## 5. Components

### Buttons
- **Shape:** 3px radius (`rounded.sm`) — barely-there, not pill-shaped, not sharp.
- **Primary:** blueprint background, on-primary text, 10px/20px padding, Public Sans 600.
- **Hover:** blueprint-active background, no transform/scale.
- **Secondary/Ghost:** paper background, ink text, 1px hairline border; hover fills to surface-soft.

### Draft Badge (signature component)
Small, square-cornered (0px radius), redline background, on-primary text, JetBrains Mono uppercase label, 2px/10px padding. Appears beside any content with `status: 'draft'`. The only place redline is used.

### Field-Log Numbering (signature component)
Every long-form article (case study, essay, journal entry) auto-numbers its own H2 sections via CSS counters — a mono, blueprint-colored `01`, `02`, `03` mark before each section heading. No manual numbering in content; the counter resets per article.

### Spec Sheet (signature component, case studies)
A single ruled horizontal strip (hairline border top and bottom, no box, no rounded corners) presenting role / timeframe / status as inline label-value pairs in JetBrains Mono labels + Public Sans values — a title-block reference, not a card.

### Case File Rows (used in place of a card grid on `/work`)
Full-width rows, not a grid of equal boxes: a fixed-width motif swatch (generated SVG, not a photo) on the left, content to the right, separated by hairline rules between rows. Draft badge appears inline with the title when relevant.

### Navigation
Paper background, sticky, 1px hairline bottom border. Wordmark in Bitter; nav links in Public Sans 500, ink color, blueprint on hover/active. No pill buttons in the nav itself.

## 6. Do's and Don'ts

### Do:
- **Do** keep 90%+ of every surface in paper/ink neutrals; let blueprint carry the one moment of authority per view.
- **Do** use ruled, numbered lists for repeatable content instead of icon-card grids.
- **Do** auto-number article sections via the field-log CSS counter, everywhere long-form content appears.
- **Do** use generated SVG motifs (contour lines, grid patterns, node networks) as case-study visual proof when no real photography exists — never a flat colored div in its place.
- **Do** reserve redline exclusively for draft-state badges.

### Don't:
- **Don't** repeat the "hero + three-icon-card grid + dark CTA band" template anywhere on the site — named explicitly in PRODUCT.md as the generic AI/SaaS-startup anti-reference.
- **Don't** italicize Bitter, ever — no editorial-magazine drop-cap-and-italic-headline look.
- **Don't** use monospace as generic "technical" decoration; it only labels real dates, numbers, or status.
- **Don't** add shadows, gradients, or glassmorphism anywhere.
- **Don't** use `border-left`/`border-right` as a colored accent stripe on any element — full borders, background tints, or leading numerals only.
- **Don't** let redline appear outside a draft badge.
- **Don't** default to McKinsey-deck seriousness or Substack-informal looseness — the voice is embedded, plainspoken, rigorous, per PRODUCT.md.
