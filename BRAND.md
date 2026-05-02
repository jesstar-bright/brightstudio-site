# Bright Studio — Brand Reference

The source of truth for brand decisions. Lives next to the code so they don't drift apart.

For positioning, services, and full strategy: `~/Documents/Bright Studio LLC/Brand/website-brief.md`.

---

## Tokens

### Colors

Defined in `src/app/globals.css` under `@theme`. Use Tailwind utilities (`bg-sun`, `text-ink`, etc.) — never raw hex in components.

| Name | Hex | Tailwind | Usage |
|---|---|---|---|
| Cream | `#FAF8F3` | `bg-cream` `text-cream` | Page background, light surface |
| Cream Deep | `#F4EFE3` | `bg-cream-deep` | Section background, subtle layering |
| Ink | `#0A0A0A` | `bg-ink` `text-ink` | Text, borders, dark surface |
| Sun | `#FFD60A` | `bg-sun` `text-sun` | Accent blocks, highlights, primary brand |
| Sun Deep | `#F5C400` | `bg-sun-deep` | Hover states on yellow surfaces |
| Cobalt | `#1A4FE0` | `bg-cobalt` | Reserved accent (project tiles) |
| Coral | `#FF6B6B` | `bg-coral` | Reserved accent (project tiles) |

**Distribution rule**: Cream is dominant (~60% of any view). Ink is text + structure (~25%). Sun is impact (~10-15%). Cobalt and coral are situational, never primary.

### Typography

| Family | Usage | Variable | Tailwind class |
|---|---|---|---|
| Inter (Black/900) | Display headlines | `var(--font-inter)` | `.h-display` (custom) |
| Geist | Body text | `var(--font-geist-sans)` | default `font-sans` |
| Geist Mono | Eyebrow labels, footnotes, prices | `var(--font-geist-mono)` | `.mono` (custom) |
| Instrument Serif Italic | Accent emphasis on key phrases | `var(--font-instrument-serif)` | `.serif-it` (custom) |

**Rule**: Italic serif only for emphasis on **emotional** words ("humans who need to make a thing", "human problem"). Never for titles or buttons.

### Shadows

Brutalist-style hard offset shadows. Defined as theme tokens.

| Token | CSS | Usage |
|---|---|---|
| `shadow-brut` | `6px 6px 0 0 #0A0A0A` | Default for cards |
| `shadow-brut-lg` | `10px 10px 0 0 #0A0A0A` | Cards on hover |
| `shadow-brut-sm` | `3px 3px 0 0 #0A0A0A` | Status pills, small chips |

The `.brut-card` utility handles the hover lift automatically. Just add `shadow-brut` to a card and `brut-card` for the interactive lift.

### Radii

- `rounded-full` — pills, buttons, status indicators
- `rounded-[22px]` — major cards (project tiles, service cards, asset cards)
- `rounded-2xl` — contact link items, secondary cards
- `rounded-md` — inline yellow highlight on hero "shipped fast"

### Spacing & Layout

- Max content width: `1240px`
- Page side padding: `px-5` mobile, `px-8` desktop
- Section vertical padding: `py-20 sm:py-28` standard, `py-24 sm:py-36` for emphasis (Manifesto)
- Card padding: `p-6 sm:p-7`
- Grid gutters: `gap-5 sm:gap-6` standard, `gap-6 sm:gap-10` for editorial layouts

---

## Voice

### One-line positioning
> Vibe-coded software, shipped fast.

### Subhead
> Bright Studio is a solo studio building AI-native prototypes, MVPs, and tools — for founders, indie hackers, and humans who need to make a thing.

### Voice rules

- **First person.** "I build…" never "We provide…"
- **Plain language.** "I'll ship you a working thing" beats "We deliver enterprise-grade solutions."
- **Confident, not cynical.** Take stances. Don't hedge.
- **Bold opinions and mild profanity OK.** Not gratuitous.
- **Sentence fragments allowed.** Rhythm matters.
- **The italic serif is for emotional emphasis only.** "humans who need to make a thing", "human problem", "audience of one".

### Signature phrases (reuse intentionally)
- *Bring yours.*
- *Bring the best parts of your world. I'll bring the tools.*
- *An audience of one.*
- *The human shape of the idea.*
- *This probably won't scale but it matters to me.*
- *Faster was never the point.*
- *The thing I ship actually fits.*

### Voice — DO
- "I build software for humans who need to ship a thing."
- "Four weeks. One MVP. No agency overhead."
- "AI is a tool. Your product is the point."
- "I'm a one-person studio. You'll talk to me, not an account manager."

### Voice — DON'T
- "We leverage cutting-edge AI to deliver bespoke solutions."
- "Empowering founders to scale through digital transformation."
- "Let's hop on a call to discuss your needs."
- "Crush your goals with AI-powered software!"

---

## Animation Conventions

| Pattern | Where used | CSS class |
|---|---|---|
| Slow rotation | Sun marks, sparkle accents | `.spin-slow` (18s linear) |
| Status blink | "Available" indicator dot | `.blink` (1.6s ease-in-out) |
| Marquee scroll | Hero phrase strip | `.marquee-track` (40s linear) |
| Card hover lift | All `.brut-card` | `transform + shadow` on hover |
| Underline draw | Nav links (`.ulink`) | `background-size` transition |
| Asterisk rotate | Inside `.group:hover` | `.ast` rotate 180° |

Everything is opt-in via class. No global animations. Use sparingly — one or two animated moments per section is plenty.

---

## Component Conventions

### When to make a new component

A new file/component is justified when ALL of these are true:
1. The pattern appears in 2+ places already, OR there's a near-certain second use case
2. The pattern has internal state, complex props, or non-trivial logic
3. Inlining it would make the parent file harder to read

Don't preemptively extract. Premature abstraction is worse than duplication.

### File structure

```
src/
├── app/
│   ├── layout.tsx         # Fonts, metadata, html shell
│   ├── page.tsx           # Composes sections
│   └── globals.css        # Tokens (@theme) + custom utilities
└── components/
    ├── icons.tsx          # Icon library (named exports)
    └── sections.tsx       # All landing-page sections
```

When sections.tsx grows past ~600 lines or a section gets reused, split into `components/sections/[name].tsx`.

### Naming

- Components: PascalCase (`ServiceCard`, `Manifesto`)
- Files: kebab-case for multi-word, lowercase for single (`sections.tsx`, `service-card.tsx`)
- CSS classes: kebab-case (`.brut-card`, `.serif-it`)
- CSS variables: kebab-case (`--color-sun`, `--shadow-brut`)
- Tailwind utilities: as defined by Tailwind

### Client vs Server components

- Default to **server** (no `'use client'` directive)
- Add `'use client'` only when the file uses: `useState`, `useEffect`, `onClick` handlers, browser APIs, or anything interactive
- Client directive applies to the whole file — split files at the server/client boundary if needed

---

## Future Design System Decisions

This site is L1 of a design system: tokens + conventions. When you build project #2 with the same brand:

1. Copy `BRAND.md`, `globals.css`, and `icons.tsx` verbatim
2. Adapt section components as needed
3. **After** the second project, look at what's repeated — those are the real shared primitives
4. Extract repeated primitives into `components/ui/` (Button, Card, Input)
5. Continue copying until you have a third project that benefits from a shared package — then extract to a workspace/monorepo

Don't go to L2 (shared component library) until there's clear evidence two projects need the same component. Don't go to L3 (published package, Storybook) until there's a team or external consumers.
